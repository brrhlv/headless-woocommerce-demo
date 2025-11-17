"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "All Products", slug: "/" },
  { name: "Electronics", slug: "/categories?category=electronics" },
  { name: "Accessories", slug: "/categories?category=accessories" },
  { name: "Furniture", slug: "/categories?category=furniture" },
  { name: "Sports & Fitness", slug: "/categories?category=sports-fitness" },
];

export default function CategoryBar() {
  const pathname = usePathname();

  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-xl border-b border-gray-800 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-center gap-8 px-6 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const isActive =
              category.slug === "/"
                ? pathname === "/"
                : pathname.startsWith("/categories");

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
      </div>
    </div>
  );
}
