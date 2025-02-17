"use client";

import { useState } from "react";
import Link from "next/link";

interface ClothingItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export default function Cart() {
  const [cart, setCart] = useState<ClothingItem[]>([]);

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-300">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-black rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="object-cover h-64 w-full"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-red-500">{item.name}</h2>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <p className="text-lg font-bold text-red-500">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link href="/" legacyBehavior>
            <a className="text-red-500">Continue Shopping</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
