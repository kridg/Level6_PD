# Backend Setup - Complete Guide

## 🚀 Quick Start (Easiest Method)

**Just double-click `start_backend.bat`** - It handles everything automatically!

## 📋 Prerequisites

- Python 3.11+ installed
- Git installed

## 🔧 Manual Setup

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Create Virtual Environment

**Windows:**
```cmd
python -m venv env
```

**Mac/Linux:**
```bash
python3 -m venv env
```

### Step 3: Activate Virtual Environment

#### Option A: Windows Command Prompt (CMD) - RECOMMENDED
```cmd
env\Scripts\activate.bat
```

#### Option B: Windows PowerShell
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\env\Scripts\Activate.ps1
```

#### Option C: Mac/Linux
```bash
source env/bin/activate
```

**Verify activation:** You should see `(env)` at the start of your prompt.

### Step 4: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 5: Run Migrations

```bash
python manage.py migrate
```

### Step 6: Create Superuser (First Time Only)

```bash
python manage.py createsuperuser
```

Enter:
- Username: (your choice)
- Email: (your email)
- Password: (your password)

### Step 7: Load Initial Content (Optional but Recommended)

```bash
python manage.py load_initial_data
```

This populates:
- Events
- Feedback/Testimonials
- FAQs
- Services

### Step 8: Start Server

```bash
python manage.py runserver 8000
```

Server will be available at: **http://localhost:8000**

## ✅ Verify Setup

Run the test script:
```cmd
python test_setup.py
```

## 🔍 Common Issues & Solutions

### Issue: "ModuleNotFoundError: No module named 'dotenv'"
**Solution:** Virtual environment is not activated
- Make sure you see `(env)` in your prompt
- Run: `env\Scripts\activate.bat`

### Issue: "Execution policy" error in PowerShell
**Solution:** 
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Or use CMD instead.

### Issue: Port 8000 already in use
**Solution:** Use a different port:
```cmd
python manage.py runserver 8001
```

### Issue: Can't activate virtual environment
**Solution:** Recreate it:
```cmd
python -m venv env
env\Scripts\activate.bat
pip install -r requirements.txt
```

## 📁 Project Structure

```
backend/
├── ai_solutions/          # Django project settings
├── content/               # Content app (Events, Feedback, FAQs, Services)
├── inquiries/             # Inquiries app
├── env/                   # Virtual environment
├── db.sqlite3            # Database (SQLite)
├── manage.py             # Django management script
├── requirements.txt      # Python dependencies
├── start_backend.bat     # Quick start script
└── test_setup.py         # Setup verification script
```

## 🌐 API Endpoints

Once server is running:

- **Admin Panel:** http://localhost:8000/admin/
- **API Root:** http://localhost:8000/api/
- **Events:** http://localhost:8000/api/events/
- **Feedback:** http://localhost:8000/api/feedback/
- **FAQs:** http://localhost:8000/api/faqs/
- **Services:** http://localhost:8000/api/services/
- **Inquiries:** http://localhost:8000/api/inquiries/
- **Auth Token:** http://localhost:8000/api/auth/token/

## 🎯 Next Steps

1. Backend is running ✅
2. Start frontend: `cd frontend && npm start`
3. Access admin panel: http://localhost:8000/admin/
4. Manage content through admin panel

## 📝 Notes

- Database uses SQLite by default (no PostgreSQL setup needed)
- All content can be managed through Django admin
- Tokens are automatically created for new users
- CORS is enabled for frontend communication

