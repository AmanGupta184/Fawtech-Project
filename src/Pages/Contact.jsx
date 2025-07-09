import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";
import Shopimg from "../Assets/Images/Shop.jpg";
import { FaTags, FaUserTie, FaHeadset, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Animation
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
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 pb-5 pt-28 px-4">
        <main className="max-w-6xl mx-auto relative">
          {/* Floating Icons */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            <a href="https://wa.me/971xxxxxxxxx" target="_blank" rel="noreferrer">
              <FaWhatsapp className="text-green-500 w-10 h-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition" />
            </a>
            <a href="mailto:noor@fawtech.co">
              <FaEnvelope className="text-blue-600 w-10 h-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition" />
            </a>
            <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer">
              <FaMapMarkerAlt className="text-red-500 w-10 h-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition" />
            </a>
          </div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-blue-700">Contact</span> Us
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

          {/* Grid Section */}
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

            {/* Why Choose Us */}
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
                {[
                  {
                    icon: FaTags,
                    title: "Competitive Pricing",
                    text: "We offer competitive pricing on all our products, ensuring you get the best value.",
                  },
                  {
                    icon: FaUserTie,
                    title: "Expert Knowledge",
                    text: "Our team is knowledgeable and passionate, offering expert advice and recommendations.",
                  },
                  {
                    icon: FaHeadset,
                    title: "Excellent Customer Service",
                    text: "We're dedicated to supporting customers before, during, and after their purchase.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-blue-600 w-6 h-6 mr-3 mt-1"
                    >
                      <item.icon className="w-full h-full" />
                    </motion.div>
                    <div>
                      <strong>{item.title}</strong>
                      <p className="text-sm font-medium mt-1 text-gray-700 dark:text-gray-300">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Modern CTA Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="rounded-xl p-8 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white shadow-lg backdrop-blur-md "
          >
            <h3 className="text-2xl font-bold mb-2">Let’s Build Something Great Together</h3>
            <p className="text-sm md:text-base mb-4 max-w-2xl">
              Whether you need enterprise tech solutions or consumer electronics, Fawtech is ready to partner with you. Connect with us now and elevate your business with smarter technology.
            </p>
            <a
              href="mailto:noor@fawtech.co"
              className="inline-block  bg-gray-900 text-white font-semibold px-6 py-2 rounded-full "
            >
              Start a Conversation
            </a>
          </motion.div>
        </main>
      </div>
    </Layout>
  );
}

export default Contact;
