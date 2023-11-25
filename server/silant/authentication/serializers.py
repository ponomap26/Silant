from rest_framework import serializers
from .models import ProfileUser, CompaniUser


class ProfileUserSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ProfileUser
        fields = ['id', 'user', 'сategory', 'company']


class CompaniUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompaniUser
        fields = ['id', 'name']