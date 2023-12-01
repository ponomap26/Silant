from django.contrib import admin


from .models import ProfileUser, Companies, ServisCompanies


class UserAdmin(admin.ModelAdmin):
    list_display = ('user', 'сategory', 'company')
    list_filter = ('user', 'сategory', 'company')
    search_fields = ('user', 'сategory', 'company')


admin.site.register(ProfileUser)
admin.site.register(Companies)
admin.site.register(ServisCompanies)



