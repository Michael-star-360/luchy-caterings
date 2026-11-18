import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';


export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#3B0609] flex flex-col justify-between">
      <Navbar />

      {/* Top Back Navigation */}
      <div className="pt-28 pb-2 max-w-7xl mx-auto w-full px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E5A638] hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      {/* Booking Form Component */}
      <div className="flex-1">
        <BookingSection />
      </div>

      <Footer />
      
    </main>
  );
}