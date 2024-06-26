# Generated by Django 5.0.4 on 2024-04-15 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='complainttype',
            name='complaintType',
            field=models.CharField(choices=[('Electrical', 'Electrical'), ('Plumbing', 'Plumbing'), ('Civil', 'Civil'), ('Other', 'Other')], default='Other', max_length=200),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='usertype',
            field=models.CharField(choices=[('Student', 'Student'), ('Faculty', 'Faculty'), ('Admin', 'Admin'), ('Worker', 'Worker')], default='Student', max_length=200),
        ),
    ]
