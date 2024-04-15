from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    CHOICES = (
        ("Student", "Student"),
        ("Faculty", "Faculty"),
        ("Admin", "Admin"),
        ("Worker", "Worker"),
    )
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(unique=True, null=True, blank=True)
    usertype = models.CharField(choices=CHOICES, max_length=200, default="Student")

    avatar = models.ImageField(null=True, default="avatar.svg")

    REQUIRED_FIELDS = []


class ComplaintType(models.Model):
    CHOICES = (
        ("Electrical", "Electrical"),
        ("Plumbing", "Plumbing"),
        ("Civil", "Civil"),
        ("Other", "Other"),
    )
    complaintType = models.CharField(max_length=200, choices=CHOICES, default="Other")

    def __str__(self):
        return self.complaintType


class ComplaintRoom(models.Model):
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    cid = models.TextField(null=True, blank=True)
    complaintType = models.ForeignKey(
        ComplaintType, on_delete=models.SET_NULL, null=True
    )
    subject = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    participants = models.ManyToManyField(
        User, related_name="participants", blank="True"
    )
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-updated", "-created"]

    def __str__(self):
        return self.subject


class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(ComplaintRoom, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-updated", "-created"]

    def __str__(self):
        return self.body[0:50]
