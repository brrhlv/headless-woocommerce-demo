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
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven&apos;t added anything to your cart yet
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b last:border-b-0"
              >
                {/* Product Image */}
                {item.image && (
                  <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
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
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right min-w-[80px]">
                  <p className="font-semibold text-gray-800">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="mt-4 text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/"
              className="block w-full text-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
