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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

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
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of expertly fried chicken, fresh fish, and mouth-watering sides
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {MENU_DATA.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {filteredCategories.map(category => {
            const categoryItems = filteredItems(category.items);
            if (categoryItems.length === 0) return null;

            return (
              <section key={category.id} className="border-b pb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  {category.description && (
                    <p className="text-gray-600">{category.description}</p>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryItems.map(item => (
                    <div
                      key={item.id}
                      className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                            {item.popular && (
                              <Badge className="bg-orange-100 text-orange-800 text-xs">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                          {item.portions && (
                            <p className="text-gray-500 text-xs mb-2">{item.portions}</p>
                          )}
                        </div>
                        <div className="ml-4 text-right">
                          <p className="font-bold text-xl text-teal-600">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {item.seasonings && (
                            <Badge variant="outline" className="text-xs">
                              Seasoning Options
                            </Badge>
                          )}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setSelectedItem(item)}
                          className="bg-teal-600 hover:bg-teal-700 text-white"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
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
        <AddToCartDialog
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}