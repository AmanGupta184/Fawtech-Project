import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample banners with images
const banners = [
  {
    title: "Explore Innovation",
    subtitle: "Discover cutting-edge electronics & IT solutions.",
    image: "../Assets/Images/gamingBanner.jpg",
  },
  {
    title: "Global Distribution",
    subtitle: "Expanding across the Middle East, Asia & Europe.",
    image: "../Assets/Images/dysonBanner.jpg",
  },
  {
    title: "Fawtech Electronics",
    subtitle: "Your trusted partner in technology excellence.",
    image: "../Assets/Images/appleBanner.jpg",
  },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setIndex((index + 1) % banners.length);
  const prevSlide = () =>
    setIndex((index - 1 + banners.length) % banners.length);

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden shadow-lg dark:bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Image Background */}
          <img
            src={banners[index].image}
            alt={banners[index].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              {banners[index].title}
            </h2>
            <p className="text-lg md:text-2xl mt-4">
              {banners[index].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
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
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${
              i === index
                ? "bg-white dark:bg-white"
                : "bg-white/50 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
