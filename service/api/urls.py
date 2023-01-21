from django.urls import path, include
from .views import *


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    # path('executor/', ExecutorApiView.as_view()),
    # path('executor-order/', ExecutorOrderApiView.as_view()),
    # path('customer/', CustomerApiView.as_view()),
    # path('customer-order/', CustomerOrderApiView.as_view()),
    # path('message/', MessageApiView.as_view()),
]
