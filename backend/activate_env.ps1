# PowerShell script to activate virtual environment
# Usage: .\activate_env.ps1

Write-Host "Activating virtual environment..." -ForegroundColor Cyan

if (Test-Path "env\Scripts\Activate.ps1") {
    try {
        & "env\Scripts\Activate.ps1"
        Write-Host "Virtual environment activated!" -ForegroundColor Green
        Write-Host "You can now run: python manage.py runserver 8000" -ForegroundColor Yellow
    } catch {
        Write-Host "PowerShell activation failed. Using batch file..." -ForegroundColor Yellow
        cmd /c "env\Scripts\activate.bat"
        Write-Host "Virtual environment activated via batch file!" -ForegroundColor Green
    }
} else {
    Write-Host "Virtual environment not found!" -ForegroundColor Red
    Write-Host "Creating virtual environment..." -ForegroundColor Yellow
    python -m venv env
    
    # Try PowerShell activation
    try {
        & "env\Scripts\Activate.ps1"
    } catch {
        cmd /c "env\Scripts\activate.bat"
    }
    
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    pip install -r requirements.txt
    Write-Host "Setup complete! Virtual environment activated." -ForegroundColor Green
}

