import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2 cursor-pointer">
         {/*for image */}


          {/* Optional: site name next to logo */}
          <span className="text-white font-semibold text-xl">FawTech</span>
        </div>
        {/* Navigation links on the right */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/products" className="text-white hover:text-gray-300">Products & Categories</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        {/* Hamburger menu for mobile, on the right */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">Home</Link>
          <Link to="/about" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">About</Link>
          <Link to="/products" className="block text-white hover:text-gray-300 px-2 py-1 rounded">Products & Categories</Link>
          <Link to="/contact" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;