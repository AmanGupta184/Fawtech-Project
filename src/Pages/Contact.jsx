import React from 'react';
import Layout from '../Layout/Layout';
import Shopimg from '../Assets/Images/ShopImage.jpg';

function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 p-4 overflow-x-hidden">
        <main className="flex-1 p-6 bg-white dark:bg-gray-950 mt-16">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

          {/* Cover Image */}
          <div className="w-full mb-6">
            <img
              src={Shopimg}
              alt="Office"
              className="w-full h-96 object-cover rounded shadow"
            />
          </div>

          {/* Address & Hours Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Store Address */}
            <div className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-600">
              <h3 className="text-lg font-semibold mb-4">Store Address</h3>
              <p className="mb-1">Office No: 113, ELHAM MOHAMED AMIN MIRZA</p>
              <p className="mb-4">22B St, ABU HAIL, DUBAI, U.A.E</p>
              <h3 className="text-lg font-semibold mt-6 mb-2">Phone</h3>
              <p>+91-7011805001</p>
            </div>

            {/* Hours */}
            <div className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-600">
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <ul className="space-y-1 text-left flex flex-col items-center">
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Monday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">11:00 a.m. - 7:00 p.m.</span>
                </li>
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Tuesday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">11:00 a.m. - 7:00 p.m.</span>
                </li>
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Wednesday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">11:00 a.m. - 7:00 p.m.</span>
                </li>
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Thursday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">11:00 a.m. - 7:00 p.m.</span>
                </li>
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Friday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">11:00 a.m. - 7:00 p.m.</span>
                </li>
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Saturday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">11:00 a.m. - 7:00 p.m.</span>
                </li>
                <li className="grid grid-cols-[2fr,auto,3fr] items-center gap-2 w-full whitespace-nowrap">
                  <span className="font-semibold pl-2 md:pl-8">Sunday</span>
                  <span className="text-center">:</span>
                  <span className="text-right pr-2 md:pr-8">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Contact;
