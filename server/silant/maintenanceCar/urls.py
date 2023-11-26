
from django.urls import include, path

from maintenanceCar.views import CarMaintenanceViewSet


urlpatterns = [

    path('maintence/', CarMaintenanceViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('maintence/<int:pk>/', CarMaintenanceViewSet.as_view({'get': 'list', 'delete': 'delete'})),
]
