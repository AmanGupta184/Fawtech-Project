import React from 'react';
import Layout from '../Layout/Layout';
import Shopimg from '../Assets/Images/ShopImage.jpg';

function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
        {/* Header */}
        <header className="bg-gray-100 dark:bg-gray-900 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-red-600">Fawtech Computers</h1>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500">
              Call Us +91-7011805001
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white dark:bg-gray-900">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

          {/* Cover Image */}
          <div className="w-full mb-6">
            <img
              src={Shopimg}
              alt="Office"
              className="w-full h-60 object-cover rounded shadow"
            />
          </div>

          {/* Address & Phone Info */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center">
              <h3 className="text-lg font-semibold mb-4">Store Address</h3>
              <p className="mb-1">Office No: 113, ELHAM MOHAMED AMIN MIRZA</p>
              <p className="mb-4">22B St, ABU HAIL, DUBAI, U.A.E</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Phone</h3>
              <p>+91-7011805001</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Contact;
