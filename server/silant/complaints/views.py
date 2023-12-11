from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from authentication.models import ProfileUser
from complaints.models import Complaint, NodeFailure, PartSpare
from complaints.serializers import ComplaintSerializer, NodeFailureSerializer, PartSpareSerializer
from complaints.permissions import IsManagerOrServis


class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Complaint.objects.all()
        if user.is_authenticated:
            profile = ProfileUser.objects.filter(user=user).first()
            if profile.category == "Менеджер":
                return queryset

            elif profile.category == "Сервисная организация":

                return Complaint.objects.filter(serviceCompanies__name__name=profile.company)
            elif profile.category == "Клиент":

                return Complaint.objects.filter(carNumber__client__name=profile.company)
        else:
            return Complaint.objects.none()

        return queryset

class NodeFailureViewSet(viewsets.ModelViewSet):
    queryset = NodeFailure.objects.all()
    serializer_class = NodeFailureSerializer
    permission_classes = (IsManagerOrServis)


class PartSpareViewSet(viewsets.ModelViewSet):
    queryset = PartSpare.objects.all()
    serializer_class = PartSpareSerializer
    permission_classes = [IsManagerOrServis]
