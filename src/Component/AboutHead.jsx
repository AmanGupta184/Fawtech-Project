import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SiQuicktime } from "react-icons/si";
import { GrUserExpert } from "react-icons/gr";
import { PiMathOperationsLight, PiStrategyFill } from "react-icons/pi";

// ✅ Reusable Grid inside the same file
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SolutionsGrid = ({
  title,
  description = [],
  buttonText,
  onButtonClick,
  solutions = [],
  id = "solutions",
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="bg-gray-50 dark:bg-[#0f172a] py-20 px-4 sm:px-8 lg:px-16"
      id={id}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title & Descriptions */}
        <div
          ref={ref}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          {description.map((para, i) => (
            <p
              key={i}
              className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              {para}
            </p>
          ))}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Solution Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Actual Section using the above grid
const SolutionsSection = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Quick solutions",
      icon: <SiQuicktime className="w-8 h-8 text-blue-600" />,
      description:
        "Fawtech delivers rapid, efficient solutions tailored to client needs, minimizing downtime and maximizing productivity.",
    },
    {
      title: "Expert advice",
      icon: <GrUserExpert className="w-8 h-8 text-blue-600" />,
      description:
        "Our experienced team provides expert guidance on IT peripherals, gaming products, and global distribution strategies.",
    },
    {
      title: "Strategic planning",
      icon: <PiStrategyFill className="w-8 h-8 text-blue-600" />,
      description:
        "Fawtech crafts scalable, future-ready plans leveraging its location in DAFZA and JAFZA for global logistics.",
    },
    {
      title: "Efficient operations",
      icon: <PiMathOperationsLight className="w-8 h-8 text-blue-600" />,
      description:
        "From sourcing to distribution, Fawtech optimizes the supply chain of tech devices with precision and speed.",
    },
  ];

  return (
    <SolutionsGrid
      title="Driving Global Reach with Tailored Tech Solutions"
      description={[
        "Fawtech Electronics specializes in delivering innovative electronics and IT solutions worldwide from the heart of Dubai.",
        'We aim to provide the "most out of the products for the best prices," ensuring innovation, performance, and sustainability in every solution we offer.',
      ]}
      buttonText="Learn more"
      onButtonClick={() => navigate("/contact")}
      solutions={solutions}
    />
  );
};

export default SolutionsSection;
