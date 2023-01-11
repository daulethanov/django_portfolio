from django.contrib import admin
from .models import *

admin.site.register(Customer)
admin.site.register(CustomerOrder)
admin.site.register(Executor)
admin.site.register(ExecutorOrder)
