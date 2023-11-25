from rest_framework import serializers
from .models import ProfileUser


class ProfileUserSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ProfileUser
        fields = ['id', 'user', 'category']


