import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductCard = ({ section, index, isOpen, toggleCard }) => (
  <div key={index}
    className={`self-start bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 overflow-hidden transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-600 ${
      isOpen ? 'shadow-xl dark:shadow-gray-600' : ''
    }`}
    >
      <img
        src={section.image}
        alt = {section.category}
        className='w-full h-48 object-cover object-center'
        />
      <div className="p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {section.category}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
        {section.description}
      </p>
    </div>

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
    </div>
)