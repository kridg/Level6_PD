from django.contrib import admin

from .models import Event, Feedback, FAQ, Service


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "location", "order", "is_active", "created_at")
    list_editable = ("order", "is_active")
    search_fields = ("title", "location", "description")
    list_filter = ("is_active", "created_at")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("title", "date", "location", "description", "image_url")}),
        ("Display", {"fields": ("order", "is_active")}),
        ("Timestamps", {"fields": ("created_at", "updated_at")}),
    )


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "order", "is_active", "created_at")
    list_editable = ("order", "is_active")
    search_fields = ("name", "role", "quote")
    list_filter = ("is_active", "created_at")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("name", "role", "quote", "avatar_url")}),
        ("Display", {"fields": ("order", "is_active")}),
        ("Timestamps", {"fields": ("created_at", "updated_at")}),
    )


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question", "order", "is_active", "created_at")
    list_editable = ("order", "is_active")
    search_fields = ("question", "answer")
    list_filter = ("is_active", "created_at")


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "badge", "icon_name", "order", "is_active", "created_at")
    list_editable = ("order", "is_active")
    search_fields = ("title", "badge", "text")
    list_filter = ("is_active", "created_at")
