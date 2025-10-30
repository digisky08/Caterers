'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Emily & James Thompson',
      event: 'Wedding Anniversary',
      text: 'Absolutely spectacular! From the presentation to the flavors, every detail was perfect. Our guests are still raving about the food. Truly a memorable evening.',
      rating: 5,
    },
    {
      name: 'Robert Martinez',
      event: 'Corporate Gala',
      text: 'Outstanding service for our corporate event. Professional, timely, and the cuisine was exquisite. Highly recommend for any corporate gathering.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      event: 'Birthday Celebration',
      text: 'Made my milestone birthday unforgettable! The team went above and beyond to create a magical evening with incredible food and impeccable service.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      event: 'Award Ceremony',
      text: 'Exceeded all expectations. Elegant presentation, delicious food, and attentive service throughout the event. Worth every penny.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-[#D4AF37] fill-[#D4AF37]"
                      size={24}
                    />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].event}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-4 lg:-translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-[#800020] hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-4 lg:translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-[#800020] hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#800020] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

