// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y, Autoplay } from "swiper/modules";
// import { motion, AnimatePresence } from "framer-motion";
// import { CorosuelData } from "../Context/CorosuelData";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function Carousel() {
//   const [slides] = useState(CorosuelData);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading for 1.5 seconds
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Animation variants for slides
//   const slideVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
//   };

//   // Animation variants for caption
//   const captionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
//   };

//   return (
//     <>
//       {/* Loading Animation */}
//       <AnimatePresence>
//         {isLoading && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div
//               className="w-12 h-12 border-4 border-t-blue-500 border-gray-200 dark:border-gray-700 rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Carousel */}
//       <motion.div
//         className="relative w-full mt-16 h-[40vh] md:h-[70vh]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Swiper
//           modules={[Navigation, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           className="w-full h-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className="relative w-full h-full"
//                 variants={slideVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <img
//                   src={slide.image}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-gray-900/70 to-transparent flex items-end">
//                   <motion.div
//                     className="p-6 text-white"
//                     variants={captionVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
//                     <h3 className="text-2xl md:text-3xl font-bold">
//                       {slide.caption}
//                     </h3>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </>
//   );
// }

// export default Carousel;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample banners
const banners = [
  {
    title: "Explore Innovation",
    subtitle: "Discover cutting-edge electronics & IT solutions.",
    bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    title: "Global Distribution",
    subtitle: "Expanding across the Middle East, Asia & Europe.",
    bg: "bg-gradient-to-r from-pink-500 to-red-600",
  },
  {
    title: "Fawtech Electronics",
    subtitle: "Your trusted partner in technology excellence.",
    bg: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((index + 1) % banners.length);
  const prevSlide = () => setIndex((index - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 ${banners[index].bg}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold">{banners[index].title}</h2>
          <p className="text-lg md:text-2xl mt-4">{banners[index].subtitle}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
