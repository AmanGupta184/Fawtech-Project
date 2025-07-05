import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimatePresence,motion } from 'framer-motion';

const ProductCard = ({ section, index, isOpen, toggleCard, hoveredIndex, setHoveredIndex }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  return (
    <motion.div
      initial = {{ opacity:0, y: 50}}
      whileInView={{ opacity:1, y:0}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true}}
      className={`transition-all duration-500 ease-in-out overflow-hidden rounded-lg shadow-md ${
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
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-gray-600 dark:text-gray-400 cursor-pointer"
          >
            <KeyboardArrowDownIcon fontSize="medium" />
          </motion.div>
        </div>

        {/* Dropdown Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="dropdown"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.6,           
                ease: [0.25, 0.8, 0.25, 1] 
              }}
              className="overflow-hidden"
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
                        <div className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 px-6 py-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer hover:ring hover:ring-blue-400 dark:hover:ring-blue-500 mt-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-fill rounded-md shadow"
                          />
                          <span className="text-base font-medium">{item.name}</span>
                        </div>
                        <AnimatePresence>
                          {selectedProductIndex === i && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 px-4 py-2 rounded-md border dark:border-gray-700 shadow"
                            >
                              {item.description}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProductCard;
