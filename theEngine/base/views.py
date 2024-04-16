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


@login_required(login_url="login")
def complaintThread(request, pk):
    room = ComplaintRoom.objects.get(cid=pk)
    room_messages = room.message_set.all()
    participants = room.participants.all()

    if request.method == "POST":
        message = Message.objects.create(
            user=request.user, room=room, body=request.POST.get("body")
        )
        room.participants.add(request.user)
        return redirect("thread-page", pk)

    context = {
        "room": room,
        "room_messages": room_messages,
        "participants": participants,
    }
    return render(request, "base/thread_page.html", context)


@login_required(login_url="login")
def complaintForm(request):
    form = ComplaintRoomForm()

    if request.method == "POST":
        c = ComplaintType.objects.get(complaintType=request.POST.get("complaintType"))

        ComplaintRoom.objects.create(
            host=request.user,
            cid=request.POST.get("cid"),
            subject=request.POST.get("subject"),
            area=request.POST.get("area"),
            complaintType=c,
            description=request.POST.get("description"),
            photo=request.FILES,
        )
        return redirect("home-page")

    context = {"form": form}
    return render(request, "base/complaint_form.html", context)


@login_required(login_url="login")
def updateRoom(request, pk):
    room = ComplaintRoom.objects.get(cid=pk)
    form = ComplaintRoomForm(instance=room)

    if request.user != room.host:
        return redirect("home-page")

    if request.method == "POST":
        form = ComplaintRoomForm(request.POST, request.FILES, instance=room)
        c = ComplaintType.objects.get(complaintType=request.POST.get("complaintType"))
        room.host = request.user
        room.cid = request.POST.get("cid")
        room.subject = request.POST.get("subject")
        room.area = (request.POST.get("area"),)
        room.complaintType = c
        room.description = request.POST.get("description")
        room.photo = request.FILES
        room.save()
        return redirect("home-page")

    context = {"form": form, "room": room}
    return render(request, "base/complaint_form.html", context)


@login_required(login_url="login")
def deletePage(request, pk):
    room = ComplaintRoom.objects.get(cid=pk)

    if request.user != room.host:
        return redirect("home-page")

    if request.method == "POST":
        room.delete()
        return redirect("home-page")

    return render(request, "base/delete_page.html", {"obj": room})


@login_required(login_url="login")
def profilePage(request, pk):
    profile_user = User.objects.get(username=pk)
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
        "profile_user": profile_user,
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


@login_required(login_url="login")
def deleteProfile(request, pk):
    user = User.objects.get(username=pk)

    if request.user != user and request.user.usertype != "Admin":
        return redirect("home-page")

    if request.method == "POST":
        user.delete()
        return redirect("home-page")

    return render(request, "base/delete_page.html", {"obj": user})


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


@login_required(login_url="login")
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
