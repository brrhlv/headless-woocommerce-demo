"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/lib/woocommerce";
import { useCartStore } from "@/lib/store";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${slug}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0]?.src,
    });

    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-400 font-light text-sm">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <p className="text-lg text-gray-400 font-light">Product not found</p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 text-white hover:text-red-600 font-light text-sm tracking-wide uppercase transition-colors"
          >
            Return to products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-red-600 mb-8 font-light text-sm tracking-wide uppercase transition-colors"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Images */}
        <div>
          <div className="relative h-[500px] w-full mb-4 bg-zinc-950 overflow-hidden">
            <Image
              src={product.images[selectedImage]?.src || "/placeholder-product.jpg"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            {product.on_sale && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 text-xs font-light tracking-wider uppercase">
                Sale
              </div>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 bg-zinc-950 overflow-hidden transition-all ${
                    selectedImage === index ? "ring-2 ring-red-600" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || product.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-light text-white mb-6 tracking-wide">{product.name}</h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              {product.on_sale && product.regular_price && (
                <span className="text-xl text-gray-400 line-through font-light">
                  ${product.regular_price}
                </span>
              )}
              <span className="text-3xl font-normal text-white">
                ${product.price}
              </span>
            </div>

            <span
              className={`px-4 py-1 text-xs font-light tracking-wider uppercase ${
                product.stock_status === "instock"
                  ? "text-gray-400"
                  : "text-red-600"
              }`}
            >
              {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {product.short_description && (
            <div
              className="text-gray-400 font-light leading-relaxed mb-8 pb-8 border-b border-zinc-800"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-xs font-light tracking-wider uppercase text-gray-400 mb-3">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 border border-gray-600 hover:border-blue-500 transition-colors flex items-center justify-center rounded-lg"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-24 h-12 text-center border border-gray-600 bg-transparent rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 border border-gray-600 hover:border-blue-500 transition-colors flex items-center justify-center rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock_status !== "instock"}
            className="apple-button-primary w-full disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center gap-3 mb-6"
          >
            <ShoppingCart className="w-4 h-4" strokeWidth={1.5} />
            {product.stock_status === "instock" ? "Add to Cart" : "Out of Stock"}
          </button>

          {/* Product Description */}
          {product.description && (
            <div className="mt-12">
              <h2 className="text-sm font-light tracking-wider uppercase text-white mb-6">Description</h2>
              <div
                className="text-gray-400 font-light leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          )}

          {/* Categories */}
          {product.categories && product.categories.length > 0 && (
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h3 className="text-xs font-light tracking-wider uppercase text-gray-400 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 border border-zinc-700 text-gray-400 text-xs font-light tracking-wide uppercase hover:border-red-600 transition-colors"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
