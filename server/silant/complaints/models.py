from django.db import models

from authentication.models import ServisCompanies


class NodeFailure(models.Model):
    name = models.CharField(max_length=128,  verbose_name="Характер  отказа")
    def __str__(self):
        return self.name

class PartSpare(models.Model):
    name = models.CharField(max_length=128,  verbose_name="способ восстановления")

    def __str__(self):
        return self.name

class Complaint(models.Model):
    dataRefusal = models.DateField(db_index=True, verbose_name="Дата отказа")
    operatingTime = models.CharField(max_length=128, blank=True, verbose_name="Наработка")
    nodeFailure = models.ForeignKey(NodeFailure, on_delete=models.PROTECT, verbose_name="Узел отказа")
    descriptionFailure = models.TextField(verbose_name="Описание отказа")
    metodRecovery = models.ForeignKey(PartSpare, on_delete=models.PROTECT,max_length=128, blank=True, verbose_name="Способ восстановления")
    partSpare = models.TextField(verbose_name="Используемые запасные части")
    dataRecovery = models.DateField(db_index=True, blank=True, verbose_name="Дата восстановления")
    downtime = models.CharField(max_length=128, blank=True, verbose_name="Время простоя")
    componyServisor = models.ForeignKey(ServisCompanies, on_delete=models.PROTECT, verbose_name="Сервисная компания")

    def __str__(self):
        return self.descriptionFailure
    class Meta:
        verbose_name = 'Рекламации'
        verbose_name_plural = 'Рекламации'
