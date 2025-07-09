import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import {
  GiVirtualMarker,
  GiGamepad,
  GiLaptop,
} from "react-icons/gi";
import { PiHairDryerLight } from "react-icons/pi";
import { MdOutlineDevicesOther } from "react-icons/md";
import MissionSection from "../Component/MissionSection";
import TeamMemberCard from "../Component/TeamMemberCard";
import TestimonialsPage from "../Component/TestimonialsPage";
import AboutHead from "../Component/AboutHead";
import VisionMission from "../Component/VisionMission";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Services data extracted to memoized function
const useServices = () =>
  useMemo(
    () => [
      {
        title: "Dyson Products",
        description:
          "Explore cutting-edge Dyson appliances like hair dryers, vacuums, and air purifiers built with advanced technology.",
        icon: <PiHairDryerLight className="w-8 h-8 text-blue-600" />,
      },
      {
        title: "Gaming Laptop",
        description:
          "Powerful gaming laptops built for high-performance gaming and graphics-intensive tasks with blazing speed.",
        icon: <GiLaptop className="w-8 h-8 text-blue-600" />,
      },
      {
        title: "VR World",
        description:
          "Dive into the immersive world of VR with the latest headsets and experiences that redefine reality.",
        icon: <GiVirtualMarker className="w-8 h-8 text-blue-600" />,
      },
      {
        title: "Gaming Product",
        description:
          "Enhance your setup with keyboards, mice, Headset, and more—everything you need for serious gaming.",
        icon: <MdOutlineDevicesOther className="w-8 h-8 text-blue-600" />,
      },
      {
        title: "Gaming Console",
        description:
          "From PlayStation to Xbox and Nintendo, find your favorite consoles and the latest gaming titles.",
        icon: <GiGamepad className="w-8 h-8 text-blue-600" />,
      },
    ],
    []
  );

function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const services = useServices();

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <Layout>
      <div className="dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        {/* Hero Section */}
        <header className="relative">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-900 opacity-20 dark:opacity-40" />
          <div className="relative max-w-6xl mx-auto px-4 text-center pt-28">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              About <span className="text-blue-700">Fawtech</span>
            </motion.h1>
          </div>
        </header>

        {/* Sections */}
        <AboutHead />
        <VisionMission />
        <MissionSection />
        <TeamMemberCard />
        <TestimonialsPage />

        {/* Services Flip Cards */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full perspective-1000"
                >
                  <div className="relative w-full h-80">
                    <motion.div
                      animate={{ rotateY: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-full transform-style-preserve-3d rounded-xl shadow-lg"
                    >
                      {/* Front */}
                      <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center rounded-xl h-full shadow-2xl hover:shadow-blue-700/70">
                        <div className="bg-blue-100 p-4 rounded-full mb-4 shadow-xl shadow-blue-400">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold">
                          {service.title}
                        </h3>
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col justify-center text-left rounded-xl h-full shadow-2xl hover:shadow-blue-700/70">
                        <h4 className="text-lg font-bold mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AboutPage;
