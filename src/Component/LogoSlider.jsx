import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
import 'swiper/css/pagination';
import {Logo} from '../Context/Logo';

const LogoSlider = () => {
  const [logos,setLogos] =useState(Logo);

  return (
    <div className="w-full h-32 py-10 px-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24} // More spacing between logos
        slidesPerView={10}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 6 },
          1024: { slidesPerView: 10 },
        }}
        className="mySwiper"
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="flex justify-center items-center h-20">
              <img
                src={logo.image}
                alt={`Logo`}
                className="h-12 object-contain"
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
  );
};

export default LogoSlider;
