from django.urls import path, include
from rest_framework import routers

from rest_framework.authtoken.views import obtain_auth_token
from .views import TokenAuthView, ProfileUserViewSet, CompaniesViewSet, ServisCompaniesViewSet

urlpatterns = [
    path('token/', TokenAuthView.as_view()),
    path('users/', ProfileUserViewSet.as_view({'get': 'list', })),
    path('users/<int:pk>/', ProfileUserViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),
    path('companies/', CompaniesViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('companies/<int:pk>/', CompaniesViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),
    path('serviscompani/', ServisCompaniesViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('serviscompani/<int:pk>/', ServisCompaniesViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),

    # path('companies/', UserCompaniViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),

]
