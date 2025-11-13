"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-white via-lime-50 to-green-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/about-us.jpg" // 👉 Replace this with your own image path
            alt="About CodeLimes"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary)]">
            About CodeLimes
          </h2>
          <p className="text-gray-700  leading-relaxed mb-4">
            At <span className="font-semibold text-[var(--primary)]">CodeLimes</span>, we believe in
            the freshness of innovation — blending creativity, technology, and
            strategy to help businesses thrive in the digital world.
          </p>
          <p className="text-gray-700  leading-relaxed mb-4">
            Our team of passionate developers, designers, and digital marketers
            works together to build scalable web apps, intuitive mobile
            solutions, and powerful marketing strategies that deliver results.
          </p>
          <p className="text-gray-700  leading-relaxed">
            Whether you’re a startup or an established enterprise, we bring
            innovative ideas to life with precision, performance, and
            purpose — ensuring your brand stands out in today’s competitive
            digital landscape.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-gradient-to-r from-lime-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
           <span className="text-white"> Get in Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
