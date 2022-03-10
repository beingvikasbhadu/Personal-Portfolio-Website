from django.http import HttpResponse
from django.shortcuts import render

def contact(request):
    res=render(request,'contact/contact.html')
    return res


