"""
# Add Rekognition labels

This DAG inserts labels that were previously generated by Rekognition into the catalog.
For a full description of the DAG, see [this section](https://docs.openverse.org/projects/proposals/rekognition_data/20240530-implementation_plan_augment_catalog_with_rekognition_tags.html#insert-new-rekognition-tags)
of the implementation plan.
"""

import logging
from datetime import timedelta

from airflow.decorators import dag
from airflow.operators.trigger_dagrun import TriggerDagRunOperator

from common.constants import DAG_DEFAULT_ARGS, POSTGRES_CONN_ID
from common.slack import notify_slack
from common.sql import run_sql
from data_augmentation.rekognition import constants
from data_augmentation.rekognition.add_rekognition_labels import (
    notify_parse_complete,
    parse_and_insert_labels,
    resume_insertion,
)
from database.batched_update.constants import DAG_ID as BATCHED_UPDATE_DAG_ID


logger = logging.getLogger(__name__)


@dag(
    dag_id=constants.DAG_ID,
    schedule=None,
    catchup=False,
    tags=["data_augmentation"],
    doc_md=__doc__,
    default_args={
        **DAG_DEFAULT_ARGS,
        "retries": 0,
        "execution_timeout": timedelta(hours=5),
    },
    render_template_as_native_obj=True,
)
def add_rekognition_labels():
    check_for_resume = resume_insertion()

    notify_start = notify_slack.override(task_id=constants.NOTIFY_START_TASK_ID)(
        text=f"Starting Rekognition label insertion\n"
        f"{constants.TEMPLATE_SLACK_MESSAGE_CONFIG}",
        dag_id=constants.DAG_ID,
        username=constants.SLACK_USERNAME,
        icon_emoji=constants.SLACK_ICON,
    )

    notify_resume = notify_slack.override(
        task_id=constants.NOTIFY_RESUME_TASK_ID
    )(
        text="Resuming Rekognition label insertion "  # noqa: UP031
        "from position: `{{ var.value.%s }}`\n%s"
        % (constants.CURRENT_POS_VAR_NAME, constants.TEMPLATE_SLACK_MESSAGE_CONFIG),
        dag_id=constants.DAG_ID,
        username=constants.SLACK_USERNAME,
        icon_emoji=constants.SLACK_ICON,
    )

    create_temp_table = run_sql.override(
        task_id="create_loading_table",
        execution_timeout=timedelta(minutes=1),
    )(sql_template=constants.CREATE_TEMP_TABLE_QUERY)

    create_temp_table_index = run_sql.override(
        task_id="create_temp_table_index",
        execution_timeout=timedelta(minutes=1),
    )(sql_template=constants.CREATE_TEMP_TABLE_INDEX_QUERY)

    # These values are interpolated to allow overriding locally while still
    # defining a default value in an obvious location
    insert_labels = parse_and_insert_labels(
        s3_bucket=constants.S3_BUCKET,
        s3_prefix=constants.TEMPLATE_S3_PREFIX,
        in_memory_buffer_size=constants.TEMPLATE_IN_MEMORY_BUFFER_SIZE,
        file_buffer_size=constants.TEMPLATE_FILE_BUFFER_SIZE,
        postgres_conn_id=POSTGRES_CONN_ID,
    )

    notify_parse_complete(insert_labels)

    batched_update = TriggerDagRunOperator(
        task_id="trigger_batched_update",
        trigger_dag_id=BATCHED_UPDATE_DAG_ID,
        wait_for_completion=True,
        execution_timeout=timedelta(hours=5),
        retries=0,
        conf=constants.BATCHED_UPDATE_CONFIG,
    )

    drop_temp_table = run_sql.override(
        task_id="drop_temp_table",
        execution_timeout=timedelta(minutes=1),
    )(sql_template=constants.DROP_TABLE_QUERY)

    notify_complete = notify_slack.override(task_id="notify_complete")(
        text="Finished Rekognition label insertion and batched update :check_tick:",
        dag_id=constants.DAG_ID,
        username=constants.SLACK_USERNAME,
        icon_emoji=constants.SLACK_ICON,
    )

    check_for_resume >> [notify_start, notify_resume]
    notify_start >> create_temp_table >> create_temp_table_index >> insert_labels
    notify_resume >> insert_labels
    insert_labels >> batched_update >> drop_temp_table >> notify_complete


add_rekognition_labels()
