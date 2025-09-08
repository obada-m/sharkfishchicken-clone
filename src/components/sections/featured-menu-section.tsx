"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getPopularItems, MenuItem, SEASONINGS, MENU_DATA } from '@/lib/menu-data';
import { useCart } from '@/lib/cart-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function FeaturedMenuSection() {
  const { dispatch } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedSeasoning, setSelectedSeasoning] = useState<string>('Plain');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  
  // Get a mix of popular items and other featured items
  const popularItems = [
    ...getPopularItems(), // First get the popular items
    ...MENU_DATA[0].items, // Then add house favorites
    ...MENU_DATA[1].items.slice(0, 3), // Add some wings
    ...MENU_DATA[2].items.slice(0, 2), // Add some fish
  ].slice(0, 10); // Limit to 10 items total

  const handleAddToCart = (item: MenuItem) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item,
        seasoning: selectedSeasoning,
        specialInstructions: specialInstructions.trim() || undefined
      }
    });
    dispatch({ type: 'OPEN_CART' });
    setSelectedItem(null);
    setSpecialInstructions('');
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/menu">View menu →</Link>
          </Button>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {popularItems.map((item, index) => {
            const images = [
              "/Image1.jpg",
              "/Image2.jpg", 
              "/Image3.jpg",
              "/image_003.png",
              "/image_014.png",
              "/image_015.png",
              "/image_016.png"
            ];
            
            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 bg-gray-200 rounded-2xl overflow-hidden relative"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={images[index] || "/image_003.png"}
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
                
                <div className="p-4 bg-white">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">{item.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/menu">Browse Full Menu</Link>
          </Button>
        </div>
      </div>

      {/* Add to Cart Dialog */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add {selectedItem.name} to Cart</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm">{selectedItem.description}</p>
                <p className="font-bold text-teal-600 text-lg mt-2">
                  ${selectedItem.price.toFixed(2)}
                </p>
                {selectedItem.portions && (
                  <p className="text-sm text-gray-500">{selectedItem.portions}</p>
                )}
              </div>

              {selectedItem.seasonings && (
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
                <label className="block text-sm font-medium mb-2">
                  Special Instructions (Optional):
                </label>
                <Textarea
                  placeholder="Any special requests..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedItem(null)} 
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => handleAddToCart(selectedItem)} 
                  className="flex-1 bg-teal-600 hover:bg-teal-700"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}