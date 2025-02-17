"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((item) => (
                <div
                  key={item.key}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="object-cover h-64 w-full"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h2>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-gray-600 mb-2">Color: {item.color}</p>
                    <p className="text-gray-600 mb-2">Size: {item.size}</p>
                    <p className="text-lg font-bold text-gray-900">${item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.key)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-full transition-colors duration-300"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</p>
              <Link href="/checkout" legacyBehavior>
                <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 transition-colors duration-300 inline-block">
                  Checkout
                </a>
              </Link>
            </div>
          </>
        )}
        <div className="text-center mt-8">
          <Link href="/" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Continue Shopping</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
