import React, { useState } from "react";
import { motion } from "framer-motion";
// import Image from "../Assets/Images/Image1.jpg";
// import { Logo } from "../Context/Logo";
import Layout from "../Layout/Layout";
import { GiGameConsole } from "react-icons/gi";
import { PiGraphicsCardLight, PiHairDryerLight } from "react-icons/pi";
import { TfiApple } from "react-icons/tfi";
import { BsSpeaker } from "react-icons/bs";
import MissionSection from "../Component/MissionSection";
import TeamMemberCard from "../Component/TeamMemberCard";
import TestimonialsPage from "../Component/TestimonialsPage";
import AboutHead from "../Component/AboutHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Gaming Consoles",
    description:
      "We offer a range of gaming consoles from top manufacturers, including PlayStation, Xbox, and Nintendo.",
    icon: <GiGameConsole className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Dyson Products",
    description:
      "Our selection includes Dyson vacuums, air purifiers, and more. Known for innovative design and performance.",
    icon: <PiHairDryerLight className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Graphic Cards",
    description:
      "For gamers and professionals, our graphic cards from NVIDIA and AMD deliver outstanding visuals and performance.",
    icon: <PiGraphicsCardLight className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Apple Accessories",
    description:
      "We carry a variety of Apple accessories, including cases, chargers, and more, designed to complement your Apple devices.",
    icon: <TfiApple className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "JBL Speakers",
    description:
      "Experience premium sound with our JBL speakers, suitable for music lovers and gamers alike.",
    icon: <BsSpeaker className="w-8 h-8 text-blue-600" />,
  },
];

function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Layout>
      <div className="dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        {/* Hero Section */}
        <header className="relative dark:from-gray-950 dark:to-gray-900">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-900 opacity-20 dark:opacity-40"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center pt-28">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white tracking-tight"
            >
              About Fawtech
            </motion.h1>
          </div>
        </header>

        {/* Mission Section */}
        <AboutHead/>

        {/* Mission Section */}
        <MissionSection />

        {/* Team Member Section */}
        <TeamMemberCard />
        
        {/* Team Member Section */}
        <TestimonialsPage />

        {/* Services Flip Cards */}
        <section className="bg-blue-50 dark:bg-gray-900 py-16 px-4">
          <div className="flex justify-center overflow-x-auto gap-6">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="perspective-1000 min-w-[16rem]"
                >
                  <div className="relative w-full h-80">
                    <motion.div
                      animate={{ rotateY: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full transform-style-preserve-3d transition-transform duration-500 rounded-xl shadow-lg"
                    >
                      <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center rounded-xl h-full">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col justify-center text-left rounded-xl h-full">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
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
