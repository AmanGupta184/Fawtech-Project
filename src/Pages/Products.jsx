import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import ProductCard from '../Component/ProductCard';
import { ProductData } from '../Context/ProductData';

const Products = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [products] = useState(ProductData);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 px-2 sm:px-4 pt-20 pb-10">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Our Product Categories
          </h1>

          <div className="flex flex-wrap justify-center gap-8 w-full">
            {products.map((section, index) => (
              <div key={index} className="w-full md:w-[48%] lg:w-[31%]">
                <ProductCard
                  section={section}
                  index={index}
                  isOpen={openIndex === index}
                  toggleCard={toggleCard}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;