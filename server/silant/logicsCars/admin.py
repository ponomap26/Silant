from django.contrib import admin

# Register your models here.

from .models import Engines, ModelsLoader, Transmission, BridgeSteerable, Bridge, ModelCar

admin.site.register(ModelsLoader)
admin.site.register(Engines)
admin.site.register(Transmission)
admin.site.register(BridgeSteerable)
admin.site.register(Bridge)
admin.site.register(ModelCar)




