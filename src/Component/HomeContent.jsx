import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  // Animation variants for card
  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    tap: { scale: 0.98 },
  };

  return (
    <div>
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

      <motion.section
        id="home"
        className="flex items-center justify-center py-20 px-6 mt-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto text-center">
          {/* Hero Section */}
          <motion.div
            className="mb-16"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-200 dark:to-gray-300"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Fawtech Electronics Trading
            </motion.h2>
            <motion.p
              className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Your trusted source for cutting-edge electronics and IT peripherals, delivering innovation and quality.
            </motion.p>
          </motion.div>

          {/* Vision Card */}
          {/* <motion.div
            className="max-w-3xl mx-auto"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="group relative bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl dark:shadow-gray-700 transition-all duration-500 hover:shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <h3 className="relative text-4xl font-bold mb-4 text-gray-900 dark:text-gray-200">
                Our Vision
              </h3>
              <p className="relative text-gray-600 dark:text-gray-300 text-lg font-bold leading-relaxed">
                To lead as the premier destination for computer and IT peripherals, representing top international brands and driving a smarter, connected world through innovative and sustainable solutions.
              </p>
            </motion.div>
          </motion.div> */}
        </div>
      </motion.section>
    </div>
  );
}

export default HomeContent;