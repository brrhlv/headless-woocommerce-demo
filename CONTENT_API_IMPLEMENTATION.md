# Content API Implementation Summary

**Date:** 2025-11-16
**Status:** ✅ Complete and Tested

## What Was Built

A complete REST API layer for managing WordPress content (posts, pages, and media) in your headless WooCommerce demo. This allows you to create, read, update, and delete content programmatically without using the WordPress admin interface.

## New Files Created

### API Route Handlers

1. **`app/api/posts/route.ts`** - Blog posts list and create
2. **`app/api/posts/[id]/route.ts`** - Blog posts get, update, delete
3. **`app/api/pages/route.ts`** - Pages list and create
4. **`app/api/pages/[id]/route.ts`** - Pages get, update, delete
5. **`app/api/media/route.ts`** - Media list and upload
6. **`app/api/media/[id]/route.ts`** - Media get, update, delete

### Documentation

7. **`CONTENT_MANAGEMENT_API.md`** - Complete API documentation (450+ lines)
8. **`API_QUICK_REFERENCE.md`** - Quick reference guide
9. **`CONTENT_API_IMPLEMENTATION.md`** - This file

### Configuration

10. **`.env.example`** - Updated with WordPress authentication instructions

## API Endpoints

### Blog Posts
- `GET /api/posts` - List posts with pagination
- `GET /api/posts/[id]` - Get single post
- `POST /api/posts` - Create new post (requires auth)
- `PUT/PATCH /api/posts/[id]` - Update post (requires auth)
- `DELETE /api/posts/[id]` - Delete post (requires auth)

### Pages
- `GET /api/pages` - List pages with pagination
- `GET /api/pages/[id]` - Get single page
- `POST /api/pages` - Create new page (requires auth)
- `PUT/PATCH /api/pages/[id]` - Update page (requires auth)
- `DELETE /api/pages/[id]` - Delete page (requires auth)

### Media
- `GET /api/media` - List media files
- `GET /api/media/[id]` - Get single media item
- `POST /api/media` - Upload media file (requires auth)
- `PUT/PATCH /api/media/[id]` - Update media metadata (requires auth)
- `DELETE /api/media/[id]` - Delete media (requires auth)

## Authentication

All write operations (POST, PUT, PATCH, DELETE) use **WordPress Application Passwords** with Basic Authentication.

### How to Set Up

1. Log in to WordPress admin: `https://your-store.com/wp-admin`
2. Navigate to **Users → Profile**
3. Scroll to **Application Passwords** section
4. Create a new password with name "Headless API"
5. Copy the generated password
6. Encode credentials: `echo -n "username:password" | base64`
7. Use in API calls: `Authorization: Basic <base64_string>`

## Features Implemented

### ✅ Full CRUD Operations
- Create posts, pages, and media
- Read individual items or lists
- Update existing content
- Delete (trash or permanent)

### ✅ Query Parameters
- Pagination: `page`, `per_page`
- Search: `search`
- Status filtering: `status` (publish, draft, pending, private)
- Media type filtering: `media_type`

### ✅ Content Features
- **Posts:** Title, content, excerpt, categories, tags, featured image
- **Pages:** Title, content, parent pages, menu order, templates
- **Media:** File upload, title, alt text, caption, metadata

### ✅ Security
- Basic authentication required for write operations
- Server-side API calls only (credentials never exposed to client)
- Input validation
- Type safety with TypeScript
- Error handling with proper HTTP status codes

### ✅ Response Formats
- Consistent JSON responses
- Pagination metadata
- Embedded author and media data
- Error messages

## Example Usage

### Create a Blog Post

```bash
curl -X POST https://headless-woocommerce-demo.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \
  -d '{
    "title": "Getting Started with Headless WordPress",
    "content": "<p>Learn how to build modern websites...</p>",
    "status": "publish",
    "categories": [1]
  }'
```

### Upload an Image

```bash
curl -X POST https://headless-woocommerce-demo.vercel.app/api/media \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \
  -F "file=@image.jpg" \
  -F "alt_text=Feature image"
```

### Update a Page

```bash
curl -X PUT https://headless-woocommerce-demo.vercel.app/api/pages/45 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \
  -d '{
    "content": "<p>Updated page content</p>"
  }'
```

### Delete a Post (Move to Trash)

```bash
curl -X DELETE https://headless-woocommerce-demo.vercel.app/api/posts/123 \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ="
```

### Permanent Delete

```bash
curl -X DELETE "https://headless-woocommerce-demo.vercel.app/api/posts/123?force=true" \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ="
```

## Use Cases

### 1. Automated Content Publishing
Build scripts to automatically publish content from external sources:
```javascript
const publishFromGoogleSheets = async () => {
  const data = await fetchFromGoogleSheets();
  for (const row of data) {
    await createPost({
      title: row.title,
      content: row.content,
      status: 'publish'
    });
  }
};
```

### 2. Content Migration
Migrate content from another platform:
```javascript
const migrateFromOldSite = async () => {
  const oldPosts = await fetchOldSitePosts();
  for (const post of oldPosts) {
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      },
      body: JSON.stringify({
        title: post.title,
        content: post.body,
        status: 'draft'
      })
    });
  }
};
```

### 3. Custom Admin Interface
Build a custom CMS interface with React:
```typescript
const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = async () => {
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      },
      body: JSON.stringify({ title, content, status: 'publish' })
    });
  };

  return <form onSubmit={handlePublish}>...</form>;
};
```

### 4. Scheduled Publishing
Use with cron jobs or GitHub Actions:
```yaml
# .github/workflows/publish.yml
name: Publish Scheduled Posts
on:
  schedule:
    - cron: '0 9 * * *'  # Every day at 9 AM
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Publish posts
        run: |
          curl -X POST ${{ secrets.SITE_URL }}/api/posts \
            -H "Authorization: Basic ${{ secrets.WP_AUTH }}" \
            -d '{"title":"Daily Update","content":"...","status":"publish"}'
```

### 5. Content Backup
Automate content backups:
```javascript
const backupContent = async () => {
  const posts = await fetch('/api/posts?per_page=100').then(r => r.json());
  const pages = await fetch('/api/pages?per_page=100').then(r => r.json());

  fs.writeFileSync('backup.json', JSON.stringify({
    posts: posts.posts,
    pages: pages.pages,
    date: new Date().toISOString()
  }));
};
```

## Best Practices

### 1. Security
- Never commit credentials to version control
- Use environment variables or secure vaults
- Rotate application passwords regularly
- Implement rate limiting for production

### 2. Error Handling
```javascript
try {
  const response = await fetch('/api/posts', { method: 'POST', ... });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
} catch (error) {
  console.error('Failed to create post:', error);
  // Handle error appropriately
}
```

### 3. Pagination
```javascript
const getAllPosts = async () => {
  let allPosts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`/api/posts?page=${page}&per_page=20`);
    const data = await response.json();

    allPosts.push(...data.posts);
    hasMore = page < data.pagination.total_pages;
    page++;
  }

  return allPosts;
};
```

### 4. Content Validation
```javascript
const validatePost = (post) => {
  if (!post.title || post.title.length < 3) {
    throw new Error('Title must be at least 3 characters');
  }
  if (!post.content || post.content.length < 50) {
    throw new Error('Content must be at least 50 characters');
  }
  return true;
};
```

## Testing

### Manual Testing with cURL

```bash
# Test authentication
curl -I https://your-site.vercel.app/api/posts \
  -H "Authorization: Basic YOUR_CREDENTIALS"

# Test create post
curl -X POST https://your-site.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{"title":"Test","content":"<p>Test</p>","status":"draft"}'

# Test update post
curl -X PUT https://your-site.vercel.app/api/posts/123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{"status":"publish"}'

# Test delete post
curl -X DELETE https://your-site.vercel.app/api/posts/123 \
  -H "Authorization: Basic YOUR_CREDENTIALS"
```

### Testing with Postman/Insomnia

Import the following collection:
```json
{
  "name": "Content Management API",
  "requests": [
    {
      "name": "List Posts",
      "method": "GET",
      "url": "{{base_url}}/api/posts"
    },
    {
      "name": "Create Post",
      "method": "POST",
      "url": "{{base_url}}/api/posts",
      "headers": {
        "Authorization": "Basic {{auth}}",
        "Content-Type": "application/json"
      },
      "body": {
        "title": "New Post",
        "content": "<p>Content here</p>",
        "status": "draft"
      }
    }
  ]
}
```

## Deployment Notes

### Vercel Deployment
The API routes will work automatically on Vercel. No additional configuration needed.

### Environment Variables
Set in Vercel dashboard:
- `NEXT_PUBLIC_WC_STORE_URL` - Your WordPress site URL
- `WC_CONSUMER_KEY` - WooCommerce consumer key (for products)
- `WC_CONSUMER_SECRET` - WooCommerce consumer secret (for products)

**Note:** WordPress Application Passwords are NOT stored as environment variables. They're passed in Authorization headers when making API calls.

### CORS Configuration
If calling from a different domain, add CORS headers in `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
      ],
    },
  ];
}
```

## Next Steps

### Recommended Enhancements

1. **Webhooks**
   - Add WordPress webhook to trigger revalidation on content updates
   - Implement ISR (Incremental Static Regeneration) for blog posts

2. **Admin UI**
   - Build a custom admin interface using Next.js
   - Add rich text editor (TipTap, Lexical, etc.)
   - Create media library browser

3. **Batch Operations**
   - Add bulk delete/update endpoints
   - Implement content import/export

4. **Advanced Features**
   - Custom post types support
   - Taxonomies (categories/tags) management
   - User management endpoints
   - Comments moderation

5. **Monitoring**
   - Add logging for API usage
   - Implement rate limiting
   - Track content creation metrics

## Troubleshooting

### Common Issues

**401 Unauthorized**
- Check username and password are correct
- Verify Base64 encoding
- Ensure user has permission to create/edit content
- Check Application Password hasn't been revoked

**404 Not Found**
- Verify post/page/media ID exists
- Check endpoint URL is correct
- Ensure WordPress REST API is enabled

**500 Server Error**
- Verify `NEXT_PUBLIC_WC_STORE_URL` is correct
- Check WordPress site is accessible
- Review WordPress error logs
- Check for conflicting WordPress plugins

**CORS Errors**
- Add CORS headers in Next.js config
- Verify request origin is allowed
- Check WordPress REST API CORS settings

## Resources

- [Complete API Documentation](./CONTENT_MANAGEMENT_API.md)
- [Quick Reference](./API_QUICK_REFERENCE.md)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Application Passwords Guide](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)

## Support

For issues or questions:
1. Check the [CONTENT_MANAGEMENT_API.md](./CONTENT_MANAGEMENT_API.md) documentation
2. Review WordPress REST API logs
3. Test endpoints with cURL or Postman
4. Check WordPress Application Password is valid

---

**Implementation Completed:** 2025-11-16
**Version:** 1.0.0
**Status:** ✅ Production Ready
