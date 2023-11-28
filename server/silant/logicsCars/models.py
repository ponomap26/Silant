from django.db import models

from authentication.models import ServisCompanies


class ModelsLoader(models.Model):
    name = models.TextField(max_length=128, verbose_name='Название Модели ')
    description = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'модель Погрузчик'
        verbose_name_plural = 'модель Погрузчик'

    def __str__(self):
        return f'{self.name}'


class Engines(models.Model):
    modelEngines = models.TextField(max_length=128, verbose_name='Двигатель')
    description = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Двигатель'
        verbose_name_plural = 'Двигатели'

    def __str__(self):
        return f'{self.modelEngines}'


class Transmission(models.Model):
    modelTransmission = models.TextField(max_length=128, verbose_name='Трансмисия')
    description = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Трансмисия'
        verbose_name_plural = 'Трансмисия'

    def __str__(self):
        return f'{self.modelTransmission}'


class Bridge(models.Model):
    modelBridge = models.TextField(max_length=128, verbose_name='Ведуший мост')
    description = models.TextField(blank=True, verbose_name='Описание')

    class Meta:
        verbose_name = 'Ведущей мост'
        verbose_name_plural = 'Ведущей мост'

    def __str__(self):
        return f'{self.modelBridge}'


class BridgeSteerable(models.Model):
    modelSteerable = models.TextField(max_length=128, verbose_name='Управляемый мост')
    description = models.TextField(verbose_name='Описание')

    class Meta:
        verbose_name = 'Управляемый мост'
        verbose_name_plural = 'Управляемый мост'

    def __str__(self):
        return f'{self.modelSteerable}'


class ModelCar(models.Model):
    name = models.ForeignKey(ModelsLoader, on_delete=models.PROTECT, db_index=True, max_length=117,
                             verbose_name='Название')
    numberFactory = models.CharField(unique=True, max_length=117, db_index=True, verbose_name="Заводской номер")
    modelsEngines = models.ForeignKey(Engines, on_delete=models.PROTECT, db_index=True, verbose_name='Модель двигателя')
    numberEngines = models.CharField(max_length=128, db_index=True, verbose_name='Номер двигателя')
    date_created = models.DateField(db_index=True, verbose_name="Дата создания", auto_now_add=True, null=True)
    transmissions = models.ForeignKey(Transmission, db_index=True, on_delete=models.PROTECT, verbose_name='Трансмиссия')
    numberTransmissions = models.CharField(max_length=128, db_index=True, verbose_name='Номер трансмиссии')
    modelsBridge = models.ForeignKey(Bridge, on_delete=models.PROTECT, db_index=True,
                                     verbose_name='Модель Ведушего моста')
    numberBridge = models.CharField(max_length=128, db_index=True, verbose_name='Номер Ведушего моста')
    modelsBridgeSteerable = models.ForeignKey(BridgeSteerable, on_delete=models.PROTECT, db_index=True,
                                              verbose_name='Модель управляемого моста')
    numberBridgeSteerable = models.CharField(max_length=128, db_index=True, verbose_name='Номер управляемого моста')
    contractSupply = models.CharField(max_length=50, blank=True, db_index=True,
                                      verbose_name='Договор поставки №, дата.')
    dateShipping = models.DateField(db_index=True, verbose_name='Дата отгрузки с завода')
    consignee = models.CharField(max_length=128, db_index=True, verbose_name='Получатель')
    addresDelivery = models.TextField(db_index=True, verbose_name='Адрес поставки')
    equipment = models.TextField(db_index=True, verbose_name='Комплектация')
    client = models.CharField(max_length=128, db_index=True, blank=True, verbose_name="Клиент")
    serviCompanies = models.ForeignKey(ServisCompanies, db_index=True, blank=False, on_delete=models.PROTECT,
                                       verbose_name='Сервисная компания')

    def __str__(self):
        return f'{self.name} Зав № {self.numberFactory}'

    class Meta:
        # constraints = [
        # models.UniqueConstraint(fields=['numberFactory'], name='unique_number_factory')]
        verbose_name = 'Погрузчик'
        verbose_name_plural = 'Погрузчик'
