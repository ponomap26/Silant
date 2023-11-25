from django.contrib.auth.models import User
from django.db import models



class CompaniUser(models.Model):
    name = models.TextField(max_length=128)

    def __str__(self):
        return self.name


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
    сategory = models.CharField(max_length=21, choices=CATEGORY_CHOICES, default=Client, verbose_name=("Категория"))
    company = models.ForeignKey(CompaniUser, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.user}'
