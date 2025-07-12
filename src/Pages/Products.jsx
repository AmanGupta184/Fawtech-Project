import React, { useState, useMemo, useRef, useEffect } from "react";
import Layout from "../Layout/Layout";
import ProductData from "../Context/ProductData";
import { motion, AnimatePresence } from "framer-motion";

// Utility to detect mobile
const isMobileDevice = () => window.matchMedia("(max-width: 768px)").matches;

const ProductByCategoryCardView = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(isMobileDevice());
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(isMobileDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", Boolean(activeCategory));
    return () => document.body.classList.remove("overflow-hidden");
  }, [activeCategory]);

  const productsByCategory = useMemo(() => {
    return ProductData.reduce((acc, product) => {
      const { category, brand, name, description } = product;
      if (category && brand && name && description) {
        acc[category] = acc[category] || [];
        acc[category].push(product);
      }
      return acc;
    }, {});
  }, []);

  const categories = useMemo(() => Object.keys(productsByCategory), [productsByCategory]);

  const showOverlay = (category) => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setActiveCategory(category), 100);
  };

  const hideOverlay = () => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setActiveCategory(null), 300);
  };

  const cancelHoverTimeout = () => clearTimeout(hoverTimeoutRef.current);

  const formatCategory = (cat) => {
    const parts = cat.split(" - ");
    return parts.length > 1 ? parts[1] : cat;
  };

  return (
    <Layout>
      <div className="min-h-screen px-6 py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-8 text-center">Explore Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const products = productsByCategory[category];
            const [firstProduct] = products;
            const brandLogos = [...new Set(products.map(p => p.brandLogo || p.brandImage))].filter(Boolean);

            return (
              <motion.div
                key={category}
                layout
                transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
                onMouseEnter={() => !isMobile && showOverlay(category)}
                onMouseLeave={() => !isMobile && hideOverlay()}
                onClick={() => isMobile && setActiveCategory(category)}
                className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-semibold mb-2 text-blue-600">{formatCategory(category)}</h2>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {brandLogos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt="brand"
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-inner">
                  <img
                    src={firstProduct.images?.[0] || firstProduct.image}
                    alt={firstProduct.name}
                    className="w-full h-40 object-contain "
                    loading="lazy"
                  />
                  <h3 className="text-sm font-medium">{firstProduct.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {firstProduct.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overlay */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveCategory(null)}
              onMouseEnter={!isMobile ? cancelHoverTimeout : undefined}
              onMouseLeave={!isMobile ? hideOverlay : undefined}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 relative shadow-xl will-change-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveCategory(null)}
                  className="absolute top-3 right-3 text-xl font-bold text-gray-600 dark:text-gray-300 hover:text-red-500"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold mb-4">{formatCategory(activeCategory)}</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {productsByCategory[activeCategory].map((product, idx) => (
                    <motion.div
                      key={`${product.name}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: idx * 0.06, ease: "easeOut" }}
                      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start shadow"
                    >
                      <img
                        src={product.images?.[0] || product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full sm:w-48 h-56 object-contain rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-md font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                          {product.description}
                        </p>
                        {product.price && (
                          <p className="text-sm font-medium text-green-600 mt-1">
                            Price: {product.price}
                          </p>
                        )}
                        {product.specs && (
                          <ul className="text-xs text-gray-700 dark:text-gray-300 list-disc pl-4 mt-1 space-y-1">
                            {(Array.isArray(product.specs)
                              ? product.specs
                              : product.specs.split(","))
                              .slice(0, 3)
                              .map((spec, sIdx) => (
                                <li key={sIdx}>{spec.trim()}</li>
                              ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ProductByCategoryCardView;
