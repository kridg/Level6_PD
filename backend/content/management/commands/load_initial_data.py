from django.core.management.base import BaseCommand
from content.models import Event, Feedback, FAQ, Service
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class Command(BaseCommand):
    help = "Load initial content data (events, feedback, FAQs, services)"

    def handle(self, *args, **options):
        # Create events
        events_data = [
            {
                "title": "AI Ops Summit 2025",
                "date": "Jan 22, 2025",
                "location": "San Francisco, CA",
                "description": "Panel on reliable model deployment and monitoring at scale.",
                "image_url": "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
                "order": 0,
            },
            {
                "title": "Healthcare AI Roundtable",
                "date": "Feb 18, 2025",
                "location": "Virtual",
                "description": "Discussing privacy-first AI for diagnostics and triage.",
                "image_url": "https://images.pexels.com/photos/1181563/pexels-photo-1181563.jpeg",
                "order": 1,
            },
            {
                "title": "Edge AI Workshop",
                "date": "Mar 10, 2025",
                "location": "Austin, TX",
                "description": "Hands-on lab for shipping computer vision models to edge devices.",
                "image_url": "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
                "order": 2,
            },
        ]
        for event in events_data:
            Event.objects.get_or_create(title=event["title"], defaults=event)
            self.stdout.write(self.style.SUCCESS(f'Created/updated event: {event["title"]}'))

        # Create feedback
        feedback_data = [
            {
                "name": "Global FinTech Corp",
                "role": "CTO",
                "quote": "AI-Solutions delivered a secure, real-time fraud detection engine that reduced false positives by 37%.",
                "avatar_url": "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg",
                "order": 0,
            },
            {
                "name": "HealthNext",
                "role": "VP of Data",
                "quote": "Their MLOps team productionized our models with zero-downtime releases and excellent observability.",
                "avatar_url": "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
                "order": 1,
            },
            {
                "name": "LogiChain",
                "role": "Head of Engineering",
                "quote": "We shipped a demand forecasting system in six weeks thanks to their expert architects and engineers.",
                "avatar_url": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                "order": 2,
            },
        ]
        for feedback in feedback_data:
            Feedback.objects.get_or_create(name=feedback["name"], defaults=feedback)
            self.stdout.write(self.style.SUCCESS(f'Created/updated feedback: {feedback["name"]}'))

        # Create FAQs
        faqs_data = [
            {
                "question": "How fast can we start?",
                "answer": "We can begin discovery within 3-5 business days. A dedicated pod is assembled immediately after alignment on scope and milestones.",
                "order": 0,
            },
            {
                "question": "Do you work with existing teams?",
                "answer": "Yes. We integrate with your product, data, and security teams, adopting your rituals while adding our playbooks and dashboards.",
                "order": 1,
            },
            {
                "question": "Can you hand off and train us?",
                "answer": "Absolutely. We include documentation, enablement sessions, and runbooks for operations, incident response, and model updates.",
                "order": 2,
            },
            {
                "question": "What about compliance and data privacy?",
                "answer": "We design for least-privilege access, audit trails, PII minimization, and align with your compliance requirements from day one.",
                "order": 3,
            },
        ]
        for faq in faqs_data:
            FAQ.objects.get_or_create(question=faq["question"], defaults=faq)
            self.stdout.write(self.style.SUCCESS(f'Created/updated FAQ: {faq["question"]}'))

        # Create services
        services_data = [
            {
                "title": "Product Discovery",
                "badge": "Strategy",
                "text": "Rapid alignment on goals, KPIs, and feasibility with stakeholder workshops.",
                "icon_name": "Compass",
                "order": 0,
            },
            {
                "title": "Data & Modeling",
                "badge": "Delivery",
                "text": "Robust pipelines, model selection, and evaluation with bias and drift checks.",
                "icon_name": "Database",
                "order": 1,
            },
            {
                "title": "MLOps & Platforms",
                "badge": "Reliability",
                "text": "CI/CD for models, blue/green releases, observability, and runbooks baked in.",
                "icon_name": "ServerCog",
                "order": 2,
            },
            {
                "title": "Experience & UI",
                "badge": "Product",
                "text": "Human-centered UIs, prompt UX, and guardrails that keep humans in the loop.",
                "icon_name": "LayoutDashboard",
                "order": 3,
            },
            {
                "title": "Governance",
                "badge": "Trust",
                "text": "Policy enforcement, audit trails, and secure data handling across the stack.",
                "icon_name": "ShieldCheck",
                "order": 4,
            },
            {
                "title": "Enablement",
                "badge": "Scale",
                "text": "Playbooks, training, and handover so internal teams can run with confidence.",
                "icon_name": "GraduationCap",
                "order": 5,
            },
        ]
        for service in services_data:
            Service.objects.get_or_create(title=service["title"], defaults=service)
            self.stdout.write(self.style.SUCCESS(f'Created/updated service: {service["title"]}'))

        # Ensure tokens exist for all users
        for user in User.objects.all():
            Token.objects.get_or_create(user=user)
        self.stdout.write(self.style.SUCCESS("Ensured tokens exist for all users"))

        self.stdout.write(self.style.SUCCESS("\n✅ Initial data loaded successfully!"))

