from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import ActaViewSet, CompromisoViewSet, GestionViewSet, LoginView, ProtectedMediaView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'actas', ActaViewSet)
router.register(r'compromisos', CompromisoViewSet)
router.register(r'gestiones', GestionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/', LoginView.as_view(), name='login'), 
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls')), 
    path('media/<path:path>/', ProtectedMediaView.as_view(), name='protected_media'), 
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)