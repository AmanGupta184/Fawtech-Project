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
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 animate__animated animate__zoomIn">
              Our Trusted Brands
            </h2>
            <div
              className="w-full py-12 px-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={7}
                loop={true}
                speed={2500}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: 7 },
                }}
                className="logoSwiper"
              >
                {logos.map((logo) => (
                  <SwiperSlide key={logo.id}>
                    <div className="flex justify-center items-center h-24">
                      <img
                        src={logo.image}
                        alt={`Logo ${logo.id}`}
                        className="h-16 object-contain transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <style jsx>{`
              .swiper-wrapper {
                transition-timing-function: linear !important;
              }
              .swiper-slide {
                transition: transform 0.3s ease;
              }
              @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
            `}</style>
          </section>
  );
};

export default LogoSlider;
