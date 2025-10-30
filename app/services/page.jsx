'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our elegant wedding catering services. From intimate ceremonies to grand receptions, we craft menus that celebrate your unique love story.',
      features: [
        'Custom wedding menus',
        'Bridal party coordination',
        'Bar services & beverage packages',
        'Tasting sessions included',
        'Elegant presentation',
        'On-site coordination',
      ],
      icon: '💒',
    },
    {
      title: 'Corporate Events',
      description: 'Impress your clients and colleagues with professional catering for business meetings, conferences, seminars, and corporate celebrations.',
      features: [
        'Professional service staff',
        'Breakfast & lunch options',
        'Coffee & refreshment breaks',
        'Dietary accommodations',
        'Executive dining options',
        'Branded presentation',
      ],
      icon: '💼',
    },
    {
      title: 'Birthday Celebrations',
      description: 'Celebrate life\'s milestones with a memorable birthday party featuring delicious food, creative themes, and exceptional service.',
      features: [
        'Age-appropriate menus',
        'Themed decorations',
        'Birthday cakes & desserts',
        'Entertainment setup support',
        'Family-friendly options',
        'Photo-ready presentations',
      ],
      icon: '🎂',
    },
    {
      title: 'Anniversary Celebrations',
      description: 'Honor lasting love with a romantic and elegant anniversary dinner or celebration tailored to your preferences.',
      features: [
        'Intimate dining experiences',
        'Romantic atmosphere setup',
        'Premium wine pairings',
        'Customizable menus',
        'Elegant table settings',
        'Private chef services',
      ],
      icon: '💍',
    },
    {
      title: 'Graduation Parties',
      description: 'Celebrate academic achievements with a festive graduation party featuring crowd-pleasing favorites and celebratory atmosphere.',
      features: [
        'Buffet or plated service',
        'Party platters & snacks',
        'Graduation cakes',
        'Beverage packages',
        'Flexible scheduling',
        'Budget-friendly options',
      ],
      icon: '🎓',
    },
    {
      title: 'Holiday Catering',
      description: 'Host stress-free holiday gatherings with our seasonal menus featuring traditional favorites and modern twists.',
      features: [
        'Thanksgiving dinners',
        'Christmas celebrations',
        'New Year parties',
        'Easter brunches',
        '4th of July BBQs',
        'Seasonal specialties',
      ],
      icon: '🎄',
    },
  ];

  const additionalServices = [
    {
      title: 'Private Dining',
      description: 'Intimate dining experiences in your home with our private chef services.',
    },
    {
      title: 'Buffet Services',
      description: 'Extensive buffet options perfect for large gatherings and celebrations.',
    },
    {
      title: 'Plated Service',
      description: 'Formal plated dining with full table service and elegant presentation.',
    },
    {
      title: 'Cocktail Receptions',
      description: 'Stylish cocktail parties with passed hors d\'oeuvres and premium bar service.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-20 text-center text-white container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-200">Comprehensive Catering Solutions for Every Occasion</p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              CATERING SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Services for Every Occasion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide tailored catering 
              solutions that make your event unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FiCheck className="text-[#800020] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              SERVICE OPTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Additional Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <FiArrowRight className="text-[#800020] ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Our Process
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Consultation',
                  description: 'We discuss your vision, preferences, and requirements to understand exactly what you need.',
                },
                {
                  number: '02',
                  title: 'Customization',
                  description: 'We create a tailored menu and service plan that matches your event and budget.',
                },
                {
                  number: '03',
                  title: 'Execution',
                  description: 'Our team delivers flawless execution on your event day, ensuring perfection in every detail.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-[#D4AF37] mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's discuss how we can make your next event extraordinary. 
              Contact us for a personalized consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D4AF37] hover:bg-[#B8941F] text-[#800020] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-2xl hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

