# Generated by Django 5.0.4 on 2024-04-16 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_user_batch_user_roomno_user_year_alter_user_usertype'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='mess',
            field=models.CharField(blank=True, choices=[('Student', 'Student'), ('Faculty', 'Faculty'), ('Admin', 'Admin'), ('Worker', 'Worker')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='roomno',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
