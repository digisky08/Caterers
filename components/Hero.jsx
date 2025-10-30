'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4"
          >
            <span className="text-[#D4AF37] text-lg font-medium tracking-wide">
              EXCEPTIONAL CATERING SERVICES
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Culinary Excellence
            <br />
            <span className="text-[#D4AF37]">For Every Occasion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Creating unforgettable moments with exquisite flavors, impeccable service, 
            and a touch of luxury that makes every event extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#800020] hover:bg-[#600015] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 inline-block text-center"
            >
              Book Your Event
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-[#D4AF37] transition-colors"
          aria-label="Scroll down"
        >
          <FiChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
}

