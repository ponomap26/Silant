from django.db import models

from authentication.models import Companies
# from logicsCars.models import ModelCar
from logicsCars.models import ModelCar


class NodeFailure(models.Model):
    name = models.CharField(max_length=128,  verbose_name="Характер  отказа")
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = ("Характер отказа")
        verbose_name_plural = ('Характер отказа')

class PartSpare(models.Model):
    name = models.CharField(max_length=128,  verbose_name="способ восстановления")

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = ("способ восстановления")
        verbose_name_plural = ('способ восстановления')


class Complaint(models.Model):
    carNumber = models.ForeignKey(ModelCar, on_delete=models.PROTECT, to_field='numberFactory', verbose_name="Заводской номер")
    dataRefusal = models.DateField(db_index=True, verbose_name="Дата отказа")
    operatingTime = models.CharField(max_length=128, blank=True, verbose_name="Наработка")
    nodeFailure = models.ForeignKey(NodeFailure, on_delete=models.PROTECT, verbose_name="Узел отказа")
    descriptionFailure = models.TextField(verbose_name="Описание отказа")
    metodRecovery = models.ForeignKey(PartSpare, on_delete=models.PROTECT,max_length=128, blank=True, verbose_name="Способ восстановления")
    partSpare = models.TextField(verbose_name="Используемые запасные части")
    dataRecovery = models.DateField(db_index=True, blank=True, verbose_name="Дата восстановления")
    downtime = models.CharField(max_length=128, blank=True, verbose_name="Время простоя")
    componyServisor = models.ForeignKey(Companies, on_delete=models.PROTECT, verbose_name="Сервисная компания")

    def __str__(self):
        return self.descriptionFailure
    class Meta:
        verbose_name = 'Рекламации'
        verbose_name_plural = 'Рекламации'
