"use client";

import { useState } from 'react';
import { Phone, Clock, X } from 'lucide-react';

interface PromoBannerProps {
  onOrderClick?: () => void;
}

export const PromoBanner = ({ onOrderClick }: PromoBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleOrderClick = () => {
    if (onOrderClick) {
      onOrderClick();
    } else {
      const orderSection = document.getElementById('order-section');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:(773) 555-0123';
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-6">
          
          {/* Promotional Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm md:text-base font-semibold animate-pulse">
              🔥 ORDER NOW & GET 10% OFF YOUR FIRST ORDER!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 lg:gap-6 text-sm">
            
            {/* Phone Number */}
            <a
              href="tel:(773) 555-0123"
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">(773) 555-0123</span>
            </a>

            {/* Store Hours */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">Open Daily: 10:00 AM - 2:00 AM</span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
            
            <button
              onClick={handleOrderClick}
              className="bg-white text-red-500 px-4 py-2 rounded-md font-semibold text-sm 
                       hover:bg-yellow-100 hover:text-red-600 hover:shadow-md 
                       active:scale-95 transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Order Online
            </button>

            <button
              onClick={handleCallNow}
              className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold text-sm 
                       hover:bg-red-800 hover:shadow-md 
                       active:scale-95 transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50
                       flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>

          </div>

        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-1 right-1 md:top-2 md:right-2 
                 text-white hover:text-yellow-200 hover:bg-red-600 
                 rounded-full p-1 transition-all duration-200 
                 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                 group"
        aria-label="Close banner"
      >
        <X className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
};