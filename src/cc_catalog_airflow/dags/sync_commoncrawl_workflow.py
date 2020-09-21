import os
from datetime import datetime, timedelta

from airflow import DAG
from airflow.operators.bash_operator import BashOperator

from util.operator_util import get_log_operator

airflowHome = os.environ['AIRFLOW_HOME']

DAG_DEFAULT_ARGS = {
    'owner': 'data-eng-admin',
    'depends_on_past': False,
    'start_date': datetime(2020, 1, 15),
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(days=1)
}

DAG_ID = "sync_commoncrawl_workflow"

CRAWL_OUTPUT_DIR = os.path.join(os.environ["OUTPUT_DIR"], "common_crawl_tsvs")


def get_runner_operator(dag):
    return BashOperator(
        task_id="sync_commoncrawl_workflow",
        bash_command=(
            f"python {airflowHome}/dags/"
            "commoncrawl_s3_syncer/SyncImageProviders.py"
        ),
        dag=dag,
        env={
            "S3_BUCKET": os.environ["S3_BUCKET"],
            "OUTPUT_DIR": CRAWL_OUTPUT_DIR,
            "AWS_ACCESS_KEY": os.environ["AWS_ACCESS_KEY"],
            "AWS_SECRET_KEY": os.environ["AWS_SECRET_KEY"],
            },
    )


def create_dag():
    dag = DAG(
        dag_id=DAG_ID,
        default_args=DAG_DEFAULT_ARGS,
        start_date=datetime(2020, 1, 15),
        schedule_interval="0 16 15 * *",
        catchup=False
    )

    with dag:
        start_task = get_log_operator(dag, DAG_ID, "Starting")
        run_task = get_runner_operator(dag)
        end_task = get_log_operator(dag, DAG_ID, "Finished")

        start_task >> run_task >> end_task

    return dag


globals()[DAG_ID] = create_dag()
