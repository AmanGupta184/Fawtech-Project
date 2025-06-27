import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image1 from "../Assets/Images/laptop.jpg";
import Image2 from "../Assets/Images/drones2.jpg";
import Image3 from "../Assets/Images/pc.png";
import Image4 from "../Assets/Images/vr5.png";
import Image5 from "../Assets/Images/console.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Corosuel() {
  return (
    <Swiper
      className="w-full h-[80vh] z-10"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image1} alt="Slide 1" />
          {/* <div className="absolute bottom-0 w-full bg-gray-800 dark:bg-gray-900 bg-opacity-70 text-gray-100 dark:text-gray-200 text-center p-2">
            Slide 1 Caption
          </div> */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image2} alt="Slide 2" />
          {/* <div className="absolute bottom-0 w-full bg-gray-800 dark:bg-gray-900 bg-opacity-70 text-gray-100 dark:text-gray-200 text-center p-2">
            Slide 2 Caption
          </div> */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image3} alt="Slide 3" />
          {/* <div className="absolute bottom-0 w-full bg-gray-800 dark:bg-gray-900 bg-opacity-70 text-gray-100 dark:text-gray-200 text-center p-2">
            Slide 3 Caption
          </div> */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image4} alt="Slide 4" />
          {/* <div className="absolute bottom-0 w-full bg-gray-800 dark:bg-gray-900 bg-opacity-70 text-gray-100 dark:text-gray-200 text-center p-2">
            Slide 4 Caption
          </div> */}
        </div>
      </SwiperSlide>

       <SwiperSlide>
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={Image5} alt="Slide 5" />
          {/* <div className="absolute bottom-0 w-full bg-gray-800 dark:bg-gray-900 bg-opacity-70 text-gray-100 dark:text-gray-200 text-center p-2">
            Slide 4 Caption
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Corosuel;
