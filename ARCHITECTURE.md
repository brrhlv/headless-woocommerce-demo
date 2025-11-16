# Architecture Documentation

## Overview

This headless WooCommerce demo is built using a modern JAMstack architecture, separating the frontend presentation layer from the backend e-commerce logic.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐  │
│  │   Pages    │  │ Components │  │   Client State       │  │
│  │            │  │            │  │   (Zustand)          │  │
│  │ - Home     │  │ - Header   │  │                      │  │
│  │ - Product  │  │ - Footer   │  │ - Cart Items         │  │
│  │ - Cart     │  │ - Card     │  │ - Cart Total         │  │
│  │ - Checkout │  │            │  │ - Item Count         │  │
│  └────────────┘  └────────────┘  └──────────────────────┘  │
│         │              │                    │                │
│         └──────────────┴────────────────────┘                │
│                        │                                     │
└────────────────────────┼─────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Application                       │
│                                                              │
│  ┌──────────────┐         ┌──────────────────────────┐     │
│  │ App Router   │         │   API Routes             │     │
│  │              │         │                          │     │
│  │ - SSR Pages  │◄────────┤ - /api/checkout          │     │
│  │ - SSG Pages  │         │ - /api/products/[slug]   │     │
│  └──────────────┘         └──────────────────────────┘     │
│         │                            │                      │
│         └────────────────────────────┘                      │
│                        │                                    │
└────────────────────────┼────────────────────────────────────┘
                         │
                         │ WooCommerce REST API
                         │ (Basic Auth)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   WooCommerce Backend                        │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Products   │  │  Categories  │  │     Orders       │  │
│  │   Database   │  │   Database   │  │    Database      │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend Layer

**Next.js 15 (App Router)**
- Server-side rendering (SSR) for dynamic product pages
- Static site generation (SSG) for product listings and categories
- API routes for server-side operations
- Image optimization with next/image

**React 19**
- Component-based UI architecture
- Hooks for state management
- Server Components for improved performance

**TypeScript**
- Full type safety across the application
- Interface definitions for all API responses
- Better developer experience with IntelliSense

**Tailwind CSS**
- Utility-first CSS framework
- Responsive design out of the box
- Custom design system

### State Management

**Zustand**
- Lightweight state management library
- Persistent cart state via local storage
- Simple API with minimal boilerplate

```typescript
// Cart store structure
interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}
```

### Backend Integration

**WooCommerce REST API v3**
- RESTful API for e-commerce operations
- Query string authentication
- JSON responses

**Fetch API**
- Native browser fetch for API calls
- Server-side rendering compatible
- Built-in request caching

## Data Flow

### Product Listing Flow

```
1. User visits homepage
2. Next.js Server Component fetches products from WooCommerce
3. Products are rendered as static HTML (SSG)
4. Page is cached for 60 seconds
5. Client hydrates with interactivity
```

### Add to Cart Flow

```
1. User clicks "Add to Cart" on product page
2. Client-side Zustand store updates
3. Cart data persisted to localStorage
4. Header cart badge updates via React state
5. User redirected to cart page
```

### Checkout Flow

```
1. User fills out checkout form
2. Form data submitted to /api/checkout
3. API route creates order in WooCommerce
4. Order confirmation returned
5. Cart cleared
6. User redirected to confirmation page
```

## File Structure

```
headless-woocommerce-demo/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── checkout/
│   │   │   └── route.ts          # Order creation endpoint
│   │   └── products/
│   │       └── [slug]/
│   │           └── route.ts      # Product fetch endpoint
│   ├── cart/
│   │   └── page.tsx              # Shopping cart page (Client Component)
│   ├── categories/
│   │   └── page.tsx              # Categories page (Server Component)
│   ├── checkout/
│   │   └── page.tsx              # Checkout page (Client Component)
│   ├── order-confirmation/
│   │   └── page.tsx              # Order success page (Client Component)
│   ├── products/
│   │   └── [slug]/
│   │       └── page.tsx          # Product detail (Client Component)
│   ├── layout.tsx                # Root layout (wraps all pages)
│   ├── page.tsx                  # Homepage (Server Component)
│   └── globals.css               # Global styles
├── components/                   # Reusable React components
│   ├── Header.tsx                # Site header with cart badge
│   ├── Footer.tsx                # Site footer
│   └── ProductCard.tsx           # Product card component
├── lib/                          # Utility libraries
│   ├── woocommerce.ts            # WooCommerce API client
│   └── store.ts                  # Zustand cart store
└── public/                       # Static assets
```

## Component Architecture

### Server Components vs Client Components

**Server Components** (default in App Router):
- `app/page.tsx` - Homepage with product grid
- `app/categories/page.tsx` - Category listing
- `components/ProductCard.tsx` - Product cards
- `components/Footer.tsx` - Site footer

Benefits:
- No JavaScript sent to client
- Direct database/API access
- Better SEO
- Faster initial page load

**Client Components** (`"use client"` directive):
- `components/Header.tsx` - Cart badge (uses Zustand)
- `app/cart/page.tsx` - Cart management (uses Zustand)
- `app/products/[slug]/page.tsx` - Product details (interactive)
- `app/checkout/page.tsx` - Checkout form (form handling)

Benefits:
- Interactive features
- Browser APIs access
- State management
- Event handlers

## API Design

### WooCommerce API Wrapper

```typescript
// GET /wp-json/wc/v3/products
getProducts(params?: {
  per_page?: number
  page?: number
  category?: number
  search?: string
  orderby?: string
  order?: "asc" | "desc"
}): Promise<Product[]>

// GET /wp-json/wc/v3/products/{slug}
getProductBySlug(slug: string): Promise<Product | null>

// GET /wp-json/wc/v3/products/categories
getCategories(params?: {
  per_page?: number
  page?: number
}): Promise<Category[]>

// POST /wp-json/wc/v3/orders
createOrder(orderData: {
  line_items: Array<{ product_id: number; quantity: number }>
  billing: BillingAddress
  shipping?: ShippingAddress
}): Promise<Order | null>
```

### Next.js API Routes

```typescript
// POST /api/checkout
// Creates order in WooCommerce
// Input: Order data (billing, line items)
// Output: Order object with ID

// GET /api/products/[slug]
// Fetches single product by slug
// Input: Product slug
// Output: Product object
```

## Performance Optimizations

### Caching Strategy

1. **Next.js ISR (Incremental Static Regeneration)**
   - Product pages cached for 60 seconds
   - Automatic revalidation on updates
   - Fallback to SSR for uncached pages

2. **Image Optimization**
   - Next.js Image component
   - Automatic WebP conversion
   - Lazy loading
   - Responsive images

3. **Code Splitting**
   - Automatic route-based code splitting
   - Dynamic imports for heavy components
   - Optimized bundle sizes

### Database Queries

- WooCommerce handles database queries
- REST API responses cached server-side
- Minimal API calls per page load

## Security Considerations

### API Security

1. **Environment Variables**
   - API credentials stored in `.env.local`
   - Never exposed to client
   - Server-side only access

2. **Authentication**
   - Query string authentication for demo
   - OAuth recommended for production
   - HTTPS required

3. **Input Validation**
   - Form validation on checkout
   - Type safety with TypeScript
   - Sanitized user inputs

### Client-Side Security

1. **XSS Prevention**
   - React automatic escaping
   - Careful use of `dangerouslySetInnerHTML`
   - Content Security Policy headers

2. **CSRF Protection**
   - Next.js built-in CSRF protection
   - SameSite cookie attributes

## Scalability

### Horizontal Scaling

- Stateless architecture
- Cart stored client-side
- No session management
- Can deploy multiple instances

### Vertical Scaling

- Optimized React components
- Efficient state management
- Lazy loading
- Code splitting

## Deployment Architecture

### Vercel (Recommended)

```
┌─────────────────────┐
│   Vercel Edge       │
│   Network (CDN)     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Next.js Server    │
│   (Serverless)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   WooCommerce API   │
│   (Your Server)     │
└─────────────────────┘
```

Benefits:
- Global CDN distribution
- Automatic HTTPS
- Serverless functions
- Zero-downtime deployments

## Future Enhancements

### Planned Features

1. **Search & Filtering**
   - Algolia integration
   - Faceted search
   - Price filters

2. **User Accounts**
   - Customer registration
   - Order history
   - Saved addresses

3. **Payment Integration**
   - Stripe checkout
   - PayPal integration
   - Multiple payment methods

4. **Analytics**
   - Google Analytics
   - Conversion tracking
   - User behavior analysis

5. **SEO Enhancements**
   - Structured data
   - XML sitemaps
   - Meta tag optimization

## Testing Strategy

### Unit Testing
- Component testing with Jest
- Utility function tests
- State management tests

### Integration Testing
- API route testing
- E2E with Playwright
- Cart flow testing

### Performance Testing
- Lighthouse scores
- Core Web Vitals
- Load testing

## Monitoring & Debugging

### Tools

1. **Next.js Built-in**
   - Server-side logging
   - Error boundaries
   - React DevTools

2. **Third-party**
   - Sentry for error tracking
   - Vercel Analytics
   - Google Search Console

## Conclusion

This architecture provides:
- Modern, performant user experience
- Scalable, maintainable codebase
- SEO-friendly static pages
- Type-safe development
- Production-ready deployment

The separation of concerns between frontend and backend allows for:
- Independent scaling
- Technology flexibility
- Improved performance
- Better developer experience
