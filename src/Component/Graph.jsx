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
  { year: 2025, value: 100, color: "from-blue-600 to-blue-950", highlight: true },
];

function Graph() {
  const [openIndex, setOpenIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const maxBarHeight = 256;
  const maxValue = Math.max(...chartData.map((bar) => bar.value));
  const yAxisTicks = [100, 75, 50, 25];

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden">
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 sm:gap-12">
        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <p className="text-blue-600 font-semibold">|| FROM INSIGHT TO IMPACT</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-8 text-blue-800"
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
                className="p-4 sm:p-6"
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
                    className={`font-bold text-base sm:text-lg ${
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
                    className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base"
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
          className="flex flex-col justify-between items-center w-full max-w-sm sm:max-w-md mx-auto overflow-hidden"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center"
          >
            <h4 className="text-base sm:text-lg font-semibold text-blue-800">
              From strategy to scalable business success
            </h4>
          </motion.div>

          <div className="relative w-full h-64">
            <div className="absolute left-0 w-full h-full flex flex-col justify-between">
              {yAxisTicks.map((tick, i) => (
                <div
                  key={i}
                  className="w-full border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 dark:text-gray-500"
                >
                  <span className="absolute left-0 -ml-6 sm:-ml-8 -mt-2">
                    {tick}%
                  </span>
                </div>
              ))}
            </div>

            <span className="block text-sm text-gray-500 dark:text-gray-400 text-center mb-2 sm:hidden">
              Market size
            </span>
            <span className="hidden sm:block absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-bottom-left text-sm text-gray-500 dark:text-gray-400">
              Market size
            </span>

            <div className="flex items-end justify-between h-full w-full px-2 sm:px-4 relative z-10">
              {chartData.map((bar, i) => (
                <div
                  key={bar.year}
                  className="group relative flex flex-col items-center w-[22%]"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white mb-2"
                  >
                    {bar.value}%
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
                    transition={{ duration: 0.5 + i * 0.2, ease: "easeOut" }}
                    className={`w-full bg-gradient-to-t ${bar.color} rounded-t-md flex flex-col justify-end items-center min-h-[1.5rem] relative`}
                  >
                    {/* {bar.highlight && (
                      <div className="absolute -top-10 text-blue-500 text-base sm:text-lg">
                        ⭐
                      </div>
                    )} */}
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                    className="text-xs text-gray-600 dark:text-gray-400 mt-2"
                  >
                    {bar.year}
                  </motion.span>

                  <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    {bar.year}: {bar.value}%
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

export default Graph;