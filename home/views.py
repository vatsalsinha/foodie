from django.shortcuts import render
from django.template import RequestContext
# Create your views here.
def home_view(request, *args, **kwargs):
	return render(request, "index1.html", {}) # string of html code