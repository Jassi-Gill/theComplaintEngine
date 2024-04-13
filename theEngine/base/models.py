from django.db import models
from django.contrib.auth.models import User


class ComplainType(models.Model):
    complainType = models.CharField(max_length=200)

    def __str__(self):
        return self.complainType


class ComplainRoom(models.Model):
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    complainType = models.ForeignKey(ComplainType, on_delete=models.SET_NULL, null=True)
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
    room = models.ForeignKey(ComplainRoom, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-updated", "-created"]

    def __str__(self):
        return self.body[0:50]
