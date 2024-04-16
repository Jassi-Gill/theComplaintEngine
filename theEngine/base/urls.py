from django.urls import path
from . import views

urlpatterns = [
    path("", views.loginPage, name="login-page"),
    path("logout-user", views.logoutUser, name="logout-user"),
    path("signup-page", views.signupPage, name="signup-page"),
    path("home-page/", views.homePage, name="home-page"),
    path("delete-page/<str:pk>/", views.deletePage, name="delete-page"),
    path("update-page/<str:pk>/", views.updateRoom, name="update-page"),
    path("thread-page/<str:pk>/", views.complaintThread, name="thread-page"),
    path("profile-page/<str:pk>/", views.profilePage, name="profile-page"),
    path("edit-profile/<str:pk>/", views.editProfile, name="edit-profile"),
    path("delete-profile/<str:pk>/", views.deleteProfile, name="delete-profile"),
    path("complaint-form/", views.complaintForm, name="complaint-form"),
    path("data-page/", views.dataPage, name="data-page"),
]
