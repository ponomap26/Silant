from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from authentication.models import ProfileUser

from .models import CarMaintenance, CarTo

from .serializers import CarMaintenanceInfoLoadersSerializer, CarToInfoLoadersSerializer


class CarToViewSet(viewsets.ModelViewSet):
    queryset = CarTo.objects.all()
    serializer_class = CarToInfoLoadersSerializer



class CarMaintenanceViewSet(viewsets.ModelViewSet):
    queryset = CarMaintenance.objects.all()
    serializer_class = CarMaintenanceInfoLoadersSerializer


    def get_queryset(self):
        user = self.request.user
        # queryset = CarMaintenance.objects.all()
        if user.is_authenticated:
            profile = ProfileUser.objects.filter(user=user).first()
            if profile.category == "Менеджер":
                return CarMaintenance.objects.all()

            elif profile.category == "Сервисная организация":

                return CarMaintenance.objects.filter(serviceCompanies__name__name=profile.company)
            elif profile.category == "Клиент":

                return CarMaintenance.objects.filter(Number__client__name=profile.company)
        else:
            return CarMaintenance.objects.none()


