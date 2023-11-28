from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from rest_framework import viewsets

from .models import ModelCar
from .permissions import IsClientOrManager
from .serializers import ModelCarSerializer


class ModelCarViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = ModelCarSerializer
    permission_classes = [IsClientOrManager]

    # def get_queryset(self):
    #     queryset = ModelCar.objects.all()
    #     Id = self.request.query_params.get('id', None)
    #     if Id is not None:
    #         queryset = queryset.filter(id=Id)
    #     return queryset
