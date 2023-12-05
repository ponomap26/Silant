from rest_framework import serializers

from .models import CarMaintenance


class CarMaintenanceInfoLoadersSerializer(serializers.ModelSerializer):
    Number = serializers.CharField(source='Number.numberFactory', max_length=128)
    carTo = serializers.CharField(source='carTo.maintenance', max_length=128)
    carToDe = serializers.CharField(source='carTo.description', max_length=128)

    class Meta:
        model = CarMaintenance
        fields = [
            'Number',
            'carTo',
            'carToDe',
            'dataTo',
            'operatingTime',
            'order_outfit',
            'data_order_outfit',
        ]

# @swagger_auto_schema(
#     operation_description="Описание модели пользователя",
#     responses={
#         200: CarMaintenanceInfoLoadersSerializer()}
# )
# def partial_update(self, request, *args, **kwargs):
#     return super(CarMaintenanceInfoLoadersSerializer, self).partial_update
