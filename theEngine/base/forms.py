from django.forms import ModelForm
from .models import ComplaintRoom, User
from django.contrib.auth.forms import UserCreationForm


class MyUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["name", "username", "email", "password1", "password2"]


class ComplaintRoomForm(ModelForm):
    class Meta:
        model = ComplaintRoom
        fields = "__all__"
        exclude = ["host", "participants"]


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ["avatar", "name", "email", "username", "bio"]
