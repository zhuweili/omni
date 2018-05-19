from django.http import HttpResponse
from channels.handler import AsgiHandler
from channels import Group
from comment.models import Comment
import json
import getpass



def ws_connect(message):
    message.reply_channel.send({'accept':True})
    Group("chat").add(message.reply_channel)

def ws_message(message):
    print message.content['text']
    username = getpass.getuser()
    c_json = json.loads(message.content['text'])

    c = Comment(name=c_json['name'], author=username, content = c_json['content'])
    c.save()
    # for i in range(3):
    #     message.reply_channel.send({
    #         "text": str(i),
    #     })
    Group("chat").send({
        "text": c.toStr(),
    })

    # message.reply_channel.send({
    #     "text": c.toStr(),
    # })

def ws_disconnect(message):
    Group("chat").discard(message.reply_channel)
    # message.reply_channel.send({"close":'1'})