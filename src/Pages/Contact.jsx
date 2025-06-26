import React from "react";
import Layout from "../Layout/Layout";

// Replace these with your actual images or placeholder images
import Shopimg from "../Assets/Images/ShopImage.jpg";

function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 p-4 overflow-x-hidden">
        <main className="flex-1 p-4 md:p-8 dark:bg-gray-950 mt-16">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Contact Us
          </h2>

          {/* Cover Image */}
          <div className="w-full mb-6">
            <img
              src={Shopimg}
              alt="Office"
              className="w-full h-auto max-h-96 object-cover rounded shadow"
            />
          </div>

          {/* Address & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Store Address */}
            <div className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-600 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Store Address
              </h3>
              <address className="mb-4 text-base md:text-l font-bold not-italic">
                <p>Office No: 113, ELHAM MOHAMED AMIN MIRZA</p>
                <p>22B St, ABU HAIL, DUBAI, U.A.E</p>
              </address>
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-bold mb-2">E-Mail</h3>
                <p className="break-words text-base md:text-l font-bold ">noor@fawtech.co</p>
              </div>
            </div>
            {/* Why Choose Us Section */}
            <div className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-600">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-none">
                <li className="flex items-start">
                  <span className="mr-2 text-l"></span>
                  <div>
                    <strong>Competitive Pricing:</strong>
                    <p className="text-base md:text-sm font-bold mb-2">
                      We offer competitive pricing on all our products, ensuring
                      you get the best value for your money.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl"></span>
                  <div>
                    <strong>Expert Knowledge:</strong>
                    <p className="text-base md:text-sm font-bold mb-2">
                      Our team is knowledgeable and passionate about the
                      products we sell, so you can trust us to provide expert
                      advice and guidance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl"></span>
                  <div>
                    <strong>Excellent Customer Service:</strong>
                    <p className="text-base md:text-sm font-bold mb-2">
                      We're dedicated to providing exceptional customer service,
                      from pre-sales to post-sales support.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Get in Touch Section */}
          <section className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="max-w-2xl mx-auto font-semibold  text-gray-700 dark:text-gray-200">
              If you're interested in learning more about our products or
              services, we'd love to hear from you. Contact us today to find out
              how Fawtech Electronics Trading L.L.C can help you achieve your
              goals.
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default Contact;
