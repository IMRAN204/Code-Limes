"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for background transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).getAttribute("href");
      const target = document.querySelector(href || "");
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 70,
          behavior: "smooth",
        });
      }
      setOpen(false); // close menu on click
    });
  });
}, []);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
       <Image src="/logo.png" alt="CodeLimes Logo" width={200} height={200} className="w-36 md:w-44" />

        {/* Desktop Menu */}
        <nav className={`hidden md:flex gap-8 font-medium  ${scrolled ? "text-gray-700" : "text-white"}`}>
          <a href="#home" className="hover:text-[var(--primary)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--primary)] transition">
            About
          </a>
          <a href="#services" className="hover:text-[var(--primary)] transition">
            Services
          </a>
          <a href="#case-studies" className="hover:text-[var(--primary)] transition">
            Case Studies
          </a>
          <a href="#team" className="hover:text-[var(--primary)] transition">
            Our Team
          </a>
          <a href="#testimonials" className="hover:text-[var(--primary)] transition">
            Testimonial
          </a>
          <a href="#contact" className="hover:text-[var(--primary)] transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6 font-medium text-gray-700">
            <a href="#home" className="hover:text-[var(--primary)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--primary)] transition">
            About
          </a>
          <a href="#services" className="hover:text-[var(--primary)] transition">
            Services
          </a>
          <a href="#case-studies" className="hover:text-[var(--primary)] transition">
            Case Studies
          </a>
          <a href="#team" className="hover:text-[var(--primary)] transition">
            Our Team
          </a>
          <a href="#testimonials" className="hover:text-[var(--primary)] transition">
            Testimonial
          </a>
          <a href="#contact" className="hover:text-[var(--primary)] transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
