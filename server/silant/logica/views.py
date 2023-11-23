from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins

from authentication.permissions import IsOwnerOrReadOnly
from logica.models import ModelLoading
from logica.permissions import UserAutorisation
from logica.serializers import InfoLoadersSerializer


class ModelLoadingViewSet(mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin,
                          mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = ModelLoading.objects.all()
    serializer_class = InfoLoadersSerializer
    permission_classes = (UserAutorisation, IsOwnerOrReadOnly)