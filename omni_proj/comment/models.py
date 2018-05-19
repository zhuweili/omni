from __future__ import unicode_literals
import json

from django.db import models

# Create your models here.

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length = 240)
    author = models.CharField(max_length = 120)
    content = models.TextField()
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __unicode__(self):
        return self.name



    def toStr(self):
        data = {}
        data['name'] = self.name
        data['author'] = self.author
        data['content'] = self.content
        data['timestamp'] = self.timestamp
        return data['name'] + '$' + data['author'] + '$' + data['content'] + '$' + str(data['timestamp'])


    def get_absolute_url(self):
        return "/posts/%s/" %(self.id)
