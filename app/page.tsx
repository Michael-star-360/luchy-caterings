import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PopularDishes from '../components/PopularDishes';
import AboutUs from '../components/AboutUs';
import GalleryModal from '../components/GalleryModal';
import Testimonials from '../components/Testimonials';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-catering-cream text-catering-darkText font-sans">
      <Navbar />
      <Hero />
      <Services />
      <PopularDishes />
      <AboutUs />
      <GalleryModal />
      <Testimonials />
      <BookingSection />
      <Footer />
    </main>
  );
}