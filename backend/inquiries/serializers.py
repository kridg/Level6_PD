from rest_framework import serializers

from .models import Inquiry


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = "__all__"

    def validate_job_details(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Please provide more project details.")
        return value


