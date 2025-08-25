"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { MenuItem } from './menu-data';

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSeasoning?: string;
  specialInstructions?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: MenuItem; seasoning?: string; specialInstructions?: string } }
  | { type: 'REMOVE_ITEM'; payload: { itemId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, seasoning, specialInstructions } = action.payload;
      const existingItemIndex = state.items.findIndex(
        cartItem => 
          cartItem.id === item.id && 
          cartItem.selectedSeasoning === seasoning &&
          cartItem.specialInstructions === specialInstructions
      );

      let newItems: CartItem[];
      if (existingItemIndex > -1) {
        newItems = state.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        const newCartItem: CartItem = {
          ...item,
          quantity: 1,
          selectedSeasoning: seasoning,
          specialInstructions,
        };
        newItems = [...state.items, newCartItem];
      }

      const newTotal = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0);
      const newItemCount = newItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.itemId);
      const newTotal = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0);
      const newItemCount = newItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { itemId } });
      }

      const newItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
      
      const newTotal = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0);
      const newItemCount = newItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export const cartHelpers = {
  addItem: (dispatch: React.Dispatch<CartAction>, item: MenuItem, seasoning?: string, specialInstructions?: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, seasoning, specialInstructions } });
  },
  
  removeItem: (dispatch: React.Dispatch<CartAction>, itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemId } });
  },
  
  updateQuantity: (dispatch: React.Dispatch<CartAction>, itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  },
  
  clearCart: (dispatch: React.Dispatch<CartAction>) => {
    dispatch({ type: 'CLEAR_CART' });
  },
  
  toggleCart: (dispatch: React.Dispatch<CartAction>) => {
    dispatch({ type: 'TOGGLE_CART' });
  },
  
  openCart: (dispatch: React.Dispatch<CartAction>) => {
    dispatch({ type: 'OPEN_CART' });
  },
  
  closeCart: (dispatch: React.Dispatch<CartAction>) => {
    dispatch({ type: 'CLOSE_CART' });
  }
};