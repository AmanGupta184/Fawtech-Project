import Layout from '../Layout/Layout';
import React from 'react';
import Image from '../Assets/Images/Image1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Logo } from '../Context/Logo';

function AboutUs() {
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        {/* Hero Header */}
        <header className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 py-16 md:py-24">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-900 opacity-20 dark:opacity-40"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight">
              About Fawtech
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-600 dark:text-gray-200 text-base md:text-lg">
              <p>
                Founded in 2023, Fawtech Electronics Trading L.L.C is a Dubai-based electronics company specializing in gaming products, IT peripherals, graphics cards, memory cards, tablets, and wearable devices.
              </p>
              <p>
                Strategically located in Dubai, surrounded by international banks and hotels, Fawtech leverages its position in DAFZA and JAFZA for efficient global distribution. Our worldwide customer base reflects our commitment to delivering feature-rich, professional products at competitive prices.
              </p>
              <p>
                We aim to provide the "most out of the products for the best prices," ensuring innovation, performance, and sustainability in every solution we offer.
              </p>
            </div>
          </div>
        </header>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At ElectroTech, we are committed to providing cutting-edge electronic products that combine technology, quality, and affordability.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our goal is to innovate continuously and serve our customers with excellence.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={Image}
                alt="Electronics Lab"
                className="w-full max-w-md rounded-xl shadow-lg object-cover h-64"
              />
            </div>
          </div>
        </section>

       {/* Brands Carousel */}
<section className="max-w-6xl mx-auto py-12 px-4">
  <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white mb-10">
    Featured Brands
  </h2>
  <div
    className="relative overflow-hidden group"
    onMouseEnter={() => {
      const swiper = document.querySelector('.mySwiper')?.swiper;
      if (swiper) swiper.autoplay.stop();
    }}
    onMouseLeave={() => {
      const swiper = document.querySelector('.mySwiper')?.swiper;
      if (swiper) swiper.autoplay.start();
    }}
  >
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="mySwiper"
    >
      {Logo.map((logo) => (
        <SwiperSlide key={logo.id}>
          <div className="relative flex justify-center items-center h-32 transform transition-transform duration-500 hover:scale-110">
            <div className="absolute inset-0 bg-gray-400 dark:bg-gray-700 opacity-20 rounded-lg transform rotate-3 scale-95"></div>
            <img
              src={logo.image}
              alt={`Logo ${logo.id}`}
              className="h-20 object-contain z-10"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Smooth Continuous Movement Style */}
  <style jsx>{`
    .mySwiper {
      padding: 20px 0;
    }
    .swiper-wrapper {
      transition-timing-function: linear !important;
    }
  `}</style>
</section>


        {/* Product Portfolio */}
        <section className="max-w-6xl mx-auto py-12 px-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Our Product Portfolio
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Gaming Consoles',
                description: 'We offer a range of gaming consoles from top manufacturers, including PlayStation, Xbox, and Nintendo. Whether you’re a casual gamer or a hardcore enthusiast, we’ve got the perfect console for you.',
              },
              {
                title: 'Dyson Products',
                description: 'Our selection includes Dyson vacuums, air purifiers, and more. Known for innovative design and performance, these products make your life easier and more enjoyable.',
              },
              {
                title: 'Graphic Cards',
                description: 'For gamers and professionals, our graphic cards from NVIDIA and AMD deliver outstanding visuals and performance.',
              },
              {
                title: 'Apple Accessories',
                description: 'We carry a variety of Apple accessories, including cases, chargers, and more, designed to complement your Apple devices.',
              },
              {
                title: 'JBL Speakers',
                description: 'Experience premium sound with our JBL speakers, suitable for music lovers and gamers alike.',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-6xl mx-auto py-12 px-4 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base md:text-lg">
              Contact us today and discover how we can help you upgrade your electronics experience.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-700 dark:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-800 dark:hover:to-indigo-800 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AboutUs;