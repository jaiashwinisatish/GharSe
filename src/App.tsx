import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
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
  const { user, loading } = useAuth();

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
        return (
          <ProtectedRoute onNavigate={setCurrentPage}>
            <CustomerDashboard />
          </ProtectedRoute>
        );
      case 'cook-dashboard':
        return (
          <ProtectedRoute onNavigate={setCurrentPage} requiredRole="cook">
            <CookDashboard />
          </ProtectedRoute>
        );
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
