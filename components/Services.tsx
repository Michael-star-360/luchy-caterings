'use client';

import { motion } from 'framer-motion';
import { Utensils, Sandwich, Cake, Heart, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Nigerian & Intercontinental Dishes',
    desc: 'Authentic and delicious meals, prepared with the finest ingredients.',
  },
  {
    icon: Sandwich,
    title: 'Small Chops',
    desc: 'Perfect for parties, meetings and all kinds of events.',
  },
  {
    icon: Cake,
    title: 'Pastries',
    desc: 'Cakes, doughnuts, pies and more — freshly baked with love.',
  },
  {
    icon: Heart,
    title: 'Weddings & Events',
    desc: 'Make your special day unforgettable with our premium catering services.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Catering',
    desc: 'Professional and classy catering for your business events and meetings.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-catering-cream text-catering-darkText">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-catering-burgundy">
            Our Services
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            We specialize in a variety of catering services tailored to your needs, from everyday meals to special celebrations.
          </p>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-catering-gold/20 flex flex-col items-center text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-catering-burgundy text-catering-gold flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-sm text-catering-burgundy mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}