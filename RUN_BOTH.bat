@echo off
echo ========================================
echo Starting Full Stack Application
echo ========================================
echo.
echo This will open two command windows:
echo 1. Backend (Spring Boot) - Port 8080
echo 2. Frontend (React) - Port 5173
echo.
echo Press any key to continue...
pause > nul

echo.
echo Starting Backend...
start "Backend - Spring Boot" cmd /k "cd authify && mvnw.cmd spring-boot:run"

timeout /t 5 /nobreak > nul

echo Starting Frontend...
start "Frontend - React" cmd /k "cd client && npm install --production=false && npm run dev"

echo.
echo ========================================
echo Both applications are starting!
echo ========================================
echo.
echo Backend: http://localhost:8080/api/v1.0
echo Frontend: http://localhost:5173
echo.
echo Check the opened windows for status.
echo.
pause