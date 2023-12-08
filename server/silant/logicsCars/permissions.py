from rest_framework import permissions

from authentication.models import ProfileUser


class IsClientOrManager(permissions.IsAuthenticated):
    def has_permission(self, request, view):

        if request.method == 'GET':
            return True
        try:
            Profiles = ProfileUser.objects.get(user_id=request.user.id)
            print("Profiles")
        except:
            return False
        if request.method == 'POST' and Profiles.сategory == "Manager" or "Client":
            return True
        if request.method == 'PATCH' and Profiles.сategory == "Manager" or "Client":
            return True
        if request.method == 'DELETE' and Profiles.сategory == "Manager" or "Client":
            return True

        return False


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user


class IsManager(permissions.IsAuthenticated):
    def has_permission(self, request, view):

        if request.method == 'GET':
            return True
        try:
            Profiles = ProfileUser.objects.get(user_id=request.user.id)
            print("Profiles")
        except:
            return False
        if request.method == 'POST' and Profiles.сategory == "Manager":
            return True
        if request.method == 'PATCH' and Profiles.сategory == "Manager":
            return True
        if request.method == 'DELETE' and Profiles.сategory == "Manager":
            return True

        return False
