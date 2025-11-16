import { useState } from 'react';
import { Menu, X, ShoppingCart, User, ChefHat, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
    onNavigate('home');
  };

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Order Food', path: 'order' },
    { name: 'Party & Events', path: 'events' },
    { name: 'Tiffin Plans', path: 'tiffin' },
    { name: 'Blog', path: 'blog' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <ChefHat className="h-8 w-8 text-brand-orange" />
            <span className="text-2xl font-bold text-gray-900 font-display">
              GharSe
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.path
                    ? 'text-brand-orange'
                    : 'text-gray-700 hover:text-brand-orange'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {profile?.role !== 'cook' && (
              <button
                onClick={() => onNavigate('become-chef')}
                className="px-4 py-2 text-sm font-medium text-brand-orange border border-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-all"
              >
                Become a Chef
              </button>
            )}
            {user && (
              <button className="relative p-2 text-gray-700 hover:text-brand-orange transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute top-0 right-0 bg-brand-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            )}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 text-gray-700 hover:text-brand-orange transition-colors"
                >
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt={profile.full_name} className="h-8 w-8 rounded-full object-cover" />
                  ) : (
                    <User className="h-6 w-6" />
                  )}
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="font-medium text-gray-900">{profile?.full_name}</p>
                      <p className="text-sm text-gray-600">{profile?.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        onNavigate(profile?.role === 'cook' ? 'cook-dashboard' : 'customer-dashboard');
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600 flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="px-4 py-2 bg-brand-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-all"
              >
                Sign In
              </button>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  currentPage === link.path
                    ? 'bg-brand-cream text-brand-orange font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('become-chef');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-brand-orange font-medium border border-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-all"
            >
              Become a Chef
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
