from django.db import models

# Create your models here.
class Menu(models.Model): # we are inheriting from the model we are inheriting the model from django..
    img = models.CharField(max_length=255, null=True)
    name = models.CharField(max_length=255)
    desc= models.CharField(max_length=255)
    price = models.CharField(max_length=255)


    def __str__(self):   #This lists the title in the page now.. You don't have to make migration, but you would if you are changing your model, cos this is how the database is updated
        return self.name
