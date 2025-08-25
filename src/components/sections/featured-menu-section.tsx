"use client";

import React, { useState } from 'react';
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
import { getPopularItems, MenuItem, SEASONINGS } from '@/lib/menu-data';
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
  
  const popularItems = getPopularItems();

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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our House Favorites</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular dishes that keep customers coming back for more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-6xl">
                {item.category === 'wings' ? '🍗' : 
                 item.category === 'fish-dinners' ? '🐟' : 
                 item.category === 'house-favorites' ? '⭐' : '🍽️'}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <Badge className="bg-orange-100 text-orange-800">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-teal-600">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.portions && (
                    <span className="text-sm text-gray-500">{item.portions}</span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => setSelectedItem(item)}
                    className="flex-1 bg-teal-600 hover:bg-teal-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/menu">View Menu</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
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