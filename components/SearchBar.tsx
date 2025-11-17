"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/woocommerce";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data.products || []);
        setIsOpen(true);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-1 focus:ring-red-600 focus:border-red-600 font-light text-sm transition-colors"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        )}
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="w-4 h-4 text-red-600 animate-spin" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-2xl max-h-96 overflow-y-auto z-50">
          <div className="p-2">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                {/* Product Image */}
                {product.images[0]?.src && (
                  <div className="relative w-12 h-12 flex-shrink-0 bg-gray-100">
                    <Image
                      src={product.images[0].src}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-light text-black truncate">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-light">${product.price}</p>
                </div>

                {/* Stock Status */}
                <div className="flex-shrink-0">
                  {product.stock_status === "instock" ? (
                    <span className="text-xs text-gray-600 font-light">In Stock</span>
                  ) : (
                    <span className="text-xs text-red-600 font-light">Out of Stock</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* View All Results */}
          <div className="border-t border-gray-200 p-3 bg-gray-50">
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={() => setIsOpen(false)}
              className="block text-center text-xs text-black hover:text-red-600 font-light tracking-wide uppercase transition-colors"
            >
              View all results
            </Link>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && results.length === 0 && query.length >= 2 && !isLoading && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-2xl p-6 z-50">
          <p className="text-center text-gray-600 font-light text-sm">
            No products found for &quot;{query}&quot;
          </p>
        </div>
      )}
    </div>
  );
}
