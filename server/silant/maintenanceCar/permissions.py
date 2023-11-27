from rest_framework import permissions

class IsAtchTOService(permissions.BasePermission):
    def has_permission(self, request, view):
        # Проверяем, аутентифицирован ли пользователь
        if not request.user.is_authenticated:
            return False

        # Проверяем, имеет ли пользователь категорию "Client" или "Manager" или "Service"
        user = request.user
        if ProfileUser.objects.filter(user=user, categories__name__in=['Client', 'Manager']).exists() or user.groups.filter(name='Service').exists():
            return True
        return False

    def has_object_permission(self, request, view, obj):
        # Для GET-запросов разрешено только чтение (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True

        # Проверяем, имеет ли пользователь категорию "Service"
        user = request.user
        if user.groups.filter(name='Service').exists():
            return True

        return False