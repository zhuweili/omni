from rest_framework.serializers import ModelSerializer
from comment.models import Comment

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'name',
            'author',
            'content',
            'timestamp'
        ]