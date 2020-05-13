from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone

from .models import Recipee
# Create your views here.

def allrecipees(request):
	recipee = Recipee.objects
	return render(request, 'recipee/recipee.html', {'recipee': recipee})

def detail(request, recipee_id):
	detailrecipee = get_object_or_404(Recipee, pk = recipee_id)
	return render(request, 'recipee/recipeedetail.html', {'recipee': detailrecipee})
@login_required(login_url = "/accounts/login")
def create(request):
	if request.method == 'POST':
		if request.POST['recipetitle'] and request.POST['recipebody'] and request.FILES['recipeimage']:
			recipe = Recipee()
			recipe.recipee_title = request.POST['recipetitle']
			recipe.recipee_body = request.POST['recipebody']
			recipe.recipee_image = request.FILES['recipeimage']
			recipe.recipee_pubdate = timezone.datetime.now()
			recipe.recipee_hunter = request.user
			recipe.save()
			return redirect('allrecipees')
		else:
			return render(request, 'recipee/createrecipe.html', {'error': 'All fields are mandatory'})
	else:
		return render(request, 'recipee/createrecipe.html')

	
