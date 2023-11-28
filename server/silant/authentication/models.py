from django.contrib.auth.models import User
from django.db import models




class ServisCompanies(models.Model):
    name = models.CharField(max_length=128)

    class Meta:
        verbose_name = "Сервисная компания"
        verbose_name_plural = 'Сервисная компания'

    def __str__(self):
        return f'{self.name}'


class ProfileUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=("Пользователь"))
    Consignee = "Грузополучатель"
    Client = "Клиент"
    Service = "Сервисная организация"
    Manager = "Менеджер"
    CATEGORY_CHOICES = (
        (Client, "Клиент"),
        (Service, "Сервисная организация"),
        (Manager, "Менеджер"),
        (Consignee, "Грузополучатель")
    )
    category = models.CharField(max_length=21, choices=CATEGORY_CHOICES, default=Client, verbose_name=("Категория"))

    class Meta:
        verbose_name = 'Профиль пользователя'
        verbose_name_plural = 'Профиль пользователя'

    def __str__(self):
        return f'{self.user} ( {self.category})'
