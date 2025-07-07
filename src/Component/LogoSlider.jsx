import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Removed AnimatePresence
import "swiper/css";
import "swiper/css/pagination";
import { Logo } from "../Context/Logo";
import "../Styles/logo-slider.css"; // External CSS

const LogoSlider = () => {
  // Animation variants for logo slides
  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  // Animation variants for hover effect
  const hoverVariants = {
    hover: { scale: 1.15, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-gray-50 md:mt-0 dark:bg-gray-900 transition-colors duration-300">
      <section className="max-w-8xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white mb-10">
          Featured Brands
        </h2>
        <div
          className="relative overflow-hidden group"
          onMouseEnter={() => { 
            const swiper = document.querySelector(".mySwiper")?.swiper;
            if (swiper) swiper.autoplay.stop();
          }}
          onMouseLeave={() => {
            const swiper = document.querySelector(".mySwiper")?.swiper;
            if (swiper) swiper.autoplay.start();
          }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="mySwiper"
          >
            {Logo.map((logo) => (
              <SwiperSlide key={logo.id}>
                <motion.div
                  className="relative flex justify-center items-center h-32"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-100 opacity-60 rounded-lg transform rotate-6 scale-95"
                    variants={hoverVariants}
                  />
                  <motion.img
                    src={logo.image}
                    alt={`Logo ${logo.id}`}
                    className="h-20 object-contain z-10"
                    variants={hoverVariants}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Smooth Continuous Movement Style */}
        <style jsx>{`
          .mySwiper {
            padding: 20px 0;
          }
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
      </section>
    </div>
  );
};

export default LogoSlider;