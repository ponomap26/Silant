from django.db import models

# Create your models here.
from logicsCars.models import ModelCar


class CarTo(models.Model):
    maintenance = models.CharField(max_length=128, blank=True, verbose_name="Вид ТО")
    description = models.TextField(blank=True, verbose_name="Описание")

    class Meta:
        verbose_name = "Вид ТО"
        verbose_name_plural = "Вид ТО"

    def __str__(self):
        return f'{self.maintenance}'


class CarMaintenance(models.Model):
    forklifts = models.ForeignKey(ModelCar, on_delete=models.PROTECT, verbose_name="Погрузчик")
    carTo = models.ForeignKey(CarTo, on_delete=models.PROTECT, max_length=256, verbose_name="Вид ТО")
    dataTo = models.DateField(db_index=True, verbose_name="Дата проведения ТО")
    operatingTime = models.CharField(max_length=128, blank=True, verbose_name="Наработка")
    order_outfit = models.CharField(max_length=128, blank=True, verbose_name="Номер заказ наряда")
    data_order_outfit = models.DateField(db_index=True, verbose_name="Дата заказ наряда")

    class Meta:
        verbose_name = "ТО"
        verbose_name_plural = "ТО"

        def __str__(self):
            return f'{self.forklifts}'
