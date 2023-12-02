from rest_framework import serializers
from .models import ProfileUser


class ProfileUserSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    company = serializers.CharField(source='company.name', max_length=128)
    class Meta:
        model = ProfileUser
        fields = [
            'id',
            'user',
            'category',
            'company',
        ]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['company'] = instance.company.name
        return rep
