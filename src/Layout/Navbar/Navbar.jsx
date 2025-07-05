import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./FawtechLogo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Simulate loading for 1.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for navbar
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  // Animation variants for nav links
  const linkVariants = {
    hover: { scale: 1.1, color: theme === "dark" ? "#93c5fd" : "#2563eb" },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-12 h-12 border-4 border-t-blue-500 border-gray-200 dark:border-gray-700 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar - Only render when loading is complete */}
      {!isLoading && (
        <motion.nav
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
            {/* Logo on the left */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="FawTech Logo"
                  className="h-full max-h-12 w-auto object-contain"
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

            {/* Navigation links and theme toggle on the right */}
            <div className="hidden md:flex items-center space-x-6">
              {["Home", "Products","About", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className={`${
                      theme === "dark"
                        ? "text-gray-100 hover:text-blue-300"
                        : "text-gray-900 hover:text-blue-600"
                    } transition`}
                  >
                    {item === "Products" ? "Products & Categories" : item}
                  </Link>
                </motion.div>
              ))}
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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

            {/* Hamburger menu and theme toggle for mobile */}
            <div className="md:hidden flex items-center space-x-4 overflow-hidden">
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>

          {/* Dropdown menu for mobile */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className={`md:hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                } px-4 pt-2 pb-4 space-y-2 w-full box-border`}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {["Home", "Products", "About", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: {
                        x: 0,
                        opacity: 1,
                        transition: { delay: index * 0.1 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className={`block ${
                        theme === "dark"
                          ? "text-gray-100 hover:bg-gray-700"
                          : "text-gray-900 hover:bg-gray-200"
                      } px-2 py-1 rounded transition`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item === "Products" ? "Products & Categories" : item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;