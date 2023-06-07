import os

from django.core.wsgi import get_wsgi_application
from react_templates.wsgi import get_web_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "main.settings")

application = get_wsgi_application()
web_application = get_web_application() # Make sure this is after the application