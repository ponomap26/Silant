from rest_framework import permissions

from authentication.models import ProfileUser



class IsClientOrManager(permissions.BasePermission):
    def has_permission(self, request, view):
        # Проверяем, аутентифицирован ли пользователь
        if not request.user.is_authenticated:
            return False

        # Проверяем, имеет ли пользователь категорию "Client" или "Manager"
        return ProfileUser.objects.filter(user=request.user, categories__name__in=['Client', 'Manager']).exists()

    def has_object_permission(self, request, view, obj):
        # Для GET-запросов разрешено только чтение (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True

        # Проверяем, имеет ли пользователь категорию "Service"
        return ProfileUser.objects.filter(user=request.user, categories__name='Service').exists()

    def allowed_fields(self, view):
        allowed_fields = ['name', 'numberFactory', 'modelsEngines', 'numberEngines', 'date_created',
                          'transmissions', 'numberTransmissions', 'modelsBridge', 'numberBridge',
                          'modelsBridgeSteerable']
        return all(field in view.queryset.model._meta.get_fields() for field in allowed_fields)






# class UserAutorisation(permissions.IsAuthenticated):
#     def has_permission(self, request, view):
#         # allow all POST requests
#
#         if request.method == 'GET':
#             return True
#         try:
#             UserAutch = ProfileUser.objects.get(user_id=request.user.id)
#         except:
#             return False
#         if request.method == 'POST' and UserAutch.сategory == "Менеджер":
#             return True
#         if request.method == 'PATCH' and UserAutch.сategory == "Менеджер":
#             return True
#         if request.method == 'DELETE' and UserAutch.сategory == "Менеджер":
#             return True
#
#         return False
