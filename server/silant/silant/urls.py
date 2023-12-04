from django.urls import include, path
from django.contrib import admin
from rest_framework import permissions, routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.authtoken.views import obtain_auth_token

import silant

schema_view = get_schema_view(
    openapi.Info(
        title="API  проекта Силант",
        default_version='v1',
        description="API documentation for My SILANT",
        contact=openapi.Contact(email="ponomap26@yandex.ru"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),

)
router = routers.DefaultRouter()
# Добавьте ваши маршруты

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/', obtain_auth_token),
    path('admin/', admin.site.urls),
    path('', include('logicsCars.urls')),
    path('', include('authentication.urls')),
    path('', include('maintenanceCar.urls')),
    path('', include('complaints.urls')),
    # path('api/', include('rest_framework.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]


