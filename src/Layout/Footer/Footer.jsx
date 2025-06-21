import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* About Section */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            FawTech Electronics Trading LLC
          </h3>
          <p className="text-gray-800 dark:text-gray-100">
            Your one-stop shop for the latest electronics and gadgets. Stay connected with us!
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Quick Links</h4>
          <ul className="list-none p-0">
            <li>
              <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Contact Us</h4>
          <p className="text-gray-800 dark:text-gray-100">113, ELHAM MOHAMED AMIN MIRZA, ABU HAIL DUBAI, U.A.E</p>
          <p className="text-gray-800 dark:text-gray-100">Email: noorlakdawala21@gmail.com</p>
          <p className="text-gray-800 dark:text-gray-100">Phone: +971523297987</p>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-5 border-t border-gray-400 dark:border-gray-700 pt-3 text-center text-sm text-gray-600 dark:text-gray-400">
        © {currentYear} FawTech Electronics Trading LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;