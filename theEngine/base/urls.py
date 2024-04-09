from django.urls import path
from . import views

urlpatterns = [
    path("", views.complaintForm, name="complaint-form"),
]
