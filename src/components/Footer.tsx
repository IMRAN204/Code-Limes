"use client";
import { Mail, Facebook, Instagram, Linkedin, Twitter, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 items-start">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="CodeLimes Logo"
              width={200}
              height={50}
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Experience the freshness of technology 🌿  
            We craft digital excellence with innovation and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#mission" className="hover:text-green-600 transition">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-green-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-green-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Subscribe</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get updates on our latest projects & tech news.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-300 focus-within:border-green-600 transition"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 text-white font-semibold hover:opacity-90 transition"
            >
              <Mail size={18} />
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
          <div className="space-y-2 text-gray-600 text-sm pt-4">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-green-600" />
              <a href="tel:+8801700000000" className="hover:underline">
                +880 1700 000000
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-green-600" />
              <a href="mailto:info@codelimes.com" className="hover:underline">
                info@codelimes.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-600">
        © {year} <span className="font-medium text-green-600">CodeLimes</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
