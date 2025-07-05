// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // First Graph Data
// const data1 = [
//   { label: "Employees", value: 45, color: "from-blue-500" },
//   { label: "Awareness", value: 60, color: "from-blue-400" },
//   { label: "Training", value: 70, color: "from-blue-400" },
//   { label: "Compliance", value: 80, color: "from-blue-400" },
//   { label: "Preparedness", value: 90, color: "from-blue-400" },
// ];

// // Second Graph Data
// const data2 = [
//   { label: "North", value: 55, color: "from-blue-400" },
//   { label: "South", value: 75, color: "from-blue-400" },
//   { label: "East", value: 65, color: "from-blue-400" },
//   { label: "West", value: 85, color: "from-blue-400" },
//   { label: "Global", value: 95, color: "from-blue-400" },
// ];

// // Reusable Bar component
// const Bar = ({ label, targetValue, gradient, inView }) => {
//   const controls = useAnimation();
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ height: `${targetValue}%`, transition: { duration: 2.5 } });

//       let current = 0;
//       const timer = setInterval(() => {
//         current++;
//         setValue(current);
//         if (current >= targetValue) clearInterval(timer);
//       }, Math.floor(800 / targetValue));

//       return () => clearInterval(timer);
//     } else {
//       controls.start({ height: `0%`, transition: { duration: 0.5 } });
//       setValue(0);
//     }
//   }, [inView, targetValue, controls]);

//   return (
//     <div className="relative w-24 h-[300px] flex flex-col items-center mx-2 group">
//       <div className="absolute text-center top-[15%] text-black dark:text-white">
//       </div>

//       <motion.div
//         className={`absolute bottom-0 w-16 rounded-t-lg bg-gradient-to-b ${gradient}`}
//         initial={{ height: 0 }}
//         animate={controls}
//       />
//     </div>
//   );
// };

// // Reusable Graph section
// const GraphSection = ({ title, data, description }) => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

//   return (
//     <div ref={ref} className="w-full md:w-1/2 p-4">
//       <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
//         {title}
//       </h2>

//       <div className="relative flex justify-center items-end gap-6">
//         {data.map((bar, i) => (
//           <Bar
//             key={i}
//             label={bar.label}
//             targetValue={bar.value}
//             gradient={bar.color}
//             inView={inView}
//           />
//         ))}
//         <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-400 dark:bg-white/20 shadow-lg rounded"></div>
//       </div>

//       <p className="mt-6 text-center text-sm font-bold text-black dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
//         {description}
//       </p>
//     </div>
//   );
// };

// const BarGraph = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col justify-center items-center px-4 py-10">
//       <h1 className="text-3xl md:text-4xl font-bold mb-10">
//         Performance Overview
//       </h1>

//       <div className="flex flex-col font-bold md:flex-row justify-center items-start w-full max-w-7xl">
//         <GraphSection
//           title="International Sales Overview"
//           data={data1}
//           description="Fawtech Electronics Trading L.L.C is growing steadily across global markets, driven by competitive pricing, expert solutions, and reliable service. Our expanding reach in the Middle East, Asia, and Europe reflects strong customer trust and operational excellence."
//         />
//         <GraphSection
//           title="Regional Sales Overview"
//           data={data2}
//           description="Fawtech has seen consistent regional growth, with strong sales performance across key areas. Strategic partnerships and localized support have boosted awareness, training, and compliance across all regions."
//         />
//       </div>
//     </div>
//   );
// };

// export default BarGraph;

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Quick solutions",
    description:
      "Fawtech delivers rapid, efficient solutions tailored to client needs, minimizing downtime and maximizing productivity.",
  },
  {
    title: "Strategic planning",
    description:
      "Fawtech aligns business goals with actionable strategies to drive long-term success and competitive advantage.",
  },
  {
    title: "Scalable growth",
    description:
      "Fawtech builds adaptable systems that support sustained expansion without compromising performance or quality.",
  },
];

const chartData = [
  { year: 2020, value: 25, color: "from-gray-300 to-blue-200" },
  { year: 2022, value: 50, color: "from-blue-500 to-blue-300" },
  { year: 2024, value: 75, color: "from-blue-600 to-blue-500" },
  {
    year: 2025,
    value: 100,
    color: "from-blue-600 to-blue-950",
    highlight: true,
  },
];

function TransformationSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const maxBarHeight = 256;
  const maxValue = Math.max(...chartData.map((bar) => bar.value));
  const yAxisTicks = [100, 75, 50, 25];

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold">
            // FROM INSIGHT TO IMPACT
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 text-blue-800"
          >
            Three steps to business transformation
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 rounded-lg"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                >
                  <h3
                    className={`font-bold text-lg ${
                      openIndex === index
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {`0${index + 1}.`} {step.title}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bar Graph */}
        <motion.div
          className="flex flex-col justify-between items-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center"
          >
            <h4 className="text-lg font-semibold">
              From strategy to scalable business success
            </h4>
            <p className="text-4xl font-bold text-blue-600 mt-2">8.2%</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              CAGR achievement.
            </p>
          </motion.div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute left-0 w-full h-64 flex flex-col justify-between">
              {yAxisTicks.map((tick, i) => (
                <div
                  key={i}
                  className="w-full border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 dark:text-gray-500"
                >
                  <span className="absolute -left-10 -mt-2">{tick}%</span>
                </div>
              ))}
            </div>

            <span className="absolute -left-14 top-1/2 -translate-y-1/2 -rotate-90 origin-bottom-left text-sm text-gray-500 dark:text-gray-400">
              Market size (USD B)
            </span>

            <div className="flex items-end justify-between h-64 w-full px-4 relative z-10">
              {chartData.map((bar, i) => (
                <div
                  key={bar.year}
                  className="group relative flex flex-col items-center w-1/6"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    className="text-sm font-bold text-gray-800 dark:text-white mb-2"
                  >
                    ${bar.value}B
                  </motion.span>

                  <motion.div
                    initial={{ height: 0 }}
                    animate={
                      inView
                        ? {
                            height: `${
                              (bar.value / maxValue) * maxBarHeight
                            }px`,
                          }
                        : {}
                    }
                    transition={{ duration: 1 + i * 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className={`w-full bg-gradient-to-t ${bar.color} rounded-t-md flex flex-col justify-end items-center min-h-[2rem] relative`}
                  >
                    {bar.highlight && (
                      <div className="absolute -top-14 text-blue-500 text-lg">
                        ⭐
                      </div>
                    )}
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                    className="text-xs text-gray-600 dark:text-gray-400 mt-2"
                  >
                    {bar.year}
                  </motion.span>

                  <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                    {bar.year}: ${bar.value}B
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default TransformationSection;
