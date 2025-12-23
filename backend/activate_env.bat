@echo off
REM Simple batch file to activate virtual environment
REM Usage: Just double-click this file or run it from command prompt

if exist "env\Scripts\activate.bat" (
    call env\Scripts\activate.bat
    echo Virtual environment activated!
    echo You can now run: python manage.py runserver 8000
    cmd /k
) else (
    echo Virtual environment not found!
    echo Creating virtual environment...
    python -m venv env
    call env\Scripts\activate.bat
    echo Installing dependencies...
    pip install -r requirements.txt
    echo Setup complete! Virtual environment activated.
    cmd /k
)

