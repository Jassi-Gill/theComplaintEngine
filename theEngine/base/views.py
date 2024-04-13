from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def complaintForm(request):
    return render(request, "main.html")


def loginPage(request):
    return render(request, "base/login_page.html")
