import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext'; // Assuming a ThemeContext for theme management

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // Use context to manage theme
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 dark:bg-gray-900 p-4 shadow-md transition-colors duration-300 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-white dark:text-gray-100 font-semibold text-xl">FawTech</span>
        </div>
        {/* Navigation links and theme toggle on the right */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400">About</Link>
          <Link to="/products" className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400">Products</Link>
          <Link to="/contact" className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400">Contact</Link>
          <button
            onClick={toggleTheme}
            className="text-white dark:text-gray-100 focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
        </div>
        {/* Hamburger menu and theme toggle for mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-white dark:text-gray-100 focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="text-white dark:text-gray-100 focus:outline-none"
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
        <div className="md:hidden bg-gray-700 dark:bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-white dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-700 px-2 py-1 rounded">Home</Link>
          <Link to="/about" className="block text-white dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-700 px-2 py-1 rounded">About</Link>
          <Link to="/products" className="block text-white dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-700 px-2 py-1 rounded">Products & Categories</Link>
          <Link to="/contact" className="block text-white dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-700 px-2 py-1 rounded">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;