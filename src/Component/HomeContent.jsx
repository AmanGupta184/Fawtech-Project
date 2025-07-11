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
    <div className="bg-white dark:bg-gray-950  transition-colors duration-500">
      <motion.section
        ref={ref}
        className="flex items-center justify-center px-6 pb-6  pt-24"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="max-w-4xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-2"
            variants={fadeInUp}
          >
            <FaCheckCircle className="text-blue-500" />
            Trusted partner in business excellence
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Fawtech Electronics is UAE's leading electronics store.
            <p className="text-blue-600 text-center">
              Modernization{" "}
              <span className="text-black dark:text-white">& Technologies</span>
            </p>
          </motion.h1>

          <motion.p
            className="mt-2 text-xs md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            One stop destination for all electronics products like
            Professional & Gaming Laptops, Gaming Console, DJI Products, Dyson Products,VR and many more.
          </motion.p>

          <motion.div
            className=" flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={fadeInUp}
          >
            <motion.button
              onClick={handleLearnMore}
              className="relative overflow-hidden flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full group transition-all duration-300"
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
