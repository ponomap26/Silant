
from django.urls import include, path
from .views import ModelLoadingViewSet

urlpatterns = [
    path('models/', ModelLoadingViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('models/<int:pk>/', ModelLoadingViewSet.as_view({'post': 'create', 'delete': 'delete'}))
]
