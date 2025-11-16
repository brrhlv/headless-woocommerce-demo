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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">Product not found</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="relative h-96 w-full mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[selectedImage]?.src || "/placeholder-product.jpg"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            {product.on_sale && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                SALE
              </div>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 bg-gray-100 rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-blue-600" : ""
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              {product.on_sale && product.regular_price && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.regular_price}
                </span>
              )}
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                product.stock_status === "instock"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {product.short_description && (
            <div
              className="text-gray-700 mb-6 pb-6 border-b"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-semibold"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 h-10 text-center border border-gray-300 rounded-lg"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-semibold"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock_status !== "instock"}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {product.stock_status === "instock" ? "Add to Cart" : "Out of Stock"}
          </button>

          {/* Product Description */}
          {product.description && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
              <div
                className="text-gray-700 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          )}

          {/* Categories */}
          {product.categories && product.categories.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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
