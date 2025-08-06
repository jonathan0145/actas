from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    ROL_CHOICES = (
        ('ADMIN', 'Administrador'),
        ('BASE', 'Usuario Base'),
    )
    rol = models.CharField(max_length=10, choices=ROL_CHOICES)
    correo = models.EmailField(unique=True)

    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = ['username']

class Acta(models.Model):
    titulo = models.CharField(max_length=255)
    estado = models.CharField(max_length=20)
    fecha = models.DateField()
    pdf = models.FileField(upload_to='actas/')
    creador = models.ForeignKey(Usuario, related_name='actas_creadas', on_delete=models.CASCADE)
    participantes = models.ManyToManyField(Usuario, related_name='actas_participa')

class Compromiso(models.Model):
    acta = models.ForeignKey(Acta, related_name='compromisos', on_delete=models.CASCADE)
    descripcion = models.TextField()
    responsable = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_limite = models.DateField()
    estado = models.CharField(max_length=20)

class Gestion(models.Model):
    compromiso = models.ForeignKey(Compromiso, related_name='gestiones', on_delete=models.CASCADE)
    fecha = models.DateField()
    descripcion = models.TextField()
    archivo = models.FileField(upload_to='gestiones/')
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
