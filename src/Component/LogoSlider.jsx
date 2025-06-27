import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Logo } from "../Context/Logo";

const LogoSlider = () => {
  const [logos] = useState(Logo);

  // Hover handler refs autoplay control
  const handleMouseEnter = () => {
    const swiper = document.querySelector(".logoSwiper")?.swiper;
    if (swiper) swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    const swiper = document.querySelector(".logoSwiper")?.swiper;
    if (swiper) swiper.autoplay.start();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pt-10 text-gray-800 dark:text-gray-100">
      <h2 className="text-center text-3xl font-semibold mb-10 text-gray-800 dark:text-gray-100">
        Our Collaboration
      </h2>
      <div
        className="w-full py-10 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={10}
          loop={true}
          speed={3000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          className="logoSwiper"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex justify-center items-center h-22">
                <img
                  src={logo.image}
                  alt={`Logo`}
                  className="h-16 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          .swiper-pagination-bullet {
            background: #9ca3af;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background: #1f2937;
          }
          .dark .swiper-pagination-bullet {
            background: #6b7280;
          }
          .dark .swiper-pagination-bullet-active {
            background: #f3f4f6;
          }
        `}</style>
      </div>
    </div>
  );
};

export default LogoSlider;
