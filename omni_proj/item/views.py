from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse


from .models import Item
from comment.models import Comment

# Create your views here.



def item_detail(request, id=None):
    instance = get_object_or_404(Item, id=id)
    comment_list = Comment.objects.filter(name=id).order_by("-timestamp")
    context = {
        "title": "detail",
        "instance": instance,
        'comment_list':comment_list
    }
    return render(request, "item_detail.html", context)

def item_list(request):
    queryset = Item.objects.all()
    context = {
        "title": "omni item list",
        "object_list": queryset
    }
    return render(request, "item_list.html", context)

