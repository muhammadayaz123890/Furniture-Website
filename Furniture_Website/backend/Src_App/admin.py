from django.contrib import admin
from .models import Product, Category , Brand





class Product_Admin(admin.ModelAdmin):

    list_display = ['name', 'price', 'added_on']
    



class Category_Admin(admin.ModelAdmin):

    list_display = ['name']




class Brand_Admin(admin.ModelAdmin):

    list_display = ['name']




admin.site.register(Product, Product_Admin)
admin.site.register(Category, Category_Admin)
admin.site.register(Brand, Brand_Admin)
