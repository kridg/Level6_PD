from django.contrib import admin
from django.http import HttpResponse
import csv

from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "country",
        "job_title",
        "job_type",
        "reviewed",
        "created_at",
    )
    search_fields = ("name", "email", "company_name", "country", "job_title")
    list_filter = ("country", "job_type", "reviewed", "created_at")
    actions = ["export_selected"]

    def export_selected(self, request, queryset):
        response = HttpResponse(content_type="text/csv")
        response["Content-Disposition"] = 'attachment; filename="inquiries.csv"'
        writer = csv.writer(response)
        writer.writerow(
            [
                "name",
                "email",
                "phone",
                "company_name",
                "country",
                "job_title",
                "job_type",
                "job_details",
                "created_at",
            ]
        )
        for inquiry in queryset:
            writer.writerow(
                [
                    inquiry.name,
                    inquiry.email,
                    inquiry.phone,
                    inquiry.company_name,
                    inquiry.country,
                    inquiry.job_title,
                    inquiry.job_type,
                    inquiry.job_details,
                    inquiry.created_at,
                ]
            )
        return response

    export_selected.short_description = "Export selected inquiries"


