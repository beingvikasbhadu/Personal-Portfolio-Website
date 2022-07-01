from django.http import HttpResponse
from django.shortcuts import render

def projects(request):
    res=render(request,'projects/projects.html')
    return res

def viewProject(request):
   res=render(request,'projects/view-project.html/')
   return res