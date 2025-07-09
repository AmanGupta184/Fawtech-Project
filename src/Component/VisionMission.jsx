import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from "react-icons/hi2";

const items = [
  {
    title: "Vision",
    icon: HiOutlineLightBulb,
    description: [
      "We aim to become a premium destination for Computer & IT Peripherals shopping.",
      "Representing top-tier international brands in the Computers & Electronics space, we bridge quality and innovation.",
      "Our vision is to empower a smarter, more connected world through reliable and sustainable technology that enhances everyday life and shapes the future.",
    ],
    motionFrom: { x: -20 }, // Reduced for mobile
  },
  {
    title: "Mission",
    icon: HiOutlineRocketLaunch,
    description: [
      "We strive to build and operate a world-class digital shopping destination that provides an immersive, seamless experience to our customers and long-term value to stakeholders.",
      "Our mission is to deliver high-performance and sustainable electronic products and solutions that improve how people live, work, and connect globally.",
    ],
    motionFrom: { x: 20 }, // Reduced for mobile
  },
];

const VisionMission = () => {
  const shouldReduceMotion = useReducedMotion(); // Respect user’s reduced motion preference

  // Adjust animation variants for mobile
  const containerVariants = {
    initial: { opacity: 0, y: 20 }, // Reduced y offset
    animate: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.9, rotate: shouldReduceMotion ? 0 : -5 }, // Subtler rotate
    animate: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <section className="relative py-16 sm:py-20 bg-blue-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full box-sizing-border-box">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our Vision <span className="text-blue-700">&</span> Mission
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            At Fawtech, we innovate, connect, and elevate lives through premium, sustainable electronic solutions.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={{
                  initial: { opacity: 0, x: shouldReduceMotion ? 0 : item.motionFrom.x },
                  animate: { opacity: 1, x: 0 },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 w-full"
              >
                {/* Animated Icon */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 flex justify-center md:justify-start"
                >
                  <Icon className="text-blue-600 dark:text-blue-400 w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.description.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;