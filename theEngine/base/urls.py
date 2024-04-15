from django.urls import path
from . import views

urlpatterns = [
    path("", views.loginPage, name="login-page"),
    path("logout-user", views.logoutUser, name="logout-user"),
    path("signup-page", views.signupPage, name="signup-page"),
    path("home-page/", views.homePage, name="home-page"),
    path("profile-page/<str:pk>/", views.profilePage, name="profile-page"),
    path("complaint-form/", views.complaintForm, name="complaint-form"),
    path("data-page/", views.dataPage, name="data-page"),
]
