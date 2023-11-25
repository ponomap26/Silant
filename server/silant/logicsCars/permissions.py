from rest_framework import permissions

from authentication.models import ProfileUser


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.user == request.user


class UserAutorisation(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        # allow all POST requests

        if request.method == 'GET':
            return True
        try:
            UserAutch = ProfileUser.objects.get(user_id=request.user.id)
        except:
            return False
        if request.method == 'POST' and UserAutch.сategory == "Менеджер":
            return True
        # if request.method == 'PATCH' and UserAutch.сategory == "Менеджер":
        #     return True
        if request.method == 'DELETE' and UserAutch.сategory == "Менеджер":
            return True

        return False
