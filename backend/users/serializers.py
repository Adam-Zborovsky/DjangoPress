from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    # Expose is_staff as is_admin for clarity in API responses.
    is_admin = serializers.ReadOnlyField(source='is_staff')

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_admin']
        read_only_fields = ['id', 'is_admin']
