import React from 'react';
import logo from '../Navbar/FawtechLogo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-900 text-white p-6 mt-auto">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* About Section */}
        <div className="flex-1 min-w-[200px] mb-5">
          <img src={logo} alt="FawTech Logo" className="h-20 w-25 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-white-100 dark:text-gray-100">
            FawTech Electronics Trading LLC
          </h3>
          <p className="text-white-800 dark:text-gray-100">
            <h6>Your one-stop shop for the latest electronics</h6>
            <h6>and gadgets. Stay connected with us!</h6>
          </p>
        </div>
          {/* Shop Categories */}
          <div>
            <h4 className="font-semibold mb-2">Shop Categories</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Custom PC</li>
              <li>PC Components</li>
              <li>Console</li>
              <li>SD Memory</li>
              <li>Tablets</li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400 text-sm">
              Store Address: <p>113, ELHAM MOHAMED AMIN MIRZA,</p>
            <p>ABU HAIL DUBAI, U.A.E</p> 
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Phone: +971-523297987
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Timings: 11am-6pm (Mon-Sat) Sunday Holiday
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Mail: noor@fawtech.co
            </p>
            {/* Social icons can be added here */}
            <div className="flex space-x-2 mt-2">
              <a href="/" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="/" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="/" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
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