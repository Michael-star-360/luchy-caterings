'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Utensils, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-catering-burgundy/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-catering-burgundy py-4'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-catering-gold flex items-center justify-center bg-catering-burgundy group-hover:scale-105 transition-transform">
            <Utensils className="w-5 h-5 text-catering-gold" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider text-white block leading-none">LUCHY</span>
            <span className="text-[10px] text-catering-gold tracking-widest uppercase font-semibold">Catering Services</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#home" className="text-catering-gold hover:text-white transition">Home</Link>
          <Link href="#services" className="hover:text-catering-gold transition">Services</Link>
          <Link href="#menu" className="hover:text-catering-gold transition">Popular Dishes</Link>
          <Link href="#about" className="hover:text-catering-gold transition">About</Link>
        
          <Link href="#book" className="hover:text-catering-gold transition">Contact</Link>
        </nav>

        {/* Action CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/book" 
            className="bg-catering-gold hover:bg-catering-goldHover text-catering-burgundy font-bold px-5 py-2.5 rounded-lg text-sm transition shadow-md hover:shadow-lg"
          >
            Book Catering
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-1 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-catering-gold" /> : <Menu className="w-6 h-6 text-catering-gold" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-catering-burgundy border-t border-catering-gold/20 px-6 py-6 space-y-4 text-center">
          <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-catering-gold font-medium">Home</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-catering-gold transition">Services</Link>
          <Link href="#menu" onClick={() => setMobileMenuOpen(false)} className="block hover:text-catering-gold transition">Popular Dishes</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-catering-gold transition">About</Link>
          <Link href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block hover:text-catering-gold transition">Gallery</Link>
          <Link href="#book" onClick={() => setMobileMenuOpen(false)} className="block hover:text-catering-gold transition">Contact</Link>
          <Link 
            href="#book" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block w-full bg-catering-gold text-catering-burgundy font-bold py-3 rounded-lg mt-4"
          >
            Book Catering
          </Link>
        </div>
      )}
    </header>
  );
}