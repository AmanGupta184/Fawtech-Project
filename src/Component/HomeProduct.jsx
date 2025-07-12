import React from "react";
import { motion } from "framer-motion";

import VRWorldImg from "../Assets/Images/VRWorld.jpg";
import DysonImg from "../Assets/Images/DysonProducts.jpeg";
import GamingSystemImg from "../Assets/Images/GamingSystem.jpg";
import GamingProductsImg from "../Assets/Images/GamingProducts.png";

const products = [
  {
    image: VRWorldImg,
    category: "VR World",
    description:
      "Step into immersive experiences with cutting-edge virtual reality devices and environments.",
  },
  {
    image: DysonImg,
    category: "Dyson Products",
    description:
      "Explore advanced Dyson tech: Airwrap, Supersonic, V15 Detect, and more for smart living.",
  },
  {
    image: GamingSystemImg,
    category: "Gaming Systems",
    description:
      "Discover accessories and gear built for elite gaming: laptops, GPUs, monitors, and more.",
  },
  {
    image: GamingProductsImg,
    category: "Gaming Products",
    description:
      "Experience the latest PlayStation, Xbox, and Nintendo consoles designed for next-gen gaming.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const HomeProduct = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Explore <span className="text-blue-600">Our</span> Products
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {products.map(({ image, category, description }, index) => (
          <motion.div
            key={category}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
            custom={index}
            variants={productVariants}
          >
            <motion.img
              src={image}
              alt={category}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 dark:from-blue-800/80 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {category}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <motion.a
          href="/products"
          className="relative overflow-hidden flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-semibold group transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">View All Products</span>

          {/* Liquid fill effect */}
          <motion.div
            className="absolute inset-0 bg-blue-600 rounded-full origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"
          />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HomeProduct;
