# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import json

from django.db import models

# Create your models here.

class Item(models.Model):
    id = models.CharField(max_length = 240, primary_key=True)
    name = models.CharField(max_length = 240)
    key_image = models.CharField(max_length = 500)
    status = models.TextField(max_length = 240)


    def __unicode__(self):
        return self.name



    def get_absolute_url(self):
        return "/item_list/%s/" %(self.id)

