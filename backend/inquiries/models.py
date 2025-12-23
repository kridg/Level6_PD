from django.db import models


class Inquiry(models.Model):
    JOB_CHOICES = [
        ("ai_engineer", "AI Engineer"),
        ("data_scientist", "Data Scientist"),
        ("ml_ops", "ML Ops"),
        ("research", "Research Collaboration"),
        ("other", "Other"),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    company_name = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    job_details = models.TextField()
    job_type = models.CharField(max_length=50, choices=JOB_CHOICES, default="other")
    reviewed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.job_title}"


