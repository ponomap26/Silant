from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import ModelCar
from .permissions import UserAutorisation
from .serializers import InfoLoadersSerializer


class ModelLoadingViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = InfoLoadersSerializer
    permission_classes = (UserAutorisation)
