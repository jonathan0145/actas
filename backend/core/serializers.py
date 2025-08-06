from rest_framework import serializers
from .models import Usuario, Acta, Compromiso, Gestion
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'correo', 'rol', 'username']

class GestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestion
        fields = '__all__'

class CompromisoSerializer(serializers.ModelSerializer):
    gestiones = GestionSerializer(many=True, read_only=True)
    class Meta:
        model = Compromiso
        fields = '__all__'

class ActaSerializer(serializers.ModelSerializer):
    compromisos = CompromisoSerializer(many=True, read_only=True)
    class Meta:
        model = Acta
        fields = '__all__'

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'correo'

    def validate(self, attrs):
        attrs['username'] = attrs.get('correo')
        return super().validate(attrs)