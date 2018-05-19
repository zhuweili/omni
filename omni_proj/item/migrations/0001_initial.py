# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-19 01:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.CharField(max_length=240, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=240)),
                ('key_image', models.CharField(max_length=500)),
                ('status', models.TextField(max_length=240)),
            ],
        ),
    ]