"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      name: "Michael Anderson",
      position: "CEO, TechFlow Inc.",
      review:
        "The team delivered a flawless, high-performing website with clean architecture. Their communication and professionalism were excellent.",
      image: "/client1.jpg",
      rating: 5,
    },
    {
      name: "Sophia Carter",
      position: "Founder, MarketUp Digital",
      review:
        "Our SEO ranking improved massively! Their strategy and execution transformed our online presence. Wonderful experience overall.",
      image: "/client2.jpg",
      rating: 5,
    },
    {
      name: "David Miller",
      position: "Product Manager, AppNest",
      review:
        "They built a scalable and beautifully designed mobile app. The UI/UX exceeded our expectations. Highly recommended!",
      image: "/client3.jpg",
      rating: 4,
    },
    {
      name: "Emma Wilson",
      position: "CTO, NexaLabs",
      review:
        "Amazing quality and delivery speed. The project exceeded our expectations and helped us scale fast.",
      image: "/client4.jpg",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-lime-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-10 text-lime-700"
        >
          What Our Clients Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          loop={true}
          pagination={{
            el: ".custom-dots",
            clickable: true,
            bulletClass: "custom-dot",
            bulletActiveClass: "custom-dot-active",
          }}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {reviews.map((client, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md border border-lime-100 p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Client Photo */}
                <div className="flex justify-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={90}
                    height={90}
                    className="rounded-full h-20 w-20 object-cover shadow-lg mb-4 border-4 border-lime-200"
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: client.rating }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>

                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  “{client.review}”
                </p>

                <h3 className="text-lg font-semibold text-center text-lime-700">
                  {client.name}
                </h3>
                <p className="text-gray-500 text-center text-sm">{client.position}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-dots mt-6 flex justify-center"></div>
      </div>
    </section>
  );
}
