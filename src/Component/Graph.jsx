import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// First Graph Data
const data1 = [
  { label: "Employees", value: 45, color: "from-blue-500" },
  { label: "Awareness", value: 60, color: "from-blue-400" },
  { label: "Training", value: 70, color: "from-blue-400" },
  { label: "Compliance", value: 80, color: "from-blue-400" },
  { label: "Preparedness", value: 90, color: "from-blue-400" },
];

// Second Graph Data
const data2 = [
  { label: "North", value: 55, color: "from-blue-400" },
  { label: "South", value: 75, color: "from-blue-400" },
  { label: "East", value: 65, color: "from-blue-400" },
  { label: "West", value: 85, color: "from-blue-400" },
  { label: "Global", value: 95, color: "from-blue-400" },
];

// Reusable Bar component
const Bar = ({ label, targetValue, gradient, inView }) => {
  const controls = useAnimation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ height: `${targetValue}%`, transition: { duration: 2.5 } });

      let current = 0;
      const timer = setInterval(() => {
        current++;
        setValue(current);
        if (current >= targetValue) clearInterval(timer);
      }, Math.floor(800 / targetValue));

      return () => clearInterval(timer);
    } else {
      controls.start({ height: `0%`, transition: { duration: 0.5 } });
      setValue(0);
    }
  }, [inView, targetValue, controls]);

  return (
    <div className="relative w-24 h-[300px] flex flex-col items-center mx-2 group">
      <div className="absolute text-center top-[15%] text-black dark:text-white">
      </div>

      <motion.div
        className={`absolute bottom-0 w-16 rounded-t-lg bg-gradient-to-b ${gradient}`}
        initial={{ height: 0 }}
        animate={controls}
      />
    </div>
  );
};

// Reusable Graph section
const GraphSection = ({ title, data, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div ref={ref} className="w-full md:w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
        {title}
      </h2>

      <div className="relative flex justify-center items-end gap-6">
        {data.map((bar, i) => (
          <Bar
            key={i}
            label={bar.label}
            targetValue={bar.value}
            gradient={bar.color}
            inView={inView}
          />
        ))}
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-400 dark:bg-white/20 shadow-lg rounded"></div>
      </div>

      <p className="mt-6 text-center text-sm font-bold text-black dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
};

const BarGraph = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Performance Overview
      </h1>

      <div className="flex flex-col font-bold md:flex-row justify-center items-start w-full max-w-7xl">
        <GraphSection
          title="International Sales Overview"
          data={data1}
          description="Fawtech Electronics Trading L.L.C is growing steadily across global markets, driven by competitive pricing, expert solutions, and reliable service. Our expanding reach in the Middle East, Asia, and Europe reflects strong customer trust and operational excellence."
        />
        <GraphSection
          title="Regional Sales Overview"
          data={data2}
          description="Fawtech has seen consistent regional growth, with strong sales performance across key areas. Strategic partnerships and localized support have boosted awareness, training, and compliance across all regions."
        />
      </div>
    </div>
  );
};

export default BarGraph;
