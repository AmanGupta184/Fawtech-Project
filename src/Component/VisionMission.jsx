import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from "react-icons/hi2";

function VisionMission() {
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
            Our Vision & Mission
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base max-w-3xl mx-auto">
            At Fawtech, we innovate, connect, and elevate lives through premium, sustainable electronic solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-start gap-6"
          >
            <HiOutlineLightBulb className="text-blue-600 dark:text-blue-400 w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Vision
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <p>
                  We aim to become a premium destination for Computer & IT Peripherals shopping.
                </p>
                <p>
                  Representing top-tier international brands in the Computers & Electronics space, we bridge quality and innovation.
                </p>
                <p>
                  Our vision is to empower a smarter, more connected world through reliable and sustainable technology that enhances everyday life and shapes the future.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-start gap-6"
          >
            <HiOutlineRocketLaunch className="text-blue-600 dark:text-blue-400 w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Mission
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <p>
                  We strive to build and operate a world-class digital shopping destination that provides an immersive, seamless experience to our customers and long-term value to stakeholders.
                </p>
                <p>
                  Our mission is to deliver high-performance and sustainable electronic products and solutions that improve how people live, work, and connect globally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
