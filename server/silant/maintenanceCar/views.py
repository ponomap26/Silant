from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from logicsCars.permissions import UserAutorisation
from .models import  CarMaintenance
from .serializers import CarMaintenanceInfoLoadersSerializer


class CarMaintenanceViewSet(viewsets.ModelViewSet):
    queryset = CarMaintenance.objects.all()
    serializer_class = CarMaintenanceInfoLoadersSerializer
    permission_classes = (UserAutorisation)
