from django.db import models
from django.contrib.auth.models import User


class ComplainType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class ComplainRoom(models.Model):
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    complainType = models.ForeignKey(ComplainType, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    # null = True means can be null in database
    participants = models.ManyToManyField(
        User, related_name="participants", blank="True"
    )
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-updated", "-created"]

    def __str__(self):
        return self.name


class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(ComplainRoom, on_delete=models.CASCADE)
    # on_delete=models.SET_NULL means messages will still be saved after parent is deleted!
    # on_delete=models.CASCADE means messages will still be deleted!

    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-updated", "-created"]

    def __str__(self):
        return self.body[0:50]
