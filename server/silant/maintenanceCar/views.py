from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets


from .models import  CarMaintenance
from .permissions import IsAtchTOService
from .serializers import CarMaintenanceInfoLoadersSerializer


class CarMaintenanceViewSet(viewsets.ModelViewSet):
    queryset = CarMaintenance.objects.all()
    serializer_class = CarMaintenanceInfoLoadersSerializer
    permission_classes = (IsAtchTOService)

