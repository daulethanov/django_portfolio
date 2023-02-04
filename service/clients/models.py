from django.contrib.auth.models import User, PermissionsMixin
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, password=None):
        if not email:
            raise ValueError("Error")

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=email,
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, first_name, last_name, email, password=None):

        user = self.create_user(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField('Имя', max_length=100)
    last_name = models.CharField('Фамилия', max_length=100)
    email = models.EmailField('Email', max_length=230, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email


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

    user = models.OneToOneField(UserAccount, on_delete=models.PROTECT)
    title = models.CharField(max_length=131)
    numbers = models.PositiveIntegerField()
    vocation = models.CharField(max_length=20, choices=VOCATION, default='Customer')
    country = models.CharField(max_length=40, choices=COUNTRIES)

    class Meta:
        verbose_name = 'Пользовательская информация'
        verbose_name_plural = 'Пользовательские личные данные'


