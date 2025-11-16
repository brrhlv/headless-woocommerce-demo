# Configure WordPress URL in Vercel

The API endpoints are deployed but need your WordPress site URL to connect.

## 🔧 Quick Fix

### Step 1: Get Your WordPress Site URL

What is your WordPress site URL? For example:
- `https://yoursite.com`
- `https://synthesispeptides.io`
- `https://your-domain.wpengine.com`

### Step 2: Set Environment Variable in Vercel

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to: https://vercel.com/dashboard
2. Click your project: **headless-woocommerce-demo**
3. Click **Settings** tab
4. Click **Environment Variables** in sidebar
5. Add new variable:
   - **Key:** `NEXT_PUBLIC_WC_STORE_URL`
   - **Value:** `https://your-wordpress-site.com` (your actual URL)
   - **Environments:** Check all three (Production, Preview, Development)
6. Click **Save**
7. **Redeploy:** Go to Deployments → latest deployment → ⋯ → Redeploy

#### Option B: Via Vercel CLI

```bash
# Set the environment variable
npx vercel env add NEXT_PUBLIC_WC_STORE_URL

# When prompted, enter your WordPress URL
# Example: https://synthesispeptides.io

# Redeploy
npx vercel --prod
```

### Step 3: Wait for Redeployment (~2 minutes)

Vercel will rebuild with the new environment variable.

### Step 4: Test Again

```bash
# Test the API
curl https://headless-woocommerce-demo.vercel.app/api/posts

# Create demo content
node scripts/create-demo-content.js
```

## 📝 Current Configuration

Your local `.env.local` has:
```
NEXT_PUBLIC_WC_STORE_URL=http://localhost:10005
```

This works locally but Vercel needs the actual WordPress URL.

## ✅ What You Need

- **WordPress URL:** The public URL of your WordPress site
- **WooCommerce Keys:** Already set (if you have them)
  - `WC_CONSUMER_KEY`
  - `WC_CONSUMER_SECRET`

## 🔍 Finding Your WordPress URL

If you're not sure what your WordPress URL is:

1. **Check your WordPress admin:** Usually shown in Settings → General
2. **Check your hosting:** Look in your hosting control panel
3. **Test accessibility:** Try accessing `https://your-site.com/wp-admin`

## ⚡ Quick Commands

After setting the variable in Vercel:

```bash
# Test if WordPress is accessible
curl https://your-wordpress-site.com/wp-json/wp/v2/posts

# Test your deployed API
curl https://headless-woocommerce-demo.vercel.app/api/posts

# Create demo content
node scripts/create-demo-content.js
```

## 🆘 Still Having Issues?

### Issue: "Failed to fetch posts"

**Check:**
1. WordPress URL is correct in Vercel
2. WordPress site is accessible publicly
3. WordPress REST API is enabled
4. No firewall blocking REST API

**Test WordPress directly:**
```bash
curl https://your-wordpress-site.com/wp-json/wp/v2/posts
```

Should return JSON with posts (or empty array if no posts exist).

### Issue: "401 Unauthorized"

**Check:**
1. Application Password is correct
2. Username is correct
3. User has Editor or Administrator role

**Test WordPress auth:**
```bash
curl -u "admin:V4jQ F1Yv J0In Ll4u bUao ckIc" \
  https://your-wordpress-site.com/wp-json/wp/v2/users/me
```

Should return your user information.

## 📋 Complete Environment Variables Checklist

In Vercel, you should have:

- ✅ `NEXT_PUBLIC_WC_STORE_URL` - Your WordPress URL
- ✅ `WC_CONSUMER_KEY` - WooCommerce consumer key (if using products)
- ✅ `WC_CONSUMER_SECRET` - WooCommerce secret (if using products)

**Note:** WordPress Application Password is NOT stored in environment variables - it's passed in API request headers.

## 🎯 Next Steps

1. Set `NEXT_PUBLIC_WC_STORE_URL` in Vercel
2. Redeploy
3. Wait 2-3 minutes
4. Run `node scripts/create-demo-content.js`
5. Visit https://headless-woocommerce-demo.vercel.app/blog

---

**Need help?** Let me know your WordPress URL and I can help you set it up!
