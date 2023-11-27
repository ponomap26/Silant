from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from complaints.models import Complaint
from complaints.serializers import ComplaintSerializer
from complaints.permissions import IsComplaintsService


class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = (IsComplaintsService)
