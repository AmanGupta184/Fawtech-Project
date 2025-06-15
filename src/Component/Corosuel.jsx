import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image1 from "../Assets/Images/Image1.jpg";
import Image2 from "../Assets/Images/Image2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Corosuel() {
  return (
    <Swiper
      className="w-full h-[60vh]"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image1} alt="" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Slide 1 Caption
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image2} alt="" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Slide 2 Caption
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image1} alt="" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Slide 3 Caption
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image2} alt="" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Slide 4 Caption
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Corosuel;
