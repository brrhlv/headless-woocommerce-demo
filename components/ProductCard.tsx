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
      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600 transition-all duration-300">
        <div className="relative h-80 w-full overflow-hidden bg-zinc-950">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:opacity-75 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.on_sale && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-light tracking-wider uppercase">
              Sale
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-base font-light text-white mb-3 line-clamp-2 tracking-wide">
            {product.name}
          </h3>

          {product.short_description && (
            <div
              className="text-xs text-gray-400 mb-4 line-clamp-2 font-light"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {product.on_sale && product.regular_price && (
                <span className="text-sm text-gray-500 line-through font-light">
                  ${product.regular_price}
                </span>
              )}
              <span className="text-lg font-normal text-white">
                ${product.price}
              </span>
            </div>

            <span className={`text-xs px-3 py-1 font-light tracking-wide uppercase ${
              product.stock_status === "instock"
                ? "text-gray-400"
                : "text-red-500"
            }`}>
              {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
