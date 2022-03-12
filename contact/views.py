from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from contact.models import person


def contact(request):
    res=render(request,'contact/contact.html')
    return res


def saveRequest(request):
    p=person()
    p.email=request.POST['email']
    p.phone=request.POST['phone']
    p.enquiry=request.POST['enquiry']
    collabration=request.POST.get('collabration')
    if collabration:
        p.collabration='false'
    p.save()
    return HttpResponseRedirect('http://localhost:8000/')