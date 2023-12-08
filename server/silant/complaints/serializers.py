from rest_framework import serializers

from .models import Complaint, NodeFailure, PartSpare


class ComplaintSerializer (serializers.ModelSerializer):
    nodeFailure = serializers.CharField(source="nodeFailure.name", max_length=128)
    nodeFailureDE = serializers.CharField(source="nodeFailure.description", max_length=128)
    componyServisor = serializers.CharField(source="componyServisor.name", max_length=128)
    metodRecovery = serializers.CharField(source="metodRecovery.name", max_length=128)
    metodRecoveryDE = serializers.CharField(source="metodRecovery.description", max_length=128)
    class Meta:
        model = Complaint
        fields = [
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
            'componyServisor',
        ]



class NodeFailureSerializer (serializers.ModelSerializer):
    class Meta:
        model = NodeFailure
        fields = '__all__'


class PartSpareSerializer (serializers.ModelSerializer):
    class Meta:
        model = PartSpare
        fields = '__all__'