import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

// Reusable Stat Circle Component
const StatCircle = ({ percent, label }) => {
  const circleVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: percent / 100,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative flex flex-col items-center">
      <svg width="100" height="100" className="mb-2">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#d1d5db"
          strokeWidth="10"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="#007BFF"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          variants={circleVariants}
        />
      </svg>
      <span className="absolute top-10 text-xl font-bold">{percent}%</span>
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-center text-sm">
        {label}
      </p>
    </div>
  );
};

const TeamMemberCard = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-blue-50 dark:bg-gray-900 p-6 rounded-xl grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Info */}
      <div className="flex flex-col items-center gap-4 text-center">
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full border-2 border-blue-500" />
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      Noor Mohammed
    </h2>
  </div>
  <p className="text-gray-500 dark:text-gray-300">Founder & CEO</p>

  <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-xl mt-2">
    <FaFacebookF aria-label="Facebook" />
    <FaInstagram aria-label="Instagram" />
    <FaTwitter aria-label="Twitter" />
    <FaLinkedin aria-label="LinkedIn" />
  </div>

  <img
    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://fawtech.ae"
    alt="QR Code to Fawtech Website"
    className="w-28 h-28 mt-4"
  />
</div>


      {/* Right Side - Mission and Stats */}
      <div ref={ref} className="flex flex-col gap-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          Founded in 2023, Fawtech Electronics Trading L.L.C is a Dubai-based electronics company
          dedicated to delivering premium gaming consoles, IT peripherals, and consumer electronics.
          With a strong presence in DAFZA and JAFZA, we ensure fast and efficient global distribution.
          Our commitment lies in offering high-performance products, competitive pricing, and
          exceptional customer support across markets in the Middle East and beyond.
        </p>

        <div className="flex items-center gap-8">
          {inView && (
            <>
              <StatCircle percent={92} label="Global Reach" />
              <StatCircle percent={100} label="Client Satisfaction" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
