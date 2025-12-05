import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Signup and start enjoying the benefits today!
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email ✉" 
                required
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap"
>
Sign Up
</button>
</form>
<div className="flex gap-3 flex-wrap">
<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
<Facebook size={18} />
</a>
<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
<Twitter size={18} />
</a>
<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
<Instagram size={18} />
</a>
<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
<Linkedin size={18} />
</a>
<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
<Youtube size={18} />
</a>
</div>
</div>
{/* Logo & Network */}
      <div>
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
            <path d="M12 2L4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-8-5zm0 2.5L18 8v9H6V8l6-3.5z"/>
          </svg>
        </div>
        <h4 className="font-bold mb-3 text-lg">Network</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
        </ul>
      </div>

      {/* Product Links */}
      <div>
        <h4 className="font-bold mb-3 text-lg">Product</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-purple-400 transition-colors">Technology</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">Network</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">Knowledge Centre</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
      <p>&copy; 2024 Lillypad. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;