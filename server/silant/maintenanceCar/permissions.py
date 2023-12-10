from rest_framework import permissions

from authentication.models import ProfileUser


class IsAtchTOService(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        # allow all GET requests

        if request.method == 'GET':
            return True
        try:
            Profiles = ProfileUser.objects.get(user_id=request.user.id)
        except:
            return False
        if request.method == 'POST' and (Profiles.сategory == "Manager" or Profiles.сategory == "Service"):
            return True
        if request.method == 'PUT' and (Profiles.сategory == "Manager" or Profiles.сategory == "Service"):
            return True

        if request.method == 'PATCH' and (Profiles.сategory == "Manager" or Profiles.сategory == "Service"):
            return True
        if request.method == 'DELETE' and (Profiles.сategory == "Manager" or Profiles.сategory == "Service"):
            return True

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.user == request.user