from rest_framework import serializers
from .models import ModelCar, BridgeSteerable, Bridge




class BridgeSteerableSerializer(serializers.ModelSerializer):
    class Meta:
        model = BridgeSteerable
        fields = ['modelSteerable', 'description']


class BridgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bridge
        fields = ['modelBridge', 'description']


class ModelCarSerializer(serializers.ModelSerializer):
    # steerable = BridgeSteerableSerializer(many=True, read_only=True)
    # bridge = BridgeSerializer(many=True, read_only=True)
    name = serializers.CharField(source='name.name', max_length=128)
    modelsEngines = serializers.CharField(source='modelsEngines.modelEngines', max_length=128)
    transmissions = serializers.CharField(source='transmissions.modelTransmission', max_length=128)
    serviceCompanies = serializers.CharField(source='serviceCompanies.name', max_length=128)
    modelsBridge = serializers.CharField(source='modelsBridge.modelBridge', max_length=128)
    modelsBridgeDe = serializers.CharField(source='modelsBridge.description', max_length=128)
    modelsBridgeSteerable = serializers.CharField(source='modelsBridgeSteerable.modelSteerable', max_length=128)
    modelsBridgeSteerableDe = serializers.CharField(source='modelsBridgeSteerable.description', max_length=128)
    class Meta:
        model = ModelCar
        fields = [

            'name',
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

