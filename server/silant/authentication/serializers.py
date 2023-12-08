from django.contrib.auth.models import User
from rest_framework import serializers
from .models import ProfileUser, Companies, ServisCompanies



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


class CompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = '__all__'
        slug_field = "КОМПАНИИ"


class ServisCompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServisCompanies
        fields = '__all__'
        slug_field = "СЕРВИСНЫЕ КОМПАНИИ"
