from django.contrib import admin
from authentication.models import Users, ProfileUser
from logica.models import ModelSilant

admin.site.register(Users)
admin.site.register(ProfileUser)
admin.site.register(ModelSilant)