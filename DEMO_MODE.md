# Demo Mode - No WordPress Required!

Your headless WooCommerce demo now includes a **Demo Mode** that works without requiring a WordPress/WooCommerce backend. Perfect for demonstrations, development, and testing!

## 🎯 What is Demo Mode?

Demo Mode uses built-in mock data to provide a fully functional e-commerce experience without needing to set up WordPress or WooCommerce. The site will work exactly as if it were connected to a real backend.

## ✨ What's Included in Demo Mode

### Products (8 items)
1. **Premium Wireless Headphones** - $199.99 (on sale from $249.99)
2. **Smart Watch Pro** - $299.99
3. **Minimalist Leather Wallet** - $49.99
4. **Portable Bluetooth Speaker** - $79.99 (on sale)
5. **Ergonomic Office Chair** - $399.99 (on sale)
6. **Stainless Steel Water Bottle** - $29.99
7. **Mechanical Keyboard RGB** - $149.99
8. **Yoga Mat Premium** - $59.99 (on sale)

### Categories
- Electronics (4 products)
- Accessories (2 products)
- Furniture (1 product)
- Sports & Fitness (1 product)

### Blog Posts
1. Welcome to Our Store
2. Top 5 Tech Gadgets for 2025
3. Creating Your Perfect Home Office

### Pages
- About Us
- Contact

### Features
- ✅ Product browsing and search
- ✅ Product detail pages with images
- ✅ Shopping cart functionality
- ✅ Category filtering
- ✅ Blog posts and pages
- ✅ Responsive design
- ✅ All images from Unsplash

## 🚀 How to Enable Demo Mode

### Option 1: Vercel Environment Variable (Recommended)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Either:
   - **Delete** `NEXT_PUBLIC_WC_STORE_URL` (will use empty default)
   - **OR set to:** `NEXT_PUBLIC_WC_STORE_URL=demo`
5. Redeploy your site

### Option 2: Local Development

In your `.env.local`:

```bash
# Leave empty for demo mode
NEXT_PUBLIC_WC_STORE_URL=

# OR explicitly set to demo
NEXT_PUBLIC_WC_STORE_URL=demo

# OR set to localhost (also triggers demo mode)
NEXT_PUBLIC_WC_STORE_URL=http://localhost
```

## 🎨 Customizing Demo Data

Edit `lib/mock-data.ts` to customize:

### Add More Products

```typescript
export const MOCK_PRODUCTS = [
  {
    id: 9,
    name: 'Your Product Name',
    slug: 'your-product-slug',
    price: '99.99',
    description: '<p>Product description</p>',
    images: [{
      src: 'https://images.unsplash.com/photo-xxx',
      alt: 'Product image'
    }],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    stock_status: 'instock',
    stock_quantity: 50
  },
  // ... existing products
];
```

### Add More Blog Posts

```typescript
export const MOCK_BLOG_POSTS = [
  {
    id: 104,
    title: { rendered: 'Your Blog Post Title' },
    slug: 'your-post-slug',
    content: { rendered: '<h2>Post content</h2><p>...</p>' },
    date: '2025-01-16T10:00:00',
    // ... rest of post data
  },
  // ... existing posts
];
```

## 🔄 Switching Between Demo and Real Backend

### Use Demo Mode When:
- Demonstrating the site to clients
- Development without WordPress access
- Testing frontend functionality
- Showcasing the headless architecture

### Use Real Backend When:
- Need to create/edit content via API
- Testing WordPress integration
- Production deployment with real products
- Need real inventory and orders

## 📊 Demo Mode vs Real Backend

| Feature | Demo Mode | Real Backend |
|---------|-----------|--------------|
| Products | 8 samples | Your catalog |
| Blog Posts | 3 samples | Your content |
| Images | Unsplash | Your uploads |
| Inventory | Mock | Real stock |
| Orders | Simulated | Actual orders |
| Content API | Read-only | Full CRUD |
| Setup Required | None | WordPress + WooCommerce |

## 🎯 Perfect For

- **Client Demos** - Show functionality without backend setup
- **Development** - Work on frontend without WordPress dependency
- **Testing** - Test features with consistent data
- **Presentations** - Reliable demo that always works
- **Prototyping** - Quickly prototype new features

## 🔧 How It Works

The system automatically detects when `NEXT_PUBLIC_WC_STORE_URL` is:
- Empty/undefined
- Set to `localhost`
- Not accessible

When detected, it switches to using mock data from `lib/mock-data.ts` instead of making API calls to WordPress/WooCommerce.

## ⚡ Quick Deploy Demo Mode to Vercel

```bash
# Remove WordPress URL from Vercel
npx vercel env rm NEXT_PUBLIC_WC_STORE_URL

# OR add demo value
npx vercel env add NEXT_PUBLIC_WC_STORE_URL
# Enter: demo

# Redeploy
npx vercel --prod
```

Wait 2-3 minutes, then visit your site - it will be fully functional with demo data!

## 📝 Notes

- Demo mode is automatically enabled when no WordPress URL is configured
- All mock data is in `lib/mock-data.ts`
- Images are loaded from Unsplash (requires internet connection)
- Shopping cart works fully with mock products
- Checkout creates a simulated order
- No backend required - perfect for demos!

## 🎉 Live Demo

Check out the live demo at:
https://headless-woocommerce-demo.vercel.app

---

**Ready to try it?** Just deploy without setting `NEXT_PUBLIC_WC_STORE_URL` and your site will automatically use demo mode!
