
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample banners
const banners = [
  {
    title: "Explore Innovation",
    subtitle: "Discover cutting-edge electronics & IT solutions.",
    bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    title: "Global Distribution",
    subtitle: "Expanding across the Middle East, Asia & Europe.",
    bg: "bg-gradient-to-r from-cyan-400 to-sky-500",
  },
  {
    title: "Fawtech Electronics",
    subtitle: "Your trusted partner in technology excellence.",
    bg: "bg-gradient-to-r from-indigo-600 to-violet-500",
  },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((index + 1) % banners.length);
  const prevSlide = () => setIndex((index - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 ${banners[index].bg}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold">{banners[index].title}</h2>
          <p className="text-lg md:text-2xl mt-4">{banners[index].subtitle}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
