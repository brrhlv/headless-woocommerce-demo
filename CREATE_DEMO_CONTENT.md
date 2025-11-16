# Creating Demo Content Guide

This guide explains how to populate your headless WooCommerce demo with sample blog posts, pages, and products.

## Prerequisites

1. ✅ WordPress Application Password created
2. ✅ Code deployed to Vercel
3. ✅ API endpoints working

## Quick Start

### Option 1: Node.js Script (Recommended)

The Node.js script creates comprehensive content with rich formatting:

```bash
node scripts/create-demo-content.js
```

**What it creates:**
- 5 detailed blog posts about headless commerce, Next.js, SEO, and performance
- 3 pages: About Us, Contact, Privacy Policy
- All content is published and ready to view

### Option 2: Bash Script

For a quick setup with simpler content:

```bash
./scripts/create-demo-content.sh
```

**What it creates:**
- 3 blog posts
- 2 pages (About, Contact)

### Option 3: Manual API Calls

Create content manually using cURL:

```bash
curl -X POST https://headless-woocommerce-demo.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM=" \
  -d '{
    "title": "My First Post",
    "content": "<p>This is my first blog post!</p>",
    "status": "publish"
  }'
```

## Demo Content Included

### Blog Posts

1. **Welcome to Our Headless WordPress Blog**
   - Introduction to headless architecture
   - Benefits and tech stack overview

2. **10 Tips for Building Fast E-commerce Sites**
   - Performance optimization techniques
   - Core Web Vitals best practices

3. **The Future of Headless Commerce**
   - Omnichannel experiences
   - Real-world success stories

4. **Getting Started with Next.js 15**
   - App Router guide
   - Server vs Client Components

5. **SEO Best Practices for Headless Sites**
   - Meta tags and structured data
   - Core Web Vitals optimization

### Pages

1. **About Us**
   - Company mission and values
   - Team information
   - Tech stack details

2. **Contact**
   - Contact information
   - FAQ section
   - Support resources

3. **Privacy Policy**
   - Data collection practices
   - Cookie policy
   - User rights

## Customizing Content

### Edit the Scripts

Both scripts use arrays/objects for content. Modify `scripts/create-demo-content.js`:

```javascript
const DEMO_POSTS = [
  {
    title: 'Your Custom Title',
    content: '<p>Your custom content with HTML</p>',
    excerpt: 'Short description',
    status: 'publish' // or 'draft'
  },
  // Add more posts...
];
```

### Add Your Own Content

Use the API directly:

```javascript
const createPost = async () => {
  const response = await fetch('https://your-site.vercel.app/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic YOUR_TOKEN_HERE'
    },
    body: JSON.stringify({
      title: 'Custom Post',
      content: '<p>Your content here</p>',
      status: 'publish'
    })
  });

  return response.json();
};
```

## Environment Variables

You can set these instead of hardcoding:

```bash
# Set environment variables
export SITE_URL="https://your-site.vercel.app"
export WP_AUTH_TOKEN="your_base64_token_here"

# Run script
node scripts/create-demo-content.js
```

## Troubleshooting

### Script fails with 401 Unauthorized

**Problem:** Invalid credentials

**Solution:**
```bash
# Verify your token
echo "YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM=" | base64 -d
# Should output: admin:V4jQ F1Yv J0In Ll4u bUao ckIc

# Test authentication
curl -I https://your-wordpress-site.com/wp-json/wp/v2/users/me \
  -u "admin:V4jQ F1Yv J0In Ll4u bUao ckIc"
```

### Script fails with 404 Not Found

**Problem:** API endpoints not deployed

**Solution:**
1. Verify deployment: `git push origin main`
2. Check Vercel dashboard for successful build
3. Test endpoint: `curl https://your-site.vercel.app/api/posts`

### Script fails with 500 Server Error

**Problem:** WordPress connection issue

**Solution:**
1. Check `NEXT_PUBLIC_WC_STORE_URL` in Vercel environment variables
2. Verify WordPress site is accessible
3. Check WordPress error logs

### jq command not found (Bash script)

**Problem:** `jq` not installed

**Solution:**
```bash
# Ubuntu/Debian
sudo apt-get install jq

# macOS
brew install jq

# Or use Node.js script instead
node scripts/create-demo-content.js
```

## Viewing Created Content

After running the script, view your content:

- **Blog Posts:** https://your-site.vercel.app/blog
- **About Page:** https://your-site.vercel.app/about
- **Contact Page:** https://your-site.vercel.app/contact

## Deleting Demo Content

To remove demo content:

```bash
# List all posts
curl https://your-site.vercel.app/api/posts | jq '.posts[] | {id, title}'

# Delete specific post
curl -X DELETE "https://your-site.vercel.app/api/posts/POST_ID?force=true" \
  -H "Authorization: Basic YOUR_TOKEN"
```

Or create a cleanup script:

```javascript
// scripts/cleanup-demo-content.js
const posts = await fetch(`${SITE_URL}/api/posts?per_page=100`).then(r => r.json());

for (const post of posts.posts) {
  if (post.title.rendered.includes('Demo') || post.title.rendered.includes('Welcome')) {
    await fetch(`${SITE_URL}/api/posts/${post.id}?force=true`, {
      method: 'DELETE',
      headers: { 'Authorization': `Basic ${AUTH_TOKEN}` }
    });
    console.log(`Deleted: ${post.title.rendered}`);
  }
}
```

## Adding Images

To add featured images to posts:

1. Upload image first:
```bash
curl -X POST https://your-site.vercel.app/api/media \
  -H "Authorization: Basic YOUR_TOKEN" \
  -F "file=@image.jpg" \
  -F "alt_text=Image description"
```

2. Get media ID from response

3. Add to post:
```bash
curl -X PUT https://your-site.vercel.app/api/posts/POST_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_TOKEN" \
  -d '{"featured_media": MEDIA_ID}'
```

## Advanced: Batch Import

For large content imports, use the script with your own data:

```javascript
// Import from JSON file
const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('my-content.json'));

for (const post of posts) {
  await createContent('/api/posts', post);
}
```

## Next Steps

After creating demo content:

1. ✅ Verify content displays correctly on your site
2. ✅ Test blog listing and individual post pages
3. ✅ Check pages are accessible
4. ✅ Customize content to match your needs
5. ✅ Add featured images if desired
6. ✅ Set up categories and tags (optional)

## Resources

- [Content Management API Documentation](./CONTENT_MANAGEMENT_API.md)
- [API Quick Reference](./API_QUICK_REFERENCE.md)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)

---

**Ready to create demo content?**

```bash
node scripts/create-demo-content.js
```

Then visit: https://headless-woocommerce-demo.vercel.app/blog
