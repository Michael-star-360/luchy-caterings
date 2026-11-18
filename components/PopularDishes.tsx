'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface DishItem {
  name: string;
  category: string;
  img: string;
  popular?: boolean;
}

const dishes: DishItem[] = [
  { name: 'Jollof Rice', category: 'Signature Rice', img: '/images/jollofrice.jfif', popular: true },
  { name: 'Fried Rice', category: 'Signature Rice', img: '/images/friedrice.jpg' },
  { name: 'Ukazi Soup', category: 'Traditional Soup', img: '/images/ukazi soup.jfif' },
  { name: 'Egusi Soup', category: 'Traditional Soup', img: '/images/Egusi soup.jfif', popular: true },
  { name: 'Okro Soup', category: 'Traditional Soup', img: '/images/okra soup.jfif' },
  { name: 'Afang / Ogbono Soup', category: 'Traditional Soup', img: '/images/Afang soup.jfif' },
  { name: 'Small Chops', category: 'Event Platters', img: '/images/small chops.jfif', popular: true },
  { name: 'Pastries', category: 'Freshly Baked', img: '/images/smallchops.jpg' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function PopularDishes() {
  return (
    <section
      id="menu"
      className="relative py-24 bg-[#3B0609] text-white overflow-hidden"
    >
      {/* Subtle Ambient Gold Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(229, 166, 56, 0.35), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#E5A638]/30 text-[#E5A638] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Menu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Our Popular <span className="text-[#E5A638]">Dishes</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            A taste of our best. Freshly prepared, richly flavorful and always
            satisfying for every guest at your table.
          </p>
        </motion.div>

        {/* 4x2 Responsive Dishes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-xl border-2 border-[#E5A638]/25 text-[#2A2A2A] group flex flex-col justify-between transition-all duration-300 hover:border-[#E5A638] hover:shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
            >
              {/* Image Wrapper */}
              <div className="relative h-52 w-full overflow-hidden bg-[#260305]">
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Subtle Bottom Gradient on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Optional "Chef's Pick" Pill */}
                {dish.popular && (
                  <span className="absolute top-3 left-3 bg-[#E5A638] text-[#3B0609] text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-md">
                    Chef&apos;s Pick
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 text-left border-t-2 border-[#E5A638] flex-1 flex flex-col justify-between bg-[#FFFDF9]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-700/80 font-semibold">
                    {dish.category}
                  </span>
                  <h3 className="font-serif font-bold text-[#3B0609] text-lg mt-0.5 group-hover:text-[#9c161e] transition-colors">
                    {dish.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-900/10 flex items-center justify-between">
                  <div className="w-8 h-0.5 bg-[#E5A638] group-hover:w-14 transition-all duration-300" />
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3B0609] hover:text-[#C88D27] transition-colors"
                  >
                    Book Dish <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}