import os
import time

from celery import Celery, shared_task
from django.conf import settings
from django.core.mail import send_mail


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.base')

app = Celery('service')
app.config_from_object('django.conf:settings')
app.conf.broker_url = settings.CELERY_BROKER_URL
app.autodiscover_tasks()


# @shared_task
# def send_notification_email(notification_id):
#     notification = EmailNotification.objects.get(id=notification_id)
#     users = Users.objects.all()
#
#     subject = notification.subject
#     message = notification.message
#     from_email = notification.sender
#     recipient_list = [user.email for user in users]
#     send_mail(subject, message, from_email, recipient_list)