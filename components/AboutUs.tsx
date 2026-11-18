'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Utensils, HeartHandshake, Star } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-catering-cream text-catering-darkText">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Chef Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border-2 border-catering-gold/30"
        >
          <Image
            src="/images/luchy.jpeg"
            alt="Luchy Catering Chef"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-catering-gold text-xs uppercase tracking-widest font-semibold">
            ✦ ABOUT US ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-catering-burgundy">
            Good Food. Happy People.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Luchy Catering Services is driven by a passion for great food and excellent service. We specialize in creating memorable dining experiences for weddings, birthdays, corporate events and more. Our goal is simple — to make your event special, one delicious meal at a time[cite: 2, 3].
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-catering-burgundy/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-catering-gold/20 text-catering-burgundy flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-catering-burgundy">Quality Food</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-catering-gold/20 text-catering-burgundy flex items-center justify-center shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-catering-burgundy">Customer Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-catering-gold/20 text-catering-burgundy flex items-center justify-center shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-catering-burgundy">Timely Service</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}