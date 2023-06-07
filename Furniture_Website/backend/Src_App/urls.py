from django.urls import path 
from . import views



urlpatterns = [
    path("", views.Home, name='home'),
    path('product/', views.Products, name='home'),
    path('product/<id>', views.Products, name='home'),
    path("brands/<id>", views.all_brands,),
    path("search/",views.Search, name='search_url'),
]



