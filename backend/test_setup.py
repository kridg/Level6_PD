#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Test script to verify backend setup"""
import sys
import os

# Set UTF-8 encoding for Windows console
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')

print("=" * 60)
print("Backend Setup Verification")
print("=" * 60)

# Check Python version
print(f"\n1. Python Version: {sys.version}")
print(f"   Python Path: {sys.executable}")

# Check if we're in virtual environment
venv_path = os.path.dirname(os.path.dirname(sys.executable))
if 'env' in venv_path or 'venv' in venv_path:
    print(f"   [OK] Virtual environment detected: {venv_path}")
else:
    print(f"   [WARNING] May not be using virtual environment")

# Check Django
try:
    import django
    print(f"\n2. Django Version: {django.__version__}")
    print("   [OK] Django is installed")
except ImportError:
    print("\n2. [ERROR] Django is NOT installed")
    print("   Run: pip install -r requirements.txt")
    sys.exit(1)

# Check other dependencies
dependencies = [
    'rest_framework',
    'corsheaders',
    'dotenv',
]

print("\n3. Checking dependencies:")
all_ok = True
for dep in dependencies:
    try:
        __import__(dep)
        print(f"   [OK] {dep}")
    except ImportError:
        print(f"   [ERROR] {dep} is NOT installed")
        all_ok = False

# Check Django settings
try:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ai_solutions.settings')
    django.setup()
    print("\n4. Django Settings:")
    print(f"   [OK] Settings module loaded successfully")
    
    from django.conf import settings
    print(f"   [OK] Installed apps: {len(settings.INSTALLED_APPS)} apps")
    
    # Check if content app is installed
    content_apps = [app for app in settings.INSTALLED_APPS if app.startswith('content')]
    if content_apps:
        print(f"   [OK] Content app is installed: {content_apps[0]}")
    else:
        print(f"   [ERROR] Content app is NOT installed")
        all_ok = False
        
except Exception as e:
    print(f"\n4. [ERROR] Django settings error: {e}")
    all_ok = False

# Check database
try:
    from django.db import connection
    connection.ensure_connection()
    print("\n5. Database:")
    print(f"   [OK] Database connection successful")
except Exception as e:
    print(f"\n5. [WARNING] Database connection issue: {e}")
    print("   Run: python manage.py migrate")

print("\n" + "=" * 60)
if all_ok:
    print("[SUCCESS] Setup looks good! You can run: python manage.py runserver 8000")
else:
    print("[WARNING] Some issues found. Please fix them before running the server.")
print("=" * 60)

