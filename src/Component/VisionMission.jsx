import React from "react";
import { motion } from "framer-motion";
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
    motionFrom: { x: -40 },
  },
  {
    title: "Mission",
    icon: HiOutlineRocketLaunch,
    description: [
      "We strive to build and operate a world-class digital shopping destination that provides an immersive, seamless experience to our customers and long-term value to stakeholders.",
      "Our mission is to deliver high-performance and sustainable electronic products and solutions that improve how people live, work, and connect globally.",
    ],
    motionFrom: { x: 40 },
  },
];

const VisionMission = () => {
  return (
    <section className="relative py-20 bg-blue-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Vision <span className="text-blue-700">&</span> Mission
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base max-w-3xl mx-auto">
            At Fawtech, we innovate, connect, and elevate lives through premium, sustainable electronic solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, ...item.motionFrom }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row md:items-start gap-6"
              >
                {/* Animated Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Icon className="text-blue-600 dark:text-blue-400 w-10 h-10 flex-shrink-0" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
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
