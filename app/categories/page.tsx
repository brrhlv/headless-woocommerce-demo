import { getCategories } from "@/lib/woocommerce";
import Link from "next/link";
import Image from "next/image";

export default async function CategoriesPage() {
  const categories = await getCategories({ per_page: 20 }) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Shop by Category</h1>
        <p className="text-gray-600">
          Browse our product categories
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">
            No categories available. Please configure your WooCommerce API credentials.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                {category.image?.src ? (
                  <Image
                    src={category.image.src}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white text-4xl font-bold">
                    {category.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {category.description.replace(/<[^>]*>/g, "")}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  {category.count} {category.count === 1 ? "product" : "products"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
