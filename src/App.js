import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import { ThemeProvider } from "./Context/ThemeContext";
import ErrorPage from "./Pages/ErrorPage";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Component/Loading"; // Import the Loading component

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load and reset loading state on route change
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500); // 1.5-second loading
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      )}
    </ThemeProvider>
  );
}

export default App;
