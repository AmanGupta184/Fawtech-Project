import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample banners
const banners = [
  {
    title: "Explore Innovation",
    subtitle: "Discover cutting-edge electronics & IT solutions.",
    image: require("../Assets/Images/InnovativeProducts.jpeg"),
  },
  {
    title: "Global Distribution",
    subtitle: "Expanding across Honkong, Middle East, Europe, South East Asia, Indonesia, North America.",
    image: require("../Assets/Images/dysonBanner.jpg"),
  },
  {
    title: "DJI Drones",
    subtitle: "Always top of the Generation.",
    image: require("../Assets/Images/DroneBanner4.png"),
  },
    {
    title: "Top Sellers",
    subtitle: "Our best can be your best.",
    image: require("../Assets/Images/TopSeller.jpg"),
  },
    {
    title: "Experience VR World",
    subtitle: "It's time to see world around you.",
    image: require("../Assets/Images/VRBanner.jpg"),
  },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // New state for image loading

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((index + 1) % banners.length);
  const prevSlide = () =>
    setIndex((index - 1 + banners.length) % banners.length);

  // Preload the current banner image
  useEffect(() => {
    const img = new Image();
    img.src = banners[index].image;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true); // Fallback if image fails
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [index]);

  return (
    <div className="relative w-full h-[250px] sm:h-[500px] overflow-hidden shadow-lg dark:bg-black">
      {isImageLoaded ? (
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image Background */}
            <img
              src={banners[index].image}
              alt="Banner"
              className="w-full h-full object-fill"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white pt-56 px-4 sm:px-6">
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold italic">
                {banners[index].title}
              </h2>
              <p className="text-sm sm:text-lg md:text-2xl mt-2 sm:mt-4 italic">
                {banners[index].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
          <span className="text-white">Loading...</span>
        </div>
      )}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 sm:p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 sm:p-2 rounded-full transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;