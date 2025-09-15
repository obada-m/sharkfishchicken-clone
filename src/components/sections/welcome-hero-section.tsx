'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WelcomeHeroSection() {
  const images = [
    '/image_021.jpeg',
    '/image_022.jpeg',
    '/image_023.jpeg',
    '/image_024.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="main"
      className="relative w-full h-[600px] bg-orange-50 overflow-hidden"
    >
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images[currentImageIndex]}
          alt={`Hero image ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover z-20"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      </div>

      <div className="relative container mx-auto px-6 h-full flex items-center z-30">
        <div className="max-w-2xl">
          <p className="text-white text-lg font-medium mb-4">
            Best Fried Fish and Chicken Restaurant
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Experience a Crispy, Flavorful Sensation in Every Bite.
          </h1>
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 text-lg"
          >
            <Link href="/menu-gallery">View Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
