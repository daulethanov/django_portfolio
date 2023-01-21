from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import ExecutorApiView

router = DefaultRouter()
router.register('executor', ExecutorApiView, basename='executor')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('clients.urls')),
    path('api/', include('api.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt'))
]

urlpatterns += router.urls