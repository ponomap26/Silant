
from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=128)


    def __str__(self):
        return f'{self.name}'


class ProfileUser(models.Model):

    user = models.OneToOneField(Users, on_delete=models.CASCADE, verbose_name=("Пользователь"))
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
    def __str__(self):
        return f'{self.user}'