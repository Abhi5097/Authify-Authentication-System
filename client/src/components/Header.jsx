import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileAvatar from './ProfileAvatar';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isAuthenticated) return null;

  return (
    <header className="bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900 shadow-md shadow-blue-900/30 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center">
              <i className="bi bi-shield-check text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              Authify
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            {!user?.isAccountVerified && (
              <Link to="/email-verify" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Verify Email
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-blue-100">
              <button className="hover:text-blue-400 transition-colors duration-300 ease-in-out flex items-center gap-2 cursor-pointer">
                <i className="bi bi-cloud-upload text-xs"></i>
                Upload Files
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300 ease-in-out flex items-center gap-2 cursor-pointer">
                <i className="bi bi-database text-xs"></i>
                Your Data
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300 ease-in-out flex items-center gap-2 cursor-pointer">
                <i className="bi bi-person-gear text-xs"></i>
                Update Profile
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300 ease-in-out flex items-center gap-2 cursor-pointer">
                <i className="bi bi-gear text-xs"></i>
                Settings
              </button>
            </div>
            <ProfileAvatar />
            <button
              onClick={handleLogout}
              className="hidden md:block px-4 py-2 bg-red-500/80 backdrop-blur-sm border border-red-400/30 text-white rounded-lg font-medium hover:bg-red-500 hover:shadow-red-500/25 hover:shadow-lg transition-all duration-300"
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;