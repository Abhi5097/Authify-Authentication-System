import api from './api';

export const authService = {
  register: async (name, email, password) => {
    const response = await api.post('/register', {
      name,
      email,
      password,
    });
    return response.data;
  },

  login: async (email, password) => {
    const response = await api.post('/login', {
      email,
      password,
    });
    return response.data;
  },

  sendResetOtp: async (email) => {
    const response = await api.post('/send-reset-otp', null, {
      params: { email }
    });
    return response.data;
  },

  resetPassword: async (email, otp, newPassword) => {
    const response = await api.post('/reset-password', {
      email,
      otp,
      newPassword,
    });
    return response.data;
  },

  sendVerifyOtp: async () => {
    const response = await api.post('/send-otp');
    return response.data;
  },

  verifyOtp: async (otp) => {
    const response = await api.post('/verify-otp', { otp });
    return response.data;
  },

  verifyEmail: async (email, otp) => {
    const response = await api.post('/verify-email', { email, otp });
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};