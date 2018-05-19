# -*- coding: utf-8 -*-
from django.contrib import admin

# Register your models here.

from item.models import Item

class ItemModelAdmin(admin.ModelAdmin):
    list_display = ["name","status", "id", 'key_image']
    list_display_links = ["name"]
    # list_filter = ["timestamp"]
    # search_fields = ["title"]
    class Meta:
        model = Item


admin.site.register(Item, ItemModelAdmin)