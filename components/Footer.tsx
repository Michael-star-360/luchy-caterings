import Link from 'next/link';
import { Utensils, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#240305] text-gray-300 py-14 text-sm border-t border-[#E5A638]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
        
        {/* Brand Information */}
        <div>
          <div className="flex items-center space-x-2.5 text-white font-serif font-bold text-lg mb-3">
            <Utensils className="w-5 h-5 text-[#E5A638]" />
            <span>LUCHY CATERING SERVICES</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
            Delicious local and intercontinental dishes, pastries &amp; small chops for all occasions.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h5 className="text-[#E5A638] font-serif font-bold uppercase tracking-wider text-xs mb-4">
            Quick Links
          </h5>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <Link href="/#home" className="hover:text-[#E5A638] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-[#E5A638] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#menu" className="hover:text-[#E5A638] transition">
                Popular Dishes
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#E5A638] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-[#E5A638] transition">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-[#E5A638] transition">
                Book Catering
              </Link>
            </li>
          </ul>
        </div>

        {/* Direct Contact Details */}
        <div>
          <h5 className="text-[#E5A638] font-serif font-bold uppercase tracking-wider text-xs mb-4">
            Contact Us
          </h5>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#E5A638] shrink-0" />
              <a
                href="tel:+2347030416238"
                className="hover:text-[#E5A638] transition"
              >
                +234 703 041 6238
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#E5A638] shrink-0 mt-0.5" />
              <span>Igodo Off Magboro, Owode, Ogun State</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#E5A638] shrink-0" />
              <a
                href="mailto:luchycatering@gmail.com"
                className="hover:text-[#E5A638] transition"
              >
                luchycatering@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 Luchy Catering Services. All rights reserved.</p>
        <p className="font-serif italic text-[#E5A638] text-sm mt-2 sm:mt-0">
          Good Food. Happy People.
        </p>
      </div>
    </footer>
  );
}