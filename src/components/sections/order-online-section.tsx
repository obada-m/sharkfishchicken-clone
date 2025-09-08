import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const OrderOnlineSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/image_016.png"
          alt="Order Online - Variety of delicious fried chicken and food"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Order Online for Pickup or Delivery! 🚗📱
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-200 sm:text-lg">
            No time to dine in? No problem! Ordering from Sharks Fish & Chicken is simple. 
            You can choose pickup or delivery, so your meal gets to you fast and fresh. 
            Enjoy great food at home or wherever you are with just a few clicks!
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 text-lg">
            <Link href="/order">Order Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderOnlineSection;