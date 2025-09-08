"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MENU_DATA, MenuItem, SEASONINGS } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

interface AddToCartDialogProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

function AddToCartDialog({ item, isOpen, onClose }: AddToCartDialogProps) {
  const { dispatch } = useCart();
  const [selectedSeasoning, setSelectedSeasoning] = useState<string>('Plain');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item,
        seasoning: selectedSeasoning,
        specialInstructions: specialInstructions.trim() || undefined
      }
    });
    dispatch({ type: 'OPEN_CART' });
    onClose();
    setSpecialInstructions('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            <p className="font-bold text-teal-600 text-lg mt-2">${item.price.toFixed(2)}</p>
            {item.portions && (
              <p className="text-sm text-gray-500">{item.portions}</p>
            )}
          </div>

          {item.seasonings && (
            <div>
              <label className="block text-sm font-medium mb-2">Choose Seasoning:</label>
              <Select value={selectedSeasoning} onValueChange={setSelectedSeasoning}>
                <SelectTrigger>
                  <SelectValue placeholder="Select seasoning" />
                </SelectTrigger>
                <SelectContent>
                  {SEASONINGS.map((seasoning) => (
                    <SelectItem key={seasoning} value={seasoning}>
                      {seasoning}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Special Instructions (Optional):</label>
            <Textarea
              placeholder="Any special requests or modifications..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleAddToCart} className="flex-1 bg-teal-600 hover:bg-teal-700">
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function MenuPage() {
  const { dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('house-favorites');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedSeasoning, setSelectedSeasoning] = useState<string>('Plain');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Array of available images
  const availableImages = [
    "/Image1.jpg",
    "/Image2.jpg", 
    "/Image3.jpg",
    "/image_003.png",
    "/image_014.png",
    "/image_015.png",
    "/image_016.png",
    "/image_001.png",
    "/image_004.png",
    "/image_005.png",
    "/image_006.jpg"
  ];

  const getRandomImage = (categoryIndex: number, itemIndex: number) => {
    const index = (categoryIndex * 10) + itemIndex;
    return availableImages[index % availableImages.length];
  };

  const handleAddToCart = () => {
    if (!selectedItem) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item: selectedItem,
        seasoning: selectedSeasoning,
        specialInstructions: specialInstructions.trim() || undefined
      }
    });
    dispatch({ type: 'OPEN_CART' });
    setSelectedItem(null);
    setSpecialInstructions('');
  };

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
              placeholder="Search"
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
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-56 bg-white shadow-sm p-3 rounded-lg sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto flex-shrink-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          <nav className="space-y-1">
            {MENU_DATA.map(category => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  selectedCategory === category.id
                    ? 'bg-gray-200 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 md:flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Our Menu</h1>
              <p className="text-gray-600">Discover our delicious selection</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-600 hover:text-gray-900">More</button>
              <button className="text-gray-600 hover:text-gray-900">Sign in</button>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                🛒 0
              </button>
            </div>
          </div>

          {/* All Categories */}
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => {
              const filteredItems = category.items.filter(item => {
                if (!searchQuery) return true;
                return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchQuery.toLowerCase());
              });

              if (filteredItems.length === 0) return null;

              return (
                <section
                  key={category.id}
                  ref={(el) => { sectionRefs.current[category.id] = el; }}
                  className="scroll-mt-6"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                    {category.description && (
                      <p className="text-gray-600">{category.description}</p>
                    )}
                  </div>

                  <div 
                    className="flex gap-4 overflow-x-scroll pb-4 scrollbar-hide"
                    style={{ overflowX: 'scroll', width: '100%' }}
                  >
                    {/* Duplicate items to ensure scrolling */}
                    {[...filteredItems, ...filteredItems].map((item, itemIndex) => (
                      <div key={`${item.id}-${itemIndex}`} className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={getRandomImage(categoryIndex, itemIndex)}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => setSelectedItem(item)}
                            className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                          >
                            <Plus className="h-5 w-5 text-gray-800" />
                          </button>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg text-gray-900 pr-2">{item.name}</h3>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                              <button className="text-gray-400 hover:text-red-500">
                                <Heart className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                          {item.portions && (
                            <p className="text-gray-500 text-xs">{item.portions}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>

      <Footer />

      {/* Add to Cart Dialog */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="w-[95vw] max-w-md mx-auto p-0 gap-0 rounded-xl">
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="text-xl font-bold">Add to Cart</DialogTitle>
            </DialogHeader>
            
            <div className="px-6 pb-6 space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{selectedItem.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{selectedItem.description}</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-2xl text-teal-600">
                    ${selectedItem.price.toFixed(2)}
                  </p>
                  {selectedItem.portions && (
                    <p className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      📏 {selectedItem.portions}
                    </p>
                  )}
                </div>
              </div>

              {selectedItem.seasonings && (
                <div>
                  <label className="block text-base font-semibold mb-3 text-gray-900">
                    🌶️ Choose Your Seasoning:
                  </label>
                  <Select value={selectedSeasoning} onValueChange={setSelectedSeasoning}>
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 rounded-lg">
                      <SelectValue placeholder="Select seasoning" />
                    </SelectTrigger>
                    <SelectContent>
                      {SEASONINGS.map((seasoning) => (
                        <SelectItem key={seasoning} value={seasoning} className="py-3 text-base">
                          {seasoning}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="block text-base font-semibold mb-3 text-gray-900">
                  📝 Special Instructions (Optional):
                </label>
                <Textarea
                  placeholder="Any special requests or modifications..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                  className="text-base border-2 border-gray-200 rounded-lg resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedItem(null)} 
                  className="flex-1 h-12 text-base border-2 border-gray-300 rounded-lg"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleAddToCart} 
                  className="flex-1 h-12 text-base bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold"
                >
                  🛒 Add to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}