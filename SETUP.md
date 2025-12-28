# Setup Guide

This guide will help you get the AI-Solutions project up and running on your local machine.

## Prerequisites

Before starting, verify you have:

- ✅ Python 3.11 or higher
- ✅ Node.js 18 or higher
- ✅ npm (comes with Node.js)
- ✅ Git

**Check your versions:**
```bash
python --version  # Should show 3.11+
node --version    # Should show 18+
npm --version
git --version
```

## Quick Start

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

Replace `<repository-url>` with the actual repository URL.

### Step 2: Set Up Backend

#### Option A: Quick Start (Windows - Easiest)

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. **Double-click `start_backend.bat`**
   - This will automatically:
     - Create virtual environment if needed
     - Install dependencies if needed
     - Run migrations
     - Start the server

#### Option B: PowerShell Script

```powershell
cd backend
.\start_backend.ps1
```

#### Option C: Manual Setup

**Windows Command Prompt (CMD):**

1. Navigate to backend:
   ```cmd
   cd backend
   ```

2. Create virtual environment:
   ```cmd
   python -m venv env
   ```

3. Activate virtual environment:
   ```cmd
   env\Scripts\activate.bat
   ```
   You should see `(env)` at the start of your prompt.

4. Install dependencies:
   ```cmd
   pip install -r requirements.txt
   ```

5. Run migrations:
   ```cmd
   python manage.py migrate
   ```

6. Create superuser (for admin access):
   ```cmd
   python manage.py createsuperuser
   ```
   Follow the prompts to create username, email, and password.

7. Load initial data (optional but recommended):
   ```cmd
   python manage.py load_initial_data
   ```

8. Start the server:
   ```cmd
   python manage.py runserver 8000
   ```

**Windows PowerShell:**

1. Navigate to backend:
   ```powershell
   cd backend
   ```

2. Set execution policy (one-time setup, if needed):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Create virtual environment:
   ```powershell
   python -m venv env
   ```

4. Activate virtual environment:
   ```powershell
   .\env\Scripts\Activate.ps1
   ```
   
   **If that fails, use the batch file:**
   ```powershell
   cmd /c "env\Scripts\activate.bat"
   ```

5. Continue with steps 4-8 from CMD instructions above

**Mac/Linux:**

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py load_initial_data
python manage.py runserver 8000
```

✅ Backend should now be running at `http://localhost:8000`

### Step 3: Set Up Frontend

1. Open a **NEW terminal window** (keep backend running)

2. Navigate to frontend:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

✅ Frontend should automatically open at `http://localhost:3000`

## Verify Installation

1. **Backend is running:**
   - Visit: http://localhost:8000/admin/
   - Login with your superuser credentials
   - You should see the Django admin panel

2. **Frontend is running:**
   - Visit: http://localhost:3000
   - You should see the AI-Solutions homepage

3. **API is working:**
   - Visit: http://localhost:8000/api/events/
   - You should see JSON data (or an empty array if no data)

## Access Points

Once everything is running:

- **Frontend Application:** http://localhost:3000
- **Django Admin Panel:** http://localhost:8000/admin/
- **React Admin Panel:** http://localhost:3000/admin
- **API Base URL:** http://localhost:8000/api

## Common Issues & Troubleshooting

### Backend Issues

**"ModuleNotFoundError" or "No module named 'django'"**
- Solution: Make sure virtual environment is activated (you should see `(env)` in prompt)
- Run: `env\Scripts\activate.bat` (Windows) or `source env/bin/activate` (Mac/Linux)

**"Port 8000 already in use"**
- Solution: Use a different port: `python manage.py runserver 8001`
- Update frontend `.env` file if you change the port

**"500 Error on Login"**
- Solution: Ensure migrations are run: `python manage.py migrate`
- Create tokens for users:
  ```python
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

**PowerShell execution policy error**
- Solution: Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Or use Command Prompt instead

**"Can't activate virtual environment"**
- Solution: Recreate it:
  ```cmd
  python -m venv env
  env\Scripts\activate.bat
  pip install -r requirements.txt
  ```

### Frontend Issues

**"Cannot connect to API"**
- Solution: Ensure backend is running on port 8000
- Check that CORS is enabled (it is by default)
- Verify `REACT_APP_API_URL` in `.env` file if you created one

**"Port 3000 already in use"**
- Solution: Use a different port: `PORT=3001 npm start`

**"npm install fails"**
- Solution: Clear cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

## Environment Variables (Optional)

The app works without any `.env` files! Only create them if you need to customize settings.

### Backend `.env` (optional)

Create `backend/.env` if you want to customize:
```
DJANGO_SECRET_KEY=your-secret-key-here
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
```

**Note:** If PostgreSQL environment variables are not set, the app will automatically use SQLite (`db.sqlite3`).

### Frontend `.env` (optional)

Create `frontend/.env` if you need to change API URL:
```
REACT_APP_API_URL=http://localhost:8000/api
```

If not set, it defaults to `http://localhost:8000/api`.

## First Time Setup Checklist

- [ ] Clone the repository
- [ ] Navigate to backend directory
- [ ] Create and activate virtual environment
- [ ] Install Python dependencies (`pip install -r requirements.txt`)
- [ ] Run migrations (`python manage.py migrate`)
- [ ] Create superuser (`python manage.py createsuperuser`)
- [ ] Load initial data (`python manage.py load_initial_data`)
- [ ] Start backend server (`python manage.py runserver 8000`)
- [ ] Navigate to frontend directory (in new terminal)
- [ ] Install Node dependencies (`npm install`)
- [ ] Start frontend server (`npm start`)

## Managing Content

All content (Events, Feedback, FAQs, Services) can be managed through the Django admin panel at `http://localhost:8000/admin/` after logging in with your superuser credentials.

## Next Steps

1. ✅ Both servers are running
2. Explore the frontend at http://localhost:3000
3. Access admin panel at http://localhost:8000/admin/
4. Try submitting an inquiry through the contact form
5. View inquiries in the admin panel at http://localhost:3000/admin

## VS Code PowerShell Extension Error

If you see a PowerShell error when opening the project in VS Code, this is a VS Code extension issue, not a problem with the project. The error occurs when the PowerShell extension tries to start.

**Solutions:**
1. Ignore the error - it doesn't affect the project functionality
2. Disable the PowerShell extension if you don't need it
3. Update the PowerShell extension to the latest version
4. The project works fine in any terminal (CMD, PowerShell, Git Bash, etc.)

## Need Help?

- Check `README.md` for detailed documentation
- Check `TECH_STACK.md` for technical details
- Review the troubleshooting sections above
