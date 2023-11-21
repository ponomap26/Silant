from django.template.defaulttags import url
from django.urls import include, path
from rest_framework import routers, views
from rest_framework.schemas import get_schema_view

router = routers.DefaultRouter()



schema_view = get_schema_view(

    title="Snippets API",
    default_version='v1',
    description="Test description"),
public = True,






urlpatterns = [
    url('^$', schema_view),
    url(r'^', include(router.urls))
]