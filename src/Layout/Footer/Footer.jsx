import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 text-black py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* About Section */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h3 className="text-xl font-semibold mb-2">FawTech Electronics Trading LLC</h3>
          <p>Your one-stop shop for the latest electronics and gadgets. Stay connected with us!</p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="list-none p-0">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>113,ELHAM MOHAMED AMIN MIRZA,ABU HAIL DUBAI,U.A.E</p>
          <p>Email: noorlakdawala21@gmail.com</p>
          <p>Phone: +971523297987</p>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-5 border-t border-gray-700 pt-3 text-center text-sm">
        &copy; {currentYear} FawTech Electronics Trading LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;