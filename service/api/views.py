from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


class CustomerApiView(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def create_customer(self, serializer):
        serializer.save(user=self.request.user)


class CustomerOrderApiView(ModelViewSet):
    queryset = CustomerOrder.objects.all()
    serializer_class = CustomerOrderSerializer

    def create_order_customer(self, serializer):
        serializer.save(user=self.request.user)


class ExecutorApiView(ModelViewSet):
    queryset = Executor.objects.all()
    serializer_class = ExecutorSerializer


class ExecutorOrderApiView(ModelViewSet):
    queryset = ExecutorOrder.objects.all()
    serializer_class = ExecutorOrderSerializer


class MessageApiView(ModelViewSet):
    model = Message
    serializer_class = MessageSerializer





