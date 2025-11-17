"use client";

import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-600 mb-6" strokeWidth={1} />
          <h1 className="text-2xl font-light text-white mb-3 tracking-wide uppercase">Your cart is empty</h1>
          <p className="text-gray-400 font-light mb-12 text-sm">
            Looks like you haven&apos;t added anything to your cart yet
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 text-white px-10 py-3 font-light text-sm tracking-wider uppercase hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-light text-white mb-12 tracking-wider uppercase">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900 border border-zinc-800 p-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 py-6 border-b border-zinc-800 last:border-b-0"
              >
                {/* Product Image */}
                {item.image && (
                  <div className="relative w-20 h-20 bg-zinc-950 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="font-light text-white mb-2 text-sm">{item.name}</h3>
                  <p className="text-gray-400 font-light text-sm">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 border border-zinc-700 hover:border-red-600 transition-colors flex items-center justify-center text-gray-400"
                  >
                    <Minus className="w-3 h-3" strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center font-light text-sm text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 border border-zinc-700 hover:border-red-600 transition-colors flex items-center justify-center text-gray-400"
                  >
                    <Plus className="w-3 h-3" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right min-w-[80px]">
                  <p className="font-normal text-white text-sm">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-500 hover:text-red-500 p-2 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="mt-6 text-gray-400 hover:text-red-500 text-xs font-light tracking-wide uppercase transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 p-8 sticky top-24">
            <h2 className="text-sm font-light tracking-wider uppercase mb-8 text-white">Order Summary</h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400 font-light text-sm">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 font-light text-sm">
                <span>Shipping</span>
                <span className="text-xs">Calculated at checkout</span>
              </div>
              <div className="border-t border-zinc-800 pt-4 flex justify-between font-normal text-white">
                <span className="tracking-wide">Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-red-600 text-white text-center py-3 font-light text-sm tracking-wider uppercase hover:bg-red-700 transition-colors mb-4"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/"
              className="block w-full text-center text-gray-400 hover:text-white font-light text-sm tracking-wide transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
