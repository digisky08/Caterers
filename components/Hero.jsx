"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();
  const bgTranslateY = useTransform(scrollY, [0, 600], [0, 120]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.4, 0.6]);
  const floatingY = [0, -8, 0];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative gradient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, #D4AF37 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.05, 1], x: [0, 10, 0], y: floatingY }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[48rem] h-[48rem] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, #800020 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, -12, 0], y: floatingY }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background Image with Overlay (parallax) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
          style={{ y: bgTranslateY }}
        />
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)",
            opacity: overlayOpacity,
          }}
        />
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

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Culinary Excellence
            <br />
            <span className="text-[#D4AF37]">For Every Occasion</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Creating unforgettable moments with exquisite flavors, impeccable
            service, and a touch of luxury that makes every event extraordinary.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/contact"
                className="bg-[#800020] hover:bg-[#600015] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 inline-block text-center"
              >
                Book Your Event
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl"
              >
                Explore Services
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating accents */}
      <motion.div
        aria-hidden
        className="absolute top-32 right-10 w-28 h-28 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm z-20"
        animate={{ y: floatingY, rotate: [0, 2, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-[#D4AF37] transition-colors"
          aria-label="Scroll down"
        >
          <FiChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
}
