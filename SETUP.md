# Setup Guide

This guide will walk you through setting up the Headless WooCommerce Demo from scratch.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [WooCommerce Setup](#woocommerce-setup)
3. [API Configuration](#api-configuration)
4. [Local Development Setup](#local-development-setup)
5. [Testing the Integration](#testing-the-integration)
6. [Deployment](#deployment)
7. [Common Issues](#common-issues)

## Prerequisites

### Required Software

- **Node.js**: Version 18.x or higher
  ```bash
  node --version  # Should be v18.0.0 or higher
  ```

- **npm**: Version 9.x or higher (comes with Node.js)
  ```bash
  npm --version
  ```

- **Git**: For version control
  ```bash
  git --version
  ```

### Required Accounts

- **WooCommerce Store**: You need a WordPress site with WooCommerce installed
  - Can be a live site, staging site, or local development site
  - WooCommerce version 3.5+ recommended

## WooCommerce Setup

### 1. Install WordPress and WooCommerce

If you don't have a WooCommerce store yet:

1. Install WordPress on your hosting or use [Local by Flywheel](https://localwp.com/) for local development
2. Install WooCommerce plugin:
   - Go to **Plugins > Add New**
   - Search for "WooCommerce"
   - Click **Install Now** and then **Activate**
3. Follow the WooCommerce setup wizard

### 2. Enable REST API

The REST API is enabled by default in WooCommerce, but verify:

1. Go to **WooCommerce > Settings**
2. Click the **Advanced** tab
3. Click **REST API**
4. Ensure API is enabled

### 3. Create API Credentials

1. In **WooCommerce > Settings > Advanced > REST API**, click **Add Key**
2. Fill in the details:
   - **Description**: "Headless Frontend" (or any description)
   - **User**: Select an administrator user
   - **Permissions**: Select **Read/Write**
3. Click **Generate API Key**
4. **IMPORTANT**: Copy both keys immediately (you won't see the secret again):
   - Consumer Key: `ck_...`
   - Consumer Secret: `cs_...`

### 4. Add Sample Products (Optional)

For testing, add some sample products:

1. Go to **Products > Add New**
2. Add product details:
   - Name
   - Price
   - Description
   - Images
   - Categories
3. Click **Publish**
4. Repeat for 5-10 products to have a good demo dataset

Or import WooCommerce sample data:
1. Go to **Tools > Import > WordPress**
2. Install WordPress Importer if needed
3. Import the sample data XML file from WooCommerce

## API Configuration

### Understanding the API Endpoints

The WooCommerce REST API provides endpoints for:

- Products: `/wp-json/wc/v3/products`
- Categories: `/wp-json/wc/v3/products/categories`
- Orders: `/wp-json/wc/v3/orders`

### Testing API Access

Test your API credentials using curl:

```bash
curl https://your-store.com/wp-json/wc/v3/products \
  -u ck_your_key:cs_your_secret
```

You should receive a JSON response with product data.

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd headless-woocommerce-demo
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Next.js and React
- WooCommerce REST API client
- Zustand for state management
- Tailwind CSS for styling
- TypeScript types

### 3. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local`:
```env
# Your WooCommerce store URL (no trailing slash)
NEXT_PUBLIC_WC_STORE_URL=https://your-store.com

# API credentials from WooCommerce > Settings > Advanced > REST API
WC_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxxxxxx
WC_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxxxxxx
```

**Important Notes:**
- `NEXT_PUBLIC_WC_STORE_URL` must NOT have a trailing slash
- Use `https://` not `http://` for production
- Never commit `.env.local` to version control

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Testing the Integration

### 1. Verify Homepage

- Visit `http://localhost:3000`
- You should see a grid of products from your WooCommerce store
- If you see "No products available", check your API credentials

### 2. Test Product Details

- Click on any product card
- Verify product images, description, and price display correctly
- Try changing quantity
- Click "Add to Cart"

### 3. Test Shopping Cart

- Add items to cart from product pages
- Click cart icon in header
- Verify cart badge shows correct count
- Test quantity increase/decrease
- Test remove item
- Test "Clear Cart"

### 4. Test Checkout

- With items in cart, click "Proceed to Checkout"
- Fill out the checkout form
- Click "Place Order"
- Verify you reach the confirmation page

**Note**: In demo mode, orders are created in WooCommerce but no payment is processed.

### 5. Test Categories

- Navigate to "Categories" in the header
- Click on a category
- Verify products from that category load

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure environment variables:
   - Add `NEXT_PUBLIC_WC_STORE_URL`
   - Add `WC_CONSUMER_KEY`
   - Add `WC_CONSUMER_SECRET`
6. Click "Deploy"

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Netlify dashboard
7. Deploy

### Deploy to Your Own Server

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start npm --name "woocommerce-demo" -- start
```

4. Configure nginx or Apache as a reverse proxy

## Common Issues

### Products Not Loading

**Symptom**: Homepage shows "No products available"

**Solutions**:
1. Verify API credentials in `.env.local`
2. Check WooCommerce REST API is enabled
3. Ensure products exist in WooCommerce
4. Check browser console for errors
5. Test API with curl (see API Configuration section)

### CORS Errors

**Symptom**: API requests blocked by CORS policy

**Solutions**:
1. Add this to your WordPress `functions.php`:
```php
add_filter( 'rest_authentication_errors', function( $result ) {
    if ( ! empty( $result ) ) {
        return $result;
    }
    return true;
} );
```

2. Or use a CORS plugin like "WP REST API Controller"

### Images Not Loading

**Symptom**: Product images show broken image icon

**Solutions**:
1. Verify images exist in WooCommerce
2. Check image URLs in browser console
3. Add image domains to `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['your-store.com'],
  },
}
```

### Cart Not Persisting

**Symptom**: Cart empties on page refresh

**Solutions**:
1. Clear browser cache
2. Check browser's local storage in DevTools
3. Disable privacy extensions that block local storage
4. Verify Zustand persist middleware is configured

### Build Errors

**Symptom**: `npm run build` fails

**Solutions**:
1. Delete `node_modules` and `.next`:
```bash
rm -rf node_modules .next
npm install
npm run build
```

2. Check Node.js version:
```bash
node --version  # Should be 18+
```

3. Clear npm cache:
```bash
npm cache clean --force
```

### SSL/HTTPS Issues

**Symptom**: API calls fail with SSL errors in development

**Solutions**:
1. For local development with self-signed certs, use HTTP
2. For production, always use HTTPS
3. Update `NEXT_PUBLIC_WC_STORE_URL` to match protocol

## Next Steps

After successful setup:

1. **Customize Styling**: Edit Tailwind classes in components
2. **Add Features**: Implement search, filters, user accounts
3. **Payment Integration**: Add Stripe or PayPal
4. **SEO Optimization**: Add meta tags, sitemaps
5. **Analytics**: Integrate Google Analytics or similar
6. **Testing**: Add Jest and Playwright tests

## Need Help?

- Check [WooCommerce REST API docs](https://woocommerce.github.io/woocommerce-rest-api-docs/)
- Review [Next.js documentation](https://nextjs.org/docs)
- Open an issue on GitHub
- Check the main README.md for architecture details
