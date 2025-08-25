"use client";

import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export function CartDrawer() {
  const { state, dispatch } = useCart();

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { itemId } });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity: newQuantity } });
    }
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={() => dispatch({ type: 'TOGGLE_CART' })}>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Your Cart ({state.itemCount})</SheetTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="text-gray-400 text-4xl mb-4">🛒</div>
              <p className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</p>
              <p className="text-gray-600 mb-6">Add some delicious items from our menu!</p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/menu" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                  Browse Menu
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {state.items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        {item.selectedSeasoning && (
                          <p className="text-sm text-gray-600">
                            Seasoning: {item.selectedSeasoning}
                          </p>
                        )}
                        {item.specialInstructions && (
                          <p className="text-sm text-gray-600 mt-1">
                            Note: {item.specialInstructions}
                          </p>
                        )}
                        <p className="font-semibold text-teal-600 mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { itemId: item.id } })}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-teal-600">${state.total.toFixed(2)}</span>
                </div>

                <div className="space-y-2">
                  <Button 
                    asChild 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium"
                    size="lg"
                  >
                    <Link href="/order" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                      Proceed to Checkout
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    asChild
                  >
                    <Link href="/menu" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                      Continue Shopping
                    </Link>
                  </Button>
                  
                  {state.items.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dispatch({ type: 'CLEAR_CART' })}
                      className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      Clear Cart
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}