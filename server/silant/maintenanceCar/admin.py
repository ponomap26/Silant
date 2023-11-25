from django.contrib import admin

# Register your models here.
from maintenanceCar.models import CarMaintenance, CarTo

admin.site.register(CarMaintenance)
admin.site.register(CarTo)