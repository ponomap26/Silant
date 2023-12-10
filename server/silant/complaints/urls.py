from django.urls import include, path
from rest_framework import routers
from complaints.views import ComplaintViewSet, NodeFailureViewSet, PartSpareViewSet

router = routers.DefaultRouter()
router.register(r'complaints', ComplaintViewSet)
router.register(r'nodefailures', NodeFailureViewSet)
router.register(r'partspares', PartSpareViewSet)

urlpatterns = [
    path('', include(router.urls)),
]