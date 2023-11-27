from rest_framework import serializers

from .models import ModelCar


class ModelCarSerializer (serializers.ModelSerializer):
    class Meta:
        model = ModelCar
        fields = '__all__'
