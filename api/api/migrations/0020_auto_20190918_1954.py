# Generated by Django 2.2.4 on 2019-09-18 19:54

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_auto_20190307_1830'),
    ]

    operations = [
        migrations.AddField(
            model_name='throttledapplication',
            name='verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='image',
            name='identifier',
            field=models.UUIDField(db_index=True, help_text='Our unique identifier for a CC work.', unique=True),
        ),
        migrations.CreateModel(
            name='OAuth2Verification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('code', models.CharField(db_index=True, max_length=256)),
                ('associated_application', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.OAUTH2_PROVIDER_APPLICATION_MODEL)),
            ],
        ),
    ]
