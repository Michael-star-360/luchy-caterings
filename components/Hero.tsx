'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-[#3B0609] text-white overflow-hidden pt-24 pb-20"
    >
      {/* 1. FULL-BLEED BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Hero Buffet.png"
          alt="Luchy Catering Food Feast"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* Soft Left-to-Right Vignette Shadow (Keeps left text crisp, leaves right food bright) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #3B0609 0%, rgba(59, 6, 9, 0.92) 38%, rgba(59, 6, 9, 0.45) 65%, rgba(0, 0, 0, 0.12) 100%)',
          }}
        />
      </div>

      {/* 2. TOP-RIGHT FLOATING CURSIVE BADGE */}
      <div className="hidden sm:block absolute top-28 right-8 lg:right-14 z-20 text-right drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] pointer-events-none">
        <p className="font-serif italic text-2xl lg:text-3xl text-[#FDE68A] font-semibold tracking-wide">
          Freshly made
        </p>
        <p className="font-serif italic text-xl lg:text-2xl text-[#FDE68A] flex items-center justify-end gap-1.5">
          with love <span>♡</span>
        </p>
      </div>

      {/* 3. FOREGROUND CONTENT CONTAINER (Never clipped or cut) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6"
        >
          {/* Top Tagline */}
          <div className="text-[#E5A638] text-xs uppercase tracking-widest font-semibold flex flex-wrap items-center gap-2">
            <span>✦ GOOD FOOD</span>
            <span>•</span>
            <span>CREATE GREAT MOMENTS ✦</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] drop-shadow-sm">
            Tasty Meals. <br />
            <span className="text-[#E5A638]">Unforgettable</span> <br />
            Experiences.
          </h1>

          {/* Description */}
          <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
            We serve delicious local and intercontinental dishes as well as a
            variety of pastries, perfect for every occasion — from intimate
            gatherings to grand celebrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/book"
              className="bg-[#E5A638] hover:bg-[#C88D27] text-[#3B0609] font-bold px-7 py-3.5 rounded-full text-sm transition-transform duration-200 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Book Our Services
            </Link>

            <Link
              href="#menu"
              className="border border-white/50 bg-black/20 backdrop-blur-xs hover:border-[#E5A638] text-white hover:text-[#E5A638] font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-200 flex items-center gap-2"
            >
              Explore Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 4. WAVY BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 right-0 w-full leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-16 lg:h-24 text-[#FAF6F0]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}