"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) {
      router.push("/");
    }
  }, [orderId, router]);

  if (!orderId) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-2">
          Thank you for your order
        </p>
        <p className="text-gray-600 mb-8">
          Order ID: <span className="font-semibold">#{orderId}</span>
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">What&apos;s Next?</h2>
          <p className="text-gray-600">
            We&apos;ve sent a confirmation email with your order details. You&apos;ll receive
            another email when your order ships.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500">
            This is a demo checkout. No actual order was placed or payment processed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
