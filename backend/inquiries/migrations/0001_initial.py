from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Inquiry",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.CharField(blank=True, max_length=50)),
                ("company_name", models.CharField(blank=True, max_length=255)),
                ("country", models.CharField(max_length=100)),
                ("job_title", models.CharField(max_length=100)),
                ("job_details", models.TextField()),
                (
                    "job_type",
                    models.CharField(
                        choices=[
                            ("ai_engineer", "AI Engineer"),
                            ("data_scientist", "Data Scientist"),
                            ("ml_ops", "ML Ops"),
                            ("research", "Research Collaboration"),
                            ("other", "Other"),
                        ],
                        default="other",
                        max_length=50,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
            options={"ordering": ["-created_at"]},
        ),
    ]


