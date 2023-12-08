from django.urls import path

from .views import ModelCarViewSet, ModelCarNoAuthViewSet, ModelsLoaderViewSet, EnginesViewSet, TransmissionViewSet, \
    BridgeViewSet, BridgeSteerableViewSet

urlpatterns = [
    path('models/', ModelCarViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('modelNou/', ModelCarNoAuthViewSet.as_view({'get': 'list'})),
    path('models/<int:pk>/', ModelCarViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),
    path('carname/', ModelsLoaderViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('carname/<int:pk>/', ModelsLoaderViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),
    path('engines/', EnginesViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('engines/<int:pk>/', EnginesViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),
    path('transmission/', TransmissionViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('transmission/<int:pk>/', TransmissionViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),
    path('bridge/', BridgeViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('bridge/<int:pk>/', BridgeViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),
    path('bridgesteerab/', BridgeSteerableViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('bridgesteerab/<int:pk>/', BridgeSteerableViewSet.as_view({
        'patch': 'partial_update', 'delete': 'destroy'})),

]
