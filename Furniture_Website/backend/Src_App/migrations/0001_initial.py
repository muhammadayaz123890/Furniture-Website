# Generated by Django 4.1.7 on 2023-04-21 08:55

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.IntegerField(default=0)),
                ('about', models.TextField()),
                ('added_on', models.DateTimeField(default=datetime.datetime(2023, 4, 21, 1, 55, 27, 838043))),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Src_App.brand')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Src_App.category')),
            ],
        ),
    ]
