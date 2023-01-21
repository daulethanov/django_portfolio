from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db.models import signals
from django.shortcuts import render
from django.urls import reverse
from django.utils.http import urlsafe_base64_decode
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response




