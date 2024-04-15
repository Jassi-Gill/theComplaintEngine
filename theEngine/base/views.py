from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .models import ComplaintRoom, ComplaintType, Message, User
from .forms import ComplaintRoomForm, UserForm, MyUserCreationForm
from django.http import HttpResponse


# @login_required(login_url="login-page")
def homePage(request):
    return render(request, "base/home_page.html")


def profilePage(request, pk):
    return render(request, "base/profile_page.html")


def editProfile(request, pk):
    return render(request, "base/edit_profile.html")


def complaintForm(request):
    return render(request, "base/complaint_form.html")


def loginPage(request):
    page = "login"
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        usertype = request.POST.get("usertype")

        user = authenticate(request, username=username, password=password)

        if user is not None and user.usertype == usertype:
            login(request, user)
            return redirect("home-page")
        else:
            messages.error(request, "Username or Password does not exist!")

    context = {"page": page}
    return render(request, "base/login_page.html", context)


def logoutUser(request):
    logout(request)
    return redirect("home-page")


def signupPage(request):
    if request.method == "POST":
        form = MyUserCreationForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("home-page")
        else:
            messages.error(request, "An Error occured during registration!")

    context = {}
    return render(request, "base/signup_page.html", context)


def dataPage(request):
    return render(request, "base/data_page.html")
