"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { ShoppingCart, Store } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-blue-600">
            <Store className="w-8 h-8" />
            <span>WooCommerce Demo</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium">
              Categories
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
