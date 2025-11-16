# Running the Seed Script from Windows

Since Local WP runs on Windows and WSL can't directly access `localhost:10005`, you need to run the seeding script from Windows.

## Option 1: Using PowerShell (Recommended)

1. **Open PowerShell** in Windows

2. **Navigate to your project directory:**
   ```powershell
   cd C:\path\to\headless-woocommerce-demo
   ```

3. **Run the seed script:**
   ```powershell
   node scripts/seed-demo-data.js
   ```

## Option 2: Using Windows Terminal with Node.js

1. **Open Windows Terminal** or **Command Prompt**

2. **Navigate to project:**
   ```cmd
   cd C:\path\to\headless-woocommerce-demo
   ```

3. **Run the script:**
   ```cmd
   node scripts\seed-demo-data.js
   ```

## Option 3: Configure Local WP for WSL Access

If you want to run the script from WSL, you need to configure Local WP to accept connections from WSL:

1. In **Local WP**, right-click your site → **Go to Site Folder**
2. Open `conf/nginx/site.conf`
3. Change the `listen` directive from:
   ```nginx
   listen 127.0.0.1:10005;
   ```
   To:
   ```nginx
   listen 0.0.0.0:10005;
   ```
4. Restart the site in Local WP
5. Then run from WSL: `node scripts/seed-demo-data.js`

## What the Script Will Create

- **8 Demo Products** with pricing, descriptions, and categories
- **5 Blog Posts** with rich HTML content
- All content will be immediately available at `http://localhost:10005`

## After Running

Once the script completes successfully, you can:
1. Visit `http://localhost:10005/wp-admin` to see the products in WooCommerce
2. Visit `http://localhost:3000` to see them in your Next.js frontend
3. The frontend will automatically fetch the new content from the WooCommerce API
