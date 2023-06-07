from django.db import models
import datetime
from django.contrib.auth import get_user_model




User = get_user_model()



class Brand(models.Model):

    name = models.CharField(max_length=50)

    def __str__(self):

        return self.name



class Category(models.Model):

    name = models.CharField(max_length=50)

    def __str__(self):

        return self.name





class Product(models.Model):

    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to='products', default='', null=False)
    price = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    about = models.TextField()
    added_on = models.DateTimeField(default=datetime.datetime.now())

    def __str__(self):

        return self.name


class Comment(models.Model):

    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    

    def __str__(self):

        return self.user.username

