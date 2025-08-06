from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import Acta, Compromiso, Gestion
from .serializers import ActaSerializer, CompromisoSerializer, GestionSerializer, UsuarioSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django.http import FileResponse, Http404
from django.conf import settings
import os

class ActaViewSet(viewsets.ModelViewSet):
    queryset = Acta.objects.all()
    serializer_class = ActaSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['estado', 'titulo', 'fecha']

    def get_queryset(self):
        user = self.request.user
        if user.rol == 'ADMIN':
            return Acta.objects.all()
        
        return (Acta.objects.filter(participantes=user) | Acta.objects.filter(creador=user)).distinct()

class CompromisoViewSet(viewsets.ModelViewSet):
    queryset = Compromiso.objects.all()
    serializer_class = CompromisoSerializer
    permission_classes = [permissions.IsAuthenticated]

class GestionViewSet(viewsets.ModelViewSet):
    queryset = Gestion.objects.all()
    serializer_class = GestionSerializer
    permission_classes = [permissions.IsAuthenticated]

class LoginView(APIView):
    def post(self, request):
        correo = request.data.get('correo')
        password = request.data.get('password')
        user = authenticate(request, username=correo, password=password)
        if user is not None:
            data = UsuarioSerializer(user).data
            return Response({'user': data, 'rol': user.rol}, status=status.HTTP_200_OK)
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

class ProtectedMediaView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, path):
        file_path = os.path.join(settings.MEDIA_ROOT, path)
        if os.path.exists(file_path):
            return FileResponse(open(file_path, 'rb'))
        raise Http404()
    