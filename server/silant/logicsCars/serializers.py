from rest_framework import serializers

from .models import ModelCar


class ModelCarSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='name.name', max_length=128)
    modelsEngines = serializers.CharField(source='modelsEngines.modelEngines', max_length=128)
    transmissions = serializers.CharField(source='transmissions.modelTransmission', max_length=128)
    modelsBridge = serializers.CharField(source='modelsBridge.modelBridge', max_length=128)
    modelsBridgeSteerable = serializers.CharField(source='modelsBridgeSteerable.modelSteerable', max_length=128)
    serviceCompanies = serializers.CharField(source='serviceCompanies.name', max_length=128)

    class Meta:
        model = ModelCar
        fields = '__all__'





