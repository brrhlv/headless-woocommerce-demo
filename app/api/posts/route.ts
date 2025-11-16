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

// GET - List all posts
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const per_page = searchParams.get("per_page") || "10";
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "publish";

    const url = new URL(`${WP_STORE_URL}/wp-json/wp/v2/posts`);
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

    const posts = await response.json();
    const totalPages = response.headers.get("X-WP-TotalPages");
    const total = response.headers.get("X-WP-Total");

    return NextResponse.json({
      posts,
      pagination: {
        page: parseInt(page),
        per_page: parseInt(per_page),
        total: parseInt(total || "0"),
        total_pages: parseInt(totalPages || "0"),
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// POST - Create a new post
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
    const { title, content, excerpt, status, categories, tags, featured_media } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const postData: any = {
      title,
      content,
      status: status || "draft",
    };

    if (excerpt) postData.excerpt = excerpt;
    if (categories) postData.categories = categories;
    if (tags) postData.tags = tags;
    if (featured_media) postData.featured_media = featured_media;

    const response = await fetch(`${WP_STORE_URL}/wp-json/wp/v2/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to create post" },
        { status: response.status }
      );
    }

    const post = await response.json();
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
