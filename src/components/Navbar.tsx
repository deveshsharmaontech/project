import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Collection Points', path: '/collection-points' },
    { name: 'What to Recycle', path: '/what-to-recycle' },
    { name: 'Events', path: '/events' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    viewBox="0 0 64 64"
    fill="none"
  >
    <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" />
    <path
      d="M32 12C24 20 22 28 28 34C34 40 42 38 50 30"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 12C38 20 40 28 34 34C28 40 20 38 12 30"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M26 38L28 42"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M38 38L36 42"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
  <span className="font-bold text-xl">GreenTech Recycle</span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;