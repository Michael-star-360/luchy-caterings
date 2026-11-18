import { LucideIcon } from 'lucide-react';

/**
 * Service offer interface for the Services section
 */
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/**
 * Dish item interface for Featured Menu / Popular Dishes
 */
export interface DishItem {
  name: string;
  img: string;
}

/**
 * Gallery photo item interface for Lightbox modal
 */
export interface GalleryItem {
  src: string;
  title: string;
}

/**
 * Client testimonial feedback interface
 */
export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

/**
 * Booking inquiry form state data interface
 */
export interface BookingFormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  message: string;
}