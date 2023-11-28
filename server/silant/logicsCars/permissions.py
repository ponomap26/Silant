from rest_framework import permissions

from authentication.models import ProfileUser


class IsClientOrManager(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        # allow all POST requests

        if request.method == 'GET':
            return True
        try:
            Profile = ProfileUser.objects.get(user_id=request.user.id)
        except:
            return False
        if request.method == 'POST' and Profile.сategory == "Manager" or "Client":
            return True
        if request.method == 'PATCH' and Profile.сategory == "Manager" or "Client":
            return True
        if request.method == 'DELETE' and Profile.сategory == "Manager" or "Client":
            return True
        # Otherwise, only allow authenticated requests
        # Post Django 1.10, 'is_authenticated' is a read-only attribute
        return False


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.user == request.user
