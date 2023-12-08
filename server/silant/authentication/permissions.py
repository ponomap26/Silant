from rest_framework import permissions
class IsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):

        if request.method == 'GET':
            return True
        if request.method == 'POST':
            return True
        if request.method == 'PATCH':
            return True
        if request.method == 'DELETE':
            return True

        return request.user and request.user.is_authenticated