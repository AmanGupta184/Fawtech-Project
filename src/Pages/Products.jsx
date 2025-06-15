import React from 'react';
import Layout from '../Layout/Layout';

const products = [
  {
    category: 'Laptops & Computers',
    description: 'High-performance laptops, desktops, and workstations for everyday and professional use.',
    items: ['Gaming Laptops', 'Ultrabooks', 'Desktops', 'Monitors'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=400',
  },
  {
    category: 'Home Appliances',
    description: 'Smart and efficient appliances for your home.',
    items: ['Smart TVs', 'Refrigerators', 'Washing Machines', 'Microwaves'],
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Audio & Entertainment',
    description: 'Elevate your sound experience.',
    items: ['Bluetooth Speakers', 'Soundbars', 'Headphones', 'Home Theater Systems'],
    image: 'https://i.pinimg.com/originals/5f/fc/3f/5ffc3f6bcf60bb8e0c239d1633ca6fb0.jpg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Accessories',
    description: 'All the essentials to complement your tech.',
    items: ['Cables & Chargers', 'Keyboards', 'Mice', 'Adapters'],
    image: 'https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
];

const Products = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Product Categories</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src={section.image}
                  alt={section.category}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.category}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
