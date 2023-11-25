from rest_framework import serializers

from .models import ModelCar


class InfoLoadersSerializer (serializers.ModelSerializer):
    class Meta:
        model = ModelCar
        fields = '__all__'
