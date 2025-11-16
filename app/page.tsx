import { getProducts } from "@/lib/woocommerce";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts({ per_page: 12 }) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Featured Products</h1>
        <p className="text-gray-600">
          Discover our curated collection of premium products
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">
            No products available. Please configure your WooCommerce API credentials in .env.local
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
