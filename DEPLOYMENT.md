# Deployment Guide

This guide covers deploying your headless WooCommerce demo with the new Content Management API to Vercel.

## Quick Deploy

### Option 1: Deploy via Git (Recommended)

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add Content Management API for posts, pages, and media"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Vercel will auto-deploy** (if connected to your repo)
   - Check: https://vercel.com/dashboard
   - Your site will rebuild automatically

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   npx vercel login
   ```

3. **Deploy:**
   ```bash
   npx vercel --prod
   ```

## Environment Variables

Make sure these are set in Vercel:

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add/verify:
   ```
   NEXT_PUBLIC_WC_STORE_URL=https://your-wordpress-site.com
   WC_CONSUMER_KEY=ck_xxxxxxxxxxxxx
   WC_CONSUMER_SECRET=cs_xxxxxxxxxxxxx
   ```

**Note:** WordPress Application Passwords are NOT stored as environment variables. They're passed in API request headers.

## After Deployment

### 1. Verify Deployment

Check that your site is live:
```bash
curl https://headless-woocommerce-demo.vercel.app/
```

### 2. Test API Endpoints

```bash
# Test listing posts
curl https://headless-woocommerce-demo.vercel.app/api/posts

# Test creating a post (use your credentials from CREDENTIALS.md)
curl -X POST https://headless-woocommerce-demo.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM=" \
  -d '{
    "title": "First Post via API",
    "content": "<p>This works!</p>",
    "status": "draft"
  }'
```

### 3. Run Test Scripts

Update the test scripts with your deployed URL, then run:

```bash
# Bash test
./test-api.sh

# Node.js test
node test-api-simple.js
```

## What's New in This Deployment

### New API Routes Added

- `/api/posts` - Blog post CRUD
- `/api/posts/[id]` - Individual post operations
- `/api/pages` - Page CRUD
- `/api/pages/[id]` - Individual page operations
- `/api/media` - Media upload/management
- `/api/media/[id]` - Individual media operations

### New Documentation

- `CONTENT_MANAGEMENT_API.md` - Complete API documentation
- `API_QUICK_REFERENCE.md` - Quick reference
- `WORDPRESS_APPLICATION_PASSWORDS_SETUP.md` - Auth setup guide
- `CREDENTIALS.md` - Your saved credentials (not in Git)
- `DEPLOYMENT.md` - This file

## Troubleshooting

### API Returns 404

**Issue:** New API routes not found

**Solution:**
- Ensure code is deployed: `git push` then check Vercel dashboard
- Verify build succeeded
- Clear Vercel cache: Settings → General → Clear Build Cache

### API Returns 500

**Issue:** WordPress connection failing

**Solution:**
- Check `NEXT_PUBLIC_WC_STORE_URL` is correct in Vercel
- Verify WordPress site is accessible
- Check WordPress REST API is enabled

### Authentication Fails (401)

**Issue:** WordPress rejecting credentials

**Solution:**
- Verify Application Password is correct
- Test credentials directly against WordPress:
  ```bash
  curl -u "admin:V4jQ F1Yv J0In Ll4u bUao ckIc" \
    https://your-wordpress-site.com/wp-json/wp/v2/users/me
  ```
- Check user has Editor or Administrator role

## Build Time

Typical build times:
- Initial build: ~2-3 minutes
- Subsequent builds: ~30-60 seconds

## Monitoring Deployment

Watch real-time logs in Vercel:
1. Go to: https://vercel.com/dashboard
2. Click your project
3. Click latest deployment
4. View **Build Logs** and **Runtime Logs**

## Rollback (if needed)

If something goes wrong:

1. Go to Vercel Dashboard
2. Click **Deployments**
3. Find previous working deployment
4. Click **⋯** → **Promote to Production**

## Next Steps After Deployment

1. ✅ Test all API endpoints
2. ✅ Create your first post via API
3. ✅ Build content creation workflows
4. ✅ Set up automated publishing (optional)
5. ✅ Create custom admin UI (optional)

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- Check logs for errors
- Review `CONTENT_MANAGEMENT_API.md` for API issues

---

**Ready to deploy?** Run `git push` or `npx vercel --prod`!
