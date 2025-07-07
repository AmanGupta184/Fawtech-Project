import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./FawtechLogo.png";

const navItems = ["Home", "Products", "About", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const isDark = theme === "dark";
  const isActive = (path) => location.pathname === path;

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const renderThemeIcon = () =>
    isDark ? (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) : (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
      </svg>
    );

  const renderNavLink = (item, index, isMobile = false) => {
    const path = `/${item.toLowerCase()}`;
    const activeColor = isDark ? "text-blue-400" : "text-blue-600";
    const isCurrent = isActive(path);
    const label = item === "Products" ? "Products & Categories" : item;

    return (
      <motion.div
        key={item}
        initial={isMobile ? { opacity: 0, x: -20 } : false}
        animate={isMobile ? { opacity: 1, x: 0 } : false}
        transition={isMobile ? { delay: index * 0.1 } : false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={path}
          onClick={() => isMobile && setMenuOpen(false)}
          className={`transition font-medium ${isDark
            ? "text-gray-100 hover:text-blue-300"
            : "text-gray-900 hover:text-blue-600"} ${isCurrent ? `${activeColor} font-semibold` : ""
            } ${isMobile ? "block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700" : ""}`}
          aria-label={`Navigate to ${label}`}
        >
          {label}
        </Link>
      </motion.div>
    );
  };

  return (
    <motion.nav
      role="navigation"
      className={`fixed top-0 w-full h-20 z-40 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900 shadow-md"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" aria-label="Go to homepage">
          <img src={logo} alt="FawTech Logo" className="h-12 w-auto object-contain" loading="lazy" />
          <span className={`font-extrabold text-xl ${isDark ? "text-gray-100" : "text-blue-600"}`}>
            FawTech
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => renderNavLink(item, index))}
          <motion.button
            onClick={toggleTheme}
            className={`focus:outline-none ${isDark ? "text-gray-100" : "text-blue-600"}`}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {renderThemeIcon()}
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className={`focus:outline-none ${isDark ? "text-gray-100" : "text-blue-600"}`}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {renderThemeIcon()}
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${isDark ? "text-gray-100" : "text-blue-600"}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className={`md:hidden px-4 pt-2 pb-4 space-y-2 w-full ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, index) => renderNavLink(item, index, true))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
