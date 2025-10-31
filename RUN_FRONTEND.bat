@echo off
echo ========================================
echo Starting React Frontend
echo ========================================
echo.

cd client

echo Installing dependencies...
call npm install --production=false

echo.
echo Starting development server...
echo Frontend will be available at: http://localhost:5173
echo.

call npm run dev

pause