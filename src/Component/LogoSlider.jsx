import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import { Logo } from "../Context/Logo";

const LogoSlider = () => {
  const [logos, setLogos] = useState(Logo);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pt-10 text-gray-800 dark:text-gray-100">
      <h2 className="text-center text-3xl font-semibold mb-10 text-gray-800 dark:text-gray-100">
        Our Brands
      </h2>
      <div className="w-full py-10 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24} // More spacing between logos
          slidesPerView={10}
          slidesPerGroup={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          className="mySwiper"
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
