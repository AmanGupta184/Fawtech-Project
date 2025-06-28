import React from "react";
import { ProductData } from "../Context/ProductData";

const HomeProduct = () => {
  const getRandomProducts = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(ProductData, 3);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 animate__animated animate__zoomIn">
        Explore Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {randomProducts.map((product, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group animate__animated animate__fadeIn animate__delay-1s"
          >
            <img
              src={product.image}
              alt={product.category}
              className="w-full h-64 object-fill group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 dark:from-indigo-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {product.category}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="/products"
          className="px-8 py-3 bg-indigo-500 dark:bg-indigo-400 text-white rounded-full font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors animate__animated animate__pulse animate__infinite"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default HomeProduct;
