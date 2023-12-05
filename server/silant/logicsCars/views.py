from rest_framework import viewsets

from authentication.models import ProfileUser, ServisCompanies

from .models import ModelCar

from .serializers import ModelCarSerializer, ModelCarNouSerializer


class ModelCarNoAuthViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = ModelCarNouSerializer


class ModelCarViewSet(viewsets.ModelViewSet):
    serializer_class = ModelCarSerializer

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

