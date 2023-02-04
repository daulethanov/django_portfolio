from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from api.views import ExecutorApiView

router = DefaultRouter()
router.register('executor', ExecutorApiView, basename='executor')

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/users/', include('clients.urls')),
    path('api/', include('api.urls')),

]

urlpatterns += router.urls
