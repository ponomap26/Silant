
from django.contrib import admin
from complaints.models import Complaint, NodeFailure, PartSpare

admin.site.register(Complaint)
admin.site.register(NodeFailure)
admin.site.register(PartSpare)