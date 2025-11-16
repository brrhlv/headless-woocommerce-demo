# Headless WooCommerce Demo

A modern, production-ready headless e-commerce and content management system built with Next.js 15 and WordPress/WooCommerce.

## Features

- **E-commerce:** Product catalog, shopping cart, checkout, and order management
- **Blog/CMS:** Full content management via REST API
- **Headless Architecture:** Next.js frontend + WordPress backend
- **Content API:** Create, read, update, and delete posts, pages, and media programmatically
- **TypeScript:** Full type safety
- **Modern Stack:** Next.js 15, React 19, Tailwind CSS, Zustand

## Live Demo

[https://headless-woocommerce-demo.vercel.app/](https://headless-woocommerce-demo.vercel.app/)

## Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[CONTENT_MANAGEMENT_API.md](./CONTENT_MANAGEMENT_API.md)** - Full API documentation for content management
- **[API_QUICK_REFERENCE.md](./API_QUICK_REFERENCE.md)** - Quick reference for API endpoints
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture details
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview and features

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your WordPress/WooCommerce credentials:

```bash
NEXT_PUBLIC_WC_STORE_URL=https://your-store.com
WC_CONSUMER_KEY=your_consumer_key_here
WC_CONSUMER_SECRET=your_consumer_secret_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## Content Management API

This project includes REST API endpoints for managing WordPress content:

### Posts API
- `GET /api/posts` - List all posts
- `POST /api/posts` - Create a new post
- `PUT /api/posts/[id]` - Update a post
- `DELETE /api/posts/[id]` - Delete a post

### Pages API
- `GET /api/pages` - List all pages
- `POST /api/pages` - Create a new page
- `PUT /api/pages/[id]` - Update a page
- `DELETE /api/pages/[id]` - Delete a page

### Media API
- `GET /api/media` - List all media
- `POST /api/media` - Upload media file
- `PUT /api/media/[id]` - Update media metadata
- `DELETE /api/media/[id]` - Delete media

### Authentication

Content management endpoints require WordPress Application Passwords (Basic Auth).

**Quick Example:**

```bash
# Create a blog post
curl -X POST https://your-site.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "title": "My First Post",
    "content": "<p>Hello, world!</p>",
    "status": "publish"
  }'
```

See [CONTENT_MANAGEMENT_API.md](./CONTENT_MANAGEMENT_API.md) for complete documentation.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Backend:** WordPress + WooCommerce
- **Deployment:** Vercel

## Project Structure

```
headless-woocommerce-demo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── posts/         # Blog posts CRUD
│   │   ├── pages/         # Pages CRUD
│   │   ├── media/         # Media upload/management
│   │   ├── checkout/      # Order creation
│   │   └── products/      # Product fetching
│   ├── blog/              # Blog pages
│   ├── cart/              # Shopping cart
│   ├── products/          # Product pages
│   └── ...
├── components/            # React components
├── lib/                   # Utilities
│   ├── woocommerce.ts     # WooCommerce API client
│   ├── wordpress.ts       # WordPress API client
│   └── store.ts           # Cart state
└── ...
```

## Learn More

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### WordPress/WooCommerce
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [WooCommerce REST API Documentation](https://woocommerce.github.io/woocommerce-rest-api-docs/)

## Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/headless-woocommerce-demo)

Don't forget to set your environment variables in Vercel:
- `NEXT_PUBLIC_WC_STORE_URL`
- `WC_CONSUMER_KEY`
- `WC_CONSUMER_SECRET`

## License

MIT

## Support

For issues and questions, please check the documentation files or open an issue on GitHub.
