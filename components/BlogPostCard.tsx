import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Tag } from "lucide-react";
import { Post, getFeaturedImageUrl, getAuthorName, formatPostDate, stripHtml, getPostCategories as extractCategories } from "@/lib/wordpress";

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const featuredImage = getFeaturedImageUrl(post);
  const authorName = getAuthorName(post);
  const categories = extractCategories(post);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Featured Image */}
        {featuredImage && (
          <div className="relative h-56 w-full overflow-hidden bg-gray-200">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-6">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.slice(0, 2).map((category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title.rendered}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {stripHtml(post.excerpt.rendered)}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatPostDate(post.date)}</span>
            </div>
          </div>

          {/* Read More */}
          <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
            Read More →
          </div>
        </div>
      </article>
    </Link>
  );
}
