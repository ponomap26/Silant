from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from authentication.models import ProfileUser
from logicsCars.models import ModelCar
from .models import CarMaintenance
from .permissions import IsAtchTOService
from .serializers import CarMaintenanceInfoLoadersSerializer


class CarMaintenanceViewSet(viewsets.ModelViewSet):

    serializer_class = CarMaintenanceInfoLoadersSerializer
    # permission_classes = [IsAtchTOService]

    def get_queryset(self):
        user = self.request.user
        queryset = CarMaintenance.objects.all()
        if user.is_authenticated:
            profile = ProfileUser.objects.filter(user=user).first()
            if profile.category == "Менеджер":
                return queryset

        #     elif profile.category == "Сервисная организация":
        #
        #         return CarMaintenance.objects.filter(Number__client__name=profile.company)
        #     # else:
        #     #     return CarMaintenance.objects.filter(client=profile.company)
        # else:
        #     return CarMaintenance.objects.none()


