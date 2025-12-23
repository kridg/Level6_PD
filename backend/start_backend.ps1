# PowerShell script to start the backend server
Write-Host "Starting Backend Server..." -ForegroundColor Green
Write-Host ""

# Check if virtual environment exists
if (-not (Test-Path "env\Scripts\Activate.ps1")) {
    Write-Host "Virtual environment not found. Creating..." -ForegroundColor Yellow
    python -m venv env
    Write-Host "Virtual environment created." -ForegroundColor Green
    Write-Host ""
}

# Try to activate virtual environment
Write-Host "Activating virtual environment..." -ForegroundColor Cyan
try {
    # Try PowerShell activation first
    & "env\Scripts\Activate.ps1"
} catch {
    # If PowerShell activation fails, use batch file
    Write-Host "PowerShell activation failed, using batch file..." -ForegroundColor Yellow
    cmd /c "env\Scripts\activate.bat"
}

# Check if packages are installed
Write-Host "Checking dependencies..." -ForegroundColor Cyan
try {
    python -c "import django" 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw "Django not found"
    }
} catch {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    pip install -r requirements.txt
    Write-Host "Dependencies installed." -ForegroundColor Green
    Write-Host ""
}

# Run migrations
Write-Host "Running migrations..." -ForegroundColor Cyan
python manage.py migrate

# Start server
Write-Host ""
Write-Host "Starting Django development server on http://localhost:8000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
python manage.py runserver 8000

