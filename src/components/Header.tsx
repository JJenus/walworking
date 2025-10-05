import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Training', href: '/training' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine text and background colors based on scroll state and page type
  const getNavStyles = () => {
    if (isHomePage && !isScrolled) {
      return {
        bgColor: 'bg-transparent',
        textColor: 'text-white',
        logoTextColor: 'text-white',
        subtitleColor: 'text-gray-200',
        menuButtonColor: 'text-white'
      };
    } else {
      return {
        bgColor: 'bg-white',
        textColor: 'text-gray-700',
        logoTextColor: 'text-gray-900',
        subtitleColor: 'text-gray-600',
        menuButtonColor: 'text-gray-900'
      };
    }
  };

  const navStyles = getNavStyles();

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}>
      {/* Emergency Contact Bar - No margin at top */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+2341234567890" 
                className="flex items-center hover:text-red-200 transition-colors"
                aria-label="Emergency contact number"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency: +234 (0) 123 456 7890
              </a>
              <a 
                href="mailto:emergency@walworkingtech.com" 
                className="hidden sm:flex items-center hover:text-red-200 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                emergency@walworkingtech.com
              </a>
            </div>
            <div className="text-xs font-medium">
              24/7 Emergency Response Available
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Full width background */}
      <div className={`w-full transition-all duration-300 ${navStyles.bgColor}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg ${navStyles.logoTextColor}`}>
                  WalWorking Technologies
                </span>
                <span className={`text-xs ${navStyles.subtitleColor}`}>
                  Fire Protection & Safety Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-red-600 border-b-2 border-red-600'
                      : `${navStyles.textColor} hover:text-red-600`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${navStyles.menuButtonColor}`}
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      location.pathname === item.href
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full text-left bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors font-medium mt-4"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;