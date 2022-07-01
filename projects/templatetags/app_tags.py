from django import template

register=template.Library()

@register.simple_tag(name="add")
def add(x,y):
    return x+y