from django.urls import include, path

from .views import ModelCarViewSet, ModelCarNoAuthViewSet

urlpatterns = [
    path('models/', ModelCarViewSet.as_view({'get': 'list', 'post': 'create'}), name='Модель'),
    path('modelNou/', ModelCarNoAuthViewSet.as_view({'get': 'list'}), name='ModelNou'),
    path('models/<int:pk>/', ModelCarViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'}), name='model-detail'),
]