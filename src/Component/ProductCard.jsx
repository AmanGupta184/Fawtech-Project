import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{product.brand}</p>
      <p className="text-blue-600 font-medium">${product.price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
        Buy Now
      </button>
    </motion.div>
  );
};

export default ProductCard;
