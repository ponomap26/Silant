from django.urls import path

from logica.views import ModelLoadingViewSet

urlpatterns = [path('models/', ModelLoadingViewSet.as_view({'get': 'list', 'post': 'create'})),
               path('models/<pk>/', ModelLoadingViewSet.as_view(
                   {'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
                  )
               ]
