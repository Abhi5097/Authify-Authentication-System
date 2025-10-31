# Setup Instructions

## Issue with npm install

There seems to be an issue with the npm installation where devDependencies are not being installed automatically. 

## Manual Installation Steps

Please run the following commands in the `client` directory:

```bash
cd client

# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Install all dependencies including dev dependencies
npm install --production=false

# Or install devDependencies explicitly
npm install --save-dev vite@^5.4.21 @vitejs/plugin-react@^4.7.0 eslint@^9.36.0 @eslint/js@^9.36.0 @types/react@^19.1.16 @types/react-dom@^19.1.9 eslint-plugin-react-hooks@^5.2.0 eslint-plugin-react-refresh@^0.4.22 globals@^16.4.0
```

## Running the Application

Once dependencies are installed, start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Backend Configuration

Make sure your Spring Boot backend is running on `http://localhost:8080/api/v1.0` before testing the frontend.

The backend URL is configured in the `.env` file:
```
VITE_API_BASE_URL=http://localhost:8080/api/v1.0
```

## Features Implemented

✅ **Authentication Pages:**
- Register page with form validation
- Login page with JWT token storage
- Reset Password page with email submission
- Email Verification page with token handling
- Protected Home page (requires authentication)

✅ **JWT Authentication:**
- Axios interceptor automatically attaches JWT token to requests
- Token stored in localStorage
- Automatic redirect to login on 401 errors
- AuthContext for global authentication state

✅ **API Integration:**
- POST /api/v1.0/register
- POST /api/v1.0/login
- POST /api/v1.0/send-reset-otp (sends OTP to email)
- POST /api/v1.0/reset-password (resets password with OTP)
- POST /api/v1.0/send-otp (sends verification OTP)
- POST /api/v1.0/verify-otp (verifies email with OTP)
- GET /api/v1.0/profile (get user profile - protected)

✅ **UI/UX:**
- Bootstrap styling with custom gradient theme
- Toast notifications for all actions
- Form validation with error messages
- Loading states during API calls
- Responsive design
- Protected route wrapper

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx       # Route protection wrapper
│   ├── context/
│   │   └── AuthContext.jsx          # Authentication state management
│   ├── pages/
│   │   ├── Register.jsx             # Registration page
│   │   ├── Login.jsx                # Login page
│   │   ├── Home.jsx                 # Protected home page
│   │   ├── ResetPassword.jsx        # Password reset page
│   │   └── EmailVerify.jsx          # Email verification page
│   ├── services/
│   │   ├── api.js                   # Axios instance with interceptors
│   │   └── authService.js           # Authentication API calls
│   ├── util/
│   │   └── constants.js             # App constants
│   ├── App.jsx                      # Main app component with routes
│   ├── main.jsx                     # Entry point
│   ├── App.css                      # Custom styles
│   └── index.css                    # Global styles
├── .env                             # Environment variables
└── package.json                     # Dependencies
```

## Testing the Application

1. **Register a new user:**
   - Navigate to `/register`
   - Fill in the form and submit
   - Check your email for verification link

2. **Verify email:**
   - Click the verification link from email
   - Should redirect to login page

3. **Login:**
   - Navigate to `/login`
   - Enter credentials
   - Should redirect to home page

4. **Access protected page:**
   - Try accessing `/` (home) without logging in
   - Should redirect to login
   - After login, should see home page with user info

5. **Reset password:**
   - Navigate to `/reset-password`
   - Enter email
   - Check email for reset instructions

6. **Logout:**
   - Click logout button on home page
   - Should clear token and redirect to login