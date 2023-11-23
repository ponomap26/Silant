from django.urls import include, path
from django.contrib import admin

from authentication.views import TokenAuthView
from logica.views import ModelLoadingViewSet

from swagger.urls import schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('json/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('token/', TokenAuthView.as_view()),
    path('models/', ModelLoadingViewSet.as_view({'get': 'list', 'post': 'create', 'delete': 'delete'}))

]
