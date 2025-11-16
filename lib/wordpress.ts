import { MOCK_BLOG_POSTS, MOCK_PAGES } from './mock-data';

// WordPress REST API configuration
const WP_STORE_URL = process.env.NEXT_PUBLIC_WC_STORE_URL || "";

// Check if we should use mock data
const USE_MOCK_DATA = !WP_STORE_URL || WP_STORE_URL === '' || WP_STORE_URL.includes('localhost');

// WordPress Post interface
export interface Post {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      avatar_urls: Record<string, string>;
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

// Helper function to fetch from WordPress REST API
async function wpFetch<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
  const baseUrl = `${WP_STORE_URL}/wp-json/wp/v2`;
  const url = new URL(`${baseUrl}${endpoint}`);

  // Add query parameters
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key].toString());
      }
    });
  }

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    console.error(`WordPress API error: ${response.status} ${response.statusText}`);
    throw new Error(`WordPress API error: ${response.statusText}`);
  }

  return response.json();
}

// Get posts with embedded author and featured image
export async function getPosts(params?: {
  per_page?: number;
  page?: number;
  search?: string;
  categories?: number;
  orderby?: string;
  order?: "asc" | "desc";
}): Promise<Post[]> {
  if (USE_MOCK_DATA) {
    return MOCK_BLOG_POSTS as Post[];
  }

  try {
    return await wpFetch<Post[]>("/posts", {
      _embed: true, // Embed author and media
      ...params,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return MOCK_BLOG_POSTS as Post[];
  }
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (USE_MOCK_DATA) {
    const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
    return post as Post || null;
  }

  try {
    const posts = await wpFetch<Post[]>("/posts", {
      slug,
      _embed: true,
    });
    return posts[0] || null;
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
    return post as Post || null;
  }
}

// Get single post by ID
export async function getPost(id: number): Promise<Post | null> {
  try {
    return await wpFetch<Post>(`/posts/${id}`, {
      _embed: true,
    });
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}

// Get post categories
export async function getPostCategories(params?: {
  per_page?: number;
  page?: number;
}): Promise<Category[]> {
  try {
    return await wpFetch<Category[]>("/categories", params);
  } catch (error) {
    console.error("Error fetching post categories:", error);
    return [];
  }
}

// Get category by slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const categories = await wpFetch<Category[]>("/categories", { slug });
    return categories[0] || null;
  } catch (error) {
    console.error(`Error fetching category ${slug}:`, error);
    return null;
  }
}

// Helper to extract featured image URL
export function getFeaturedImageUrl(post: Post): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

// Helper to extract author name
export function getAuthorName(post: Post): string {
  return post._embedded?.author?.[0]?.name || "Unknown Author";
}

// Helper to extract categories from a post
export function extractPostCategories(post: Post): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.["wp:term"]?.[0] || [];
}

// Helper to format date
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Helper to strip HTML tags from excerpt
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}
