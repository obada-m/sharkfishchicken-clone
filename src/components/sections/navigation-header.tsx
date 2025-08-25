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
    <header className="sticky top-0 z-50 flex h-20 w-full items-center border-b-[1px] border-b-gray-200 bg-white">
      <div className="container flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          title="Sharks Fish & Chicken - Go to home page"
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦈</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">Sharks</span>
              <span className="text-sm text-gray-600 -mt-1">Fish & Chicken</span>
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
            className="relative"
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
          >
            <ShoppingCart className="h-4 w-4" />
            {state.itemCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-red-500 text-xs">
                {state.itemCount}
              </Badge>
            )}
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Menu
                </Link>
                <Link
                  href="/locations"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Locations
                </Link>
                <Link
                  href="/story"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Our Story
                </Link>
                
                <div className="border-t pt-4 mt-4">
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Cart</span>
                      <span className="font-bold">${state.total.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'}
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="w-full bg-teal-600 hover:bg-teal-700 mb-3">
                    <Link href="/order">Order Online</Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                  >
                    View Cart
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}