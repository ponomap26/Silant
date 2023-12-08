from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from complaints.models import Complaint, NodeFailure, PartSpare
from complaints.serializers import ComplaintSerializer, NodeFailureSerializer, PartSpareSerializer
from complaints.permissions import IsManagerOrServis





class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer





class NodeFailureViewSet(viewsets.ModelViewSet):
    queryset = NodeFailure.objects.all()
    serializer_class = NodeFailureSerializer
    permission_classes = (IsManagerOrServis)


class PartSpareViewSet(viewsets.ModelViewSet):
    queryset = PartSpare.objects.all()
    serializer_class = PartSpareSerializer
    permission_classes = [IsManagerOrServis]
