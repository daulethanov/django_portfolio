from django.urls import path, include
from .views import *


urlpatterns = [
    path('order-list/', OrderList.as_view()),
    path('order-create/', OrderCreate.as_view()),
    # path('executor/', ExecutorApiView.as_view()),
    # path('executor-order/', ExecutorOrderApiView.as_view()),
    # path('customer/', CustomerApiView.as_view()),
    # path('customer-order/', CustomerOrderApiView.as_view()),
    # path('message/', MessageApiView.as_view()),
]
