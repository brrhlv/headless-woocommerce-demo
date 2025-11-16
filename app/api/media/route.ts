import { NextResponse } from "next/server";

const WP_STORE_URL = process.env.NEXT_PUBLIC_WC_STORE_URL || "";

// Helper to get WordPress auth from headers
function getAuthHeader(request: Request): string | null {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return null;
  }
  return authHeader;
}

// GET - List all media
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const per_page = searchParams.get("per_page") || "20";
    const search = searchParams.get("search") || "";
    const media_type = searchParams.get("media_type") || "";

    const url = new URL(`${WP_STORE_URL}/wp-json/wp/v2/media`);
    url.searchParams.append("page", page);
    url.searchParams.append("per_page", per_page);
    if (search) url.searchParams.append("search", search);
    if (media_type) url.searchParams.append("media_type", media_type);

    const response = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const media = await response.json();
    const totalPages = response.headers.get("X-WP-TotalPages");
    const total = response.headers.get("X-WP-Total");

    return NextResponse.json({
      media,
      pagination: {
        page: parseInt(page),
        per_page: parseInt(per_page),
        total: parseInt(total || "0"),
        total_pages: parseInt(totalPages || "0"),
      },
    });
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

// POST - Upload new media
export async function POST(request: Request) {
  try {
    const authHeader = getAuthHeader(request);
    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization required. Use Basic Auth with WordPress credentials." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const alt_text = formData.get("alt_text") as string;
    const caption = formData.get("caption") as string;

    if (!file) {
      return NextResponse.json(
        { error: "File is required" },
        { status: 400 }
      );
    }

    // Create WordPress FormData
    const wpFormData = new FormData();
    wpFormData.append("file", file);
    if (title) wpFormData.append("title", title);
    if (alt_text) wpFormData.append("alt_text", alt_text);
    if (caption) wpFormData.append("caption", caption);

    const response = await fetch(`${WP_STORE_URL}/wp-json/wp/v2/media`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        // Don't set Content-Type - browser will set it with boundary
      },
      body: wpFormData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to upload media" },
        { status: response.status }
      );
    }

    const media = await response.json();
    return NextResponse.json(media, { status: 201 });
  } catch (error) {
    console.error("Error uploading media:", error);
    return NextResponse.json(
      { error: "Failed to upload media" },
      { status: 500 }
    );
  }
}
