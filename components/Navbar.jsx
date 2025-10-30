'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#800020] text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <FiPhone /> <span>+1 (234) 567-8900</span>
            </a>
            <a href="mailto:info@premiumcaterers.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <FiMail /> <span>info@premiumcaterers.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">Premium Catering Services</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#800020] font-playfair">
                Premium
              </span>
              <span className="text-2xl font-bold text-[#D4AF37] font-playfair">
                Caterers
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-gray-700 hover:text-[#800020] transition-colors font-medium ${
                    activeLink === link.name ? 'text-[#800020]' : ''
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#800020] text-white px-6 py-2 rounded-full hover:bg-[#600015] transition-all hover:shadow-lg"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        >
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-[#800020] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-[#800020] text-white px-6 py-3 rounded-full text-center hover:bg-[#600015] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

