from django.shortcuts import render, get_object_or_404, redirect
from .models import Blog
from django.contrib.auth.decorators import login_required
from django.utils import timezone
# Create your views here.

def allblogs(request):
	blogs = Blog.objects
	return render(request, 'blog/allblogs.html', {'blogs': blogs})

def detail(request, blog_id):
	detailblog = get_object_or_404(Blog, pk = blog_id)
	return render(request, 'blog/detail.html', {'blog' : detailblog})


@login_required(login_url = "/accounts/login")
def create(request):
	if request.method == 'POST':
		if request.POST['title'] and request.POST['body'] and request.FILES['image']:
			blog = Blog()
			blog.title = request.POST['title']
			blog.body = request.POST['body']
			blog.image = request.FILES['image']
			blog.pub_date = timezone.datetime.now()
			blog.hunter = request.user
			blog.save()
			return redirect('allblogs')
		else:
			return render(request, 'blog/create.html', {'error': 'All fields are mandatory'})
	else:
		return render(request, 'blog/create.html')
