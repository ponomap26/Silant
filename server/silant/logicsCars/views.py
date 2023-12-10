from rest_framework import viewsets

from authentication.models import ProfileUser, ServisCompanies

from .models import ModelCar, ModelsLoader, Engines, Transmission, Bridge, BridgeSteerable
from .permissions import IsManager

from .serializers import ModelCarSerializer, ModelCarNouSerializer, ModelsLoaderSerializer, EnginesSerializer, \
    TransmissionSerializer, BridgeSerializer, BridgeSteerableSerializer


class ModelCarNoAuthViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = ModelCarNouSerializer


class ModelCarViewSet(viewsets.ModelViewSet):
    serializer_class = ModelCarSerializer
    queryset = ModelCar.objects.all()

    def get_queryset(self):
        user = self.request.user

        if user.is_authenticated:
            profile = ProfileUser.objects.filter(user=user).first()
            if profile.category == "Менеджер":
                return ModelCar.objects.all()
            elif profile.category == "Сервисная организация":

                return ModelCar.objects.filter(serviceCompanies__name__name=profile.company)
            else:
                return ModelCar.objects.filter(client=profile.company)
        else:
            return ModelCar.objects.none()

        return queryset


class ModelsLoaderViewSet(viewsets.ModelViewSet):
    queryset = ModelsLoader.objects.all()
    serializer_class = ModelsLoaderSerializer



class EnginesViewSet(viewsets.ModelViewSet):
    queryset = Engines.objects.all()
    serializer_class = EnginesSerializer



class TransmissionViewSet(viewsets.ModelViewSet):
    queryset = Transmission.objects.all()
    serializer_class = TransmissionSerializer



class BridgeViewSet(viewsets.ModelViewSet):
    queryset = Bridge.objects.all()
    serializer_class = BridgeSerializer



class BridgeSteerableViewSet(viewsets.ModelViewSet):
    queryset = BridgeSteerable.objects.all()
    serializer_class = BridgeSteerableSerializer
    permission_classes = [IsManager]