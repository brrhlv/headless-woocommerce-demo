import { getProducts } from "@/lib/woocommerce";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Products</h1>
          <p className="text-gray-600 mb-8">
            Enter a search term to find products
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const products = await getProducts({ search: query, per_page: 50 }) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Search Results
        </h1>
        <p className="text-gray-600">
          {products.length > 0 ? (
            <>
              Found <span className="font-semibold">{products.length}</span> result
              {products.length !== 1 ? "s" : ""} for &quot;
              <span className="font-semibold">{query}</span>&quot;
            </>
          ) : (
            <>No results found for &quot;<span className="font-semibold">{query}</span>&quot;</>
          )}
        </p>
      </div>

      {/* Results */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            No products found
          </h2>
          <p className="text-gray-600 mb-6">
            Try searching with different keywords or browse our categories
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              href="/categories"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              View Categories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
