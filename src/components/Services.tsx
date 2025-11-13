"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, BarChart } from "lucide-react";

const services = [
  {
    icon: <Code size={40} className="text-lime-600" />,
    title: "Web Development",
    desc: "Custom, responsive, and SEO-friendly websites built with modern frameworks and clean code.",
  },
  {
    icon: <Smartphone size={40} className="text-green-600" />,
    title: "App Development",
    desc: "High-performing Android & iOS apps designed for seamless user experience and scalability.",
  },
  {
    icon: <Globe size={40} className="text-lime-600" />,
    title: "Digital Marketing",
    desc: "Boost your brand visibility with strategic SEO, social media, and paid advertising campaigns.",
  },
  {
    icon: <BarChart size={40} className="text-green-600" />,
    title: "SEO Optimization",
    desc: "Improve website ranking, drive organic traffic, and grow your audience effectively.",
  },
];

const Services = () => (
  <section
    id="services"
    className="py-20 bg-gradient-to-b from-lime-50 via-white to-green-100 text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-bold mb-12 text-lime-700"
    >
      Our Services
    </motion.h2>
<p className="text-gray-600 max-w-2xl mx-auto mb-12">
  Explore our wide range of digital and development services designed to help your business grow and thrive online.
</p>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-lg border border-lime-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-lime-300 transition-all duration-300"
        >
          <div className="flex justify-center items-center bg-lime-100 w-16 h-16 rounded-full mx-auto mb-5 shadow-inner">
            {service.icon}
          </div>
          <h3 className="font-semibold text-xl text-lime-700 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
