from rest_framework import viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from authentication.models import ProfileUser, Users
from authentication.serializers import ProfileUserSerializer, UserSerializer


class TokenAuthView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        queryset = ProfileUser.objects.get(user=user.pk)
        return Response({'token': token.key,
                         'user_id': user.pk,
                         'user_name': user.username,
                         'сategory': queryset.сategory,
                         })


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
