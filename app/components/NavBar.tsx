"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { cart } = useCart();

  return (
    <nav className="bg-dark-primary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-dark-accent text-2xl font-bold flex items-center hover:text-dark-secondary transition-colors duration-300">
            Clothing Store
          </a>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/" legacyBehavior>
            <a className="text-dark-secondary hover:text-dark-accent transition-colors duration-300">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-dark-secondary hover:text-dark-accent transition-colors duration-300">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-dark-secondary hover:text-dark-accent transition-colors duration-300">Contact</a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="text-dark-secondary hover:text-dark-accent transition-colors duration-300">Cart ({cart.length})</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Login</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Sign Up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
