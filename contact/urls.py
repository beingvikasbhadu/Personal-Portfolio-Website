from django.urls import path
from . import views

urlpatterns=[
    path('',views.contact),
    path('save-request/',views.saveRequest),
]