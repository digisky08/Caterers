'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    { name: 'All', active: true },
    { name: 'Weddings', active: false },
    { name: 'Corporate', active: false },
    { name: 'Private Events', active: false },
    { name: 'Birthday Parties', active: false },
  ];

  const images = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    category: i % 6 === 0 ? 'Weddings' : i % 6 === 1 ? 'Corporate' : i % 6 === 2 ? 'Private Events' : 'Birthday Parties',
    src: `/images/gallery-${(i % 8) + 1}.jpg`,
  }));

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/gallery-hero.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-20 text-center text-white container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-gray-200">A Visual Journey of Our Culinary Excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              OUR WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Capturing Culinary Moments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our gallery showcasing the artistry, elegance, and attention to detail 
              that goes into every event we cater.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  category.active
                    ? 'bg-[#800020] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${image.src}')` }}
                ></div>
                <div className="absolute inset-0 bg-[#800020]/30 group-hover:bg-[#800020]/20 transition-colors z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <FiX size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="w-full h-[80vh] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${selectedImage.src}')` }}
                ></div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

