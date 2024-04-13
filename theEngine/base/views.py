from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .models import ComplaintRoom, ComplaintType, Message
from .forms import ComplaintRoomForm, UserForm
from django.http import HttpResponse

# Create your views here.


def complaintForm(request):
    return render(request, "main.html")


def loginPage(request):
    page = "login"
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        userType = request.POST.get("userType")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return HttpResponse("Login Sucess")
        else:
            messages.error(request, "Username or Password does not exist!")

    context = {"page": page}
    return render(request, "base/login_page.html", context)
