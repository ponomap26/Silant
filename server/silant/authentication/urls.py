from django.urls import path, include
from rest_framework import routers

from rest_framework.authtoken.views import obtain_auth_token
from .views import TokenAuthView, ProfileUserViewSet



urlpatterns = [
    path('token/', TokenAuthView.as_view()),
    path('users/', ProfileUserViewSet.as_view({'get': 'list', })),
    path('users/<int:pk>/', ProfileUserViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),
    # path('companies/', UserCompaniViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),

]
