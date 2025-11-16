"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { ShoppingCart, Store } from "lucide-react";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-blue-600 flex-shrink-0">
            <Store className="w-8 h-8" />
            <span className="hidden sm:inline">WooCommerce Demo</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-grow max-w-xl">
            <SearchBar />
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium hidden lg:block">
              Products
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium hidden lg:block">
              Blog
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium hidden lg:block">
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

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}
