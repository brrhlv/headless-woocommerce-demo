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

// GET - List all pages
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const per_page = searchParams.get("per_page") || "10";
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "publish";

    const url = new URL(`${WP_STORE_URL}/wp-json/wp/v2/pages`);
    url.searchParams.append("page", page);
    url.searchParams.append("per_page", per_page);
    url.searchParams.append("_embed", "true");
    url.searchParams.append("status", status);
    if (search) url.searchParams.append("search", search);

    const response = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const pages = await response.json();
    const totalPages = response.headers.get("X-WP-TotalPages");
    const total = response.headers.get("X-WP-Total");

    return NextResponse.json({
      pages,
      pagination: {
        page: parseInt(page),
        per_page: parseInt(per_page),
        total: parseInt(total || "0"),
        total_pages: parseInt(totalPages || "0"),
      },
    });
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    );
  }
}

// POST - Create a new page
export async function POST(request: Request) {
  try {
    const authHeader = getAuthHeader(request);
    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization required. Use Basic Auth with WordPress credentials." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, content, excerpt, status, parent, menu_order, featured_media, template } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const pageData: any = {
      title,
      content,
      status: status || "draft",
    };

    if (excerpt) pageData.excerpt = excerpt;
    if (parent) pageData.parent = parent;
    if (menu_order) pageData.menu_order = menu_order;
    if (featured_media) pageData.featured_media = featured_media;
    if (template) pageData.template = template;

    const response = await fetch(`${WP_STORE_URL}/wp-json/wp/v2/pages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(pageData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to create page" },
        { status: response.status }
      );
    }

    const page = await response.json();
    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}
