
from django.urls import include, path
from logics.views import ModelLoadingViewSet

urlpatterns = [
    path('models/', ModelLoadingViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('models/<int:pk>/', ModelLoadingViewSet.as_view({'post': 'create', 'delete': 'delete'}))
]
