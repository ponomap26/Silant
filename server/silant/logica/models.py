from django.db import models

# Create your models here.
class ModelSilant(models.Model):
    name = models.TextField(unique=True, verbose_name='Название')
    description = models.TextField(blank=True, verbose_name='Описание')
    numberFactory = models.IntegerField(blank=True, verbose_name='Заводской номер')

    def __str__(self):
        return f'{self.name}'

    # class Meta:
    #     verbose_name = 'Наименование'
