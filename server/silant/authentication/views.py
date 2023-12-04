from rest_framework import viewsets, authentication
from rest_framework.schemas import openapi

from .models import ProfileUser
from .serializers import ProfileUserSerializer
from django.core import serializers
from django.utils.translation import gettext_lazy as _
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import authentication, viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class TokenAuthView(ObtainAuthToken):
    authentication_classes = [authentication.BasicAuthentication]

    @swagger_auto_schema(responses={
        "201": openapi.Response(
            description=_("User has got Token"),

        )
    })
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        queryset = ProfileUser.objects.get(user=user)

        return Response({
            'token': token.key,
            'user_id': user.pk,
            'user_name': user.username,
            'category': queryset.category,
            'company': queryset.company.name,  # Include serialized company
        })


class ProfileUserViewSet(viewsets.ModelViewSet):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer
    authentication_classes = [authentication.TokenAuthentication]

