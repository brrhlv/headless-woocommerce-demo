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
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-xl font-light text-white hover:text-red-600 transition-colors flex-shrink-0 tracking-wider uppercase">
            <Store className="w-6 h-6" strokeWidth={1.5} />
            <span className="hidden sm:inline">Store</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-grow max-w-xl">
            <SearchBar />
          </div>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white font-light text-sm tracking-wide uppercase transition-colors hidden lg:block">
              Products
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-white font-light text-sm tracking-wide uppercase transition-colors hidden lg:block">
              Categories
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white font-light text-sm tracking-wide uppercase transition-colors hidden lg:block">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white font-light text-sm tracking-wide uppercase transition-colors hidden lg:block">
              About
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white font-light text-sm tracking-wide uppercase transition-colors hidden lg:block">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white font-light text-sm tracking-wide uppercase transition-colors hidden lg:block">
              Contact
            </Link>
            <Link href="/apple-preview" className="text-gray-300 hover:text-blue-400 font-light text-sm tracking-wide uppercase transition-colors hidden xl:block">
              Apple
            </Link>
            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" strokeWidth={1.5} />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
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
