"use client";
import React, { createContext, useContext, useState, useCallback } from 'react';

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.name === product.name);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productName: string) => {
    setItems(currentItems => 
      currentItems.filter(item => item.name !== productName)
    );
  }, []);

  const updateQuantity = useCallback((productName: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.name === productName
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 