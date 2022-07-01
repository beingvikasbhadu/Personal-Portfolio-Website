from django.db import models

class person(models.Model):
    email=models.CharField(max_length=50)
    phone=models.CharField(max_length=10)
    enquiry=models.CharField(max_length=1000)
    collabration=models.CharField(max_length=5,default='false')
    
    def __str__(self):
        return  self.email


