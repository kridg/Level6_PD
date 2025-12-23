from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from inquiries.views import InquiryViewSet
from content.views import EventViewSet, FeedbackViewSet, FAQViewSet, ServiceViewSet
from content.custom_auth import obtain_auth_token

router = routers.DefaultRouter()
router.register(r"inquiries", InquiryViewSet, basename="inquiry")
router.register(r"events", EventViewSet, basename="event")
router.register(r"feedback", FeedbackViewSet, basename="feedback")
router.register(r"faqs", FAQViewSet, basename="faq")
router.register(r"services", ServiceViewSet, basename="service")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/token/", obtain_auth_token, name="api-token"),
    path("api/", include(router.urls)),
]


