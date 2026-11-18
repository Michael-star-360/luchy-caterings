'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClipboardList, UtensilsCrossed, Flame, Truck, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Share Your Event Details',
    desc: 'Tell us your event date, guest count, location, and preferred dishes using our quick booking form or WhatsApp.',
  },
  {
    step: '02',
    icon: UtensilsCrossed,
    title: 'Customize Your Menu',
    desc: 'We help you select the ideal mix of Nigerian dishes, small chops, and fresh pastries tailored to your budget.',
  },
  {
    step: '03',
    icon: Flame,
    title: 'Freshly Prepared with Love',
    desc: 'Every meal is cooked fresh on the day of your event using rich, authentic ingredients and strict hygiene.',
  },
  {
    step: '04',
    icon: Truck,
    title: 'On-Time Delivery & Setup',
    desc: 'Hot, neatly packaged, and delivered right on schedule so you and your guests can enjoy every bite stress-free.',
  },
];

export default function GalleryModal() {
  return (
    <section
      id="process"
      className="relative py-24 bg-[#3B0609] text-white overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(229, 166, 56, 0.3), transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <span className="text-[#E5A638] text-xs uppercase tracking-widest font-semibold">
              ✦ SIMPLE &amp; SEAMLESS ✦
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-2 text-white">
              How Our Catering <span className="text-[#E5A638]">Works</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
              From your first message to the final serving, we make planning food for your occasion effortless.
            </p>
          </div>

          <Link
            href="/book"
            className="bg-[#E5A638] hover:bg-[#C88D27] text-[#3B0609] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shrink-0"
          >
            Start Your Order <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative bg-white/[0.04] backdrop-blur-xs border border-[#E5A638]/25 hover:border-[#E5A638] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-5 right-6 font-serif text-4xl font-bold text-[#E5A638]/15 group-hover:text-[#E5A638]/30 transition-colors select-none">
                  {item.step}
                </span>

                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#E5A638] text-[#3B0609] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2.5 group-hover:text-[#E5A638] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Accent Line */}
                <div className="w-10 h-0.5 bg-[#E5A638]/50 group-hover:w-full group-hover:bg-[#E5A638] transition-all duration-300 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}