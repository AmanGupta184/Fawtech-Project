import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductCard = ({ section, index, isOpen, toggleCard }) => {
  return (
   <div
  className={`flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-600 
  ${isOpen ? 'shadow-xl dark:shadow-gray-600' : ''}`}
  style={{ alignSelf: 'start' }}
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
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Collapsible section */}
      <div
        className={`transition-all duration-300 delay-200 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6">
          {section.items.length > 0 && (
            <ul className="flex flex-col items-center text-gray-700 dark:text-gray-300 gap-3">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="relative w-full max-w-md"
                >
                  <div className="peer flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 px-6 py-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:z-10">
                    {typeof item === 'string' ? (
                      <span className="mx-auto text-lg font-medium">{item}</span>
                    ) : (
                      <>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded-md shadow"
                        />
                        <span className="text-base font-medium">{item.name}</span>
                      </>
                    )}
                  </div>
                  {/* Blur overlay on all non-hovered peers */}
                  <style jsx>{`
                    li:hover ~ li .peer:not(:hover) {
                      filter: blur(2px);
                      opacity: 0.7;
                    }
                  `}</style>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
