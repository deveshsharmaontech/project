import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="font-bold text-xl">GreenTech Recycle</span>
            </Link>
            <p className="text-green-200">ई-वेस्ट हटाओ, हरियाली बढ़ाओ</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link to="/collection-points" className="hover:text-green-200">Collection Points</Link></li>
              <li><Link to="/what-to-recycle" className="hover:text-green-200">What to Recycle</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200"><Facebook /></a>
              <a href="#" className="hover:text-green-200"><Twitter /></a>
              <a href="#" className="hover:text-green-200"><Instagram /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Language</h3>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <select className="bg-green-700 text-white rounded px-2 py-1">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} GreenTech Recycle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;