from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets


from logics.models import ModelLoading
from logics.permissions import IsOwnerOrReadOnly
from logics.serializers import InfoLoadersSerializer


class ModelLoadingViewSet(viewsets.ModelViewSet):
    queryset = ModelLoading.objects.all()
    serializer_class = InfoLoadersSerializer
    permission_classes = (IsOwnerOrReadOnly)
