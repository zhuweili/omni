from django.conf.urls import include,url
from django.contrib import admin

from .views import (
    item_list,
    item_detail,
    )


urlpatterns = [
    url(r'^$', item_list),
    # url(r'^create/$', post_create),
    url(r'^(?P<id>[0-9,a-z,-]+)/$', item_detail, name='detail'),
    # url(r'^list/$', post_list),
    # url(r'^update/$', post_update),
    # url(r'^delete/$', post_delete),
]