from django.shortcuts import render
from django.http import HttpResponse
from .models import Brand
from django_nextjs.render import render_nextjs_page_sync
from django.http import JsonResponse
from .models import Product




def Products(request, id=None):
    products = None

    id = id


    if request.method == 'GET':
        if id is not None:
            product = Product.objects.get(id=id)
            product_brand = product.brand.id
            product_brand = Brand.objects.filter(id=int(product_brand)).values()        
            product_brand = list(product_brand)

            products = Product.objects.filter(id=id).values()
            for pro in products:
                for bran in product_brand:
                    pro['brand_name'] = bran['name']
                    
            products = list(products)
        else:
            products = Product.objects.values() 
            products = list(products)
            
    return JsonResponse(products, safe=False)
    




def Home(request):

    product = Product.objects.get(id=1)

    return render(request, 'index.html', {'product' : product})




def all_brands(request,id):
    brands = None

    try:
        brands = Brand.objects.filter(id=id).values()
        brands = list(brands)
    except:
        pass
    return JsonResponse(brands, safe=False)






def Search(request):
    context = {}
    try:
        if request.method == 'GET':
            que = request.GET.get('que')
            if que:
                products = Product.objects.filter(name__icontains=que).values()
                if products:    
                    products = list(products)
                    context['products'] = products
                    print('yes')
                else:
                    print("no")
    except Exception as e:
        print(e)

    return JsonResponse(context, safe=False)



