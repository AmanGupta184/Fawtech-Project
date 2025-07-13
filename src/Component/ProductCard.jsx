// 
import React, { memo } from "react";
import { motion } from "framer-motion";

const ProductCard = memo(({ product }) => {
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
        className="w-100 h-64 object-cover rounded-md mb-2"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{product.brand}</p>
      <p className="text-blue-600 font-medium">${product.price.toFixed(2)}</p>
      {/* The "Buy Now" button has been removed from here */}
    </motion.div>
  );
});

export default ProductCard;