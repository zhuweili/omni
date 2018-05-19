from django.conf.urls import include,url
from django.contrib import admin

from .views import (
     CommentListAPIView,
     CommentRetrieveAPIView
    )


urlpatterns = [
    url(r'^', CommentListAPIView.as_view()),
    url(r'^(?P<name>[0-9,a-z,-]+)/$',  CommentListAPIView.as_view()),
    # url(r'^create/$', post_create),
    # url(r'^list/$', post_list),
    # url(r'^update/$', post_update),
    # url(r'^delete/$', post_delete),
]