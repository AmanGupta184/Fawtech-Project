import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import ProductCard from '../Component/ProductCard';

const products = [
  {
    category: 'Gaming Products',
    description: 'Explore the latest in gaming with cutting-edge consoles and handhelds. Fawtech brings you immersive experiences with high-performance gear.',
    items: [
      {name: 'PlayStation 5', image: require('../Assets/Images/Products/PS5_Image_Edited.png')}, {name: 'Xbox Series X|S', image: require('../Assets/Images/Products/xbox_logo.jpg')}, {name: 'Steam Deck', image: require('../Assets/Images/Products/PS5_Image_Edited.png')}, {name: 'Nintendo Switch', image: require('../Assets/Images/Products/switch.jpg')}, {name: 'Gaming Accessories', image: require('../Assets/Images/Products/mouse.jpg')}],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=400',
  },
  {
    category: 'IT Peripherals',
    description: 'Boost your productivity or gaming setup with reliable, professional-grade peripherals designed for everyday and competitive use.',
    items: [
      {name: 'Keyboards', image: '../Assets/Images/Products/PS5_Image_Edited.png'}, {name: 'Mice', image: require('../Assets/Images/Products/mouse.jpg')}, {name: 'Monitors', image: require('../Assets/Images/Products/monitor.jpg')}, {name: 'Networking Equipment', image: '../Assets/Images/Products/PS5_Image_Edited.png'}],
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Graphics Cards',
    description: 'Deliver next-gen graphics and performance with industry-leading GPUs perfect for gaming, design, and AI tasks.',
    items: [
      {name: 'Nvidia', image: require('../Assets/Images/Products/nvidia_graphics_card.jpg')}, {name: 'PNY Technologies', image: require('../Assets/Images/Products/PNY_logo.jpg')}, {name: 'Asus', image: require('../Assets/Images/Products/asus_logo.jpg')}],
    image: 'https://i.pinimg.com/originals/5f/fc/3f/5ffc3f6bcf60bb8e0c239d1633ca6fb0.jpg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Memory Cards',
    description: 'High-speed memory cards for photography, mobile storage, and professional equipment - fast, reliable, and secure.',
    items: [
      {name: 'Sandisk', image: require('../Assets/Images/Products/PS5_Image_Edited.png')}, {name: 'NVM Express', image: require('../Assets/Images/Products/PS5_Image_Edited.png')}],
    image: 'https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    category: 'Tablets',
    description: "Versatile tablets that keep you connected, productive, and entertained - whether you're on the go or at home.",
    items: [
      {name: 'Apple', image: require('../Assets/Images/Products/apple_logo.jpg')}, {name: 'Samsung', image: require('../Assets/Images/Products/samsung_logo.jpg')}, {name: 'Accessories', image: require('../Assets/Images/Products/PS5_Image_Edited.png')}],
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
    items: [
      {name: 'Apple Accessories', image: require('../Assets/Images/Products/apple_logo.jpg')}, {name: 'Samsung Accessories', image: require('../Assets/Images/Products/Samsung_accessories.jpg')}, {name: 'Logitech Peripherals', image: require('../Assets/Images/Products/logitech_logo.jpg')}, {name: 'Sony Electronics', image: require('../Assets/Images/Products/switch.jpg')}, {name: 'Dyson Products', image: require('../Assets/Images/Products/dyson.jpg')}, {name: 'JBL & Harman Kardon Speakers', image: require('../Assets/Images/Products/jbl_speakers.jpg')}],
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
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 px-2 sm:px-4 pt-20 pb-10">

  <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Our Product Categories
        </h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
  {products.map((section, index) => (
    <ProductCard
      key={index}
      section={section}
      index={index}
      isOpen={openIndex === index}
      toggleCard={toggleCard}
    />
  ))}
</div>

      </div>
    </div>
    </Layout>
  );
};

export default Products;