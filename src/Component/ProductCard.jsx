import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductCard = ({ section, index, isOpen, toggleCard, hoveredIndex, setHoveredIndex }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-md ${
        isOpen ? 'max-h-[2000px]' : 'h-[380px]'
      }`}
    >
      <div
        className={`flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg h-full ${
          isOpen ? 'shadow-xl dark:shadow-gray-600' : ''
        } hover:shadow-lg dark:hover:shadow-gray-600 hover:scale-[1.02]`}
      >
        <img
          src={section.image}
          alt={section.category}
          className="w-full h-48 object-cover object-center rounded-t-lg"
        />

        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {section.category}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {section.description}
          </p>
        </div>

        {/* Arrow to expand */}
        <div
          className="flex justify-center pb-4 cursor-pointer"
          onClick={() => toggleCard(index)}
        >
          <KeyboardArrowDownIcon
            fontSize="medium"
            className={`text-gray-600 dark:text-gray-400 transition-transform duration-300 cursor-pointer ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* Dropdown Content */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-6 pb-6">
            {section.items.length > 0 && (
              <ul className="flex flex-col items-center text-gray-700 dark:text-gray-300 gap-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="w-full max-w-md"
                    onClick={() =>
                      setSelectedProductIndex(selectedProductIndex === i ? null : i)
                    }
                  >
                    <div className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 px-6 py-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-fill rounded-md shadow"
                      />
                      <span className="text-base font-medium">{item.name}</span>
                    </div>
                    {selectedProductIndex === i && (
                      <div className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 px-4 py-2 rounded-md border dark:border-gray-700 shadow">
                        {item.description}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
