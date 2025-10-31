# 🚀 Quick Start Guide

## Prerequisites
- Node.js v20.9.0 or higher
- Backend server running on `http://localhost:8080`

## Installation & Running

### Step 1: Install Dependencies
```bash
cd client
npm install
```

### Step 2: Configure Environment
The `.env` file is already configured with:
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1.0
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

## 🎯 Testing the New Features

### 1. Test Email Verification Flow
1. Register a new account
2. After registration, a modal will appear
3. Click "Verify Email Now"
4. Check your email for OTP
5. Enter OTP and verify
6. Notice the verification badge in header changes to ✅

### 2. Test Header Profile Avatar
1. Login to your account
2. Look at the top-right corner
3. You'll see your avatar with initials
4. Verification status is displayed below name

### 3. Explore Landing Page
1. Navigate to home page after login
2. Scroll through the sections:
   - Hero section with user info
   - 4 feature cards with hover effects
   - Stats section
   - CTA section
   - Footer

### 4. Test Responsive Design
1. Resize browser window
2. Test on mobile device
3. All elements should adapt smoothly

## 🔧 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📱 Access Points

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8080/api/v1.0

## ✅ Verification Checklist

- [ ] Dependencies installed successfully
- [ ] Backend server is running
- [ ] Frontend server starts without errors
- [ ] Can register new account
- [ ] Verification modal appears after registration
- [ ] Can send and verify OTP
- [ ] Header shows profile avatar
- [ ] Verification badge displays correctly
- [ ] Landing page loads with all sections
- [ ] Responsive design works on mobile

## 🆘 Need Help?

If you encounter any issues:
1. Check `FRONTEND_ENHANCEMENTS.md` for detailed documentation
2. Verify backend is running
3. Check browser console for errors
4. Ensure all dependencies are installed

---

**Happy Coding! 🎉**