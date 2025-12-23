from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient, APITestCase

from .models import Inquiry


class InquiryAPITestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.list_url = reverse("inquiry-list")
        self.payload = {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "phone": "123456789",
            "company_name": "AI Co",
            "country": "USA",
            "job_title": "AI Lead",
            "job_details": "We need an ML pipeline for production.",
            "job_type": "ml_ops",
        }

    def test_create_inquiry(self):
        response = self.client.post(self.list_url, self.payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Inquiry.objects.count(), 1)

    def test_list_filter_by_country(self):
        Inquiry.objects.create(**self.payload)
        Inquiry.objects.create(**{**self.payload, "country": "Canada"})
        response = self.client.get(self.list_url + "?country=USA")
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["country"], "USA")

    def test_stats_endpoint(self):
        Inquiry.objects.create(**self.payload)
        response = self.client.get(reverse("inquiry-stats"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["total"], 1)

    def test_admin_can_access_admin_site(self):
        User.objects.create_superuser(
            username="admin", password="adminpass", email="admin@example.com"
        )
        logged_in = self.client.login(username="admin", password="adminpass")
        self.assertTrue(logged_in)


