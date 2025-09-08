"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";

export default function NavigationHeader() {
  const { state, dispatch } = useCart();

  return (
    <header className="sticky top-0 z-50 flex h-16 sm:h-20 w-full items-center border-b-[1px] border-b-gray-200 bg-white">
      <div className="container flex w-full items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          title="Sharks Fish & Chicken - Go to home page"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
              <Image
                src="/image_001.png"
                alt="Sharks Fish & Chicken Logo"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-gray-900">Sharks</span>
              <span className="text-xs sm:text-sm text-gray-600 -mt-1">Fish & Chicken</span>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Menu
          </Link>
          <Link
            href="/locations"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Locations
          </Link>
          <Link
            href="/story"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Our Story
          </Link>
          
          {/* Cart Button */}
          <Button
            variant="outline"
            size="sm"
            className="relative"
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">
              {state.itemCount > 0 ? `Cart (${state.itemCount}) $${state.total.toFixed(2)}` : 'Cart $0.00'}
            </span>
            <span className="sm:hidden">
              ${state.total.toFixed(2)}
            </span>
            {state.itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 hover:bg-red-600">
                {state.itemCount}
              </Badge>
            )}
          </Button>
          
          <Button asChild className="bg-teal-600 hover:bg-teal-700 font-medium text-white">
            <Link href="/order">Order Online</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Cart Button */}
          <Button
            variant="outline"
            size="sm"
            className="relative h-10 px-3 rounded-lg border-gray-200"
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">${state.total.toFixed(2)}</span>
            {state.itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-xs font-bold">
                {state.itemCount}
              </Badge>
            )}
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="h-10 w-10 p-0 rounded-lg border-gray-200"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                </div>
                
                <nav className="flex-1 p-6 space-y-1">
                  <Link
                    href="/"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    🏠 Home
                  </Link>
                  <Link
                    href="/menu"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    📋 Menu
                  </Link>
                  <Link
                    href="/locations"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    📍 Locations
                  </Link>
                  <Link
                    href="/story"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    📖 Our Story
                  </Link>
                </nav>

                <div className="border-t p-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Your Cart</span>
                      <span className="font-bold text-teal-600 text-lg">${state.total.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button asChild size="lg" className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-base font-semibold">
                      <Link href="/order">🛒 Order Online</Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full h-12 text-base font-medium"
                      onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                    >
                      👁️ View Cart
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}