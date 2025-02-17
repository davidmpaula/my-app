"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ClothingItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  color?: string;
  size?: string;
  key: string; // Add a unique key for each item
}

interface CartContextType {
  cart: ClothingItem[];
  addToCart: (item: ClothingItem) => void;
  removeFromCart: (key: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ClothingItem[]>([]);

  const addToCart = (item: ClothingItem) => {
    const newItem = { ...item, key: `${item.id}-${item.name}-${item.color}-${item.size}` }; // Generate a unique key
    setCart([...cart, newItem]);
  };

  const removeFromCart = (key: string) => {
    setCart(cart.filter(item => item.key !== key));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
