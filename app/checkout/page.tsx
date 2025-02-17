"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8 animate-fade-in">
          Checkout
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-secondary">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((item) => (
                <div
                  key={item.key}
                  className="bg-primary rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="object-cover h-64 w-full"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-accent">{item.name}</h2>
                    <p className="text-secondary mb-4">{item.description}</p>
                    <p className="text-lg font-bold text-accent">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-foreground">Total: ${totalPrice.toFixed(2)}</p>
              <button
                onClick={handlePlaceOrder}
                className="bg-green-500 hover:bg-green-700 text-accent font-bold py-2 px-4 rounded mt-4 transition-colors duration-300"
              >
                Place Order
              </button>
            </div>
            {showPaymentForm && (
              <div className="mt-8 bg-primary p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-accent mb-4">Payment Information</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-secondary mb-2" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="w-full p-2 rounded bg-secondary text-foreground"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-secondary mb-2" htmlFor="expiryDate">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      className="w-full p-2 rounded bg-secondary text-foreground"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-secondary mb-2" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full p-2 rounded bg-secondary text-foreground"
                      placeholder="123"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-accent font-bold py-2 px-4 rounded mt-4 transition-colors duration-300"
                  >
                    Submit Payment
                  </button>
                </form>
              </div>
            )}
          </>
        )}
        <div className="text-center mt-8">
          <Link href="/cart" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Back to Cart</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
