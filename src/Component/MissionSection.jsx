import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const stats = [
  {
    value: "20M",
    label: "Reach Worldwide",
    description:
      "Creating a global electronics hub that enhances how people live, work, and connect.",
  },
  {
    value: "8.5x",
    label: "Faster Growth",
    description:
      "Growing rapidly by offering cutting-edge products, great service, and market expansion.",
  },
  {
    value: "100+",
    label: "Our Vision",
    description:
      "To lead IT and electronics by representing global brands and driving a smarter future.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MissionSection = () => {
  return (
    <div className="bg-white dark:bg-[#0f172a] text-black dark:text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-xl font-bold leading-tight mb-6">
            Founded in 2023, Fawtech Electronics Trading L.L.C is a Dubai-based electronics company specializing in gaming products, IT peripherals, graphics cards, memory cards, tablets, and wearable devices.
          </h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
            <p>
              Strategically located in Dubai, surrounded by international banks and hotels, Fawtech leverages its position in DAFZA and JAFZA for efficient global distribution.
            </p>
            <p>
              We aim to provide the "most out of the products for the best prices," ensuring innovation, performance, and sustainability in every solution we offer.
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <button className="flex items-center bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition">
              <FaArrowRight className="mr-2" />
              Know our mission
            </button>

            <div className="flex items-center space-x-[-10px] ml-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="avatar2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="avatar3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white">
                <FaPlus />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row px-6 py-6 gap-4 transition-transform"
            >
              <div className="md:w-1/3">
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
              </div>
              <div className="md:w-2/3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-1 bg-blue-500 rounded-full"></span>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSection;
