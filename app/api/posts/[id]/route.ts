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

// GET - Get a single post by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(
      `${WP_STORE_URL}/wp-json/wp/v2/posts/${id}?_embed=true`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Post not found" },
          { status: 404 }
        );
      }
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const post = await response.json();
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// PUT/PATCH - Update a post
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
    const { title, content, excerpt, status, categories, tags, featured_media } = body;

    const postData: any = {};
    if (title) postData.title = title;
    if (content) postData.content = content;
    if (excerpt) postData.excerpt = excerpt;
    if (status) postData.status = status;
    if (categories) postData.categories = categories;
    if (tags) postData.tags = tags;
    if (featured_media !== undefined) postData.featured_media = featured_media;

    const response = await fetch(
      `${WP_STORE_URL}/wp-json/wp/v2/posts/${id}`,
      {
        method: "POST", // WordPress REST API uses POST for updates
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to update post" },
        { status: response.status }
      );
    }

    const post = await response.json();
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error updating post ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a post
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

    const url = new URL(`${WP_STORE_URL}/wp-json/wp/v2/posts/${id}`);
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
        { error: errorData.message || "Failed to delete post" },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({
      success: true,
      message: force ? "Post permanently deleted" : "Post moved to trash",
      data: result,
    });
  } catch (error) {
    console.error(`Error deleting post ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}

// Support PATCH as well
export const PATCH = PUT;
