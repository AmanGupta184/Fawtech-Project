import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";

// ✅ Import local images
import p4 from '../Assets/Person/p4.jpg';
import p5 from '../Assets/Person/p5.jpg';
import p6 from '../Assets/Person/p6.jpg';

// 🎯 Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ⭐ Testimonial Card Component
const TestimonialCard = ({ img, text, name, role, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
    >
      <div>
        <div className="flex items-center mb-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-blue-500 text-sm" />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          “{text}”
        </p>
      </div>
      <div className="flex items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <img src={img} alt={name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-sm text-gray-800 dark:text-white">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// 🧾 Testimonials Page Component
function TestimonialsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // 📋 Testimonial Data
  const testimonials = [
    {
      img: p4,
      name: "Amit",
      role: "Procurement Head, TechNova",
      text: "Fawtech's timely delivery and premium product range helped us scale rapidly across the Middle East. Their commitment is unmatched.",
    },
    {
      img: p5,
      name: "David",
      role: "E-commerce Manager, GadgetMart",
      text: "We’ve worked with several vendors, but none match Fawtech’s professionalism and product quality. They truly understand modern market needs.",
    },
    {
      img: p6,
      name: "Sara",
      role: "IT Director, Visionware",
      text: "From high-performance graphics cards to tablets, Fawtech delivers excellence across the board. Highly recommended for enterprise partnerships.",
    },
  ];

  return (
    <section className="py-20 min-h-fit bg-blue-50 dark:bg-gray-900 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {/* 📣 Title Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <FaQuoteLeft className="text-3xl md:text-4xl text-blue-600 mb-4" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-600 leading-tight mb-6">
            Client testimonials <br /> and real success stories
          </h2>
        </motion.div>

        {/* 🌀 Testimonial Carousel */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 md:col-span-2"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  img={testimonial.img}
                  text={testimonial.text}
                  name={testimonial.name}
                  role={testimonial.role}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsPage;
