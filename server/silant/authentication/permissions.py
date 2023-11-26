from rest_framework import permissions
class IsPostOrIsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        # allow all POST requests
        if request.method == 'GET':
            return True
        if request.method == 'POST':
            return True
        if request.method == 'PATCH':
            return True
        if request.method == 'DELETE':
            return True

        return request.user and request.user.is_authenticated