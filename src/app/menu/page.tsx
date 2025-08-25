"use client";

import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedSeasoning, setSelectedSeasoning] = useState<string>('Plain');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

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

  const filteredCategories = MENU_DATA.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    
    if (searchQuery) {
      return category.items.some(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return true;
  });

  const filteredItems = (categoryItems: MenuItem[]) => {
    if (!searchQuery) return categoryItems;
    return categoryItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Menu</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover our delicious selection of expertly fried chicken, fresh fish, and mouth-watering sides
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base border-2 border-gray-200 rounded-lg"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48 h-12 text-base border-2 border-gray-200 rounded-lg">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="all" className="py-3">All Categories</SelectItem>
              {MENU_DATA.map(category => (
                <SelectItem key={category.id} value={category.id} className="py-3">
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Menu Categories */}
        <div className="space-y-8 sm:space-y-12">
          {filteredCategories.map(category => {
            const categoryItems = filteredItems(category.items);
            if (categoryItems.length === 0) return null;

            return (
              <section key={category.id} className="border-b pb-6 sm:pb-8">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  {category.description && (
                    <p className="text-gray-600 text-sm sm:text-base">{category.description}</p>
                  )}
                </div>

                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryItems.map(item => (
                    <div
                      key={item.id}
                      className="border-2 border-gray-100 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-teal-200 transition-all duration-200 bg-white"
                    >
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-3">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight">{item.name}</h3>
                              {item.popular && (
                                <Badge className="bg-orange-100 text-orange-800 text-xs px-2 py-1">
                                  ⭐ Popular
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">{item.description}</p>
                            {item.portions && (
                              <p className="text-gray-500 text-xs sm:text-sm bg-gray-50 px-2 py-1 rounded-full inline-block">
                                📏 {item.portions}
                              </p>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="font-bold text-xl sm:text-2xl text-teal-600">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex gap-1">
                          {item.seasonings && (
                            <Badge variant="outline" className="text-xs border-teal-200 text-teal-700 bg-teal-50">
                              🌶️ Seasonings
                            </Badge>
                          )}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setSelectedItem(item)}
                          className="bg-teal-600 hover:bg-teal-700 text-white h-10 px-4 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No menu items found matching your search.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}
      </main>

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