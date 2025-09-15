"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MENU_DATA, MenuItem } from "@/lib/menu-data";
import { LOCATIONS } from "@/lib/menu-data";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(MENU_DATA[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToCategory = (categoryId: string) => {
    const element = sectionRefs.current[categoryId];
    if (element) {
      const elementTop = element.offsetTop - 100; // Account for header
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  // Scroll-based navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentCategory = MENU_DATA[0].id;

      for (const category of MENU_DATA) {
        const element = sectionRefs.current[category.id];
        if (element) {
          const elementTop = element.offsetTop - 200;

          if (scrollPosition >= elementTop) {
            currentCategory = category.id;
          }
        }
      }

      setSelectedCategory(currentCategory);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCategories = MENU_DATA.filter(category => {
    if (!searchQuery) return true;
    return category.items.some(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* Mobile Sticky Header */}
      <div className="md:hidden sticky top-20 bg-gray-50 z-30 border-b border-gray-200">
        {/* Mobile Search Bar */}
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Mobile Horizontal Menu */}
        <div className="px-4 pb-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {MENU_DATA.map(category => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="md:max-w-6xl md:mx-auto px-4 md:flex md:gap-3 py-6">
        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block md:w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 rounded-lg"
              />
            </div>

            {/* Category Navigation */}
            <nav className="space-y-2">
              <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">
                Categories
              </h3>
              {MENU_DATA.map(category => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>

            {/* Call to Order Section */}
            <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-gray-900 mb-2">Ready to Order?</h4>
              <p className="text-sm text-gray-600 mb-4">Call your nearest location to place an order!</p>
              <div className="space-y-2">
                {LOCATIONS.map(location => (
                  <Button
                    key={location.id}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left p-2 h-auto"
                    asChild
                  >
                    <a href={`tel:${location.phone}`}>
                      <div>
                        <div className="font-medium text-sm">{location.name}</div>
                        <div className="text-xs text-gray-500">{location.phone}</div>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="flex-1 md:pl-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Our Complete Menu</h1>
              <p className="text-gray-600">
                Discover our full selection of crispy fried chicken, fresh fish, wings, and sides.
                Call ahead to place your order!
              </p>
            </div>

            {/* Menu Categories */}
            <div className="p-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  ref={(el) => (sectionRefs.current[category.id] = el)}
                  className="mb-12 last:mb-0"
                >
                  {/* Category Header */}
                  <div className="mb-6 pb-3 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      {category.name}
                    </h2>
                    {category.description && (
                      <p className="text-gray-600">{category.description}</p>
                    )}
                  </div>

                  {/* Menu Items Grid */}
                  <div className="grid gap-4">
                    {category.items
                      .filter(item => {
                        if (!searchQuery) return true;
                        return (
                          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
                        );
                      })
                      .map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 text-base">
                                  {item.name}
                                  {item.popular && (
                                    <Badge variant="secondary" className="ml-2 bg-orange-100 text-orange-800">
                                      Popular
                                    </Badge>
                                  )}
                                </h4>
                                <p className="text-gray-600 text-sm mt-1">{item.description}</p>

                                {item.portions && (
                                  <p className="text-gray-500 text-xs mt-1 font-medium">
                                    {item.portions}
                                  </p>
                                )}

                                {item.seasonings && (
                                  <div className="mt-2">
                                    <p className="text-xs text-gray-500 mb-1">Available seasonings:</p>
                                    <div className="flex flex-wrap gap-1">
                                      {item.seasonings.map((seasoning) => (
                                        <Badge
                                          key={seasoning}
                                          variant="outline"
                                          className="text-xs py-0 px-2"
                                        >
                                          {seasoning}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {item.allergens && item.allergens.length > 0 && (
                                  <p className="text-xs text-red-600 mt-1">
                                    Contains: {item.allergens.join(', ')}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <span className="text-lg font-bold text-teal-600">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}

              {/* No Results Message */}
              {searchQuery && filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No menu items found matching your search.</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery("")}
                    className="text-teal-600 border-teal-200 hover:bg-teal-50"
                  >
                    Clear Search
                  </Button>
                </div>
              )}

              {/* Call to Action */}
              <div className="mt-12 p-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Order?</h3>
                <p className="mb-6 text-teal-100">
                  Call your nearest Sharks Fish & Chicken location to place your order for pickup or delivery!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {LOCATIONS.map(location => (
                    <Button
                      key={location.id}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                      asChild
                    >
                      <a href={`tel:${location.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        {location.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}