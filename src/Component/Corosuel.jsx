import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    title: "Explore Innovation",
    subtitle: "Discover cutting-edge electronics & IT solutions.",
    image: require("../Assets/Images/InnovativeProducts.png"),
  },
  {
    title: "Global Distribution",
    subtitle: "Expanding across North America, Europe, Middle East, India, South East Asia, Australia",
    image: require("../Assets/Images/Globaldistributions.png"),
  },
  {
    title: "Discover DJI",
    subtitle: "Smart. Stable. Spectacular.",
    image: require("../Assets/Images/DJI_Products.png"),
  },
  {
    title: "Best Sellers",
    subtitle: "Excellence, chosen by many.",
    image: require("../Assets/Images/TopSeller.png"),
  },
  {
    title: "Experience VR World",
    subtitle: "It's time to see world around you.",
    image: require("../Assets/Images/VRBanner.png"),
  },
  {
    title: "Unleash Gaming Power",
subtitle: "Experience unmatched performance and next-gen graphics.",
image: require("../Assets/Images/alian.png"),
  },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const carouselRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = banners[index].image;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [index]);

  const goToSlide = (i) => {
    setIsImageLoaded(false);
    setIndex(i);
  };

  const nextSlide = () => goToSlide((index + 1) % banners.length);
  const prevSlide = () => goToSlide((index - 1 + banners.length) % banners.length);

  // Swipe support
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-[150px] sm:h-[480px] overflow-hidden shadow-lg dark:bg-black"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        {isImageLoaded ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={banners[index].image}
              alt={banners[index].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white pt-24 sm:pt-32 px-4 sm:px-6 text-center">
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold italic drop-shadow-md">
                {banners[index].title}
              </h2>
              <p className="text-sm sm:text-lg md:text-2xl mt-2 sm:mt-4 italic">
                {banners[index].subtitle}
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <span className="text-white animate-pulse">Loading...</span>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10 transition"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
