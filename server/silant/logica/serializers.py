from rest_framework import serializers

from logica.models import ModelLoading


class InfoLoadersSerializer (serializers.ModelSerializer):
    class Meta:
        model = ModelLoading
        fields = ['id', 'name', 'numberFactory', 'Engines', 'numEngines', 'date_created']
