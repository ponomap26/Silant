from django.contrib import admin

# Register your models here.
from logics.models import ModelLoading, Engines, Transmission, EnginesNumbers, NumberTransmission

admin.site.register(ModelLoading)
admin.site.register(Engines)
admin.site.register(Transmission)
admin.site.register(EnginesNumbers)
admin.site.register(NumberTransmission)
