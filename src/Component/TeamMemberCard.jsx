import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import QR from "../Assets/Person/QR.png";

// Reusable Stat Circle Component
const StatCircle = ({ percent, label, inView }) => {
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
          animate={inView ? "visible" : "hidden"}
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
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div
      className="bg-blue-50 dark:bg-gray-900 p-6 rounded-xl grid md:grid-cols-2 gap-8 items-center"
      ref={ref}
    >
      {/* Left Side - Info */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Noor Mohammed
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-300">Founder & Sales Director</p>

        <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-xl mt-2">
          <FaFacebookF aria-label="Facebook" />
          <FaInstagram aria-label="Instagram" />
          <FaTwitter aria-label="Twitter" />
          <FaLinkedin aria-label="LinkedIn" />
        </div>

        <img
          src={QR}
          alt="QR Code to Fawtech Website"
          className="w-28 h-28 mt-4"
        />
      </div>

      {/* Right Side - Mission and Stats */}
      <div className="flex flex-col gap-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          Founded and led by Noor Mohammed in 2023, a visionary entrepreneur with deep
          expertise in the tech and trading industry, Fawtech continues to grow
          by building strong relationships with global suppliers and clients.
          Under his leadership, the company emphasizes swift delivery,
          transparent service, and strategic partnerships that help businesses
          thrive in an ever-evolving digital landscape.
        </p>

        <div className="flex items-center gap-8">
          <StatCircle percent={83} label="Global Reach" inView={inView} />
          <StatCircle percent={94} label="Client Satisfaction" inView={inView} />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
