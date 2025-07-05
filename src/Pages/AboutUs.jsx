import React, { useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
// import Image from "../Assets/Images/Image1.jpg";
// import { Logo } from "../Context/Logo";
=======
import Image from "../Assets/Images/Image1.jpg";
import "swiper/css";
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
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
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
<<<<<<< HEAD
        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-blue-200 to-blue-100 dark:from-gray-950 dark:to-gray-900 h-96 py-16 md:py-24">
=======
        {/* Hero Header */}
        <header className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 py-16 md:py-24">
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-900 opacity-20 dark:opacity-40"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
<<<<<<< HEAD
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-10 dark:text-white mb-6 tracking-tight"
            >
              About Fawtech
            </motion.h1>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto font-bold space-y-4 text-gray-600 dark:text-gray-200 text-base md:text-lg"
            >
              <p>
                We aim to provide the "most out of the products for the best prices," ensuring innovation, performance, and sustainability in every solution we offer.
              </p>
            </motion.div>
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
=======
              animate="visible"
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight"
            >
              About Fawtech
            </motion.h1>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto space-y-4 text-gray-600 dark:text-gray-200 text-base md:text-lg"
            >
              <p>
                Founded in 2023, Fawtech Electronics Trading L.L.C is a
                Dubai-based electronics company specializing in gaming products,
                IT peripherals, graphics cards, memory cards, tablets, and
                wearable devices.
              </p>
              <p>
                Strategically located in Dubai, surrounded by international
                banks and hotels, Fawtech leverages its position in DAFZA and
                JAFZA for efficient global distribution.
              </p>
              <p>
                We aim to provide the "most out of the products for the best
                prices," ensuring innovation, performance, and sustainability in
                every solution we offer.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Our Founder Section */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
          >
            <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4">
              Our Founder
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              FawTech was founded by Noor Mohammed in 2023, right here in Dubai.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Noor has positioned FawTech to deliver innovation and reliability
              across global markets.
            </p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
            >
              <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We are committed to providing cutting-edge electronic products
                that combine technology, quality, and affordability.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our goal is to innovate continuously and serve our customers
                with excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={Image}
                alt="Electronics Lab"
                className="w-full max-w-md rounded-xl shadow-lg object-cover h-64"
              />
            </motion.div>
          </div>
        </section>

        {/* Product Portfolio */}
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
        <section className="bg-blue-50 dark:bg-gray-900 py-16 px-4">
          <div className="flex justify-center overflow-x-auto gap-6">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
<<<<<<< HEAD
=======

>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
<<<<<<< HEAD
                  className="perspective-1000 min-w-[16rem]"
=======
                  className="perspective-1000 min-w-[16rem]" // fixed width
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
                >
                  <div className="relative w-full h-80">
                    <motion.div
                      animate={{ rotateY: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full transform-style-preserve-3d transition-transform duration-500 rounded-xl shadow-lg"
                    >
<<<<<<< HEAD
                      <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center rounded-xl h-full">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">{service.icon}</div>
=======
                      {/* Front */}
                      <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center rounded-xl h-full">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                          {service.icon}
                        </div>
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
<<<<<<< HEAD
=======

                      {/* Back */}
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
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
<<<<<<< HEAD
=======

        {/* CTA Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto py-12 px-4 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base md:text-lg">
              Contact us today and discover how we can help you upgrade your
              electronics experience.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-700 dark:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-800 dark:hover:to-indigo-800 transition-colors duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.section>
>>>>>>> ab9fea4c560314356d5698acf1fc6707b1e018a5
      </div>
    </Layout>
  );
}

export default AboutPage;
