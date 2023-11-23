from rest_framework import serializers

from logica.models import ModelLoading


class InfoLoadersSerializer (serializers.ModelSerializer):
    class Meta:
        model = ModelLoading
        fields = '__all__'
