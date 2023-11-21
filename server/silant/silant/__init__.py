from django.contrib.messages.storage.base import Message


class CheckMessage(Message):
    def __init__(self, title, *args, **kwargs):
        super().__init__(title, *args, **kwargs)