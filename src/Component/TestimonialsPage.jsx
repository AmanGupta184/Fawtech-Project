import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ⭐ Testimonial Card Component
const TestimonialCard = ({ img, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center mb-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-blue-500 text-sm" />
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          “We partnered with Fawtech Electronics Trading for our IT peripheral needs. Their range,
          pricing, and service exceeded expectations. A true tech partner you can rely on.”
        </p>
      </div>
      <div className="flex items-center mt-6 pt-4 border-t border-gray-200">
        <img
          src={`https://randomuser.me/api/portraits/${img}.jpg`}
          alt="User"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-sm text-gray-800">Fawtech Client</p>
          <p className="text-xs text-gray-500">IT Manager</p>
        </div>
      </div>
    </motion.div>
  );
};

// 🧾 Page Component
function TestimonialsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 min-h-fit bg-blue-50 dark:bg-gray-900 p-6  gap-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Title & Arrows Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 leading-tight mb-6">
            Client testimonials <br /> and real success stories
          </h2>
          <div className="flex space-x-3 mt-6">
            <button className="swiper-button-prev w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200">
              ←
            </button>
            <button className="swiper-button-next w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200">
              →
            </button>
          </div>
        </motion.div>

        {/* Testimonial Swiper Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-2"
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {["men/32", "men/33", "women/34"].map((img, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard img={img} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsPage;
