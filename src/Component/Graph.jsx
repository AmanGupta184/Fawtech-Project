import React, { useState, useEffect, useMemo } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlus, FaMinus } from "react-icons/fa";

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
  { year: 2023, value: 10, color: "from-gray-300 to-blue-200" },
  { year: 2024, value: 25, color: "from-blue-500 to-blue-300" },
  { year: 2025, value: 39, color: "from-blue-600 to-blue-500" },
  { year: "2026-2030", value: 98, color: "from-blue-600 to-blue-950", highlight: true },
];

const yAxisTicks = [100, 75, 50, 25];
const maxBarHeight = 256;

const Graph = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const maxValue = useMemo(() => Math.max(...chartData.map((bar) => bar.value)), []);

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden">
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 sm:gap-12">
        {/* Accordion Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold">|| FROM INSIGHT TO IMPACT</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-800">
            Three steps to business transformation
          </h2>

          <div className="border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 rounded-lg">
            {steps.map((step, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="p-4 sm:p-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex justify-between items-center w-full text-left"
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${index}`}
                  >
                    <h3
                      className={`font-bold text-base sm:text-lg ${
                        isOpen ? "text-blue-700 dark:text-blue-400" : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {`0${index + 1}.`} {step.title}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        id={`accordion-content-${index}`}
                        className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Graph Section */}
        <motion.div
          className="flex flex-col justify-between items-center w-full max-w-sm sm:max-w-md mx-auto"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h4 className="text-base sm:text-lg font-semibold mb-10 text-blue-800 text-center">
            Marking up memorable journey towards our goals.
          </h4>

          <div className="relative w-full h-64">
            {/* Y-Axis Ticks */}
            <div className="absolute left-0 w-full h-full flex flex-col justify-between">
              {yAxisTicks.map((tick) => (
                <div
                  key={tick}
                  className="w-full border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-400 dark:text-gray-500 relative"
                >
                  <span className="absolute -ml-6 sm:-ml-8 -mt-2">{tick}%</span>
                </div>
              ))}
            </div>

            {/* Axis Label */}
            <span className="block sm:hidden text-sm text-center text-gray-500 dark:text-gray-400 mb-2">
              Market size
            </span>
            <span className="hidden sm:block absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-bottom-left text-sm text-gray-500 dark:text-gray-400">
              Market size
            </span>

            {/* Bars */}
            <div className="flex items-end justify-between h-full w-full px-2 sm:px-4 relative z-10">
              {chartData.map((bar, i) => {
                const barHeight = (bar.value / maxValue) * maxBarHeight;
                return (
                  <div key={bar.year} className="group relative flex flex-col items-center w-[22%]">
                    <motion.span
                      className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      {bar.value}%
                    </motion.span>

                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${barHeight}px` } : {}}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className={`w-full bg-gradient-to-t ${bar.color} ${
                        bar.highlight ? "ring-2 ring-yellow-400" : ""
                      } rounded-t-md min-h-[1.5rem] relative`}
                    >
                      {bar.highlight && (
                        <div className="absolute -top-14 text-yellow-400 text-lg"></div>
                      )}
                    </motion.div>

                    <motion.span
                      className="text-xs text-gray-600 dark:text-gray-400 mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {bar.year}
                    </motion.span>

                    <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      {bar.year}: {bar.value}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Graph;
