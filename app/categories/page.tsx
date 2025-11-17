import { getProducts } from "@/lib/woocommerce";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import ProductCard from "@/components/ProductCard";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categorySlug = searchParams.category;

  // Get all products
  const allProducts = await getProducts({ per_page: 100 }) || MOCK_PRODUCTS;

  // Filter by category if specified
  const filteredProducts = categorySlug
    ? allProducts.filter((product) =>
        product.categories?.some((cat) => cat.slug === categorySlug)
      )
    : allProducts;

  // Get category name for display
  const categoryName = categorySlug
    ? categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'All Products';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
          {categoryName}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-gray-400">
            No products found in this category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
