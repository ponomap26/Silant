from rest_framework import permissions

from authentication.models import ProfileUser


class IsComplaintsService(permissions.BasePermission):
    def has_permission(self, request, view):
        # Проверяем, аутентифицирован ли пользователь
        if not request.user.is_authenticated:
            return False

        # Проверяем, имеет ли пользователь категорию "Client" или "Manager" или "Service"
        user = request.user
        if ProfileUser.objects.filter(user=user, categories__name__in=['Client']).exists():
            return True
        if ProfileUser.objects.filter(user=user, categories__name__in=['Manager']).exists() and request.method in permissions.SAFE_METHODS:
            return True
        if user.groups.filter(name='Service').exists():
            return True
        return False

    def has_object_permission(self, request, view, obj):
        # Для GET-запросов разрешено только чтение (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True

        # Проверяем, имеет ли пользователь категорию "Service" или "Manager"
        user = request.user
        if user.groups.filter(name='Service').exists() or ProfileUser.objects.filter(user=user, categories__name__in=['Manager']).exists():
            return True

        return False