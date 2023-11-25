from django.urls import path

from authentication.views import TokenAuthView, ProfileUserViewSet, UserCompaniViewSet

urlpatterns = [
    path('token/', TokenAuthView.as_view()),
    path('profiles/', ProfileUserViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('profiles/<int:pk>/', ProfileUserViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),
    path('companies/', UserCompaniViewSet.as_view({'patch': 'partial_update', 'delete': 'destroy'})),

]
