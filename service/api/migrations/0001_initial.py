# Generated by Django 4.1.5 on 2023-01-20 04:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('users', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Заказчик',
                'verbose_name_plural': 'Заказчики',
            },
        ),
        migrations.CreateModel(
            name='CustomerOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('Developer', 'Developer'), ('Design', 'Design'), ('SMM', 'SMM'), ('Marketing', 'Marketing'), ('GameDev', 'GameDev')], default='GameDev', max_length=100)),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('price', models.PositiveIntegerField()),
                ('dogovor_price', models.BooleanField(default=False)),
                ('task_completed', models.CharField(choices=[('Task completed', 'Task completed'), ('Pending', 'Pending'), ('Looking for', 'Looking for')], default='Looking for', max_length=100)),
                ('customer', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.customer')),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
            },
        ),
        migrations.CreateModel(
            name='Executor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('portfolio_text', models.TextField()),
                ('users', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Исполнитель',
                'verbose_name_plural': 'Исполнители',
            },
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(verbose_name='Сообщение')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('customer', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.customer')),
                ('executor', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.executor')),
            ],
        ),
        migrations.CreateModel(
            name='ExecutorOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('executor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.executor')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customerorder')),
            ],
            options={
                'verbose_name': 'Исполнитель заказа',
                'verbose_name_plural': 'Исполнитель заказов',
            },
        ),
    ]
