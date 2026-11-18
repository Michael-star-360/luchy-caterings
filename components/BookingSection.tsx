'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send, MessageCircle } from 'lucide-react';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  message: string;
}

export default function BookingSection() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    guests: '',
    location: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const targetPhone = '2347030416238'; // Luchy Catering WhatsApp number

    // Format the message for WhatsApp
    const text = `Hello Luchy Catering Services! 👋\n\nI would like to make an event booking inquiry:\n\n*Full Name:* ${formData.name}\n*Phone:* ${formData.phone}${formData.email ? `\n*Email:* ${formData.email}` : ''}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate}\n*Guest Count:* ${formData.guests || 'Not specified'}\n*Location:* ${formData.location || 'Not specified'}\n*Additional Notes:* ${formData.message || 'None'}`;

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const inputClasses =
    'w-full text-sm px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#2A2A2A] placeholder:text-gray-400 focus:outline-none focus:border-[#E5A638] focus:ring-2 focus:ring-[#E5A638]/30 transition';

  const labelClasses =
    'block text-xs font-bold uppercase tracking-wide mb-1.5 text-[#3B0609]';

  return (
    <section id="book" className="py-24 bg-[#3B0609] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Header & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="text-[#E5A638] text-xs uppercase tracking-widest font-semibold">
            ✦ BOOK YOUR EVENT ✦
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-white">
            Let&apos;s Make Your <span className="text-[#E5A638]">Event Special</span>
          </h2>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Fill out the form below. Clicking submit will automatically open WhatsApp with your event details ready to send directly to us.
          </p>

          <div className="space-y-5 pt-6 border-t border-white/15">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E5A638]/20 border border-[#E5A638]/40 text-[#E5A638] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">Address</p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  Igodo Off Magboro, Owode, Ogun State
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E5A638]/20 border border-[#E5A638]/40 text-[#E5A638] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:07030416238"
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#E5A638] transition"
                >
                  07030416238
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-Contrast Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#FFFDF9] text-[#2A2A2A] p-6 sm:p-10 rounded-2xl shadow-2xl border-2 border-[#E5A638]/40"
        >
          <div className="mb-6 pb-4 border-b border-amber-900/10 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B0609]">
                Event Inquiry Form
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Fields marked with * are required
              </p>
            </div>
            <MessageCircle className="w-6 h-6 text-emerald-600" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. 0801 234 5678"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            {/* Optional Email & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="font-normal text-gray-400 lowercase">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e.g. client@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="eventType" className={labelClasses}>
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Small Chops / Pastry Order">
                    Small Chops / Pastry Order
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventDate" className={labelClasses}>
                  Event Date *
                </label>
                <input
                  id="eventDate"
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="guests" className={labelClasses}>
                  Number of Guests
                </label>
                <input
                  id="guests"
                  type="number"
                  name="guests"
                  placeholder="e.g. 100"
                  value={formData.guests}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className={labelClasses}>
                Event Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="City or venue area"
                value={formData.location}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Additional Message / Menu Preferences
              </label>
              <textarea
                id="message"
                rows={3}
                name="message"
                placeholder="Tell us the dishes, small chops, or pastries you would like..."
                value={formData.message}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E5A638] hover:bg-[#C88D27] text-[#3B0609] font-bold py-4 rounded-xl transition-transform duration-200 hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send Inquiry via WhatsApp
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}