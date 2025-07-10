import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function HomeContent() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="bg-white dark:bg-gray-950 mb-auto transition-colors duration-500">
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
            className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Fawtech Electronics is UAE's leading electronics store.
            <p className="text-blue-600 text-center">
              Modernization{" "}
              <span className="text-black dark:text-white">& Technologies</span>
            </p>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            One stop destination for all electronics products like Mobiles,
            Laptops, Gaming Products, DJI Products, Dyson Products and many more.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={fadeInUp}
          >
            <motion.button
              onClick={handleLearnMore}
              className="relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full group transition-all duration-300"
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaArrowRight />
                Learn more
              </span>

              {/* Liquid fill animation */}
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default HomeContent;
