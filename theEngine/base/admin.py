from django.contrib import admin
from .models import ComplaintRoom, ComplaintType, Message, User

# Register your models here.

admin.site.register(User)
admin.site.register(ComplaintRoom)
admin.site.register(ComplaintType)
admin.site.register(Message)
