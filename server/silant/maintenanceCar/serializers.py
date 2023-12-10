from rest_framework import serializers

from .models import CarMaintenance, CarTo


class CarToInfoLoadersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarTo
        fields = "__all__"



class CarMaintenanceInfoLoadersSerializer(serializers.ModelSerializer):
    Number = serializers.ReadOnlyField(source='Number.numberFactory')
    carTo = serializers.ReadOnlyField(source='carTo.maintenance')
    carToDe = serializers.ReadOnlyField(source='carTo.description')

    class Meta:
        model = CarMaintenance
        fields = [
            'id',
            'Number',
            'carTo',
            'carToDe',
            'dataTo',
            'operatingTime',
            'order_outfit',
            'data_order_outfit',
        ]
