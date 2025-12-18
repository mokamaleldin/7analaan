import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-orange-500">حان</span>{' '}
              <span className="text-gray-900">الآن</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                الرئيسية
              </Link>
              <Link
                to="/podcast"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/podcast') 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                البودكاست
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-white'
                }`}
              >
                الرئيسية
              </Link>
              <Link
                to="/podcast"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/podcast') 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-white'
                }`}
              >
                البودكاست
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-white'
                }`}
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;