from django.contrib.auth.models import AbstractUser, User
from django.db import models

from clients.models import Client

CATEGORY = (
    ('Developer', 'Developer'),
    ('Design', 'Design'),
    ('SMM', 'SMM'),
    ('Marketing', 'Marketing'),
    ('GameDev', 'GameDev')
)

TASK_COMPLETED = (
    ('Task completed', 'Task completed'),
    ('Pending', 'Pending'),
    ('Looking for', 'Looking for')

)


class Customer(models.Model):
    users = models.OneToOneField(Client, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Заказчик'
        verbose_name_plural = 'Заказчики'


class CustomerOrder(models.Model):
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE)
    category = models.CharField(max_length=100, choices=CATEGORY, default='GameDev')
    title = models.CharField(max_length=200)
    description = models.TextField()
    # photo = models.ImageField(upload_to='media/CustomerOrder/', null=True, blank=True)
    price = models.PositiveIntegerField()
    task_completed = models.CharField(max_length=100, choices=TASK_COMPLETED, default='Looking for')
    dogovor_price = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


class Executor(models.Model):
    users = models.OneToOneField(Client, on_delete=models.CASCADE)
    portfolio_text = models.TextField()
    # portfolio_photo = models.ImageField(upload_to='media/executor/portfolio')

    class Meta:
        verbose_name = 'Исполнитель'
        verbose_name_plural = 'Исполнители'


class ExecutorOrder(models.Model):
    executor = models.OneToOneField(Executor, on_delete=models.CASCADE)
    order = models.ForeignKey(CustomerOrder, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Исполнитель заказа'
        verbose_name_plural = 'Исполнитель заказов'

