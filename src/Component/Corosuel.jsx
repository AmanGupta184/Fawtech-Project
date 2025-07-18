import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { banners } from "../Context/CorosuelData"; // Updated import

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
    setIsImageLoaded(false); // Reset loading state when index changes
  }, [index]);

  const goToSlide = (i) => {
    setIndex(i);
  };

  const nextSlide = () => goToSlide((index + 1) % banners.length);
  const prevSlide = () => goToSlide((index - 1 + banners.length) % banners.length);

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
      className="relative mx-2 sm:mx-8 h-[250px] sm:h-[400px] overflow-hidden shadow-lg dark:bg-black rounded-lg"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 z-10">
              <span className="text-white animate-pulse">Loading...</span>
            </div>
          )}
          <img
            src={banners[index].image}
            alt={banners[index].title}
            className={`w-full h-full object-fill ${isImageLoaded ? "block" : "hidden"}`}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
          />
          {isImageLoaded && (
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white sm:pt-32 px-4 sm:px-6 text-center">
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold italic drop-shadow-md">
                {banners[index].title}
              </h2>
              <p className="text-sm sm:text-lg md:text-2xl mt-2 sm:mt-4 italic">
                {banners[index].subtitle}
              </p>
            </div>
          )}
        </motion.div>
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
