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

// GET - Get a single media item by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(
      `${WP_STORE_URL}/wp-json/wp/v2/media/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Media not found" },
          { status: 404 }
        );
      }
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const media = await response.json();
    return NextResponse.json(media);
  } catch (error) {
    console.error(`Error fetching media ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

// PUT/PATCH - Update media metadata
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
    const { title, alt_text, caption, description } = body;

    const mediaData: any = {};
    if (title) mediaData.title = title;
    if (alt_text !== undefined) mediaData.alt_text = alt_text;
    if (caption) mediaData.caption = caption;
    if (description) mediaData.description = description;

    const response = await fetch(
      `${WP_STORE_URL}/wp-json/wp/v2/media/${id}`,
      {
        method: "POST", // WordPress REST API uses POST for updates
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(mediaData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to update media" },
        { status: response.status }
      );
    }

    const media = await response.json();
    return NextResponse.json(media);
  } catch (error) {
    console.error(`Error updating media ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to update media" },
      { status: 500 }
    );
  }
}

// DELETE - Delete media
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

    const url = new URL(`${WP_STORE_URL}/wp-json/wp/v2/media/${id}`);
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
        { error: errorData.message || "Failed to delete media" },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({
      success: true,
      message: force ? "Media permanently deleted" : "Media moved to trash",
      data: result,
    });
  } catch (error) {
    console.error(`Error deleting media ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to delete media" },
      { status: 500 }
    );
  }
}

// Support PATCH as well
export const PATCH = PUT;
