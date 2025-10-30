'use client'

import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiHeart, FiTarget } from 'react-icons/fi';

export default function About() {
  const values = [
    {
      icon: <FiAward size={48} />,
      title: 'Excellence',
      description: 'We strive for perfection in every dish and every service we provide.',
    },
    {
      icon: <FiUsers size={48} />,
      title: 'Teamwork',
      description: 'Our collaborative approach ensures seamless execution of every event.',
    },
    {
      icon: <FiHeart size={48} />,
      title: 'Passion',
      description: 'Our love for culinary arts drives us to exceed expectations.',
    },
    {
      icon: <FiTarget size={48} />,
      title: 'Innovation',
      description: 'We continuously evolve our menus with creative and modern techniques.',
    },
  ];

  const timeline = [
    { year: '2009', event: 'Founded with a vision to bring luxury catering to every event' },
    { year: '2012', event: 'Expanded to serve corporate clients across the region' },
    { year: '2015', event: 'Launched our premier wedding catering division' },
    { year: '2018', event: 'Opened our state-of-the-art kitchen facility' },
    { year: '2021', event: 'Reached milestone of 500+ events catered successfully' },
    { year: '2024', event: 'Awarded Best Catering Service by Event Professionals Association' },
  ];

  const team = [
    { name: 'Chef Marcus Thompson', role: 'Executive Chef', experience: '15 years' },
    { name: 'Sarah Mitchell', role: 'Event Director', experience: '12 years' },
    { name: 'Chef Emily Rodriguez', role: 'Pastry Chef', experience: '10 years' },
    { name: 'David Chen', role: 'Operations Manager', experience: '11 years' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-20 text-center text-white container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-200">Crafting Culinary Excellence Since 2009</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#D4AF37] font-semibold text-lg tracking-wide">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                The Journey to Culinary Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, Premium Caterers began with a simple yet powerful vision: 
                  to transform ordinary events into extraordinary experiences through 
                  exceptional cuisine and impeccable service.
                </p>
                <p>
                  What started as a small family business with a passion for creating memorable 
                  meals has grown into one of the region's most trusted and celebrated catering 
                  companies. Our commitment to excellence has earned us the trust of clients 
                  celebrating life's most important moments.
                </p>
                <p>
                  Today, we stand proud with over 500 successful events under our belt, each one 
                  crafted with the same dedication to quality, innovation, and creating 
                  unforgettable experiences for our clients and their guests.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-lg hover:shadow-xl transition-all"
              >
                <div className="text-[#800020] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              MILESTONES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-24">
                    <span className="text-3xl font-bold text-[#D4AF37]">{item.year}</span>
                  </div>
                  <div className="flex-1 border-l-4 border-[#800020] pl-6 pb-8">
                    <p className="text-lg text-gray-700">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Meet the Experts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-all"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#800020] to-[#D4AF37] flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#800020] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

