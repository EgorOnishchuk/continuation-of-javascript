from django.contrib import admin
from django.urls import path
from api.views import project_file_system

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', project_file_system)
]
