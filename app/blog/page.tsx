import { getPosts } from "@/lib/wordpress";
import BlogPostCard from "@/components/BlogPostCard";

export const metadata = {
  title: "Blog | WooCommerce Demo",
  description: "Latest news, tips, and updates from our blog",
};

export default async function BlogPage() {
  const posts = await getPosts({ per_page: 12 }) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest news, product updates, and expert tips
        </p>
      </div>

      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No blog posts yet
          </h2>
          <p className="text-gray-600">
            Check back soon for the latest updates and articles!
          </p>
        </div>
      )}
    </div>
  );
}
