from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db import models
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.decorators import api_view

from authentication.models import ProfileUser
from authentication.views import TokenAuthView
from .models import ModelCar
from .permissions import IsClientOrManager
from .serializers import ModelCarSerializer, ModelCarNouSerializer


# from .permissions import IsClientOrManager


class ModelCarNoAuthViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = ModelCarNouSerializer


class ModelCarViewSet(viewsets.ModelViewSet):
    queryset = ModelCar.objects.all()
    serializer_class = ModelCarSerializer
    authentication_classes = (TokenAuthentication,)

    permission_classes = [IsClientOrManager]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            profile = ProfileUser.objects.filter(user=user).first()
            print(profile)
            print(profile.category)
            print(profile.company)

            queryset = ModelCar.objects.filter(client=profile.company)
            # | ModelCar.objects.filter(
            #     serviceCompanies=profile.category)

            print()
            return queryset
        return ModelCar.objects.none()

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
