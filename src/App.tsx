import { useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OrderFoodPage from './pages/OrderFoodPage';
import EventsPage from './pages/EventsPage';
import TiffinPage from './pages/TiffinPage';
import BecomeChefPage from './pages/BecomeChefPage';
import CustomerDashboard from './pages/CustomerDashboard';
import CookDashboard from './pages/CookDashboard';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user && currentPage !== 'home') {
      setCurrentPage('home');
    }
  }, [user, loading, currentPage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onNavigate={setCurrentPage} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'order':
        return <OrderFoodPage />;
      case 'events':
        return <EventsPage />;
      case 'tiffin':
        return <TiffinPage />;
      case 'become-chef':
        return <BecomeChefPage />;
      case 'customer-dashboard':
        if (!user) {
          setCurrentPage('home');
          return null;
        }
        return <CustomerDashboard />;
      case 'cook-dashboard':
        if (!user || profile?.role !== 'cook') {
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center max-w-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
                <p className="text-gray-600 mb-6">
                  You don't have permission to access the cook dashboard.
                </p>
                <button
                  onClick={() => setCurrentPage('home')}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                >
                  Go to Home
                </button>
              </div>
            </div>
          );
        }
        return <CookDashboard />;
      case 'blog':
        return <BlogPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
