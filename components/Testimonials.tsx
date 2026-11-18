'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ameba D.',
    role: 'Event Client',
    text: '"The food was amazing and everyone at the event loved it! Tasty bites, nicely delivered."',
  },
  {
    name: 'Tunde A.',
    role: 'Wedding Client',
    text: '"Professional, punctual and the best food we\'ve had. Highly recommended!"',
  },
  {
    name: 'Mrs. Bello',
    role: 'Corporate Client',
    text: '"Our corporate event was a success thanks to their excellent service and delicious food!"',
  },
  {
    name: 'Chidiebere M.',
    role: 'Event Client',
    text: '"They went above and beyond to make our day special. The presentation was beautiful!"',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-catering-cream text-catering-darkText">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-catering-gold text-xs uppercase tracking-widest font-semibold">
            ✦ TESTIMONIALS ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-catering-burgundy mt-1">
            What Our Clients Say
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            We're grateful for the trust and kind words from our amazing clients[cite: 3].
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-catering-gold/20 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="font-serif font-bold text-sm text-catering-burgundy">{rev.name}</p>
                <p className="text-[11px] text-gray-400">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}