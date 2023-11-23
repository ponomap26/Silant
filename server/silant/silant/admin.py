from django.contrib import admin


from authentication.models import Users, ProfileUser


admin.site.register(Users)
admin.site.register(ProfileUser)
