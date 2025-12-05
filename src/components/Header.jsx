import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                <path d="M12 2L4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-8-5zm0 2.5L18 8v9H6V8l6-3.5z"/>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Home</a>
            <a href="#network" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Network</a>
            <a href="#product" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Product</a>
            <a href="#technology" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Technology</a>
            <a href="#story" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Our Story</a>
            <a href="#knowledge" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Knowledge Centre</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Contact Us
            </button>
            <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-200">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a href="#home" className="block text-gray-700 hover:text-purple-600 py-2">Home</a>
            <a href="#network" className="block text-gray-700 hover:text-purple-600 py-2">Network</a>
            <a href="#product" className="block text-gray-700 hover:text-purple-600 py-2">Product</a>
            <a href="#technology" className="block text-gray-700 hover:text-purple-600 py-2">Technology</a>
            <a href="#story" className="block text-gray-700 hover:text-purple-600 py-2">Our Story</a>
            <a href="#knowledge" className="block text-gray-700 hover:text-purple-600 py-2">Knowledge Centre</a>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">Contact Us</button>
            <button className="w-full px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">Log In</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;