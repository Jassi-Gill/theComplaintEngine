from django.forms import ModelForm
from django.contrib.auth.models import User
from .models import ComplaintRoom


class ComplaintRoomForm(ModelForm):
    class Meta:
        model = ComplaintRoom
        fields = "__all__"
        exclude = ["host", "participants"]


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ["username", "email"]
