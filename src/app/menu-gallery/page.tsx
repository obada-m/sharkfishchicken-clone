"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, ZoomIn, X, Phone, MapPin } from "lucide-react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const menuSections = [
  {
    title: "Side Orders & Drinks",
    description: "Perfect sides and refreshing beverages",
    src: "/menu__1.jpeg",
    alt: "Side Orders & Drinks Menu",
    category: "Sides & Beverages"
  },
  {
    title: "Fish Dinners & Family Meals",
    description: "Fresh fish and family-sized portions",
    src: "/menu__2.jpeg",
    alt: "Fish Dinners & Family Meals Menu",
    category: "Fish & Family"
  },
  {
    title: "Chicken Specials",
    description: "Crispy fried chicken and wings",
    src: "/menu__3.jpeg",
    alt: "Chicken Menu",
    category: "Chicken"
  },
  {
    title: "Seafood Platters",
    description: "Premium shrimp and seafood combinations",
    src: "/menu__4.jpeg",
    alt: "Seafood Platters Menu",
    category: "Seafood"
  },
  {
    title: "Combo Meals",
    description: "Best value combinations and deals",
    src: "/menu__5.jpeg",
    alt: "Combo Meals Menu",
    category: "Combos"
  },
  {
    title: "Daily Specials",
    description: "Fresh daily specials and featured items",
    src: "/menu__6.jpeg",
    alt: "Daily Specials Menu",
    category: "Specials"
  },
];

export default function MenuGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuSections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuSections.length) % menuSections.length);
  };

  const downloadMenu = () => {
    // Create a link element to download all menu images as a PDF or zip
    // For now, we'll open the current menu image in a new tab
    const link = document.createElement('a');
    link.href = menuSections[currentSlide].src;
    link.download = `sharks-menu-${menuSections[currentSlide].title.toLowerCase().replace(/\s+/g, '-')}.jpeg`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <NavigationHeader />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Our Complete Menu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Explore our delicious selection of fresh seafood, crispy fried chicken, and family favorites
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={downloadMenu}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Menu
            </Button>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 border-0"
            >
              <a href="tel:+1234567890">
                <Phone className="h-4 w-4 mr-2" />
                Order by Phone
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Interactive Menu Carousel */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Dots */}
          <div className="flex justify-center mb-8 gap-2">
            {menuSections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-teal-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Main Menu Display */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5"></div>

            {/* Header */}
            <div className="relative p-6 md:p-8 border-b bg-gradient-to-r from-teal-50 to-blue-50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <Badge className="bg-teal-100 text-teal-800 mb-2">
                    {menuSections[currentSlide].category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {menuSections[currentSlide].title}
                  </h2>
                  <p className="text-gray-600">
                    {menuSections[currentSlide].description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={prevSlide}
                    variant="outline"
                    size="sm"
                    className="rounded-full w-10 h-10 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-500 min-w-[4rem] text-center">
                    {currentSlide + 1} of {menuSections.length}
                  </span>
                  <Button
                    onClick={nextSlide}
                    variant="outline"
                    size="sm"
                    className="rounded-full w-10 h-10 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Menu Image */}
            <div className="relative p-6 md:p-8">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group">
                <div className="relative aspect-[4/5] md:aspect-[16/10]">
                  <Image
                    src={menuSections[currentSlide].src}
                    alt={menuSections[currentSlide].alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority={true}
                  />

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      onClick={() => setSelectedImage(currentSlide)}
                      className="bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm"
                    >
                      <ZoomIn className="h-4 w-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {menuSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative group rounded-xl overflow-hidden transition-all duration-300 ${
                  currentSlide === index
                    ? 'ring-2 ring-teal-600 ring-offset-4 scale-105'
                    : 'hover:scale-102 hover:shadow-lg'
                }`}
              >
                <div className="aspect-square relative">
                  <Image
                    src={section.src}
                    alt={section.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-medium text-center leading-tight">
                    {section.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Visit us in-store, call ahead, or order online for pickup and delivery!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 border-0 text-lg px-8"
            >
              <a href="/order">
                Order Online
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8"
            >
              <a href="/locations">
                <MapPin className="h-5 w-5 mr-2" />
                Find Location
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Full-screen Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full h-full max-h-screen p-0 gap-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-xl font-bold flex items-center justify-between">
              {selectedImage !== null && menuSections[selectedImage]?.title}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 relative p-6 pt-0">
            {selectedImage !== null && (
              <div className="relative h-full min-h-[70vh]">
                <Image
                  src={menuSections[selectedImage].src}
                  alt={menuSections[selectedImage].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}