from django.urls import include, path
from django.contrib import admin

from authentication.views import TokenAuthView

urlpatterns = [

    path('api/', include('swagger.urls')),
    path('admin/', admin.site.urls),
    path('token/', TokenAuthView.as_view(), name='api_token_auth'),

]
