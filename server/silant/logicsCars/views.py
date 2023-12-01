from rest_framework.response import Response
from rest_framework import viewsets
from .models import ModelCar
from .permissions import IsClientOrManager
from .serializers import ModelCarSerializer, ModelCarNoAutchSerializer


class ModelCarViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = ModelCarSerializer
    permission_classes = [IsClientOrManager]

    # def list(self, request, *args, **kwargs):
    #     tables = ModelCar.objects.all()[:10]
    #     serializer = ModelCarSerializer(tables, many=True)
    #     return Response(serializer.data)

    def get_queryset(self):
        queryset = ModelCar.objects.all()
        ids = self.request.query_params.get('id', None)
        if ids is not None:
            queryset = queryset.filter(id=ids)
        return queryset


class ModelCarNoAuthViewSet(viewsets.ModelViewSet):
    serializer_class = ModelCarNoAutchSerializer
    # permission_classes = [IsClientOrManager]

    def list(self, request, *args, **kwargs):
        tables = ModelCar.objects.all()[:10]
        serializer = ModelCarSerializer(tables, many=True)
        return Response(serializer.data)
