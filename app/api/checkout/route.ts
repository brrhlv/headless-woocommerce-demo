import { NextResponse } from "next/server";
import { createOrder } from "@/lib/woocommerce";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const order = await createOrder(body);

    if (!order) {
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}
