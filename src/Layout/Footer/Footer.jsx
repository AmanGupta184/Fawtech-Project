import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Navbar/fawtech.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for footer
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  // Animation variants for hover effects
  const hoverVariants = {
    hover: { scale: 1.05, color: "#2563eb" }, // Blue accent on hover
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

      <motion.footer
        className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-6 mt-auto box-border overflow-x-hidden"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {/* About Section */}
          <motion.div
            className="min-w-0 mb-5"
            custom={0}
            variants={sectionVariants}
          >
            <motion.img
              src={logo}
              alt="FawTech Logo"
              className="h-20 w-40 pl-4 object-contain"
              whileHover={{ scale: 1.1 }}
            />
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              <span>Your one-stop shop for the latest electronics</span>
              <span> and gadgets. Stay connected with us!</span>
            </p>
          </motion.div>

          {/* Shop Categories */}
          <motion.div
            className="mb-5"
            custom={1}
            variants={sectionVariants}
          >
            <h4 className="font-semibold mb-2">Shop Categories</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
              <li>Custom PC</li>
              <li>PC Components</li>
              <li>Console</li>
              <li>SD Memory</li>
              <li>Tablets</li>
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            className="mb-5"
            custom={2}
            variants={sectionVariants}
          >
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mb-5"
            custom={3}
            variants={sectionVariants}
          >
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Store Address: <span>113, ELHAM MOHAMED AMIN MIRZA,</span>
              <span> ABU HAIL DUBAI, U.A.E</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Timings: 11am-6pm (Mon-Sat) Sunday Holiday
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Mail: noor@fawtech.co
            </p>
            <div className="flex space-x-2 mt-2">
              <motion.a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Facebook
              </motion.a>
              <motion.a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Twitter
              </motion.a>
              <motion.a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-5 border-t border-gray-400 dark:border-gray-600 pt-3 text-center text-sm text-gray-600 dark:text-gray-300"
          custom={4}
          variants={sectionVariants}
        >
          © {currentYear} Fawtech Electronics Trading LLC. All rights reserved.
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;