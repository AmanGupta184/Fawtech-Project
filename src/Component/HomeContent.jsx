import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false),100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.1 },
    },
    tap: {
      scale: 0.97,
    },
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
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
        ref={ref}
        className="flex items-center justify-center px-6 py-24 min-h-[80vh]"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="max-w-4xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-6"
            variants={fadeInUp}
          >
            <FaCheckCircle className="text-blue-500" />
            Trusted partner in business excellence
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Welcome to Fawtech Electronics Trading {" "}
            <span className="text-blue-600">Innovations</span> Technologies
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Your trusted source for cutting-edge electronics and IT peripherals, delivering innovation and quality.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={fadeInUp}
          >
            <motion.button
              onClick={handleLearnMore}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition dark:bg-gray-700 dark:hover:bg-gray-600"
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <FaArrowRight />
              Learn more
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default HomeContent;