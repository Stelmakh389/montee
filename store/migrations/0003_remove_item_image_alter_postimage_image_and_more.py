# Generated by Django 5.0.3 on 2024-03-21 12:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_postimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='image',
        ),
        migrations.AlterField(
            model_name='postimage',
            name='image',
            field=models.ImageField(upload_to='items/'),
        ),
        migrations.AlterField(
            model_name='postimage',
            name='product',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='store.item', verbose_name='Изображение'),
        ),
    ]
