from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.db.models import Q
from comment.models import Comment
from .serializers import CommentSerializer


class CommentListAPIView(ListAPIView):
    queryset = Comment.objects.all().order_by("-timestamp")
    serializer_class = CommentSerializer



class CommentRetrieveAPIView(RetrieveAPIView):
    queryset = Comment.objects.all().order_by("-timestamp")
    serializer_class = CommentSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'name'


class CommentListAPIView(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self, *args, **kwargs):
        #queryset_list = super(PostListAPIView, self).get_queryset(*args, **kwargs)
        queryset_list = Comment.objects.all() #filter(user=self.request.user)
        query = self.request.GET.get("q")
        print query
        if query:
            queryset_list = queryset_list.filter(Q(name__icontains=query)).distinct().order_by("-timestamp")
        return queryset_list