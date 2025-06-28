import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Logo } from "../Context/Logo";
import "../Styles/logo-slider.css"; // External CSS

const LogoSlider = () => {
  const [logos] = useState(Logo);

  const handleMouseEnter = () => {
    const swiper = document.querySelector(".logoSwiper")?.swiper;
    if (swiper) swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    const swiper = document.querySelector(".logoSwiper")?.swiper;
    if (swiper) swiper.autoplay.start();
  };

  return (
    <section className="py-10 px-6 bg-gray-50 dark:bg-gray-900">
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
          className="logoSwiper linear-transition"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id} className="transition-transform duration-300">
              <div className="flex justify-center items-center h-24 group">
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
    </section>
  );
};

export default LogoSlider;
