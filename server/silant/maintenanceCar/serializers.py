from rest_framework import serializers

from .models import  CarMaintenance


class CarMaintenanceInfoLoadersSerializer (serializers.ModelSerializer):
    class Meta:
        model = CarMaintenance
        fields = '__all__'
