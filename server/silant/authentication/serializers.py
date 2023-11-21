
from rest_framework import serializers
from .models import Users, ProfileUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ["name"]

class ProfileUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = ProfileUser
        fields = ["user", "category"]