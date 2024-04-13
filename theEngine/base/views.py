from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def complaintForm(request):
    return render(request, "main.html")
