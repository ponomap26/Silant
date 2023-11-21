from django.contrib import admin
from .models import Users, ProfileUser


# class UserAdmin(admin.ModelAdmin):

    # list_display = ('user')
    # list_filter = ('user','сategory')
    # search_fields = ('user','сategory')

admin.site.register(Users)
admin.site.register(ProfileUser)
