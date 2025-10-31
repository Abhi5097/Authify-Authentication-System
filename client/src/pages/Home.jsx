import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const { user } = useAuth();
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const features = [
    {
      icon: 'bi bi-shield-lock',
      title: 'Secured',
      description: 'Your data is protected with industry-standard encryption and security protocols. We prioritize your privacy and security above all.',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
      icon: 'bi bi-patch-check',
      title: 'Verified Users',
      description: 'Join thousands of verified users who trust our platform. Email verification ensures authentic and secure user accounts.',
      gradient: 'bg-gradient-to-br from-green-500 to-green-700'
    },
    {
      icon: 'bi bi-headset',
      title: 'Customer Support',
      description: '24/7 dedicated support team ready to assist you. Get help whenever you need it with our responsive customer service.',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    {
      icon: 'bi bi-envelope-check',
      title: 'Email Verification',
      description: 'Secure your account with email verification. Protect against unauthorized access and ensure account authenticity.',
      gradient: 'bg-gradient-to-br from-pink-500 to-pink-700'
    }
  ];

  const handleGetStarted = () => {
    setShowFeatures(true);
    document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContinue = () => {
    setShowAuth(true);
    document.getElementById('auth-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      {!user && (
        <section id="hero-section" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-950 via-purple-800 to-indigo-700 text-white relative overflow-hidden">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(99,102,241,0.1)_75%)] bg-[length:60px_60px] animate-pulse"></div>
          </div>

          {/* Security Icons Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="grid grid-cols-3 gap-16 text-6xl">
              <i className="bi bi-shield-lock"></i>
              <i className="bi bi-key"></i>
              <i className="bi bi-fingerprint"></i>
            </div>
          </div>

          {/* Glowing Particles */}
          <div className="absolute top-16 left-16 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-24 left-32 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-16 right-16 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>

          <div className="container mx-auto max-w-6xl relative z-10 px-4">
            <div className="animate-fadeIn space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-white drop-shadow-2xl">
                  Authify
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mt-4 max-w-2xl mx-auto font-medium drop-shadow-lg">
                  Your Security, Our Priority
                </p>
              </div>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg hover:shadow-blue-400/50 transition-all duration-500 ease-in-out transform hover:scale-105 px-10 py-5 rounded-xl font-bold text-xl text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {user || showFeatures ? (
        <section id="features-section" className="p-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose Authify?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience top-tier security and seamless authentication
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fadeIn transition-transform hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>

            {/* Continue button for non-logged users */}
            {!user && showFeatures && (
              <div className="text-center mt-16">
                <button
                  onClick={handleContinue}
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg transform hover:scale-105"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* Auth Section */}
      {!user && showAuth && (
        <section id="auth-section" className="p-8 bg-gray-100">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center space-y-4 p-8 bg-gray-100 rounded-md">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get Started
                </h2>
                <p className="text-xl text-gray-600">
                  Choose how you'd like to proceed
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg transform hover:scale-105 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg transform hover:scale-105 text-center"
                >
                  New Register
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <i className="bi bi-shield-check text-white text-xl"></i>
                </div>
                <span className="text-2xl font-bold">Authify</span>
              </div>
              <p className="text-gray-400">
                Secure authentication platform for modern applications.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/email-verify" className="hover:text-white transition-colors">Verify Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <i className="bi bi-envelope"></i>
                  support@authify.com
                </li>
                <li className="flex items-center gap-2">
                  <i className="bi bi-telephone"></i>
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Authify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;