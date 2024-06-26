# Generated by Django 5.0.4 on 2024-04-16 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_complainttype_complainttype_alter_user_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='batch',
            field=models.CharField(blank=True, choices=[('BTech', 'BTech'), ('MTech', 'MTech'), ('Phd', 'Phd')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='roomno',
            field=models.CharField(blank=True, choices=[('Student', 'Student'), ('Faculty', 'Faculty'), ('Admin', 'Admin'), ('Worker', 'Worker')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='year',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='usertype',
            field=models.CharField(choices=[('Student', 'Student'), ('Faculty', 'Faculty'), ('Admin', 'Admin'), ('Worker', 'Worker')], default='Student', max_length=20),
        ),
    ]
