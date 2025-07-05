import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion"; // Removed AnimatePresence
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function HomeContent() {
  const navigate = useNavigate();

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();

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
            Fawtech Electronics is UAE's leading online electronics store. {" "}
            <p className="text-blue-600">Modernization{" "}<span className="text-black">& Technologies</span> </p>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            One stop destination for all electronics products like Mobiles,Laptops,Gaming PC,Drones,Dyson Products and many more..
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