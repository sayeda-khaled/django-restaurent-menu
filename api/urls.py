from django.urls import path, include

urlpatterns= [
    path('menu/',include('menu.urls')),
    path('orders/', include('orders.urls')),
]
