"use client";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => (
  <section
    id="mission"
    className="py-20 bg-gradient-to-b from-white via-green-50 to-lime-100 text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-bold mb-12 text-lime-700"
    >
      Our Mission & Vision
    </motion.h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-lime-500 hover:shadow-2xl transition"
      >
        <div className="flex flex-col items-center">
          <div className="bg-lime-100 p-4 rounded-full mb-4">
            <Target className="w-8 h-8 text-lime-600" />
          </div>
          <h3 className="text-2xl font-semibold text-lime-700 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver innovative, efficient, and affordable technology
            solutions that empower businesses to grow globally and make
            technology accessible for all.
          </p>
        </div>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-2xl transition"
      >
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <Eye className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-green-700 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To become a globally recognized technology company known for
            creativity, reliability, and a customer-first approach — inspiring
            innovation that drives the digital future.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionVision;
