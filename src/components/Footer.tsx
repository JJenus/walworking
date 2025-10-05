import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Fire Safety</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Get the latest fire safety tips, industry updates, and exclusive offers delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-secondary-100 transition-colors font-medium flex items-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">WalWorking Technologies</h3>
                <p className="text-secondary-400 text-sm">Fire Protection & Safety</p>
              </div>
            </div>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Nigeria's trusted partner for comprehensive fire protection and safety solutions. 
              Protecting lives and property with professional expertise and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/walworkingtech"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/walworkingtech"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/walworkingtech"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/walworkingtech"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-400 hover:text-white transition-colors">
                  Training & Certification
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-secondary-400">Fire Equipment Sales</li>
              <li className="text-secondary-400">System Installation</li>
              <li className="text-secondary-400">Maintenance Services</li>
              <li className="text-secondary-400">Safety Training</li>
              <li className="text-secondary-400">Fire Consultancy</li>
              <li className="text-secondary-400">PPE Solutions</li>
              <li className="text-secondary-400">Emergency Response</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-400">
                    123 Fire Safety Street,<br />
                    Victoria Island, Lagos,<br />
                    Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-secondary-400">+234 810 698 1539</p>
                  <p className="text-secondary-500 text-sm">Main Office</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-secondary-400">+234 915 106 0130</p>
                  <p className="text-primary-400 text-sm font-medium">Secondary Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-secondary-400">walworkingtechnologiesltd@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-secondary-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-secondary-500 text-sm">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-secondary-400 text-sm">
              <p>&copy; {currentYear} Wal Working Technologies Limited. All rights reserved.</p>
              <p className="mt-1">Licensed Fire Protection & PPE Supply Company</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-secondary-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-secondary-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-secondary-400 hover:text-white transition-colors text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-secondary-800">
            <div className="text-center">
              <p className="text-secondary-500 text-sm mb-4">Certified & Accredited By:</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-secondary-600 font-bold">ISO 9001:2008</div>
                <div className="text-secondary-600 font-bold">ISO 14001:2004</div>
                <div className="text-secondary-600 font-bold">OHSAS 18001</div>
                <div className="text-secondary-600 font-bold">IMO: ISM Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;