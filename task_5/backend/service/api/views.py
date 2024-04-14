from django.http import JsonResponse
from django.views.decorators.http import require_GET
from os import listdir
from os.path import isfile, getsize


@require_GET
def project_file_system(request):
    """
    Анализирует файловую систему проекта.
    :return: JSON объект в формате "имя файла: размер файла, байт"
    """
    return JsonResponse({object_: getsize(object_) for object_ in listdir() if isfile(object_)})
