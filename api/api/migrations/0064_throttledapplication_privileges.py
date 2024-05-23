# Generated by Django 4.2.11 on 2024-05-23 01:41

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0063_merge_20240521_0843'),
    ]

    operations = [
        migrations.AddField(
            model_name='throttledapplication',
            name='privileges',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(choices=[('page_size', 'page_size'), ('pagination_depth', 'pagination_depth')]), default=list, help_text='Privileges granted to applications upon approved request to Openverse maintainers.  Maintainers review requests for increased privileges on a per-case basis.  Distinct from ``rate_limit_model`` which only affects access rates rather than privileges.', size=None),
        ),
    ]
