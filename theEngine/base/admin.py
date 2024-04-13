from django.contrib import admin
from .models import ComplaintRoom, ComplaintType, Message

# Register your models here.


admin.site.register(ComplaintRoom)
admin.site.register(ComplaintType)
admin.site.register(Message)
