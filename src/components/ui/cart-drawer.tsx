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
      <SheetContent side="right" className="w-full sm:max-w-lg p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Your Cart ({state.itemCount})</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-12">
              <div className="text-gray-400 text-5xl mb-6">🛒</div>
              <p className="text-xl font-medium text-gray-900 mb-3">Your cart is empty</p>
              <p className="text-gray-600 mb-8 text-base">Add some delicious items from our menu!</p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700 h-12 px-8 text-base font-semibold">
                <Link href="/menu" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                  🍗 Browse Menu
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {state.items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="bg-gray-50 rounded-lg p-4 sm:p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1 pr-3">
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{item.name}</h4>
                        {item.selectedSeasoning && (
                          <p className="text-sm text-gray-600 mt-1">
                            🌶️ Seasoning: {item.selectedSeasoning}
                          </p>
                        )}
                        {item.specialInstructions && (
                          <p className="text-sm text-gray-600 mt-1 bg-blue-50 p-2 rounded">
                            📝 Note: {item.specialInstructions}
                          </p>
                        )}
                        <p className="font-bold text-teal-600 mt-2 text-lg">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { itemId: item.id } })}
                        className="text-red-500 hover:text-red-700 hover:bg-red-100 h-8 w-8 p-0 rounded-full flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-10 w-10 p-0 rounded-lg border-gray-200"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-bold text-lg w-12 text-center bg-gray-50 py-2 px-3 rounded">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-10 w-10 p-0 rounded-lg border-gray-200"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t bg-white p-4 sm:p-6 space-y-4">
                <div className="flex justify-between items-center bg-teal-50 p-4 rounded-lg">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-teal-600">${state.total.toFixed(2)}</span>
                </div>

                <div className="space-y-3">
                  <Button 
                    asChild 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold h-12 text-base"
                    size="lg"
                  >
                    <Link href="/order" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                      🚀 Proceed to Checkout
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12 text-base font-medium border-2 border-teal-200 text-teal-700 hover:bg-teal-50" 
                    size="lg"
                    asChild
                  >
                    <Link href="/menu" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                      🛍️ Continue Shopping
                    </Link>
                  </Button>
                  
                  {state.items.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dispatch({ type: 'CLEAR_CART' })}
                      className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 h-10 text-sm"
                    >
                      🗑️ Clear Cart
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