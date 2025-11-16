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

// GET - Get a single page by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(
      `${WP_STORE_URL}/wp-json/wp/v2/pages/${id}?_embed=true`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Page not found" },
          { status: 404 }
        );
      }
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const page = await response.json();
    return NextResponse.json(page);
  } catch (error) {
    console.error(`Error fetching page ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch page" },
      { status: 500 }
    );
  }
}

// PUT/PATCH - Update a page
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

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

    const pageData: any = {};
    if (title) pageData.title = title;
    if (content) pageData.content = content;
    if (excerpt) pageData.excerpt = excerpt;
    if (status) pageData.status = status;
    if (parent !== undefined) pageData.parent = parent;
    if (menu_order) pageData.menu_order = menu_order;
    if (featured_media !== undefined) pageData.featured_media = featured_media;
    if (template) pageData.template = template;

    const response = await fetch(
      `${WP_STORE_URL}/wp-json/wp/v2/pages/${id}`,
      {
        method: "POST", // WordPress REST API uses POST for updates
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(pageData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to update page" },
        { status: response.status }
      );
    }

    const page = await response.json();
    return NextResponse.json(page);
  } catch (error) {
    console.error(`Error updating page ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to update page" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a page
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const authHeader = getAuthHeader(request);
    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization required. Use Basic Auth with WordPress credentials." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const force = searchParams.get("force") === "true";

    const url = new URL(`${WP_STORE_URL}/wp-json/wp/v2/pages/${id}`);
    if (force) url.searchParams.append("force", "true");

    const response = await fetch(url.toString(), {
      method: "DELETE",
      headers: {
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to delete page" },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({
      success: true,
      message: force ? "Page permanently deleted" : "Page moved to trash",
      data: result,
    });
  } catch (error) {
    console.error(`Error deleting page ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to delete page" },
      { status: 500 }
    );
  }
}

// Support PATCH as well
export const PATCH = PUT;
