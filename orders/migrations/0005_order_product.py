# Generated by Django 3.2.4 on 2021-06-17 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_remove_order_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.JSONField(null=True),
        ),
    ]
