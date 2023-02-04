from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, GenericAPIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


class CustomerOrderApiView(ModelViewSet):
    queryset = CustomerOrder.objects.all()
    serializer_class = CustomerOrderSerializer
    permission_classes = [permissions.AllowAny]

    def create_order_customer(self, serializer):
        serializer.save(user=self.request.user)


class OrderList(ListAPIView):
    queryset = CustomerOrder.objects.all()
    serializer_class = CustomerOrderSerializer
    permission_classes = [permissions.AllowAny]


class OrderCreate(CreateAPIView):
    queryset = CustomerOrder.objects.all()
    serializer_class = CustomerOrderSerializer
    permission_classes = [permissions.IsAuthenticated]


class ExecutorApiView(ModelViewSet):
    queryset = Executor.objects.all()
    serializer_class = ExecutorSerializer
    permission_classes = [permissions.IsAuthenticated]


class ExecutorOrderApiView(ModelViewSet):
    queryset = ExecutorOrder.objects.all()
    serializer_class = ExecutorOrderSerializer
    permission_classes = [permissions.IsAuthenticated]


class MessageApiView(ModelViewSet):
    model = Message
    serializer_class = MessageSerializer





