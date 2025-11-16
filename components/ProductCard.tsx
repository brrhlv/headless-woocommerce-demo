import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/woocommerce";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]?.src || "/placeholder-product.jpg";

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 w-full overflow-hidden bg-gray-200">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.on_sale && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              SALE
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600">
            {product.name}
          </h3>

          {product.short_description && (
            <div
              className="text-sm text-gray-600 mb-3 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.on_sale && product.regular_price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.regular_price}
                </span>
              )}
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>

            <span className={`text-sm px-2 py-1 rounded ${
              product.stock_status === "instock"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
              {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
