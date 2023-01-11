from django.contrib.auth.models import User
from django.db import models


class Client(models.Model):
    VOCATION = (
        ('Customer', 'Customer'),
        ('Executor', 'Executor'),
    )

    user = models.OneToOneField(User, on_delete=models.PROTECT)
    title = models.CharField(max_length=131)
    numbers = models.PositiveIntegerField()
    vocation = models.CharField(max_length=20, choices=VOCATION, default='Customer')



