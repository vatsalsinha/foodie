from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Recipee(models.Model):
	recipee_title = models.CharField(max_length = 255)
	recipee_image = models.ImageField(upload_to = 'images/')
	recipee_body = models.TextField()
	recipee_pubdate = models.DateTimeField()
	recipee_hunter = models.ForeignKey(User, on_delete = models.CASCADE, default = '')
	 
