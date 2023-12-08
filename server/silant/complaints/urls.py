from django.urls import include, path

from .views import ComplaintViewSet, NodeFailureViewSet, PartSpareViewSet

urlpatterns = [
    path('complaints/', ComplaintViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('complaints/<int:pk>/', ComplaintViewSet.as_view({'get': 'list', 'delete': 'delete'})),
    path('nodefailure/', NodeFailureViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('nodefailure/<int:pk>/', NodeFailureViewSet.as_view({'get': 'list', 'delete': 'delete'})),
    path('partspare/', PartSpareViewSet.as_view({'get': 'list', 'post': 'create', })),
    path('partspare/<int:pk>/', PartSpareViewSet.as_view({'get': 'list', 'delete': 'delete'})),

]
