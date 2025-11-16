# Adding Demo Blog Posts and Products

Quick guide to populate your headless WooCommerce demo with sample content.

---

## ⚡ Quick Method: Automated Seeding (Recommended)

**The fastest way to add demo content!**

### Prerequisites:
1. Local WP site must be running (start via Local WP app)
2. WooCommerce API credentials configured in `.env.local`

### Run the Seed Script:

```bash
# Make sure your Local WP site is running first!
node scripts/seed-demo-data.js
```

This script will automatically create:
- **8 Demo Products** with full details, pricing, and categories
- **5 Blog Posts** with rich content and featured images

The script uses the WooCommerce and WordPress REST APIs to programmatically populate your site. No manual work required!

### What Gets Created:

**Products:**
1. Premium Wireless Headphones ($149.99, sale: $119.99)
2. Classic Cotton T-Shirt ($29.99)
3. Professional Camera Lens ($399.99, sale: $349.99)
4. Genuine Leather Wallet ($79.99)
5. Smart Watch Pro ($299.99, sale: $249.99)
6. Bluetooth Speaker ($89.99)
7. Running Shoes ($129.99)
8. Laptop Backpack ($59.99)

**Blog Posts:**
1. Welcome to Our Store Blog
2. 5 Tips for Choosing Wireless Headphones
3. Behind the Scenes: How We Source Products
4. How to Care for Your Leather Wallet
5. Introducing the Smart Watch Pro

### Troubleshooting:

If the script fails:
1. Ensure Local WP site is running
2. Check `.env.local` has correct credentials
3. Visit http://headless-wc-demo.local/wp-admin to verify WooCommerce is active
4. Make sure REST API is enabled in WooCommerce settings

---

## 🛍️ Manual Method: Adding Demo Products via WordPress Admin

### Method 1: Via WordPress Admin (Recommended)

1. **Open WooCommerce Admin:**
   - Visit: http://headless-wc-demo.local/wp-admin
   - Login with your credentials (admin/password)

2. **Add a Product:**
   - Go to **Products > Add New**

3. **Fill in Product Details:**

#### Product 1: Premium Wireless Headphones
```
Product Name: Premium Wireless Headphones
Regular Price: 149.99
Sale Price: 119.99
Description: 
Experience crystal-clear audio with our premium wireless headphones. 
Features active noise cancellation, 30-hour battery life, and comfortable 
over-ear design perfect for music lovers and professionals.

Short Description:
Premium wireless headphones with noise cancellation and 30-hour battery.

Categories: Electronics, Audio
Tags: wireless, headphones, audio, premium
Stock: In stock
SKU: WH-001
```

#### Product 2: Classic Cotton T-Shirt
```
Product Name: Classic Cotton T-Shirt
Regular Price: 29.99
Sale Price: (leave empty - not on sale)
Description:
Made from 100% organic cotton, this classic t-shirt is perfect for 
everyday wear. Soft, breathable, and available in multiple colors. 
Pre-shrunk for the perfect fit that lasts.

Short Description:
100% organic cotton t-shirt. Soft, breathable, and comfortable.

Categories: Clothing, Shirts
Tags: cotton, t-shirt, casual, organic
Stock: In stock
SKU: TS-001
```

#### Product 3: Professional Camera Lens
```
Product Name: Professional Camera Lens 50mm f/1.8
Regular Price: 399.99
Sale Price: 349.99
Description:
Capture stunning photos with this professional-grade 50mm prime lens. 
Features fast f/1.8 aperture for beautiful bokeh, perfect for portraits, 
street photography, and low-light situations.

Short Description:
Professional 50mm f/1.8 lens for stunning portraits and low-light photography.

Categories: Electronics, Photography
Tags: camera, lens, photography, professional
Stock: In stock
SKU: CL-501
```

#### Product 4: Leather Wallet
```
Product Name: Genuine Leather Wallet
Regular Price: 79.99
Sale Price: (leave empty)
Description:
Handcrafted from premium full-grain leather, this wallet ages beautifully. 
Features 8 card slots, 2 bill compartments, and RFID protection to keep 
your cards safe. Slim design fits comfortably in your pocket.

Short Description:
Premium leather wallet with RFID protection and slim design.

Categories: Accessories, Wallets
Tags: leather, wallet, accessories, premium
Stock: In stock
SKU: LW-001
```

#### Product 5: Smart Watch Pro
```
Product Name: Smart Watch Pro
Regular Price: 299.99
Sale Price: 249.99
Description:
Stay connected and track your fitness with the Smart Watch Pro. 
Features heart rate monitoring, GPS tracking, sleep analysis, 
and 5-day battery life. Water-resistant up to 50m.

Short Description:
Advanced smartwatch with fitness tracking and 5-day battery life.

Categories: Electronics, Wearables
Tags: smartwatch, fitness, tech, wearable
Stock: In stock
SKU: SW-001
```

4. **Add Product Images:**
   - Click "Set product image"
   - Upload or select from media library
   - For demo, you can use:
     - Stock photos from https://unsplash.com
     - Placeholder images from https://placehold.co/600x600

5. **Publish:**
   - Click "Publish" button
   - Repeat for 5-10 products

### Method 2: Quick Import Sample Data

WooCommerce provides sample products:

1. Go to **Tools > Import**
2. Select **WordPress**
3. Install importer if needed
4. Download sample data: https://github.com/woocommerce/woocommerce/raw/trunk/sample-data/sample_products.xml
5. Import the file

---

## 📝 Adding Demo Blog Posts

### Blog Post 1: Welcome Post

1. **Go to Posts > Add New**

2. **Fill in details:**
```
Title: Welcome to Our Store Blog

Content:
Welcome to our brand new blog! We're excited to share news, tips, and 
updates about our products and the industry.

In this blog, you'll find:
- Product announcements and launches
- How-to guides and tutorials
- Industry news and trends
- Customer stories and testimonials
- Behind-the-scenes content

We're committed to bringing you valuable content that helps you make 
the most of our products. Stay tuned for regular updates!

Don't forget to subscribe to our newsletter to get the latest posts 
delivered directly to your inbox.

Category: News, Announcements
Tags: welcome, blog, announcement
Featured Image: Upload a welcoming image
```

### Blog Post 2: Product Guide

```
Title: 5 Tips for Choosing the Perfect Wireless Headphones

Content:
Shopping for wireless headphones can be overwhelming with so many 
options available. Here are our top 5 tips to help you find the 
perfect pair:

## 1. Consider Your Use Case
Are you using them for commuting, working out, or studio work? 
Different activities require different features.

## 2. Check Battery Life
Look for headphones with at least 20-30 hours of battery life 
for all-day use without charging.

## 3. Noise Cancellation Matters
Active noise cancellation (ANC) is essential for blocking out 
ambient noise in busy environments.

## 4. Comfort is Key
Make sure the headphones have cushioned ear cups and an adjustable 
headband for long listening sessions.

## 5. Sound Quality
Don't compromise on audio quality. Look for balanced sound with 
clear highs, mids, and deep bass.

Ready to upgrade your audio experience? Check out our Premium 
Wireless Headphones for the perfect combination of all these features.

Category: Guides, Products
Tags: headphones, audio, buying-guide, tips
Featured Image: Image of headphones
```

### Blog Post 3: Behind the Scenes

```
Title: Behind the Scenes: How We Source Our Products

Content:
Ever wondered how we select the products in our store? Today we're 
taking you behind the scenes to show our curation process.

## Quality First
Every product in our store goes through rigorous testing. We 
personally test each item before adding it to our catalog.

## Sustainable Sourcing
We partner with manufacturers who share our commitment to 
sustainability and ethical production practices.

## Customer Feedback
Your reviews and feedback directly influence our product selection. 
We listen to what you want and need.

## The Selection Process
1. Research market trends and customer requests
2. Contact and vet potential suppliers
3. Order samples for testing
4. Evaluate quality, durability, and value
5. Only the best make it to our store

We're proud of every product we offer and stand behind each one 
with our satisfaction guarantee.

Category: Company, Behind the Scenes
Tags: company, products, quality, sourcing
Featured Image: Office or warehouse photo
```

### Blog Post 4: How-To Guide

```
Title: How to Care for Your Leather Wallet: A Complete Guide

Content:
A quality leather wallet is an investment that can last for years 
with proper care. Follow these tips to keep your wallet looking great:

## Regular Cleaning
- Wipe with a soft, dry cloth weekly
- Use leather cleaner monthly for deep cleaning
- Never use harsh chemicals or alcohol

## Conditioning
- Apply leather conditioner every 3-6 months
- This prevents cracking and keeps leather supple
- Use products specifically designed for leather

## Storage Tips
- Keep in a cool, dry place
- Avoid extreme temperatures
- Don't overstuff your wallet

## Dealing with Stains
- Act quickly on spills
- Blot (don't rub) stains gently
- Use specialized leather stain removers

## Breaking In Your Wallet
New leather wallets need time to break in. Use it regularly for 
2-3 weeks, and it will mold to your items and become more comfortable.

With proper care, your leather wallet will develop a beautiful 
patina and serve you well for many years.

Category: Guides, Care & Maintenance
Tags: leather, wallet, care, maintenance, how-to
Featured Image: Leather wallet care products
```

### Blog Post 5: Product Announcement

```
Title: Introducing the Smart Watch Pro: Your New Fitness Companion

Content:
We're thrilled to announce the arrival of the Smart Watch Pro to 
our collection! This isn't just another smartwatch – it's your 
complete health and fitness companion.

## Key Features

### Advanced Health Tracking
- Continuous heart rate monitoring
- Blood oxygen level measurement
- Sleep quality analysis
- Stress level tracking

### Fitness Made Easy
- 50+ workout modes
- Built-in GPS for accurate tracking
- Water-resistant up to 50m
- Automatic workout detection

### Stay Connected
- Call and message notifications
- Music control
- Weather updates
- Calendar reminders

### Long Battery Life
Up to 5 days on a single charge means less time charging and 
more time doing what you love.

## Special Launch Offer
For a limited time, get the Smart Watch Pro at $249.99 – 
that's $50 off the regular price!

Perfect for fitness enthusiasts, busy professionals, and anyone 
who wants to take control of their health.

Order yours today and start your journey to better health!

Category: Products, Announcements
Tags: smartwatch, fitness, health, new-product, announcement
Featured Image: Smart Watch Pro product photo
```

---

## 🎨 Adding Featured Images

### Free Stock Photo Resources:

1. **Unsplash**: https://unsplash.com
   - High-quality, free photos
   - Search for: headphones, t-shirt, camera, wallet, smartwatch

2. **Pexels**: https://pexels.com
   - Free stock photos and videos
   - Great for lifestyle and product shots

3. **Pixabay**: https://pixabay.com
   - Free images and videos
   - Large collection

### How to Add Featured Images:

1. Download images from stock sites
2. In WordPress post/product editor
3. Click "Set featured image" (right sidebar)
4. Upload image
5. Set as featured image

---

## ✅ Quick Checklist

### Products:
- [ ] Add 5-10 products minimum
- [ ] Set prices and sale prices
- [ ] Add product descriptions
- [ ] Upload product images
- [ ] Assign categories
- [ ] Add tags
- [ ] Set stock status

### Blog Posts:
- [ ] Add 5-10 blog posts
- [ ] Write engaging content
- [ ] Add featured images
- [ ] Assign categories
- [ ] Add relevant tags
- [ ] Publish posts

---

## 🚀 After Adding Content

1. **Visit your site:**
   - Local: http://localhost:3000
   - Production: Your Vercel URL

2. **Test features:**
   - Browse products on homepage
   - Try the search function
   - Read blog posts at /blog
   - Add products to cart
   - Test checkout flow

3. **Refresh Vercel:**
   - Content is pulled from WooCommerce API
   - May take 60 seconds to update (cache)
   - Hard refresh browser if needed (Ctrl+F5)

---

## 💡 Pro Tips

1. **Write realistic descriptions** - Makes the demo more convincing
2. **Use high-quality images** - Professional photos make a huge difference
3. **Vary your prices** - Mix of budget and premium items
4. **Create product variations** - If needed (sizes, colors)
5. **Interlink content** - Reference products in blog posts
6. **Use real categories** - Electronics, Clothing, Accessories, etc.
7. **Add variety** - Different types of products appeal to different people

---

## 🎯 Recommended Starter Content

### Products (10 items minimum):
1. Premium Wireless Headphones - $149.99 (sale: $119.99)
2. Classic Cotton T-Shirt - $29.99
3. Professional Camera Lens - $399.99 (sale: $349.99)
4. Genuine Leather Wallet - $79.99
5. Smart Watch Pro - $299.99 (sale: $249.99)
6. Bluetooth Speaker - $89.99
7. Running Shoes - $129.99
8. Laptop Backpack - $59.99
9. Sunglasses - $149.99
10. Portable Charger - $39.99

### Blog Posts (5-7 posts):
1. Welcome to Our Store Blog
2. 5 Tips for Choosing Wireless Headphones
3. Behind the Scenes: How We Source Products
4. How to Care for Your Leather Wallet
5. Introducing the Smart Watch Pro
6. Top 10 Must-Have Tech Accessories
7. Summer Fashion Trends 2025

---

**Need help?** Just ask! I can provide more content ideas or help with 
WordPress configuration.

