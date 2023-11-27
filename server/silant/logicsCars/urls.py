
from django.urls import include, path


from .views import ModelCarViewSet

urlpatterns = [
    path('models/', ModelCarViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('models/<int:pk>/', ModelCarViewSet.as_view({'get': 'list', 'delete': 'delete'})),

]
