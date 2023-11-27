
from django.urls import include, path


from .views import ComplaintViewSet

urlpatterns = [
    path('complaints/', ComplaintViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('complaints/<int:pk>/', ComplaintViewSet.as_view({'get': 'list', 'delete': 'delete'})),

]
