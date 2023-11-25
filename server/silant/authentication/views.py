from rest_framework import viewsets
from authentication.models import ProfileUser, CompaniUser
from authentication.serializers import ProfileUserSerializer, CompaniUserSerializer

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class TokenAuthView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        queryset = ProfileUser.objects.get(user=user.pk)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'user_name': user.username,
            'сategory': queryset.сategory,
            'company_id': queryset.company.id,
            'company_name': queryset.company.name

        })

class ProfileUserViewSet(viewsets.ModelViewSet):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer


class UserCompaniViewSet(viewsets.ModelViewSet):
    queryset = CompaniUser.objects.all()
    serializer_class = CompaniUserSerializer
