import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image1 from "../Assets/Images/Image1.jpg";
import Image2 from "../Assets/Images/Image2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Corosuel() {
  return (
    <Swiper className="w-full h-[60vh]"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="w-full h-full object-cover" src={Image1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-full object-cover" src={Image2} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-full object-cover" src={Image1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-full object-cover" src={Image2} alt=""/></SwiperSlide>
    </Swiper>
  );
}

export default Corosuel;
