from django.urls import path
from projects.views import *



urlpatterns=[
  path("",projects),
]+[path("no="+str(e)+"/",viewProject) for e in range(1,8,1)]