import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const products = [
  {
    category: 'Gaming Products',
    description: 'Explore the latest in gaming with cutting-edge consoles and handhelds. Fawtech brings you immersive experiences with high-performance gear.',
    items: ['PlayStation 5', 'Xbox Series X|S', 'Steam Deck', 'Nintendo Switch', 'Gaming Accessories'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=400',
  },
  {
    category: 'IT Peripherals',
    description: 'Boost your productivity or gaming setup with reliable, professional-grade peripherals designed for everyday and competitive use.',
    items: ['Keyboards', 'Mice', 'Monitors', 'Networking Equipment'],
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Graphics Cards',
    description: 'Deliver next-gen graphics and performance with industry-leading GPUs perfect for gaming, design, and AI tasks.',
    items: ['Nvidia', 'PNY Technologies', 'Asus'],
    image: 'https://i.pinimg.com/originals/5f/fc/3f/5ffc3f6bcf60bb8e0c239d1633ca6fb0.jpg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Memory Cards',
    description: 'High-speed memory cards for photography, mobile storage, and professional equipment - fast, reliable, and secure.',
    items: ['Sandisk', 'NVM Express'],
    image: 'https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Tablets',
    description: "Versatile tablets that keep you connected, productive, and entertained - whether you're on the go or at home.",
    items: ['Apple', 'Samsung', 'Accessories'],
    image: 'https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Wearable Devices',
    description: "Stay active and informed with stylish wearable tech designed to sync seamlessly with your devices",
    items: [],
    image: 'https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Other Electronics & Accessories',
    description: "Premium electronics and trusted accessories from world-renowned brands, tailored to upgrade your digital lifestyle.",
    items: ['Apple Accessories', 'Samsung Accessories', 'Logitech Peripherals', 'Sony Electronics', 'Dyson Products', 'JBL & Harman Kardon Speakers'],
    image: 'https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
];

const Products = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Product Categories</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((section, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`self-start bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg ${
                    isOpen ? 'shadow-xl' : ''
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{section.category}</h2>
                    <p className="text-gray-600 text-sm mt-1">{section.description}</p>
                  </div>

                  {/* Arrow at bottom center */}
                  <div
                    className="flex justify-center pb-4 cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <KeyboardArrowDownIcon
                      fontSize="medium"
                      className={`text-gray-600 transition-transform duration-300 cursor-pointer ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Collapsible section with Tailwind transition and delay */}
                  <div
                    className={`transition-all duration-300 delay-200 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      {section.items.length > 0 && (
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
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