from rest_framework import serializers
from .models import ModelCar, BridgeSteerable, Bridge

class ModelCarSerializer(serializers.ModelSerializer):
    modelCar = serializers.CharField(source='modelCar.modelsCar', max_length=128)
    modelCarDe = serializers.CharField(source='modelCar.description', max_length=128)
    modelsEngines = serializers.CharField(source='modelsEngines.modelEngines', max_length=128)
    transmissions = serializers.CharField(source='transmissions.modelTransmission', max_length=128)
    serviceCompanies = serializers.CharField(source='serviceCompanies.name', max_length=128)
    modelsBridge = serializers.CharField(source='modelsBridge.modelBridge', max_length=128)
    modelsBridgeDe = serializers.CharField(source='modelsBridge.description', max_length=128)
    modelsBridgeSteerable = serializers.CharField(source='modelsBridgeSteerable.modelSteerable', max_length=128)
    modelsBridgeSteerableDe = serializers.CharField(source='modelsBridgeSteerable.description', max_length=128)
    client = serializers.CharField(source='client.name', max_length=128)

    class Meta:
        model = ModelCar
        fields = [
            'modelCar',
            'equipment',
            'modelCarDe',
            'numberFactory',
            'modelsEngines',
            'numberEngines',
            'dateCreated',
            'transmissions',
            'numberTransmissions',
            'modelsBridge',
            'modelsBridgeDe',
            'numberBridge',
            'modelsBridgeSteerable',
            'modelsBridgeSteerableDe',
            'numberBridgeSteerable',
            'contractSupply',
            'dateShipping',
            'consignee',
            'addressDelivery',
            'equipment',
            'client',
            'serviceCompanies'
        ]


class ModelCarNouSerializer(serializers.ModelSerializer):
    modelCar = serializers.CharField(source='modelCar.modelsCar', max_length=128)
    modelCarDe = serializers.CharField(source='modelCar.description', max_length=128)
    modelsEngines = serializers.CharField(source='modelsEngines.modelEngines', max_length=128)
    transmissions = serializers.CharField(source='transmissions.modelTransmission', max_length=128)

    modelsBridge = serializers.CharField(source='modelsBridge.modelBridge', max_length=128)
    modelsBridgeDe = serializers.CharField(source='modelsBridge.description', max_length=128)
    modelsBridgeSteerable = serializers.CharField(source='modelsBridgeSteerable.modelSteerable', max_length=128)
    modelsBridgeSteerableDe = serializers.CharField(source='modelsBridgeSteerable.description', max_length=128)

    class Meta:
        model = ModelCar
        fields = ['modelCar',
                  'modelCarDe',
                  'equipment',
                  'numberFactory',
                  'modelsEngines',
                  'numberEngines',
                  'dateCreated',
                  'transmissions',
                  'numberTransmissions',
                  'modelsBridge',
                  'modelsBridgeDe',
                  'numberBridge',
                  'modelsBridgeSteerable',
                  'modelsBridgeSteerableDe',
                  'numberBridgeSteerable',
                  ]
