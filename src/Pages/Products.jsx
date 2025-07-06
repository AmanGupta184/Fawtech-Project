import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as SwiperPagination } from "swiper/modules";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../Layout/Layout";
import ProductData from "../Context/ProductData";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);
  const productsPerPage = 16;

  useEffect(() => {
    const timeout = setTimeout(() => setSearchTerm(searchInput), 300);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const safeProducts = useMemo(
    () =>
      ProductData.filter(
        (p) =>
          p &&
          typeof p.name === "string" &&
          typeof p.category === "string" &&
          typeof p.description === "string"
      ),
    []
  );

  const categories = useMemo(
    () => ["All", ...new Set(safeProducts.map((p) => p.category))],
    [safeProducts]
  );

  const filteredProducts = useMemo(
    () =>
      safeProducts.filter((p) => {
        const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
        const textMatch =
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && textMatch;
      }),
    [safeProducts, selectedCategory, searchTerm]
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(
    () =>
      filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      ),
    [filteredProducts, currentPage]
  );

  const closeModal = () => setModalProduct(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (!modalProduct) return;
      const currentIndex = filteredProducts.findIndex((p) => p.name === modalProduct.name);
      if (currentIndex === -1) return;

      if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
        setModalProduct(filteredProducts[prevIndex]);
      }
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % filteredProducts.length;
        setModalProduct(filteredProducts[nextIndex]);
      }
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalProduct, filteredProducts]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <Layout>
      <div className="min-h-screen p-6 transition-all bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
        <div className="flex flex-wrap justify-center items-center mt-20 gap-4 mb-6 animate-fadeDown">
          <h1 className="text-3xl font-bold text-gray-950 dark:text-gray-50">Explore Our Electronics</h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 animate-fadeIn">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
                setModalProduct(null);
              }}
              className={`px-4 py-2 rounded-md transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mb-8 flex justify-center animate-fadeIn">
          <input
            type="text"
            placeholder="Search by product name or category..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full max-w-lg px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm + currentPage}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {paginatedProducts.map((product, index) => (
              <motion.div
                key={product.name + index}
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition"
                onClick={() => setModalProduct(product)}
              >
                <img
                  src={product.images?.[0] || product.image || "/fallback.jpg"}
                  alt={product.name || `Product ${index}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10 animate-fadeIn">
            No products match your search or filter.
          </div>
        )}

        <div className="flex flex-wrap justify-center items-center gap-2 my-10">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full bg-blue-600 text-white disabled:bg-gray-400"
          >
            <FaArrowLeft/>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full bg-blue-600 text-white disabled:bg-gray-400"
          >
            <FaArrowRight/>
          </button>
        </div>

        <AnimatePresence>
          {modalProduct && (
            <motion.div
              onClick={closeModal}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button onClick={closeModal} className="absolute top-4 right-4 text-2xl">
                  &times;
                </button>

                <Swiper
                  modules={[Navigation, SwiperPagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                >
                  {(modalProduct.images || [modalProduct.image]).map((img, i) => (
                    <SwiperSlide key={`${modalProduct.name}-img-${i}`}>
                      <img
                        src={img}
                        alt={`Slide ${i}`}
                        className="w-full h-64 object-contain rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <h2 className="text-2xl font-bold mt-4">{modalProduct.name}</h2>
                <p className="mt-2">{modalProduct.description}</p>

                {filteredProducts.length > 1 && (
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => {
                        const i = filteredProducts.findIndex(p => p.name === modalProduct.name);
                        setModalProduct(filteredProducts[(i - 1 + filteredProducts.length) % filteredProducts.length]);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={() => {
                        const i = filteredProducts.findIndex(p => p.name === modalProduct.name);
                        setModalProduct(filteredProducts[(i + 1) % filteredProducts.length]);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Product;
