from django.contrib.auth.models import User
from django.db import models


# class Users(AbstractUser):
#     REQUIRED_FIELDS = []
#     USERNAME_FIELD = 'email'
#
#     username = models.CharField(max_length=100)
#     email = models.EmailField('Почта', unique=True, blank=False, null=False)
#     first_name = models.CharField('Имя', max_length=60, null=True, blank=True)
#     last_name = models.CharField('Фамилия', max_length=60, null=True, blank=True)
#     phone = models.PositiveIntegerField('Номер телефона', null=True, blank=True)
#     is_staff = models.BooleanField('staff status', default=False)
#     is_active = models.BooleanField('active', default=True)
#     is_verified = models.BooleanField('verified', default=False)
#     is_email_verified = models.BooleanField(default=False)
#     email_verification_key = models.CharField(max_length=32)
#
#     class Meta:
#         verbose_name = 'Пользователь'
#         verbose_name_plural = 'Пользователь'


class Client(models.Model):
    VOCATION = (
        ('Customer', 'Customer'),
        ('Executor', 'Executor'),
    )

    COUNTRIES = (
        ('RU', 'Россия'),
        ('KZ', 'Казахстан'),
        ('BY', 'Беларусь'),
        ('UA', 'Украина'),
        ('AM', 'Армения'),
        ('AZ', 'Азербайджан'),
        ('GE', 'Грузия'),
        ('KG', 'Кыргызстан'),
        ('MD', 'Молдавия'),
        ('TJ', 'Таджикистан'),
    )

    user = models.OneToOneField(User, on_delete=models.PROTECT)
    title = models.CharField(max_length=131)
    numbers = models.PositiveIntegerField()
    vocation = models.CharField(max_length=20, choices=VOCATION, default='Customer')
    country = models.CharField(max_length=40, choices=COUNTRIES)

    class Meta:
        verbose_name = 'Пользовательская информация'
        verbose_name_plural = 'Пользовательские личные данные'


