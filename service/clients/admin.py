from django.contrib import admin
from .models import Client, UserAccount


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    pass


@admin.register(UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'email']

