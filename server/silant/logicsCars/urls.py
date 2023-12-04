from django.urls import path

from .views import ModelCarViewSet, ModelCarNoAuthViewSet



urlpatterns = [
    path('models/', ModelCarViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('modelNou/', ModelCarNoAuthViewSet.as_view({'get': 'list'})),
    path('models/<int:pk>/', ModelCarViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),
]