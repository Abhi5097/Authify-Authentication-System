@echo off
echo ========================================
echo Starting Spring Boot Backend
echo ========================================
echo.

cd authify

echo Cleaning and building the project...
call mvnw.cmd clean install -DskipTests

echo.
echo Starting the application...
echo Backend will be available at: http://localhost:8080
echo API Base URL: http://localhost:8080/api/v1.0
echo.

call mvnw.cmd spring-boot:run

pause