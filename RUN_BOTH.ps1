Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Full Stack Application" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This will start both Backend and Frontend" -ForegroundColor Yellow
Write-Host "1. Backend (Spring Boot) - Port 8080" -ForegroundColor Green
Write-Host "2. Frontend (React) - Port 5173" -ForegroundColor Green
Write-Host ""

# Start Backend
Write-Host "Starting Backend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd authify; Write-Host 'Building and starting Spring Boot...' -ForegroundColor Green; ./mvnw.cmd spring-boot:run"

# Wait a bit before starting frontend
Start-Sleep -Seconds 5

# Start Frontend
Write-Host "Starting Frontend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd client; Write-Host 'Installing dependencies and starting React...' -ForegroundColor Green; npm install --production=false; npm run dev"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Both applications are starting!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend: http://localhost:8080/api/v1.0" -ForegroundColor Green
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Check the opened PowerShell windows for status." -ForegroundColor Yellow
Write-Host ""