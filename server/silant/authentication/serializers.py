from django.contrib.auth.models import User
from rest_framework import serializers
from .models import ProfileUser, Companies


class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ['name']


class CompaniesSerializer(serializers.Serializer):
    class Meta:
        model = Companies
        fields = ['name']


class ProfileUserSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', max_length=128)
    company = serializers.CharField(source='company.name', max_length=128)

    class Meta:
        model = ProfileUser
        fields = [
            'user',
            'company',
            'category',
        ]
