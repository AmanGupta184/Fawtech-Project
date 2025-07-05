import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";
import Shopimg from "../Assets/Images/Shop.jpg";
import { FaTags, FaUserTie, FaHeadset } from "react-icons/fa";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 pt-20 px-4">
        <main className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          {/* Cover Image */}
          <motion.div
            className="mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <img
              src={Shopimg}
              alt="Office"
              loading="lazy"
              className="w-full max-h-96 object-cover rounded shadow"
            />
          </motion.div>

          {/* Address & Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Store Address */}
            <motion.div
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded shadow hover:-translate-y-1 hover:shadow-lg transition duration-300 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <h3 className="text-xl font-bold mb-4">Store Address</h3>
              <address className="not-italic font-semibold space-y-1">
                <p>Office No: 113, ELHAM MOHAMED AMIN MIRZA</p>
                <p>22B St, ABU HAIL, DUBAI, U.A.E</p>
              </address>
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-1">E-Mail</h4>
                <p className="font-semibold break-words">noor@fawtech.co</p>
              </div>
            </motion.div>

            {/* Why Choose Us with Icon Animations */}
            <motion.div
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded shadow hover:-translate-y-1 hover:shadow-lg transition duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-blue-600 w-6 h-6 mr-3 mt-1"
                  >
                    <FaTags className="w-full h-full" />
                  </motion.div>
                  <div>
                    <strong>Competitive Pricing</strong>
                    <p className="text-sm font-medium mt-1 text-gray-700 dark:text-gray-300">
                      We offer competitive pricing on all our products, ensuring you get the best value.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-blue-600 w-6 h-6 mr-3 mt-1"
                  >
                    <FaUserTie className="w-full h-full" />
                  </motion.div>
                  <div>
                    <strong>Expert Knowledge</strong>
                    <p className="text-sm font-medium mt-1 text-gray-700 dark:text-gray-300">
                      Our team is knowledgeable and passionate, offering expert advice and recommendations.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-blue-600 w-6 h-6 mr-3 mt-1"
                  >
                    <FaHeadset className="w-full h-full" />
                  </motion.div>
                  <div>
                    <strong>Excellent Customer Service</strong>
                    <p className="text-sm font-medium mt-1 text-gray-700 dark:text-gray-300">
                      We're dedicated to supporting customers before, during, and after their purchase.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Get in Touch */}
          <motion.section
            className="text-center pb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="max-w-2xl mx-auto font-medium text-gray-700 dark:text-gray-300">
              Interested in our products or services? Reach out today and let Fawtech Electronics Trading L.L.C help you achieve your goals.
            </p>
          </motion.section>
        </main>
      </div>
    </Layout>
  );
}

export default Contact;
