"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const match = navLinks.find((l) => l.href === pathname);
    setActiveLink(match?.name ?? "");
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/85 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="site-container">
          <div
            className={`flex items-center justify-between py-4 md:py-5 px-6 md:px-10`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Go to homepage"
            >
              <span
                className="text-2xl font-bold text-[#800020]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Premium
              </span>
              <span
                className="text-2xl font-bold text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Caterers
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className={`relative text-gray-800 hover:text-[#800020] transition-colors font-medium px-1`}
                    aria-current={activeLink === link.name ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37]"
                    initial={false}
                    animate={{
                      width: activeLink === link.name ? "100%" : 0,
                      opacity: activeLink === link.name ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.25 }}
                  />
                </div>
              ))}
              <div className="flex items-center gap-4">
                <a
                  href="tel:+1234567890"
                  className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37] text-[#800020] hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <FiPhone /> Call Us
                </a>
                <Link
                  href="/contact"
                  className="bg-[#800020] text-white px-7 py-2.5 rounded-full hover:bg-[#600015] transition-all hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        >
          <div className="site-container">
            <div className="mt-2 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 p-4">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block py-3 text-gray-800 hover:text-[#800020] transition-colors font-medium ${
                      pathname === link.href ? "text-[#800020]" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="tel:+1234567890"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[#D4AF37] text-[#800020] hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <FiPhone /> Call Us
                </a>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center bg-[#800020] text-white px-6 py-3 rounded-full hover:bg-[#600015] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
