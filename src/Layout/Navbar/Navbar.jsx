import React, { useState } from 'react';

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
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/services" className="text-white hover:text-gray-300">Services</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
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
          <a href="/" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">Home</a>
          <a href="/about" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">About</a>
          <a href="/services" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">Services</a>
          <a href="/contact" className="block text-white hover:bg-gray-600 px-2 py-1 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;