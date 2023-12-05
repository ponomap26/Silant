from django.db import models

# from logicsCars.models import ModelCar
from logicsCars.models import ModelCar


class CarTo(models.Model):
    maintenance = models.CharField(max_length=128, verbose_name="Вид ТО")
    description = models.TextField(blank=True, verbose_name="Описание")

    class Meta:
        verbose_name = "Вид ТО"
        verbose_name_plural = "Вид ТО"

    def __str__(self):
        return self.maintenance


class CarMaintenance(models.Model):
    Number = models.ForeignKey(ModelCar, on_delete=models.PROTECT, to_field='numberFactory')
    carTo = models.ForeignKey(CarTo, on_delete=models.PROTECT,  verbose_name="Вид ТО", related_name='children')
    dataTo = models.DateField(db_index=True, verbose_name="Дата проведения ТО")
    operatingTime = models.CharField(max_length=128, blank=True, verbose_name="Наработка")
    order_outfit = models.CharField(max_length=128, blank=True, verbose_name="Номер заказ наряда")
    data_order_outfit = models.DateField(db_index=True, verbose_name="Дата заказ наряда")

    # def __init__(self, *args, **kwargs):
    #     super().__init__(args, kwargs)
    #     self.numberFactory = None

    def __str__(self):
        return f' {self.Number} - {self.carTo}'

    class Meta:
        verbose_name = "ТО"
        verbose_name_plural = "ТО"

