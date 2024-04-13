from django.contrib import admin
from .models import ComplainRoom, ComplainType, Message

# Register your models here.


admin.site.register(ComplainRoom)
admin.site.register(ComplainType)
admin.site.register(Message)
