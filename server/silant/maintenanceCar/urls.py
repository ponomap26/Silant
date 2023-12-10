from django.urls import include, path
from rest_framework import routers
from .views import CarToViewSet, CarMaintenanceViewSet

router = routers.DefaultRouter()
router.register(r'car-to', CarToViewSet)
router.register(r'car-maintenance', CarMaintenanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]