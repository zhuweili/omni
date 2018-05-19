import os
import channels.asgi

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "omni.settings")    #这里填的是你的配置文件settings.py的位置
channel_layer = channels.asgi.get_channel_layer()