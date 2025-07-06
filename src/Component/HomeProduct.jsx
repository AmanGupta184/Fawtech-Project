import React from "react";
import ProductData from "../Context/ProductData";
import { motion } from "framer-motion"; // Removed AnimatePresence

const HomeProduct = () => {
  const getRandomProducts = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(ProductData, 3);

  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for products
  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  // Animation variants for button
  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#2563eb" }, // Darker blue on hover
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="py-10 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
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
        Explore Our Categories
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {randomProducts.map((product, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            custom={index}
            variants={productVariants}
          >
            <motion.img
              src={product.image}
              alt={product.category}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 dark:from-blue-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {product.category}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-12">
        <motion.a
          href="/products"
          className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          View All Products
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HomeProduct;