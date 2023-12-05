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

# def get_queryset(self):
#     queryset = ModelCar.objects.all()
#     company = self.request.query_params.get('client')
#     print(self.request.user.is_authenticated)
#
#     if self.request.user.is_authenticated:
#         profile = ProfileUser.objects.get(user=self.request.user)
#         company_id = profile.company.id
#         print(company_id)
#         if company == str(company_id):
#             queryset = queryset.filter(client__id=company)
#             if queryset.exists():
#                 print(queryset)
#                 return queryset
#             else:
#                 return None
#         else:
#             print("User2")
#     else:
#         print("User3")
#
#     return None
