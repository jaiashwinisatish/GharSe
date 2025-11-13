import { ChefHat, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-brand-orange" />
              <span className="text-2xl font-bold text-white font-display">GharSe</span>
            </div>
            <p className="text-sm mb-4">
              Connecting home cooks with food lovers. Fresh, homemade, healthy meals delivered to your door.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-brand-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-brand-orange transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('order')} className="hover:text-brand-orange transition-colors">
                  Order Food
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-brand-orange transition-colors">
                  Party & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tiffin')} className="hover:text-brand-orange transition-colors">
                  Tiffin Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-brand-orange transition-colors">
                  Blog & Community
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Partners</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('become-chef')} className="hover:text-brand-orange transition-colors">
                  Become a Chef
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cook-dashboard')} className="hover:text-brand-orange transition-colors">
                  Cook Dashboard
                </button>
              </li>
              <li>
                <button className="hover:text-brand-orange transition-colors">
                  Partner FAQs
                </button>
              </li>
              <li>
                <button className="hover:text-brand-orange transition-colors">
                  Guidelines
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Food Street, Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm">hello@gharse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 GharSe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
              Terms of Service
            </button>
            <button className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
