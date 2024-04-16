from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from .models import ComplaintRoom, ComplaintType, Message, User
from .forms import ComplaintRoomForm, UserForm, MyUserCreationForm


@login_required(login_url="login-page")
def homePage(request):
    q = request.GET.get("q") if request.GET.get("q") != None else ""
    rooms = ComplaintRoom.objects.filter(
        Q(complaintType__complaintType__icontains=q)
        | Q(subject__icontains=q)
        | Q(description__icontains=q)
    )

    topic = ComplaintType.objects.all()
    stu_count = User.objects.filter(Q(usertype__icontains="Student")).count()
    fac_count = User.objects.filter(Q(usertype__icontains="Faculty")).count()
    wor_count = User.objects.filter(Q(usertype__icontains="Worker")).count()

    room_messages = Message.objects.filter(
        Q(room__complaintType__complaintType__icontains=q)
    )

    context = {
        "rooms": rooms,
        "topics": topic,
        "stu_count": stu_count,
        "fac_count": fac_count,
        "wor_count": wor_count,
        "room_messages": room_messages,
    }
    return render(request, "base/home_page.html", context)


def complaintThread(request, pk):

    context = {}
    return render(request, "base/thread_page.html", context)


def profilePage(request, pk):

    rooms = ComplaintRoom.objects.filter(Q(host__username__icontains=pk))

    topic = ComplaintType.objects.all()
    stu_count = User.objects.filter(Q(usertype__icontains="Student")).count()
    fac_count = User.objects.filter(Q(usertype__icontains="Faculty")).count()
    wor_count = User.objects.filter(Q(usertype__icontains="Worker")).count()

    room_messages = Message.objects.filter(Q(user__username__icontains=pk))
    context = {
        "rooms": rooms,
        "topics": topic,
        "stu_count": stu_count,
        "fac_count": fac_count,
        "wor_count": wor_count,
        "room_messages": room_messages,
    }
    return render(request, "base/profile_page.html", context)


@login_required(login_url="login-page")
def editProfile(request, pk):
    user1 = User.objects.get(username=pk)
    print(request.user.username, " ", pk)
    if request.user.usertype != "Admin" and request.user.username != pk:
        return redirect("home-page")

    form = UserForm(instance=user1)

    if request.method == "POST":
        form = UserForm(request.POST, request.FILES, instance=user1)
        if form.is_valid():
            form.save()
            return redirect("profile-page", pk)
        else:
            messages.error(request, "Check Details!")

    return render(request, "base/edit_profile.html", {"form": form, "user": user1})


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
            messages.error(request, "User details doesn't match! Recheck ")

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
    stu = User.objects.filter(Q(usertype__icontains="Student"))
    fac = User.objects.filter(Q(usertype__icontains="Faculty"))
    wor = User.objects.filter(Q(usertype__icontains="Worker"))
    admin = User.objects.filter(Q(usertype__icontains="Admin"))

    stu_count = User.objects.filter(Q(usertype__icontains="Student")).count()
    fac_count = User.objects.filter(Q(usertype__icontains="Faculty")).count()
    wor_count = User.objects.filter(Q(usertype__icontains="Worker")).count()
    admin_count = User.objects.filter(Q(usertype__icontains="Admin")).count()

    context = {
        "stu": stu,
        "fac": fac,
        "wor": wor,
        "admin": admin,
        "stu_count": stu_count,
        "fac_count": fac_count,
        "admin_count": admin_count,
        "wor_count": wor_count,
    }
    return render(request, "base/data_page.html", context)
