# Quick Start Guide - Backend Setup

## EASIEST METHOD - Just Double-Click!

**Double-click `start_backend.bat`** - This will:
- ✅ Activate virtual environment automatically
- ✅ Install dependencies if needed
- ✅ Run migrations
- ✅ Start the server on http://localhost:8000

## Manual Method - Step by Step

### Using Command Prompt (CMD) - RECOMMENDED

1. **Open Command Prompt (not PowerShell)**

2. **Navigate to backend folder:**
   ```
   cd "C:\1drive\Level6\Pritam\Product Development\Product\backend"
   ```

3. **Activate virtual environment:**
   ```
   env\Scripts\activate.bat
   ```
   You should see `(env)` at the start of your prompt.

4. **Verify it worked:**
   ```
   where python
   ```
   Should show: `...\backend\env\Scripts\python.exe`

5. **Install dependencies (if needed):**
   ```
   pip install -r requirements.txt
   ```

6. **Run migrations:**
   ```
   python manage.py migrate
   ```

7. **Create superuser (first time only):**
   ```
   python manage.py createsuperuser
   ```
   Enter username, email, and password when prompted.

8. **Load initial content:**
   ```
   python manage.py load_initial_data
   ```

9. **Start the server:**
   ```
   python manage.py runserver 8000
   ```

10. **Open browser:** http://localhost:8000

### Using PowerShell

1. **Open PowerShell**

2. **Navigate to backend:**
   ```powershell
   cd "C:\1drive\Level6\Pritam\Product Development\Product\backend"
   ```

3. **Set execution policy (one-time only):**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   Type `Y` when prompted.

4. **Activate virtual environment:**
   ```powershell
   .\env\Scripts\Activate.ps1
   ```
   
   **OR if that fails, use:**
   ```powershell
   cmd /c "env\Scripts\activate.bat"
   ```

5. **Continue with steps 5-10 from CMD method above**

## Troubleshooting

### "ModuleNotFoundError: No module named 'dotenv'"
- **Solution:** The virtual environment is not activated
- Make sure you see `(env)` at the start of your prompt
- Run: `env\Scripts\activate.bat` (CMD) or `.\env\Scripts\Activate.ps1` (PowerShell)

### "Execution policy" error in PowerShell
- **Solution:** Run this command:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- Or use CMD instead: `env\Scripts\activate.bat`

### "python: command not found"
- **Solution:** Python is not in your PATH
- Use full path: `C:\Python313\python.exe` (or wherever Python is installed)
- Or reinstall Python with "Add to PATH" option checked

### Port 8000 already in use
- **Solution:** Use a different port:
  ```
  python manage.py runserver 8001
  ```

### Can't activate virtual environment
- **Solution:** Recreate it:
  ```
  python -m venv env
  env\Scripts\activate.bat
  pip install -r requirements.txt
  ```

## Verify Setup

Run the test script:
```
python test_setup.py
```

This will check:
- ✅ Python version
- ✅ Virtual environment
- ✅ Django installation
- ✅ All dependencies
- ✅ Database connection

## Next Steps

Once backend is running:
1. Open http://localhost:8000/admin/ to access admin panel
2. Open http://localhost:8000/api/ to see API endpoints
3. Start frontend in another terminal: `cd frontend && npm start`

