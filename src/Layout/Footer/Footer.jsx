// import React from "react";
// import { motion } from "framer-motion";
// import logo from "../Navbar/fawtech.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   const sectionVariants = (delay = 0) => ({
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, delay },
//     },
//   });

//   const shopLinks = [
//     "Dyson Products",
//     "Gaming Console",
//     "Gaming Products",
//     "VR World",
//     "DJI Products",
//   ];

//   const infoLinks = [
//     "Contact Us",
//     "About Us",
//     "Terms & Conditions",
//     "Privacy Policy",
//   ];

//   return (
//     <motion.footer
//       className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 mt-auto"
//       variants={footerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* Logo & Description */}
//         <motion.div variants={sectionVariants(0)}>
//           <img
//             src={logo}
//             alt="Fawtech Logo"
//             className="h-20 w-40 pl-2 object-contain"
//           />
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
//             Your one-stop shop for the latest electronics and gadgets. Stay connected with us!
//           </p>
//         </motion.div>

//         {/* Shop Categories */}
//         <motion.div variants={sectionVariants(0.1)}>
//           <h4 className="font-semibold mb-2">Shop Categories</h4>
//           <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
//             {shopLinks.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Information Links */}
//         <motion.div variants={sectionVariants(0.2)}>
//           <h4 className="font-semibold mb-2">Information</h4>
//           <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
//             {infoLinks.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div variants={sectionVariants(0.3)}>
//           <h4 className="font-semibold mb-2">Contact Us</h4>
//           <p className="text-sm text-gray-600 dark:text-gray-300">
//             113, ELHAM MOHAMED AMIN MIRZA,<br />
//             ABU HAIL DUBAI, U.A.E
//           </p>
//           <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
//             Timings: 11am - 6pm (Mon–Sat), Sunday Holiday
//           </p>
//           <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
//             E-mail: <a href="mailto:noor@fawtech.com">noor@fawtech.com</a>
//           </p>
//         </motion.div>
//       </div>

//       {/* Footer Bottom Bar */}
//       <motion.div
//         className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600 text-center text-sm text-gray-600 dark:text-gray-300"
//         variants={sectionVariants(0.4)}
//       >
//         © {currentYear} Fawtech Electronics Trading LLC. All rights reserved.
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../Navbar/fawtech.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sectionVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  });

  const shopLinks = [
    "Dyson Products",
    "Gaming Console",
    "Gaming Products",
    "VR World",
    "DJI Products",
  ];

  const infoLinks = [
    { label: "Contact Us", path: "/contact" },
    { label: "About Us", path: "/about" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <motion.footer
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 mt-auto"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <motion.div variants={sectionVariants(0)}>
          <img
            src={logo}
            alt="Fawtech Logo"
            className="h-20 w-40 pl-2 object-contain"
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Your one-stop shop for the latest electronics and gadgets. Stay connected with us!
          </p>
        </motion.div>

        <motion.div variants={sectionVariants(0.1)}>
          <h4 className="font-semibold mb-2">Shop Categories</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {shopLinks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={sectionVariants(0.2)}>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {infoLinks.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="hover:text-blue-500 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={sectionVariants(0.3)}>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            113, ELHAM MOHAMED AMIN MIRZA,<br />
            ABU HAIL DUBAI, U.A.E
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Timings: 11am - 6pm (Mon–Sat), Sunday Holiday
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            E-mail: <a href="mailto:noor@fawtech.com">noor@fawtech.com</a>
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600 text-center text-sm text-gray-600 dark:text-gray-300"
        variants={sectionVariants(0.4)}
      >
        © {currentYear} Fawtech Electronics Trading LLC. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
