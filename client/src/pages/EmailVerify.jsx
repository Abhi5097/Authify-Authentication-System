import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const EmailVerify = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    setSendingOtp(true);
    try {
      await authService.sendVerifyOtp();
      toast.success('OTP sent to your email! Please check your inbox.');
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to send OTP. Please try again.';
      toast.error(message);
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      setError('OTP is required');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await authService.verifyOtp(otp);
      
      // Fetch updated profile to get verification status
      const profile = await authService.getProfile();
      const updatedUser = {
        email: profile.email,
        name: profile.name,
        userId: profile.userId,
        isAccountVerified: profile.isAccountVerified
      };
      updateUser(updatedUser);
      
      setSuccess(true);
      toast.success('Email verified successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      const message = err.response?.data?.message || 'Verification failed. Please check your OTP.';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-envelope-check text-white text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
          <p className="text-gray-600">
            {showOtpForm
              ? 'Enter the OTP sent to your email'
              : 'Verify your email to access all features'}
          </p>
        </div>

        {success ? (
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <i className="bi bi-check-circle text-green-600 text-2xl mb-2"></i>
              <p className="text-green-800 font-medium">Your email has been verified successfully!</p>
            </div>
            <p className="text-gray-600 text-sm">
              Redirecting to home page...
            </p>
          </div>
        ) : !showOtpForm ? (
          <div className="space-y-3">
            <button
              onClick={() => {
                handleSendOtp();
                setShowOtpForm(true);
              }}
              disabled={sendingOtp}
              className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sendingOtp ? (
                <>
                  <span className="spinner-border spinner-border-sm"></span>
                  Sending OTP...
                </>
              ) : (
                <>
                  <i className="bi bi-send"></i>
                  Verify Email Now
                </>
              )}
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
            >
              Skip for Later
            </button>
          </div>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={handleChange}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
              {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            </div>
            <div className="space-y-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Verifying...
                  </>
                ) : (
                  'Verify Email'
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full text-gray-600 py-2 rounded-lg font-medium hover:text-gray-800 transition-all"
              >
                Skip for Now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;