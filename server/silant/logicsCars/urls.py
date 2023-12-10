from django.urls import path, include
from rest_framework import routers
from .views import (
    ModelCarNoAuthViewSet,
    ModelCarViewSet,
    ModelsLoaderViewSet,
    EnginesViewSet,
    TransmissionViewSet,
    BridgeViewSet,
    BridgeSteerableViewSet,
)

router = routers.DefaultRouter()
router.register('modelcar-noauth', ModelCarNoAuthViewSet)
router.register('modelcar', ModelCarViewSet)
router.register('modelsloader', ModelsLoaderViewSet)
router.register('engines', EnginesViewSet)
router.register('transmission', TransmissionViewSet)
router.register('bridge', BridgeViewSet)
router.register('bridgesteerable', BridgeSteerableViewSet)

urlpatterns = [
    path('', include(router.urls)),
]