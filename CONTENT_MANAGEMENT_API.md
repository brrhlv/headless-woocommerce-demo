# Content Management API Documentation

This document explains how to use the API endpoints to create, read, update, and delete (CRUD) blog posts, pages, and media in your headless WordPress/WooCommerce site.

## Table of Contents

1. [Authentication](#authentication)
2. [Blog Posts API](#blog-posts-api)
3. [Pages API](#pages-api)
4. [Media API](#media-api)
5. [Environment Setup](#environment-setup)
6. [Examples](#examples)

---

## Authentication

All write operations (POST, PUT, PATCH, DELETE) require WordPress authentication using **Basic Auth**.

### Setting Up WordPress Application Passwords

1. **Log in to your WordPress admin** (e.g., `https://your-store.com/wp-admin`)
2. Go to **Users** → **Profile**
3. Scroll to **Application Passwords** section
4. Enter a name (e.g., "Headless API")
5. Click **Add New Application Password**
6. **Copy the generated password** (it will only be shown once!)

### Using Basic Auth in Requests

Encode your WordPress username and application password in Base64:

```bash
# Format: username:application_password
echo -n "your_username:xxxx xxxx xxxx xxxx xxxx xxxx" | base64
```

Then use the result in your Authorization header:

```
Authorization: Basic eW91cl91c2VybmFtZTp4eHh4IHh4eHggeHh4eCB4eHh4IHh4eHggeHh4eA==
```

---

## Blog Posts API

### List Posts

**Endpoint:** `GET /api/posts`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `per_page` (optional): Posts per page (default: 10)
- `search` (optional): Search term
- `status` (optional): Post status - `publish`, `draft`, `pending`, `private` (default: `publish`)

**Example:**
```bash
curl https://your-site.vercel.app/api/posts?per_page=5&page=1
```

**Response:**
```json
{
  "posts": [
    {
      "id": 123,
      "title": { "rendered": "My First Post" },
      "content": { "rendered": "<p>Post content here</p>" },
      "excerpt": { "rendered": "<p>Excerpt...</p>" },
      "slug": "my-first-post",
      "status": "publish",
      "date": "2025-01-15T12:00:00",
      "categories": [1, 5],
      "tags": [2, 7],
      "_embedded": {
        "author": [...],
        "wp:featuredmedia": [...]
      }
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 5,
    "total": 42,
    "total_pages": 9
  }
}
```

---

### Get Single Post

**Endpoint:** `GET /api/posts/[id]`

**Example:**
```bash
curl https://your-site.vercel.app/api/posts/123
```

---

### Create Post

**Endpoint:** `POST /api/posts`

**Authentication:** Required ✅

**Request Body:**
```json
{
  "title": "My Awesome Blog Post",
  "content": "<p>This is the content of my blog post with <strong>HTML</strong> formatting.</p>",
  "excerpt": "A short excerpt about this post",
  "status": "draft",
  "categories": [1, 5],
  "tags": [2, 7],
  "featured_media": 456
}
```

**Fields:**
- `title` (required): Post title
- `content` (required): Post content (HTML)
- `excerpt` (optional): Post excerpt
- `status` (optional): `draft`, `publish`, `pending`, `private` (default: `draft`)
- `categories` (optional): Array of category IDs
- `tags` (optional): Array of tag IDs
- `featured_media` (optional): Featured image media ID

**Example:**
```bash
curl -X POST https://your-site.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "title": "My New Post",
    "content": "<p>Hello, world!</p>",
    "status": "draft"
  }'
```

**Response:**
```json
{
  "id": 124,
  "title": { "rendered": "My New Post" },
  "content": { "rendered": "<p>Hello, world!</p>" },
  "status": "draft",
  "link": "https://your-store.com/my-new-post/",
  ...
}
```

---

### Update Post

**Endpoint:** `PUT /api/posts/[id]` or `PATCH /api/posts/[id]`

**Authentication:** Required ✅

**Request Body:** (all fields optional, only include what you want to update)
```json
{
  "title": "Updated Title",
  "content": "<p>Updated content</p>",
  "status": "publish"
}
```

**Example:**
```bash
curl -X PUT https://your-site.vercel.app/api/posts/124 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "status": "publish"
  }'
```

---

### Delete Post

**Endpoint:** `DELETE /api/posts/[id]`

**Authentication:** Required ✅

**Query Parameters:**
- `force` (optional): Set to `true` to permanently delete (default: move to trash)

**Example (Move to Trash):**
```bash
curl -X DELETE https://your-site.vercel.app/api/posts/124 \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS"
```

**Example (Permanent Delete):**
```bash
curl -X DELETE "https://your-site.vercel.app/api/posts/124?force=true" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS"
```

**Response:**
```json
{
  "success": true,
  "message": "Post moved to trash",
  "data": { ... }
}
```

---

## Pages API

### List Pages

**Endpoint:** `GET /api/pages`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `per_page` (optional): Pages per page (default: 10)
- `search` (optional): Search term
- `status` (optional): Page status (default: `publish`)

**Example:**
```bash
curl https://your-site.vercel.app/api/pages
```

---

### Get Single Page

**Endpoint:** `GET /api/pages/[id]`

**Example:**
```bash
curl https://your-site.vercel.app/api/pages/45
```

---

### Create Page

**Endpoint:** `POST /api/pages`

**Authentication:** Required ✅

**Request Body:**
```json
{
  "title": "About Us",
  "content": "<p>This is our about page.</p>",
  "status": "publish",
  "parent": 0,
  "menu_order": 1,
  "template": ""
}
```

**Fields:**
- `title` (required): Page title
- `content` (required): Page content (HTML)
- `excerpt` (optional): Page excerpt
- `status` (optional): `draft`, `publish`, `pending`, `private`
- `parent` (optional): Parent page ID (for hierarchical pages)
- `menu_order` (optional): Order in menu
- `template` (optional): Page template file name
- `featured_media` (optional): Featured image media ID

**Example:**
```bash
curl -X POST https://your-site.vercel.app/api/pages \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "title": "Contact Us",
    "content": "<p>Contact form here</p>",
    "status": "publish"
  }'
```

---

### Update Page

**Endpoint:** `PUT /api/pages/[id]` or `PATCH /api/pages/[id]`

**Authentication:** Required ✅

**Example:**
```bash
curl -X PUT https://your-site.vercel.app/api/pages/45 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "content": "<p>Updated content with contact form</p>"
  }'
```

---

### Delete Page

**Endpoint:** `DELETE /api/pages/[id]?force=true`

**Authentication:** Required ✅

**Example:**
```bash
curl -X DELETE "https://your-site.vercel.app/api/pages/45?force=true" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS"
```

---

## Media API

### List Media

**Endpoint:** `GET /api/media`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `per_page` (optional): Items per page (default: 20)
- `search` (optional): Search term
- `media_type` (optional): `image`, `video`, `audio`, `application`

**Example:**
```bash
curl https://your-site.vercel.app/api/media?media_type=image
```

---

### Get Single Media Item

**Endpoint:** `GET /api/media/[id]`

**Example:**
```bash
curl https://your-site.vercel.app/api/media/456
```

**Response:**
```json
{
  "id": 456,
  "title": { "rendered": "My Image" },
  "source_url": "https://your-store.com/wp-content/uploads/2025/01/image.jpg",
  "alt_text": "Image description",
  "media_type": "image",
  "mime_type": "image/jpeg",
  "media_details": {
    "width": 1920,
    "height": 1080,
    "file": "2025/01/image.jpg",
    "sizes": { ... }
  }
}
```

---

### Upload Media

**Endpoint:** `POST /api/media`

**Authentication:** Required ✅

**Content-Type:** `multipart/form-data`

**Form Data:**
- `file` (required): The image/media file
- `title` (optional): Media title
- `alt_text` (optional): Alt text for accessibility
- `caption` (optional): Media caption

**Example:**
```bash
curl -X POST https://your-site.vercel.app/api/media \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -F "file=@/path/to/image.jpg" \
  -F "title=Beautiful Sunset" \
  -F "alt_text=A beautiful sunset over the ocean"
```

**Response:**
```json
{
  "id": 457,
  "title": { "rendered": "Beautiful Sunset" },
  "source_url": "https://your-store.com/wp-content/uploads/2025/01/image.jpg",
  "alt_text": "A beautiful sunset over the ocean",
  ...
}
```

---

### Update Media Metadata

**Endpoint:** `PUT /api/media/[id]` or `PATCH /api/media/[id]`

**Authentication:** Required ✅

**Request Body:**
```json
{
  "title": "Updated Title",
  "alt_text": "Updated alt text",
  "caption": "New caption",
  "description": "Detailed description"
}
```

**Example:**
```bash
curl -X PUT https://your-site.vercel.app/api/media/457 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "alt_text": "Updated alt text for accessibility"
  }'
```

---

### Delete Media

**Endpoint:** `DELETE /api/media/[id]?force=true`

**Authentication:** Required ✅

**Example:**
```bash
curl -X DELETE "https://your-site.vercel.app/api/media/457?force=true" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS"
```

---

## Environment Setup

Update your `.env.local` file:

```bash
# WordPress/WooCommerce Store URL
NEXT_PUBLIC_WC_STORE_URL=https://your-store.com

# WooCommerce API Credentials (for products/orders)
WC_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxxxxxxx
WC_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxxxxxxx
```

**Note:** For content management (posts/pages/media), you use **WordPress Application Passwords** (Basic Auth), not the WooCommerce consumer keys.

---

## Examples

### Complete Workflow: Create a Blog Post with Featured Image

#### Step 1: Upload an Image
```bash
curl -X POST https://your-site.vercel.app/api/media \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -F "file=@hero-image.jpg" \
  -F "alt_text=Hero image for blog post"
```

Response: `{ "id": 500, "source_url": "..." }`

#### Step 2: Create the Post with the Image
```bash
curl -X POST https://your-site.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{
    "title": "10 Tips for Better Photography",
    "content": "<p>Here are my top 10 tips...</p>",
    "status": "publish",
    "featured_media": 500,
    "categories": [3]
  }'
```

#### Step 3: Update the Post Later
```bash
curl -X PUT https://your-site.vercel.app/api/posts/124 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{
    "content": "<p>Updated with more tips...</p>"
  }'
```

---

### JavaScript/TypeScript Example

```typescript
// Create a new blog post
async function createBlogPost() {
  const credentials = btoa('username:app_password_here');

  const response = await fetch('https://your-site.vercel.app/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    },
    body: JSON.stringify({
      title: 'My New Post',
      content: '<p>This is the content</p>',
      status: 'publish',
      categories: [1]
    })
  });

  const post = await response.json();
  console.log('Created post:', post);
}
```

---

### React Hook Example

```typescript
import { useState } from 'react';

export function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPost = async (postData: {
    title: string;
    content: string;
    status?: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      // Get credentials from secure storage or user input
      const credentials = localStorage.getItem('wp_credentials');

      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create post');
      }

      const post = await response.json();
      return post;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error };
}
```

---

## Best Practices

### Security
1. **Never commit credentials** to Git
2. **Use Application Passwords**, not your main WordPress password
3. **Store credentials securely** (environment variables, secure vault)
4. **Use HTTPS** for all API requests
5. **Validate input** on both client and server

### Performance
1. **Use pagination** for large lists
2. **Cache GET requests** where appropriate
3. **Upload optimized images** (compress before upload)
4. **Use draft status** while editing, publish when ready

### Error Handling
1. **Check response status** codes
2. **Handle 401 Unauthorized** (expired/invalid credentials)
3. **Handle 404 Not Found** (deleted content)
4. **Handle 500 Server Errors** (retry logic)

---

## Troubleshooting

### 401 Unauthorized Error
- Verify your WordPress username and application password
- Check Base64 encoding is correct
- Ensure the user has permission to create/edit content

### 404 Not Found Error
- Verify the post/page/media ID exists
- Check the endpoint URL is correct

### 500 Server Error
- Check your `NEXT_PUBLIC_WC_STORE_URL` is correct
- Verify WordPress REST API is enabled
- Check WordPress error logs

### No Response / Timeout
- Verify your WordPress site is accessible
- Check firewall/security plugins aren't blocking REST API
- Verify CORS settings if calling from different domain

---

## Next Steps

1. **Test the endpoints** using the examples above
2. **Build a simple admin UI** for content management
3. **Set up automated deployments** when content changes
4. **Add webhooks** to trigger rebuilds on content updates
5. **Implement rich text editor** for better content creation

## Support

- WordPress REST API Handbook: https://developer.wordpress.org/rest-api/
- Application Passwords Guide: https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

---

**Created:** 2025-11-16
**Version:** 1.0.0
**Status:** ✅ Ready for Production
