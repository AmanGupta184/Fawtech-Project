import React, { memo, useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { FaPlus, FaTimes } from "react-icons/fa";
import p1 from "../Assets/Person/p1.jpg";
import p2 from "../Assets/Person/p2.jpg";
import p3 from "../Assets/Person/p3.jpg";
import {stats} from "../Context/MissionSectionData";

const avatars = [p1, p2, p3];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// ✅ Fixed: return <span> instead of <div>
const AnimatedCounter = ({ end, suffix }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <span ref={ref}>
      {show && <CountUp end={end} duration={2} />}
      {suffix}
    </span>
  );
};

const ImpactStatsSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  return (
    <motion.section
      className="px-6 py-10 lg:py-6 bg-white dark:bg-[#0f172a] text-black dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div custom={1} variants={itemVariants} className="space-y-6">
          <h2 className="text-4xl font-bold">
            Fawtech <span className="text-blue-600">Electronics</span>
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p>At Fawtech, we believe technology should be fast, affordable, and everywhere.</p>
            <p>
              We empower businesses and gamers with cutting-edge electronics and seamless distribution.
            </p>
          </div>

          {/* CTA & Avatars */}
          <div className="mt-6 flex flex-col gap-4">
            {/* CTA Tagline */}
            <motion.div
              onClick={() => setModalOpen(true)}
              className="relative w-fit px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 shadow-[0_0_12px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Empowering Smart Living Through Innovation</span>

              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-white opacity-10 mix-blend-overlay pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Avatars */}
            <div className="flex items-center space-x-[-10px]">
              {avatars.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Team Member ${i + 1}`}
                  loading="lazy"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * i, duration: 0.4 }}
                  viewport={{ once: false }}
                />
              ))}
              <motion.div
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: avatars.length * 0.2, duration: 0.4 }}
                viewport={{ once: false }}
              >
                <FaPlus />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid divide-y border rounded-lg overflow-hidden border-gray-200 dark:divide-gray-700 dark:border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row px-6 py-6 gap-4 transition-transform"
            >
              <div className="md:w-1/3">
                {/* ✅ FIXED: div used instead of p to avoid nesting issue */}
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
              <div className="md:w-2/3 flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 mt-1 bg-blue-500 rounded-full shrink-0" />
                <p>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl p-6 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                onClick={() => setModalOpen(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold mb-2">About Fawtech</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fawtech is your trusted partner in delivering smart electronics,
                IT peripherals, and innovative solutions across the globe.
                We're committed to technology that empowers businesses and lifestyles.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default memo(ImpactStatsSection);
