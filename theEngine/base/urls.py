from django.urls import path
from . import views

urlpatterns = [
    path("complaint-form", views.complaintForm, name="complaint-form"),
    path("login-page", views.loginPage, name="login-page"),
]
