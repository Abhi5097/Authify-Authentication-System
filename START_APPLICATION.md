# 🚀 Full Stack Authentication System - Startup Guide

## Prerequisites

Before starting, ensure you have:
- ✅ Java 17 or higher installed
- ✅ Maven installed
- ✅ Node.js (v16+) and npm installed
- ✅ PostgreSQL database running on localhost:5432
- ✅ Database named `authify_app` created in PostgreSQL

## 📦 Database Setup

1. **Start PostgreSQL** (if not already running)

2. **Create Database:**
```sql
CREATE DATABASE authify_app;
```

3. **Verify Connection:**
   - Host: localhost
   - Port: 5432
   - Database: authify_app
   - Username: postgres
   - Password: (as configured in application.properties)

## 🔧 Backend Setup & Start

### Option 1: Using Maven Wrapper (Recommended)

```powershell
# Navigate to backend directory
cd authify

# Clean and install dependencies
./mvnw clean install

# Run the Spring Boot application
./mvnw spring-boot:run
```

### Option 2: Using Maven Command

```powershell
cd authify
mvn clean install
mvn spring-boot:run
```

### Option 3: Using IDE (IntelliJ IDEA / Eclipse)

1. Open the `authify` folder in your IDE
2. Wait for Maven to download dependencies
3. Run `AuthifyApplication.java` main method

**Backend will start on:** `http://localhost:8080`
**API Base URL:** `http://localhost:8080/api/v1.0`

### ✅ Verify Backend is Running

Open browser and visit: `http://localhost:8080/api/v1.0/is-authenticated`

You should see: `false` (since you're not authenticated yet)

## 🎨 Frontend Setup & Start

### Step 1: Install Dependencies

```powershell
# Navigate to client directory
cd client

# Remove existing node_modules if any issues
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# Install all dependencies (including devDependencies)
npm install --production=false
```

If the above doesn't work, try:

```powershell
# Install devDependencies explicitly
npm install --save-dev vite @vitejs/plugin-react eslint @eslint/js @types/react @types/react-dom eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```

### Step 2: Start Development Server

```powershell
npm run dev
```

**Frontend will start on:** `http://localhost:5173`

### ✅ Verify Frontend is Running

Open browser and visit: `http://localhost:5173`

You should see the login page.

## 🔗 API Endpoints

### Public Endpoints (No Authentication Required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1.0/register` | Register new user |
| POST | `/api/v1.0/login` | Login user |
| POST | `/api/v1.0/send-reset-otp` | Send password reset OTP |
| POST | `/api/v1.0/reset-password` | Reset password with OTP |

### Protected Endpoints (Authentication Required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1.0/profile` | Get user profile |
| GET | `/api/v1.0/is-authenticated` | Check authentication status |
| POST | `/api/v1.0/send-otp` | Send email verification OTP |
| POST | `/api/v1.0/verify-otp` | Verify email with OTP |

## 🧪 Testing the Application

### 1. Register a New User

1. Navigate to `http://localhost:5173/register`
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
3. Click "Sign Up"
4. You should receive a welcome email

### 2. Login

1. Navigate to `http://localhost:5173/login`
2. Enter credentials:
   - Email: test@example.com
   - Password: password123
3. Click "Sign In"
4. You should be redirected to the home page

### 3. Verify Email (Optional)

1. After login, navigate to `http://localhost:5173/email-verify`
2. Click "Send OTP to Email"
3. Check your email for the OTP
4. Enter the OTP and click "Verify Email"

### 4. Reset Password

1. Navigate to `http://localhost:5173/reset-password`
2. Enter your email
3. Click "Send OTP"
4. Check your email for the OTP
5. Enter OTP and new password
6. Click "Reset Password"

### 5. Access Protected Home Page

1. After login, you'll be on `http://localhost:5173/`
2. You should see your user information
3. Click "Logout" to logout

## 🐛 Troubleshooting

### Backend Issues

**Problem:** Port 8080 already in use
```powershell
# Find and kill process using port 8080
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**Problem:** Database connection error
- Verify PostgreSQL is running
- Check database name, username, and password in `application.properties`
- Ensure database `authify_app` exists

**Problem:** Email not sending
- Check email configuration in `application.properties`
- Verify SMTP credentials are correct

### Frontend Issues

**Problem:** Vite not found
```powershell
# Install vite explicitly
npm install --save-dev vite@^5.4.21
```

**Problem:** Port 5173 already in use
- Vite will automatically use next available port (5174, 5175, etc.)
- Or kill the process using port 5173

**Problem:** CORS errors
- Verify backend is running on `http://localhost:8080`
- Check CORS configuration in `SecurityConfig.java` includes `http://localhost:5173`

**Problem:** 401 Unauthorized errors
- Clear browser localStorage
- Login again to get a fresh JWT token

## 📝 Environment Variables

### Backend (`authify/src/main/resources/application.properties`)

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/authify_app
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD
jwt.secret.key=YOUR_SECRET_KEY
spring.mail.username=YOUR_EMAIL
spring.mail.password=YOUR_EMAIL_PASSWORD
```

### Frontend (`client/.env`)

```
VITE_API_BASE_URL=http://localhost:8080/api/v1.0
```

## 🎯 Quick Start Commands

### Start Everything (Two Terminals)

**Terminal 1 - Backend:**
```powershell
cd authify
./mvnw spring-boot:run
```

**Terminal 2 - Frontend:**
```powershell
cd client
npm install --production=false
npm run dev
```

## 📚 Project Structure

```
Full Stack Authentication System/
├── authify/                          # Spring Boot Backend
│   ├── src/main/java/
│   │   └── com/Abhishek/authify/
│   │       ├── config/              # Security & CORS config
│   │       ├── controller/          # REST controllers
│   │       ├── entity/              # JPA entities
│   │       ├── filter/              # JWT filter
│   │       ├── io/                  # Request/Response DTOs
│   │       ├── repository/          # JPA repositories
│   │       ├── service/             # Business logic
│   │       └── util/                # JWT utilities
│   └── src/main/resources/
│       └── application.properties   # Configuration
│
└── client/                          # React Frontend
    ├── src/
    │   ├── components/              # React components
    │   ├── context/                 # Auth context
    │   ├── pages/                   # Page components
    │   ├── services/                # API services
    │   └── util/                    # Constants
    └── .env                         # Environment variables
```

## ✨ Features

- ✅ User Registration with email validation
- ✅ User Login with JWT authentication
- ✅ Password Reset via OTP
- ✅ Email Verification via OTP
- ✅ Protected Routes
- ✅ Automatic token refresh
- ✅ Toast notifications
- ✅ Form validation
- ✅ Responsive design
- ✅ CORS enabled
- ✅ PostgreSQL database
- ✅ Email service integration

## 🔐 Security Features

- JWT token-based authentication
- Password encryption with BCrypt
- HTTP-only cookies for token storage
- CORS protection
- SQL injection prevention (JPA)
- XSS protection
- CSRF protection disabled (stateless API)

## 📧 Email Configuration

The application uses Brevo (formerly Sendinblue) SMTP for sending emails:
- Welcome emails on registration
- OTP for email verification
- OTP for password reset

Make sure to configure your SMTP settings in `application.properties`.

## 🎉 Success!

If both backend and frontend are running without errors:
- Backend: ✅ `http://localhost:8080`
- Frontend: ✅ `http://localhost:5173`

You're ready to test the full authentication flow! 🚀