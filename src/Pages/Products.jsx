import React, { useState } from "react";
import Layout from "../Layout/Layout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProductData } from "../Context/ProductData";

const Products = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [products, setProducts] = useState(ProductData);
  
  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Our Product Categories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((section, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`self-start bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 overflow-hidden transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-600 ${
                    isOpen ? "shadow-xl dark:shadow-gray-600" : ""
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {section.category}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {section.description}
                    </p>
                  </div>

                  {/* Arrow at bottom center */}
                  <div
                    className="flex justify-center pb-4 cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <KeyboardArrowDownIcon
                      fontSize="medium"
                      className={`text-gray-600 dark:text-gray-400 transition-transform duration-300 cursor-pointer ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Collapsible section with Tailwind transition and delay */}
                  <div
                    className={`transition-all duration-300 delay-200 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      {section.items.length > 0 && (
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
