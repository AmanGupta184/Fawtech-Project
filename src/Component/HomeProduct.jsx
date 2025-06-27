import React from "react";
import { ProductData } from "../Context/ProductData";
import { Link } from "react-router-dom";

const getRandomProducts = (data, count) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HomeProduct = () => {
  const randomProducts = getRandomProducts(ProductData, 3);

  return (
    <div className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-950">
      <h2 className="text-3xl md:text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
        Product Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-w-7xl mx-auto">
        {randomProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.category}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.category}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                {product.description}
              </p>
              {/* <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
                {product.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/products">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition duration-300 dark:bg-red-600 dark:hover:bg-red-700">
          View More
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
