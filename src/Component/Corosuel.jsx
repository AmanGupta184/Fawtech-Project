import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import {CorosuelData} from "../Context/CorosuelData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Corosuel() {
  const [slides]=useState(CorosuelData);
  return (
    <div className="relative w-full mt-16 h-[50vh] md:h-[70vh]">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-fit-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-3xl font-bold animate-fadeIn">
                    {slide.caption}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px;
          border-radius: 50%;
        }
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Corosuel;
