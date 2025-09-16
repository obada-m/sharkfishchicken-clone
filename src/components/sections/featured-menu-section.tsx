"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const menuSections = [
  {
    title: "Sides & Beverages",
    description: "Perfect sides and refreshing drinks",
    src: "/menu__1.jpeg",
    alt: "Side Orders & Drinks Menu"
  },
  {
    title: "Fish & Family Meals",
    description: "Fresh fish and family portions",
    src: "/menu__2.jpeg",
    alt: "Fish Dinners & Family Meals Menu"
  },
  {
    title: "Chicken Specials",
    description: "Crispy fried chicken favorites",
    src: "/menu__3.jpeg",
    alt: "Chicken Menu"
  }
];

export default function FeaturedMenuSection() {

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-teal-100 text-teal-800 mb-4">Our Menu</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sneak Peek at Our Delicious Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get a preview of our mouth-watering selection. From crispy fried chicken to fresh seafood,
            we've got something for everyone in the family.
          </p>
        </div>

        {/* Menu Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {menuSections.map((section, index) => (
            <Link
              key={index}
              href="/menu-gallery"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Menu Image */}
              <div className="relative h-56">
                <Image
                  src={section.src}
                  alt={section.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2 mx-auto">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Info */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200/50">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to See Our Complete Menu?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our full selection of fried chicken, seafood, sides, and family meals.
              Everything is made fresh daily with our signature seasonings!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                <Link href="/menu-gallery">
                  <Eye className="h-5 w-5 mr-2" />
                  View Complete Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}