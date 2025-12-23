# Quick Setup Guide

## Quick Start (Windows)

### EASIEST METHOD - Use the startup scripts:

**Option 1: Double-click `start_backend.bat`** (Works in CMD or PowerShell)
- This will automatically:
  - Activate the virtual environment
  - Install dependencies if needed
  - Run migrations
  - Start the server

**Option 2: Use PowerShell script**
```powershell
cd backend
.\start_backend.ps1
```

### Manual Setup (If scripts don't work)

#### Method 1: Using Command Prompt (CMD) - RECOMMENDED

1. **Open Command Prompt (CMD) - NOT PowerShell**

2. **Navigate to backend:**
   ```cmd
   cd "C:\1drive\Level6\Pritam\Product Development\Product\backend"
   ```

3. **Activate virtual environment:**
   ```cmd
   env\Scripts\activate.bat
   ```
   You should see `(env)` at the start of your prompt.

4. **Verify activation (check Python path):**
   ```cmd
   where python
   ```
   Should show: `C:\1drive\Level6\Pritam\Product Development\Product\backend\env\Scripts\python.exe`

5. **Install dependencies (if needed):**
   ```cmd
   pip install -r requirements.txt
   ```

6. **Run migrations:**
   ```cmd
   python manage.py migrate
   ```

7. **Create superuser (if not already created):**
   ```cmd
   python manage.py createsuperuser
   ```

8. **Load initial content data:**
   ```cmd
   python manage.py load_initial_data
   ```

9. **Start backend server:**
   ```cmd
   python manage.py runserver 8000
   ```

#### Method 2: Using PowerShell

1. **Open PowerShell**

2. **Navigate to backend:**
   ```powershell
   cd "C:\1drive\Level6\Pritam\Product Development\Product\backend"
   ```

3. **Set execution policy (one-time setup):**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

4. **Activate virtual environment:**
   ```powershell
   .\env\Scripts\Activate.ps1
   ```
   
   **OR if that fails, use the batch file:**
   ```powershell
   cmd /c "env\Scripts\activate.bat"
   ```

5. **Verify activation:**
   ```powershell
   (Get-Command python).Source
   ```
   Should show the env path.

6. **Continue with steps 5-9 from Method 1 above**

### Frontend Setup

1. **Open a NEW PowerShell window and navigate to frontend:**
   ```powershell
   cd "C:\1drive\Level6\Pritam\Product Development\Product\frontend"
   ```

2. **Install dependencies (if not already installed):**
   ```powershell
   npm install
   ```

3. **Start frontend server:**
   ```powershell
   npm start
   ```

## Important Notes

- **Backend runs on:** `http://localhost:8000`
- **Frontend runs on:** `http://localhost:3000`
- **Admin panel:** `http://localhost:8000/admin/`
- **API base:** `http://localhost:8000/api`

## Fixing Login 500 Error

If you encounter a 500 error when logging in:

1. Ensure migrations are run:
   ```powershell
   python manage.py migrate
   ```

2. Create tokens for existing users:
   ```powershell
   python manage.py shell
   ```
   Then:
   ```python
   from django.contrib.auth.models import User
   from rest_framework.authtoken.models import Token
   for user in User.objects.all():
       Token.objects.get_or_create(user=user)
   exit()
   ```

3. Restart the backend server.

## Managing Content

All content (Events, Feedback, FAQs, Services) can be managed through the Django admin panel at `http://localhost:8000/admin/` after logging in with your superuser credentials.

