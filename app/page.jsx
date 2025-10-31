"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { FiAward, FiUsers, FiCalendar, FiHeart } from "react-icons/fi";

export default function Home() {
  const features = [
    {
      icon: <FiAward size={48} />,
      title: "Excellence Guaranteed",
      description:
        "Award-winning cuisine and service recognized by industry professionals.",
    },
    {
      icon: <FiUsers size={48} />,
      title: "Expert Team",
      description:
        "Experienced chefs and event coordinators dedicated to your success.",
    },
    {
      icon: <FiCalendar size={48} />,
      title: "Flexible Planning",
      description:
        "Customizable menus and services tailored to your unique needs and budget.",
    },
    {
      icon: <FiHeart size={48} />,
      title: "Passionate Service",
      description:
        "We pour our heart into every event, ensuring unforgettable experiences.",
    },
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Events Catered" },
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
    { number: 50, suffix: "+", label: "Expert Team Members" },
  ];

  const menuHighlights = [
    {
      name: "Signature Appetizers",
      description:
        "Handcrafted hors d'oeuvres featuring locally sourced ingredients",
      image: "/images/appetizers.jpg",
    },
    {
      name: "Main Course Excellence",
      description: "Chef-prepared entrees using premium cuts and fresh produce",
      image: "/images/main-course.jpg",
    },
    {
      name: "Artisan Desserts",
      description:
        "Custom-designed pastries and desserts to sweeten your celebration",
      image: "/images/desserts.jpg",
    },
    {
      name: "Beverage Packages",
      description:
        "Premium bar services with cocktails, wines, and specialty drinks",
      image: "/images/beverages.jpg",
    },
  ];

  const FeatureCard = ({ index, feature }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative p-8 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-2xl transition-all duration-300"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ rotateX: 6, rotateY: -6 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-[#800020] mb-4 flex justify-center">
        {feature.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );

  const StatNumber = ({ value, suffix = "" }) => {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 1.2,
        ease: "easeOut",
      });
      return controls.stop;
    }, [value, motionValue]);

    return (
      <span>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    );
  };

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Curved divider */}
      <div aria-hidden className="bg-white">
        <svg
          className="-mt-24 w-full"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,53.3C96,43,192,21,288,21.3C384,21,480,43,576,53.3C672,64,768,64,864,53.3C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              We combine culinary artistry with exceptional service to create
              memorable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} index={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#800020] to-[#600015] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">
                  <StatNumber value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              OUR MENU
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Culinary Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Explore our signature offerings crafted with the finest
              ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative h-96 rounded-lg overflow-hidden [perspective:1000px]"
                whileHover={{ rotateX: 4, rotateY: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: item.image
                      ? `url(${item.image})`
                      : "linear-gradient(135deg, #800020 0%, #600015 100%)",
                  }}
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                  <p className="text-lg text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <TestimonialCarousel />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#800020] via-[#600015] to-[#800020] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's discuss your vision and create an unforgettable culinary
              experience. Contact us today for a complimentary consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#800020] px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105"
              >
                Get A Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#800020] px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
