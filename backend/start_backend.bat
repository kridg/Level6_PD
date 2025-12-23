@echo off
echo Starting Backend Server...
echo.

REM Check if virtual environment exists
if not exist "env\Scripts\activate.bat" (
    echo Virtual environment not found. Creating...
    python -m venv env
    echo Virtual environment created.
    echo.
)

REM Activate virtual environment
echo Activating virtual environment...
call env\Scripts\activate.bat

REM Check if packages are installed
echo Checking dependencies...
python -c "import django" 2>nul
if errorlevel 1 (
    echo Installing dependencies...
    pip install -r requirements.txt
    echo Dependencies installed.
    echo.
)

REM Run migrations
echo Running migrations...
python manage.py migrate

REM Start server
echo.
echo Starting Django development server on http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
python manage.py runserver 8000

pause

