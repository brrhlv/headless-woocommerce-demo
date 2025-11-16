# API Quick Reference

Quick reference guide for the Content Management API endpoints.

## Authentication

All write operations require Basic Auth with WordPress Application Passwords:

```bash
Authorization: Basic base64(username:app_password)
```

## Base URL

Replace `YOUR_SITE` with your deployment URL:
```
https://YOUR_SITE.vercel.app/api
```

---

## Posts

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/posts` | No | List all posts |
| `GET` | `/posts/[id]` | No | Get single post |
| `POST` | `/posts` | Yes | Create post |
| `PUT/PATCH` | `/posts/[id]` | Yes | Update post |
| `DELETE` | `/posts/[id]` | Yes | Delete post |

### Quick Examples

```bash
# List posts
curl https://YOUR_SITE.vercel.app/api/posts

# Create post
curl -X POST https://YOUR_SITE.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{"title":"My Post","content":"<p>Content</p>","status":"publish"}'

# Update post
curl -X PUT https://YOUR_SITE.vercel.app/api/posts/123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{"status":"publish"}'

# Delete post
curl -X DELETE https://YOUR_SITE.vercel.app/api/posts/123?force=true \
  -H "Authorization: Basic YOUR_CREDENTIALS"
```

---

## Pages

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/pages` | No | List all pages |
| `GET` | `/pages/[id]` | No | Get single page |
| `POST` | `/pages` | Yes | Create page |
| `PUT/PATCH` | `/pages/[id]` | Yes | Update page |
| `DELETE` | `/pages/[id]` | Yes | Delete page |

### Quick Examples

```bash
# Create page
curl -X POST https://YOUR_SITE.vercel.app/api/pages \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{"title":"About","content":"<p>About us</p>","status":"publish"}'
```

---

## Media

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/media` | No | List all media |
| `GET` | `/media/[id]` | No | Get single media item |
| `POST` | `/media` | Yes | Upload media |
| `PUT/PATCH` | `/media/[id]` | Yes | Update media metadata |
| `DELETE` | `/media/[id]` | Yes | Delete media |

### Quick Examples

```bash
# Upload image
curl -X POST https://YOUR_SITE.vercel.app/api/media \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -F "file=@image.jpg" \
  -F "alt_text=My image description"

# Update media
curl -X PUT https://YOUR_SITE.vercel.app/api/media/456 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_CREDENTIALS" \
  -d '{"alt_text":"Updated description"}'
```

---

## Common Query Parameters

### For Posts & Pages (GET)
- `page=1` - Page number
- `per_page=10` - Items per page
- `search=keyword` - Search term
- `status=publish` - Status filter (publish, draft, pending, private)

### For Media (GET)
- `media_type=image` - Filter by type (image, video, audio, application)

### For Delete Operations
- `force=true` - Permanently delete (vs. move to trash)

---

## Request Bodies

### Create/Update Post
```json
{
  "title": "Post Title",
  "content": "<p>HTML content</p>",
  "excerpt": "Short excerpt",
  "status": "draft|publish|pending|private",
  "categories": [1, 5],
  "tags": [2, 7],
  "featured_media": 456
}
```

### Create/Update Page
```json
{
  "title": "Page Title",
  "content": "<p>HTML content</p>",
  "status": "publish",
  "parent": 0,
  "menu_order": 1,
  "template": ""
}
```

### Upload Media
```
Content-Type: multipart/form-data

file: [binary file]
title: "Image Title"
alt_text: "Image description"
caption: "Image caption"
```

---

## Response Formats

### Success Response
```json
{
  "id": 123,
  "title": { "rendered": "Title" },
  "content": { "rendered": "<p>Content</p>" },
  "status": "publish",
  ...
}
```

### List Response
```json
{
  "posts": [...],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 42,
    "total_pages": 5
  }
}
```

### Error Response
```json
{
  "error": "Error message"
}
```

---

## HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (missing required fields)
- `401` - Unauthorized (invalid/missing credentials)
- `404` - Not Found
- `500` - Server Error

---

## Getting Base64 Credentials

```bash
# Replace with your WordPress username and application password
echo -n "username:app_password_here" | base64
```

Output: `dXNlcm5hbWU6YXBwX3Bhc3N3b3JkX2hlcmU=`

Use in requests:
```bash
-H "Authorization: Basic dXNlcm5hbWU6YXBwX3Bhc3N3b3JkX2hlcmU="
```

---

## Full Documentation

See [CONTENT_MANAGEMENT_API.md](./CONTENT_MANAGEMENT_API.md) for complete documentation with detailed examples.
