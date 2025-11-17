"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store";
import Image from "next/image";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "US",
  });

  const total = getTotal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        line_items: items.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
        billing: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address_1: formData.address1,
          address_2: formData.address2,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country,
        },
      };

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const order = await response.json();
        clearCart();
        router.push(`/order-confirmation?orderId=${order.id}`);
      } else {
        alert("Order failed. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Billing Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="address1" className="block text-sm font-medium text-gray-400 mb-1">
                Address Line 1 *
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                required
                value={formData.address1}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address2" className="block text-sm font-medium text-gray-400 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-400 mb-1">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-400 mb-1">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  required
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-zinc-950 text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  {item.image && (
                    <div className="relative w-16 h-16 bg-zinc-950 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-white line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      Qty: {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <p className="font-semibold text-white">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-4 space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-zinc-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
