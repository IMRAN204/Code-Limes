"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
]; // 👉 Add your own image files inside /public

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Autoplay every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Image Slider */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="CodeLimes Banner"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Experience the Freshness of Technology 🌿
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
        >
          CodeLimes provides cutting-edge software, web, app, and digital marketing
          solutions — blending creativity and innovation for your success.
        </motion.p>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 bg-gradient-to-r from-lime-600 to-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-lime-400 transition"
        >
         <span className="text-white"> Explore Our Services</span>
        </motion.a>
      </div>

      {/* Optional small dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-lime-400" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
