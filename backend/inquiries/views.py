from django.db.models import Count
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Inquiry
from .serializers import InquirySerializer


class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def get_permissions(self):
        if self.action in ["create", "stats"]:
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_queryset(self):
        queryset = super().get_queryset()
        country = self.request.query_params.get("country")
        job_type = self.request.query_params.get("job_type")
        reviewed = self.request.query_params.get("reviewed")
        if country:
            queryset = queryset.filter(country__iexact=country)
        if job_type:
            queryset = queryset.filter(job_type=job_type)
        if reviewed is not None:
            if reviewed.lower() in ["true", "1", "yes"]:
                queryset = queryset.filter(reviewed=True)
            elif reviewed.lower() in ["false", "0", "no"]:
                queryset = queryset.filter(reviewed=False)
        return queryset

    @action(detail=False, methods=["get"])
    def stats(self, request):
        total = self.get_queryset().count()
        by_country = (
            self.get_queryset()
            .values("country")
            .order_by("country")
            .annotate(count=Count("id"))
        )
        by_job = (
            self.get_queryset()
            .values("job_type")
            .order_by("job_type")
            .annotate(count=Count("id"))
        )
        return Response(
            {"total": total, "by_country": list(by_country), "by_job": list(by_job)},
            status=status.HTTP_200_OK,
        )

