from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=255)
    date = models.CharField(max_length=50)
    location = models.CharField(max_length=255)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0, help_text="Order for display")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "date"]

    def __str__(self):
        return self.title


class Feedback(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    quote = models.TextField()
    avatar_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0, help_text="Order for display")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "created_at"]

    def __str__(self):
        return f"{self.name} - {self.role}"


class FAQ(models.Model):
    question = models.CharField(max_length=500)
    answer = models.TextField()
    order = models.IntegerField(default=0, help_text="Order for display")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "created_at"]
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question


class Service(models.Model):
    title = models.CharField(max_length=255)
    badge = models.CharField(max_length=100)
    text = models.TextField()
    icon_name = models.CharField(
        max_length=50,
        help_text="Icon name from lucide-react (e.g., Compass, Database)",
    )
    order = models.IntegerField(default=0, help_text="Order for display")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self):
        return self.title
