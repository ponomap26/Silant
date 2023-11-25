from django.db import models

from authentication.models import ProfileUser


class ModelsLoader(models.Model):
    name = models.TextField(max_length=128, verbose_name='Название Модели ')
    specification = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'модель Погрузчик'
        verbose_name_plural = 'модель Погрузчик'


class Engines(models.Model):
    modelEngines = models.TextField(max_length=128, verbose_name='Двигатель')
    specification = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Двигатель'
        verbose_name_plural = 'Двигатели'

    def __str__(self):
        return f'{self.modelEngines}'


class Transmission(models.Model):
    modelTransmission = models.TextField(max_length=128, verbose_name='Трансмисия')
    specification = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Трансмисия'
        verbose_name_plural = 'Трансмисия'

    def __str__(self):
        return f'{self.modelTransmission}'


class Bridge(models.Model):
    modelBridge = models.TextField(max_length=128, verbose_name='Ведуший мост')
    specification = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Ведущей мост'
        verbose_name_plural = 'Ведущей мост'

    def __str__(self):
        return f'{self.modelBridge}'


class BridgeSteerable(models.Model):
    modelBridge = models.TextField(max_length=128, verbose_name='Управляемый мост')
    specification = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Управляемый мост'
        verbose_name_plural = 'Управляемый мост'

    def __str__(self):
        return f'{self.BridgeSteerable}'


class Consignee(models.Model):
    name = models.CharField(max_length=128, verbose_name="Грузополучатель")

    class Meta:
        verbose_name = 'Получатель'
        verbose_name_plural = 'Получатель'


class ModelCar(models.Model):
    name = models.CharField(unique=True, max_length=117, verbose_name='Название')
    numberFactory = models.CharField(max_length=117, verbose_name="Заводской номер")
    modelsEngines = models.ForeignKey(Engines, on_delete=models.PROTECT, verbose_name='Модель двигателя')
    numberEngines = models.CharField(max_length=128, verbose_name='Номер двигателя')
    date_created = models.DateField(db_index=True, verbose_name="Дата создания", auto_now_add=True, null=True)
    transmissions = models.ForeignKey(Transmission, on_delete=models.PROTECT, verbose_name='Трансмиссия')
    numberTransmissions = models.CharField(max_length=128, verbose_name='Номер трансмиссии')
    modelsBridge = models.ForeignKey(Bridge, on_delete=models.PROTECT, verbose_name='Модель Ведушего моста')
    numberBridge = models.CharField(max_length=128, verbose_name='Номер Ведушего моста')
    modelsBridgeSteerable = models.ForeignKey(BridgeSteerable, on_delete=models.PROTECT,
                                              verbose_name='Модель управляемого моста')
    numberBridgeSteerable = models.CharField(max_length=128, verbose_name='Номер управляемого моста')
    contractSupply = models.CharField(max_length=50, blank=True, verbose_name='Договор поставки №, дата.')
    dateShipping = models.DateField(db_index=True, verbose_name='Дата отгрузки с завода')
    consignee = models.ForeignKey(Consignee, on_delete=models.PROTECT, max_length=128, verbose_name='Получатель')
    addresDelivery = models.TextField(verbose_name='Адрес поставки')

    class Meta:
        verbose_name = 'Погрузчик'

        verbose_name_plural = 'Погрузчик'

    def __str__(self):
        return self.name
