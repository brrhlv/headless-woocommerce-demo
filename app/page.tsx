import { getProducts } from "@/lib/woocommerce";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts({ per_page: 12 }) || [];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-light text-white mb-4 tracking-wider uppercase">Featured Products</h1>
          <p className="text-gray-400 font-light text-sm max-w-2xl mx-auto">
            Discover our curated collection of premium products
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-400 font-light">
              No products available
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
