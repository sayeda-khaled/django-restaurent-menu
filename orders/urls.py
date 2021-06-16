from django.urls import path

from .views import OrderListAPIView


urlpatterns = [
    path('', OrderListAPIView.as_view(), name ="order_list") #name is optional, but better use it..
]
