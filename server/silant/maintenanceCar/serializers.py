from rest_framework import serializers

from .models import CarMaintenance


class CarMaintenanceInfoLoadersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarMaintenance
        fields = '__all__'


# @swagger_auto_schema(
#     operation_description="Описание модели пользователя",
#     responses={
#         200: CarMaintenanceInfoLoadersSerializer()}
# )
# def partial_update(self, request, *args, **kwargs):
#     return super(CarMaintenanceInfoLoadersSerializer, self).partial_update
