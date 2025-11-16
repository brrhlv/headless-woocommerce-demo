import { NextResponse } from "next/server";
import { getProducts } from "@/lib/woocommerce";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return NextResponse.json({ products: [] });
  }

  try {
    // Search products using WooCommerce API
    const products = await getProducts({
      search: query,
      per_page: 10, // Limit results for dropdown
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Search failed", products: [] },
      { status: 500 }
    );
  }
}
