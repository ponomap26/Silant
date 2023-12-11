from rest_framework import serializers

from .models import Complaint, NodeFailure, PartSpare


class ComplaintSerializer(serializers.ModelSerializer):
    id = serializers.CharField(max_length=128)
    nodeFailure = serializers.CharField(source="nodeFailure.name", max_length=128, read_only=True)
    nodeFailureDE = serializers.CharField(source="nodeFailure.description", max_length=128, read_only=True)
    serviceCompanies = serializers.CharField(source="serviceCompanies.name", max_length=128, read_only=True)
    metodRecovery = serializers.CharField(source="metodRecovery.name", max_length=128, read_only=True)
    metodRecoveryDE = serializers.CharField(source="metodRecovery.description", max_length=128, read_only=True)

    class Meta:
        model = Complaint
        fields = [
            'id',
            'carNumber',
            'dataRefusal',
            'operatingTime',
            'nodeFailure',
            'nodeFailureDE',
            'descriptionFailure',
            'metodRecovery',
            'metodRecoveryDE',
            'partSpare',
            'dataRecovery',
            'downtime',
            'serviceCompanies',
        ]


class NodeFailureSerializer (serializers.ModelSerializer):
    class Meta:
        model = NodeFailure
        fields = '__all__'


class PartSpareSerializer (serializers.ModelSerializer):
    class Meta:
        model = PartSpare
        fields = '__all__'