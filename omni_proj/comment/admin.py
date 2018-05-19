from django.contrib import admin

# Register your models here.

from comment.models import Comment

class CommentModelAdmin(admin.ModelAdmin):
    list_display = ["id","__unicode__", "timestamp", 'content', 'author']
    list_display_links = ["id"]
    # list_filter = ["timestamp"]
    # search_fields = ["title"]
    class Meta:
        model = Comment


admin.site.register(Comment, CommentModelAdmin)
