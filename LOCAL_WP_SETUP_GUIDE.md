# Local WP Setup Guide - Step by Step

## 📥 STEP 1: Download Local WP (2 minutes)

### On Your Windows Machine:

1. **Open your Windows browser** (Chrome, Firefox, Edge)
   
2. **Visit:** https://localwp.com/
   
3. **Click the green "DOWNLOAD" button**
   
4. **Fill out the form** (or click "Or download without answering")
   
5. **Download the Windows installer** (local-x.x.x-windows.exe)
   
6. **Run the installer** - Double-click the downloaded file
   
7. **Follow installation wizard:**
   - Click "Next"
   - Accept the license
   - Choose install location (default is fine)
   - Click "Install"
   - Click "Finish"

8. **Launch Local WP** - It should open automatically, or find it in Start Menu

---

## 🌐 STEP 2: Create WordPress Site (3 minutes)

### In Local WP Application:

1. **Click the big "+" button** (bottom left corner)
   Or: Click "Create a new site"

2. **Choose site creation method:**
   - Select "Create a new site"
   - Click "Continue"

3. **Enter site details:**
   ```
   Site Name: woocommerce-demo
   ```
   - Click "Continue"

4. **Choose environment:**
   - Select "Preferred" (recommended)
   - This gives you the latest PHP, MySQL, and web server
   - Click "Continue"

5. **WordPress setup:**
   ```
   WordPress Username: admin
   WordPress Password: password
   WordPress Email: admin@local.test
   ```
   - **IMPORTANT:** Remember this password!
   - Click "Add Site"

6. **Wait for site creation** (2-3 minutes)
   - Local WP will download WordPress
   - Set up the database
   - Configure the web server
   - You'll see a progress bar

7. **Success!** You should see your new site in Local WP

---

## 🔌 STEP 3: Install WooCommerce (5 minutes)

### Open WordPress Admin:

1. **In Local WP, click the "WP Admin" button**
   - This opens WordPress admin in your browser
   - URL will be: http://woocommerce-demo.local/wp-admin

2. **Login with credentials from Step 2:**
   - Username: `admin`
   - Password: `password` (or what you chose)
   - Click "Log In"

### Install WooCommerce Plugin:

3. **In WordPress Admin sidebar:**
   - Hover over "Plugins"
   - Click "Add New Plugin"

4. **Search for WooCommerce:**
   - In the search box, type: `WooCommerce`
   - Find the official WooCommerce plugin (by Automattic)
   - Click "Install Now"

5. **Activate WooCommerce:**
   - Click "Activate" (appears after installation)
   - WooCommerce Setup Wizard will launch

### WooCommerce Setup Wizard:

6. **Store Details:**
   ```
   Country: United States
   Address: 123 Demo St
   City: San Francisco
   State: California
   Postcode: 94102
   ```
   - Click "Continue"

7. **Industry:**
   - Select "Other" or "Electronics" (doesn't matter for demo)
   - Click "Continue"

8. **Product Types:**
   - Check "Physical products"
   - Click "Continue"

9. **Business Details:**
   - Select "I'm just starting my business"
   - Number of products: "1-10"
   - Currently selling: "No"
   - Click "Continue"

10. **Themes:**
    - Click "Skip" (we don't need a theme for API)

11. **Jetpack/Extensions:**
    - Click "No thanks" or "Skip"

12. **Done!** WooCommerce is now installed!

---

## 📦 STEP 4: Add Sample Products (3 minutes)

### Option A: Import Sample Data (Recommended)

1. **In WordPress Admin:**
   - Go to "Tools" > "Import"

2. **Select WordPress:**
   - Click "Install Now" under "WordPress"
   - Click "Run Importer"

3. **Download Sample Data:**
   - Visit: https://github.com/woocommerce/woocommerce/raw/trunk/sample-data/sample_products.xml
   - Save this file to your Downloads folder

4. **Import the file:**
   - Click "Choose File"
   - Select the sample_products.xml file
   - Click "Upload file and import"
   - Select "Download and import file attachments"
   - Click "Submit"
   - Wait for import to complete

### Option B: Add Products Manually

1. **Go to Products > Add New**

2. **Add First Product:**
   ```
   Product Name: Wireless Headphones
   Price: $79.99
   Sale Price: $59.99
   Description: Premium wireless headphones with noise cancellation
   Stock: In stock
   ```
   - Click "Publish"

3. **Add More Products:**
   - Repeat for 3-5 different products
   - Give them different prices and names
   
4. **Verify Products:**
   - Go to "Products" > "All Products"
   - You should see your products listed

---

## 🔑 STEP 5: Generate API Credentials (2 minutes)

### In WordPress Admin:

1. **Navigate to API Settings:**
   - Click "WooCommerce" in sidebar
   - Click "Settings"
   - Click "Advanced" tab (at top)
   - Click "REST API" (sub-tab)

2. **Create API Key:**
   - Click "Add Key" button (top right)

3. **Fill in API Key Details:**
   ```
   Description: Headless Next.js Frontend
   User: admin (select from dropdown)
   Permissions: Read/Write (select from dropdown)
   ```
   - Click "Generate API Key"

4. **⚠️ COPY CREDENTIALS NOW! ⚠️**
   
   You'll see a screen with two keys:
   
   ```
   Consumer Key: ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   Consumer Secret: cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   
   **IMPORTANT:** Copy both of these keys NOW!
   You will NEVER see them again after leaving this page!
   
   Save them to:
   - Notepad
   - Password manager
   - Email draft
   - Anywhere safe!

---

## 🌐 STEP 6: Get Your Store URL

### In Local WP Application:

1. **Find your site URL:**
   - Look at the Local WP app
   - You'll see "Site Domain" listed
   - Should be: `http://woocommerce-demo.local`

2. **Test it:**
   - Open your Windows browser
   - Visit: http://woocommerce-demo.local
   - You should see your WordPress site!

3. **Test WooCommerce API:**
   - Open your browser
   - Visit: http://woocommerce-demo.local/wp-json/wc/v3/products?consumer_key=YOUR_KEY&consumer_secret=YOUR_SECRET
   - Replace YOUR_KEY and YOUR_SECRET with your actual keys
   - You should see JSON product data!

---

## 💻 STEP 7: Update Your Next.js App

### Back in WSL2:

Now we need to tell your Next.js app how to connect to WooCommerce.

I'll help you update the .env.local file with your credentials.

**Tell me when you have:**
1. ✅ Local WP installed
2. ✅ WordPress created
3. ✅ WooCommerce installed
4. ✅ Products added
5. ✅ API keys copied

**Then provide me:**
- Your Consumer Key (starts with ck_)
- Your Consumer Secret (starts with cs_)
- Your Site URL (probably http://woocommerce-demo.local)

And I'll update your configuration automatically!

---

## 🆘 Troubleshooting

### "Can't access http://woocommerce-demo.local"

**Solution:**
1. Make sure Local WP site is "Started" (green indicator)
2. Click "Start site" button in Local WP if needed
3. Try accessing from Windows browser (not WSL)

### "WooCommerce not showing in plugins"

**Solution:**
1. Go to Plugins > Add New
2. Search "WooCommerce"
3. Look for plugin by "Automattic"
4. Install and activate

### "Can't generate API key"

**Solution:**
1. Make sure you're logged in as admin
2. Go to WooCommerce > Settings > Advanced > REST API
3. User must be administrator level

### "Products not showing"

**Solution:**
1. Go to Products > All Products
2. Make sure status is "Published" (not Draft)
3. Check stock status is "In stock"

---

## 🎯 Quick Reference

**WordPress Admin:**
- URL: http://woocommerce-demo.local/wp-admin
- Username: admin
- Password: (what you set in Step 2)

**Site URL:**
- http://woocommerce-demo.local

**What You Need for Next.js:**
1. NEXT_PUBLIC_WC_STORE_URL: http://woocommerce-demo.local
2. WC_CONSUMER_KEY: ck_xxxxxxxxxx
3. WC_CONSUMER_SECRET: cs_xxxxxxxxxx

---

**Let me know when you're done with these steps and I'll help you connect everything!**

