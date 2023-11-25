from django.contrib import admin


from .models import ProfileUser, ServisCompanies


# class UserAdmin(admin.ModelAdmin):
#     list_display = ('user', 'сategory')
#     list_filter = ('user', 'сategory')
#     search_fields = ('user', 'сategory', 'company')


admin.site.register(ProfileUser)
admin.site.register(ServisCompanies)

