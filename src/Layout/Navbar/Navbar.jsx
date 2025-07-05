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

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

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

  const linkVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      role="navigation"
      className={`fixed top-0 w-full h-20 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900 shadow-md"
      } transition-colors duration-300 z-40 box-border`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" aria-label="Go to homepage">
            <img
              src={logo}
              alt="FawTech Logo"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </Link>
          <Link
            to="/"
            className={`font-extrabold text-xl ${
              theme === "dark" ? "text-gray-100" : "text-blue-600"
            }`}
          >
            FawTech
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isCurrent = isActive(path);
            const activeColor =
              theme === "dark" ? "text-blue-400" : "text-blue-600";

            return (
              <motion.div
                key={item}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={path}
                  className={`transition font-medium ${
                    theme === "dark"
                      ? "text-gray-100 hover:text-blue-300"
                      : "text-gray-900 hover:text-blue-600"
                  } ${isCurrent ? `${activeColor} font-semibold` : ""}`}
                  aria-label={`Navigate to ${item}`}
                >
                  {item === "Products" ? "Products & Categories" : item}
                </Link>
              </motion.div>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`focus:outline-none ${
              theme === "dark" ? "text-gray-100" : "text-blue-600"
            }`}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className={`focus:outline-none ${
              theme === "dark" ? "text-gray-100" : "text-blue-600"
            }`}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </motion.button>

          <motion.button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              theme === "dark" ? "text-gray-100" : "text-blue-600"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
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
            className={`md:hidden ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } px-4 pt-2 pb-4 space-y-2 w-full box-border`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, index) => {
              const path = `/${item.toLowerCase()}`;
              const isCurrent = isActive(path);
              const activeColor =
                theme === "dark" ? "text-blue-400" : "text-blue-600";

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={path}
                    className={`block px-2 py-1 rounded transition ${
                      theme === "dark"
                        ? "text-gray-100 hover:bg-gray-700"
                        : "text-gray-900 hover:bg-gray-200"
                    } ${isCurrent ? `${activeColor} font-semibold` : ""}`}
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Navigate to ${item}`}
                  >
                    {item === "Products" ? "Products & Categories" : item}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
