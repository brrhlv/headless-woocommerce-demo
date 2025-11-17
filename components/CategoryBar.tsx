"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const categories = [
  { name: "All Products", slug: "/", categorySlug: null },
  { name: "Electronics", slug: "/categories?category=electronics", categorySlug: "electronics" },
  { name: "Accessories", slug: "/categories?category=accessories", categorySlug: "accessories" },
  { name: "Furniture", slug: "/categories?category=furniture", categorySlug: "furniture" },
  { name: "Sports & Fitness", slug: "/categories?category=sports-fitness", categorySlug: "sports-fitness" },
];

function CategoryBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <nav className="flex items-center justify-center gap-8 px-6 py-3 overflow-x-auto scrollbar-hide">
      {categories.map((category) => {
        const isActive =
          category.categorySlug === null
            ? pathname === "/" && !currentCategory
            : currentCategory === category.categorySlug;

        return (
          <Link
            key={category.slug}
            href={category.slug}
            className={`text-xs font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default function CategoryBar() {
  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-xl border-b border-gray-800 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={
          <nav className="flex items-center justify-center gap-8 px-6 py-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.slug}
                className="text-xs font-medium whitespace-nowrap text-gray-400 hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        }>
          <CategoryBarContent />
        </Suspense>
      </div>
    </div>
  );
}
