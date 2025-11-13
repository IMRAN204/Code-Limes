"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_id", "template_id", form.current, "public_key")
      .then(() => alert("✅ Message sent successfully!"))
      .catch(() => alert("❌ Error sending message. Please try again."));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-lime-100 via-white to-green-100 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-lime-700"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md border border-lime-200 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-5 text-left"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-lime-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-lime-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-lime-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-lime-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-lime-700 font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded-lg border border-lime-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-lime-700 font-medium mb-2">
            Service
          </label>
          <select
            name="service"
            required
            className="w-full p-3 rounded-lg border border-lime-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition"
          >
            <option value="">Select a Service</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="seo-optimization">SEO Optimization</option>
          </select>
        </div>

        <div>
          <label className="block text-lime-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows={5}
            required
            className="w-full p-3 rounded-lg border border-lime-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-lime-600 to-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
