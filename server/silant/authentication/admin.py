from django.contrib import admin


from .models import ProfileUser


class UserAdmin(admin.ModelAdmin):
    list_display = ('user', 'сategory')
    list_filter = ('user', 'сategory')
    search_fields = ('user', 'сategory')


admin.site.register(ProfileUser, UserAdmin)

