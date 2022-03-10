from django.shortcuts import render

def home(request):
    res=render(request,'home/home.html')
    return res