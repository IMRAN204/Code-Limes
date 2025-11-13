"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    img: "/banner1.jpg",
    title: "E-Commerce Website Redesign",
    desc: "Revamped an online store to increase conversions and enhance UX with responsive design and fast loading.",
    link: "/case-studies/ecommerce-redesign",
  },
  {
    img: "/banner2.jpg",
    title: "Mobile App for Food Delivery",
    desc: "Developed a cross-platform app to streamline orders, payments, and delivery tracking for a food startup.",
    link: "/case-studies/food-delivery-app",
  },
  {
    img: "/banner3.jpg",
    title: "SEO & Digital Marketing Campaign",
    desc: "Boosted organic traffic and social engagement for a local business through strategic marketing campaigns.",
    link: "/case-studies/seo-marketing",
  },
  {
    img: "/banner4.jpg",
    title: "Corporate Website for Tech Startup",
    desc: "Built a modern, sleek, and responsive website to showcase products and attract investors.",
    link: "/case-studies/tech-startup-website",
  },
];

const CaseStudies = () => (
  <section
    id="case-studies"
    className="py-20 bg-gradient-to-b from-lime-50 via-white to-green-100 text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-bold mb-6 text-lime-700"
    >
      Case Studies
    </motion.h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Take a look at some of our most successful projects and how we have helped businesses grow through technology and digital strategies.
    </p>

    <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      {caseStudies.map((caseStudy, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-lg border border-lime-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="relative w-full h-48">
            <Image
              src={caseStudy.img}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="font-semibold text-xl text-lime-700 mb-3">
              {caseStudy.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {caseStudy.desc}
            </p>
            <a
              href={caseStudy.link}
              className="text-green-600 font-semibold hover:underline"
            >
              View More
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CaseStudies;
