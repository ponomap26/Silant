from rest_framework import serializers
from .models import ModelCar, BridgeSteerable, Bridge, ModelsLoader, Engines, Transmission


class ModelCarSerializer(serializers.ModelSerializer):
    """ Serializer модели Техники"""
    id = serializers.CharField()
    modelCar = serializers.CharField(source='modelCar.modelsCar', max_length=128, read_only=True)
    modelCarDe = serializers.CharField(source='modelCar.description', max_length=128, read_only=True)
    modelsEngines = serializers.CharField(source='modelsEngines.modelEngines', max_length=128, read_only=True)
    transmissions = serializers.CharField(source='transmissions.modelTransmission', max_length=128, read_only=True)
    serviceCompanies = serializers.CharField(source='serviceCompanies.name', max_length=128, read_only=True)
    modelsBridge = serializers.CharField(source='modelsBridge.modelBridge', max_length=128, read_only=True)
    modelsBridgeDe = serializers.CharField(source='modelsBridge.description', max_length=128, read_only=True)
    modelsBridgeSteerable = serializers.CharField(source='modelsBridgeSteerable.modelSteerable', max_length=128,
                                                  read_only=True)
    modelsBridgeSteerableDe = serializers.CharField(source='modelsBridgeSteerable.description', max_length=128,
                                                    read_only=True)
    client = serializers.CharField(source='client.name', max_length=128, read_only=True)
    numberBridge = serializers.CharField()

    class Meta:
        model = ModelCar
        fields = [
            'id',
            'modelCar',
            'equipment',
            'modelCarDe',
            'numberFactory',
            'modelsEngines',
            'numberEngines',
            # 'dateCreated',
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
    """ Serializer для модели без авторизации"""
    modelCar = serializers.CharField(source='modelCar.modelsCar', max_length=128)
    modelCarDe = serializers.CharField(source='modelCar.description', max_length=128)
    modelsEngines = serializers.CharField(source='modelsEngines.modelEngines', max_length=128)
    modelsEnginesDe = serializers.CharField(source='modelsEngines.description', max_length=128)
    transmissions = serializers.CharField(source='transmissions.modelTransmission', max_length=128)
    transmissionsDE = serializers.CharField(source='transmissions.description', max_length=128)
    modelsBridge = serializers.CharField(source='modelsBridge.modelBridge', max_length=128)
    modelsBridgeDe = serializers.CharField(source='modelsBridge.description', max_length=128)
    modelsBridgeSteerable = serializers.CharField(source='modelsBridgeSteerable.modelSteerable', max_length=128)
    modelsBridgeSteerableDe = serializers.CharField(source='modelsBridgeSteerable.description', max_length=128)

    class Meta:
        model = ModelCar
        fields = [
            'id',
            'modelCar',
            'modelCarDe',
            'equipment',
            'numberFactory',
            'modelsEngines',
            'modelsEnginesDe',
            'numberEngines',
            # 'dateCreated',
            'transmissions',
            'transmissionsDE',
            'numberTransmissions',
            'modelsBridge',
            'modelsBridgeDe',
            'numberBridge',
            'modelsBridgeSteerable',
            'modelsBridgeSteerableDe',
            'numberBridgeSteerable',
        ]


class ModelsLoaderSerializer(serializers.ModelSerializer):
    """Serializer  Модель техники"""

    class Meta:
        model = ModelsLoader
        fields = '__all__'


class EnginesSerializer(serializers.ModelSerializer):
    """Serializer   модель Двигатель"""

    class Meta:
        model = Engines
        fields = '__all__'


class TransmissionSerializer(serializers.ModelSerializer):
    """Serializer  модель Трансмисия"""

    class Meta:
        model = Transmission
        fields = '__all__'


class BridgeSerializer(serializers.ModelSerializer):
    """Serializer  модель Ведуший мост"""

    class Meta:
        model = Bridge
        fields = '__all__'


class BridgeSteerableSerializer(serializers.ModelSerializer):
    """Serializer  модель  Управляемый мост"""

    class Meta:
        model = BridgeSteerable
        fields = '__all__'
