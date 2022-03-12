from django.shortcuts import render

def projects(request):
    res=render(request,'projects/projects.html')
    return res