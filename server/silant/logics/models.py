from django.db import models


class Engines(models.Model):
    number = models.CharField(max_length=117, verbose_name="номер двигателя")
    def __str__(self):
        return self.number

    class Meta:
        verbose_name = 'Двигатель'

class EnginesNumbers(models.Model):
    number = models.CharField(max_length=117, verbose_name="номер двигателя")
    # models = models.CharField(max_length=117, verbose_name="модель двигателя")
    def __str__(self):
        return self.number

    class Meta:
        verbose_name = 'двигателя'




class Transmission(models.Model):
    name = models.CharField(max_length=117)

    def __str__(self):
        return self.name



class NumberTransmission(models.Model):
    number = models.CharField(verbose_name="номер трансмиссии")

    def __str__(self):
        return self.number


class ModelLoading(models.Model):
    name = models.CharField(unique=True, verbose_name='Название')
    # description = models.TextField(blank=True, verbose_name='Описание')
    numberFactory = models.CharField(max_length=117, verbose_name="Заводской номер")
    modelsEngines = models.OneToOneField(Engines, on_delete=models.PROTECT, verbose_name='Модель двигателя')
    numberEngines = models.OneToOneField(EnginesNumbers, on_delete=models.PROTECT, verbose_name='nomer dvigatela')
    date_created = models.DateField(db_index=True,
                                    verbose_name="Creation date", auto_now_add=True, null=True
                                    )
    transmissians = models.OneToOneField(Transmission, on_delete=models.PROTECT)
    numberTransmissions = models.OneToOneField(NumberTransmission, on_delete=models.PROTECT)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Модель Погрузчика'
        verbose_name_plural = 'Модель Погрузчика'
