#!/usr/bin/env node

/**
 * Seed Demo Data Script
 *
 * This script creates demo products and blog posts in your WordPress/WooCommerce site
 * using the REST API.
 *
 * Usage: node scripts/seed-demo-data.js
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const axios = require('axios');

// Configuration from .env.local
const WP_URL = process.env.NEXT_PUBLIC_WC_STORE_URL || 'http://headless-wc-demo.local';
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET;

// Demo Products Data
const demoProducts = [
  {
    name: 'Premium Wireless Headphones',
    type: 'simple',
    regular_price: '149.99',
    sale_price: '119.99',
    description: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.',
    short_description: 'Premium wireless headphones with noise cancellation and 30-hour battery.',
    categories: [{ name: 'Electronics' }, { name: 'Audio' }],
    tags: [{ name: 'wireless' }, { name: 'headphones' }, { name: 'audio' }, { name: 'premium' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 50,
    sku: 'WH-001',
  },
  {
    name: 'Classic Cotton T-Shirt',
    type: 'simple',
    regular_price: '29.99',
    description: 'Made from 100% organic cotton, this classic t-shirt is perfect for everyday wear. Soft, breathable, and available in multiple colors. Pre-shrunk for the perfect fit that lasts.',
    short_description: '100% organic cotton t-shirt. Soft, breathable, and comfortable.',
    categories: [{ name: 'Clothing' }, { name: 'Shirts' }],
    tags: [{ name: 'cotton' }, { name: 't-shirt' }, { name: 'casual' }, { name: 'organic' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 100,
    sku: 'TS-001',
  },
  {
    name: 'Professional Camera Lens 50mm f/1.8',
    type: 'simple',
    regular_price: '399.99',
    sale_price: '349.99',
    description: 'Capture stunning photos with this professional-grade 50mm prime lens. Features fast f/1.8 aperture for beautiful bokeh, perfect for portraits, street photography, and low-light situations.',
    short_description: 'Professional 50mm f/1.8 lens for stunning portraits and low-light photography.',
    categories: [{ name: 'Electronics' }, { name: 'Photography' }],
    tags: [{ name: 'camera' }, { name: 'lens' }, { name: 'photography' }, { name: 'professional' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 25,
    sku: 'CL-501',
  },
  {
    name: 'Genuine Leather Wallet',
    type: 'simple',
    regular_price: '79.99',
    description: 'Handcrafted from premium full-grain leather, this wallet ages beautifully. Features 8 card slots, 2 bill compartments, and RFID protection to keep your cards safe. Slim design fits comfortably in your pocket.',
    short_description: 'Premium leather wallet with RFID protection and slim design.',
    categories: [{ name: 'Accessories' }, { name: 'Wallets' }],
    tags: [{ name: 'leather' }, { name: 'wallet' }, { name: 'accessories' }, { name: 'premium' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 40,
    sku: 'LW-001',
  },
  {
    name: 'Smart Watch Pro',
    type: 'simple',
    regular_price: '299.99',
    sale_price: '249.99',
    description: 'Stay connected and track your fitness with the Smart Watch Pro. Features heart rate monitoring, GPS tracking, sleep analysis, and 5-day battery life. Water-resistant up to 50m.',
    short_description: 'Advanced smartwatch with fitness tracking and 5-day battery life.',
    categories: [{ name: 'Electronics' }, { name: 'Wearables' }],
    tags: [{ name: 'smartwatch' }, { name: 'fitness' }, { name: 'tech' }, { name: 'wearable' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 30,
    sku: 'SW-001',
  },
  {
    name: 'Bluetooth Speaker',
    type: 'simple',
    regular_price: '89.99',
    description: 'Portable Bluetooth speaker with 360-degree sound, 12-hour battery life, and waterproof design. Perfect for outdoor adventures and pool parties.',
    short_description: 'Waterproof Bluetooth speaker with 360-degree sound.',
    categories: [{ name: 'Electronics' }, { name: 'Audio' }],
    tags: [{ name: 'bluetooth' }, { name: 'speaker' }, { name: 'portable' }, { name: 'waterproof' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 60,
    sku: 'BS-001',
  },
  {
    name: 'Running Shoes',
    type: 'simple',
    regular_price: '129.99',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance on every run.',
    short_description: 'Lightweight, comfortable running shoes with responsive cushioning.',
    categories: [{ name: 'Clothing' }, { name: 'Shoes' }],
    tags: [{ name: 'running' }, { name: 'shoes' }, { name: 'athletic' }, { name: 'fitness' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 75,
    sku: 'RS-001',
  },
  {
    name: 'Laptop Backpack',
    type: 'simple',
    regular_price: '59.99',
    description: 'Durable laptop backpack with padded compartment for 15-inch laptops, multiple pockets, and USB charging port. Water-resistant material keeps your gear safe.',
    short_description: 'Durable laptop backpack with USB charging port.',
    categories: [{ name: 'Accessories' }, { name: 'Bags' }],
    tags: [{ name: 'backpack' }, { name: 'laptop' }, { name: 'travel' }, { name: 'tech' }],
    stock_status: 'instock',
    manage_stock: true,
    stock_quantity: 45,
    sku: 'LB-001',
  },
];

// Demo Blog Posts Data
const demoPosts = [
  {
    title: 'Welcome to Our Store Blog',
    content: `<p>Welcome to our brand new blog! We're excited to share news, tips, and updates about our products and the industry.</p>

<p>In this blog, you'll find:</p>
<ul>
<li>Product announcements and launches</li>
<li>How-to guides and tutorials</li>
<li>Industry news and trends</li>
<li>Customer stories and testimonials</li>
<li>Behind-the-scenes content</li>
</ul>

<p>We're committed to bringing you valuable content that helps you make the most of our products. Stay tuned for regular updates!</p>

<p>Don't forget to subscribe to our newsletter to get the latest posts delivered directly to your inbox.</p>`,
    excerpt: 'Welcome to our brand new blog! We\'re excited to share news, tips, and updates about our products.',
    status: 'publish',
    categories: [{ name: 'News' }, { name: 'Announcements' }],
    tags: [{ name: 'welcome' }, { name: 'blog' }, { name: 'announcement' }],
  },
  {
    title: '5 Tips for Choosing the Perfect Wireless Headphones',
    content: `<p>Shopping for wireless headphones can be overwhelming with so many options available. Here are our top 5 tips to help you find the perfect pair:</p>

<h2>1. Consider Your Use Case</h2>
<p>Are you using them for commuting, working out, or studio work? Different activities require different features.</p>

<h2>2. Check Battery Life</h2>
<p>Look for headphones with at least 20-30 hours of battery life for all-day use without charging.</p>

<h2>3. Noise Cancellation Matters</h2>
<p>Active noise cancellation (ANC) is essential for blocking out ambient noise in busy environments.</p>

<h2>4. Comfort is Key</h2>
<p>Make sure the headphones have cushioned ear cups and an adjustable headband for long listening sessions.</p>

<h2>5. Sound Quality</h2>
<p>Don't compromise on audio quality. Look for balanced sound with clear highs, mids, and deep bass.</p>

<p>Ready to upgrade your audio experience? Check out our Premium Wireless Headphones for the perfect combination of all these features.</p>`,
    excerpt: 'Shopping for wireless headphones? Here are our top 5 tips to help you find the perfect pair.',
    status: 'publish',
    categories: [{ name: 'Guides' }, { name: 'Products' }],
    tags: [{ name: 'headphones' }, { name: 'audio' }, { name: 'buying-guide' }, { name: 'tips' }],
  },
  {
    title: 'Behind the Scenes: How We Source Our Products',
    content: `<p>Ever wondered how we select the products in our store? Today we're taking you behind the scenes to show our curation process.</p>

<h2>Quality First</h2>
<p>Every product in our store goes through rigorous testing. We personally test each item before adding it to our catalog.</p>

<h2>Sustainable Sourcing</h2>
<p>We partner with manufacturers who share our commitment to sustainability and ethical production practices.</p>

<h2>Customer Feedback</h2>
<p>Your reviews and feedback directly influence our product selection. We listen to what you want and need.</p>

<h2>The Selection Process</h2>
<ol>
<li>Research market trends and customer requests</li>
<li>Contact and vet potential suppliers</li>
<li>Order samples for testing</li>
<li>Evaluate quality, durability, and value</li>
<li>Only the best make it to our store</li>
</ol>

<p>We're proud of every product we offer and stand behind each one with our satisfaction guarantee.</p>`,
    excerpt: 'Ever wondered how we select products? Here\'s a behind-the-scenes look at our curation process.',
    status: 'publish',
    categories: [{ name: 'Company' }],
    tags: [{ name: 'company' }, { name: 'products' }, { name: 'quality' }, { name: 'sourcing' }],
  },
  {
    title: 'How to Care for Your Leather Wallet: A Complete Guide',
    content: `<p>A quality leather wallet is an investment that can last for years with proper care. Follow these tips to keep your wallet looking great:</p>

<h2>Regular Cleaning</h2>
<ul>
<li>Wipe with a soft, dry cloth weekly</li>
<li>Use leather cleaner monthly for deep cleaning</li>
<li>Never use harsh chemicals or alcohol</li>
</ul>

<h2>Conditioning</h2>
<ul>
<li>Apply leather conditioner every 3-6 months</li>
<li>This prevents cracking and keeps leather supple</li>
<li>Use products specifically designed for leather</li>
</ul>

<h2>Storage Tips</h2>
<ul>
<li>Keep in a cool, dry place</li>
<li>Avoid extreme temperatures</li>
<li>Don't overstuff your wallet</li>
</ul>

<h2>Breaking In Your Wallet</h2>
<p>New leather wallets need time to break in. Use it regularly for 2-3 weeks, and it will mold to your items and become more comfortable.</p>

<p>With proper care, your leather wallet will develop a beautiful patina and serve you well for many years.</p>`,
    excerpt: 'Learn how to care for your leather wallet and make it last for years with our complete care guide.',
    status: 'publish',
    categories: [{ name: 'Guides' }],
    tags: [{ name: 'leather' }, { name: 'wallet' }, { name: 'care' }, { name: 'maintenance' }, { name: 'how-to' }],
  },
  {
    title: 'Introducing the Smart Watch Pro: Your New Fitness Companion',
    content: `<p>We're thrilled to announce the arrival of the Smart Watch Pro to our collection! This isn't just another smartwatch – it's your complete health and fitness companion.</p>

<h2>Key Features</h2>

<h3>Advanced Health Tracking</h3>
<ul>
<li>Continuous heart rate monitoring</li>
<li>Blood oxygen level measurement</li>
<li>Sleep quality analysis</li>
<li>Stress level tracking</li>
</ul>

<h3>Fitness Made Easy</h3>
<ul>
<li>50+ workout modes</li>
<li>Built-in GPS for accurate tracking</li>
<li>Water-resistant up to 50m</li>
<li>Automatic workout detection</li>
</ul>

<h3>Long Battery Life</h3>
<p>Up to 5 days on a single charge means less time charging and more time doing what you love.</p>

<h2>Special Launch Offer</h2>
<p>For a limited time, get the Smart Watch Pro at $249.99 – that's $50 off the regular price!</p>

<p>Perfect for fitness enthusiasts, busy professionals, and anyone who wants to take control of their health.</p>`,
    excerpt: 'Introducing the Smart Watch Pro - your complete health and fitness companion with advanced tracking features.',
    status: 'publish',
    categories: [{ name: 'Products' }, { name: 'Announcements' }],
    tags: [{ name: 'smartwatch' }, { name: 'fitness' }, { name: 'health' }, { name: 'new-product' }],
  },
];

// Helper function to create or get category
async function getOrCreateCategory(name, taxonomy = 'product_cat') {
  try {
    const endpoint = taxonomy === 'product_cat' ? 'products/categories' : 'categories';

    // Try to find existing category
    const response = await axios.get(`${WP_URL}/wp-json/wc/v3/${endpoint}`, {
      params: {
        search: name,
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
      },
    });

    if (response.data.length > 0) {
      return response.data[0].id;
    }

    // Create new category
    const createResponse = await axios.post(
      `${WP_URL}/wp-json/wc/v3/${endpoint}`,
      { name },
      {
        params: {
          consumer_key: CONSUMER_KEY,
          consumer_secret: CONSUMER_SECRET,
        },
      }
    );

    return createResponse.data.id;
  } catch (error) {
    console.error(`Error with category "${name}":`, error.message);
    return null;
  }
}

// Helper function to create or get tag
async function getOrCreateTag(name, taxonomy = 'product_tag') {
  try {
    const endpoint = taxonomy === 'product_tag' ? 'products/tags' : 'tags';

    // Try to find existing tag
    const response = await axios.get(`${WP_URL}/wp-json/wc/v3/${endpoint}`, {
      params: {
        search: name,
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
      },
    });

    if (response.data.length > 0) {
      return response.data[0].id;
    }

    // Create new tag
    const createResponse = await axios.post(
      `${WP_URL}/wp-json/wc/v3/${endpoint}`,
      { name },
      {
        params: {
          consumer_key: CONSUMER_KEY,
          consumer_secret: CONSUMER_SECRET,
        },
      }
    );

    return createResponse.data.id;
  } catch (error) {
    console.error(`Error with tag "${name}":`, error.message);
    return null;
  }
}

// Create products
async function createProducts() {
  console.log('\n🛍️  Creating demo products...\n');

  for (const product of demoProducts) {
    try {
      // Get or create categories
      const categoryIds = [];
      for (const cat of product.categories) {
        const catId = await getOrCreateCategory(cat.name);
        if (catId) categoryIds.push({ id: catId });
      }

      // Get or create tags
      const tagIds = [];
      for (const tag of product.tags) {
        const tagId = await getOrCreateTag(tag.name);
        if (tagId) tagIds.push({ id: tagId });
      }

      // Create product
      const productData = {
        ...product,
        categories: categoryIds,
        tags: tagIds,
      };

      const response = await axios.post(
        `${WP_URL}/wp-json/wc/v3/products`,
        productData,
        {
          params: {
            consumer_key: CONSUMER_KEY,
            consumer_secret: CONSUMER_SECRET,
          },
        }
      );

      console.log(`✅ Created product: ${product.name}`);
    } catch (error) {
      console.error(`❌ Error creating product "${product.name}":`, error.response?.data || error.message);
    }
  }
}

// Create blog posts (WordPress posts taxonomy)
async function createBlogPosts() {
  console.log('\n📝 Creating demo blog posts...\n');

  for (const post of demoPosts) {
    try {
      // Get or create categories for posts
      const categoryIds = [];
      for (const cat of post.categories) {
        const catId = await getOrCreateCategory(cat.name, 'category');
        if (catId) categoryIds.push(catId);
      }

      // Get or create tags for posts
      const tagIds = [];
      for (const tag of post.tags) {
        const tagId = await getOrCreateTag(tag.name, 'post_tag');
        if (tagId) tagIds.push(tagId);
      }

      // Create post
      const postData = {
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        status: post.status,
        categories: categoryIds,
        tags: tagIds,
      };

      const response = await axios.post(
        `${WP_URL}/wp-json/wp/v2/posts`,
        postData,
        {
          params: {
            consumer_key: CONSUMER_KEY,
            consumer_secret: CONSUMER_SECRET,
          },
        }
      );

      console.log(`✅ Created blog post: ${post.title}`);
    } catch (error) {
      console.error(`❌ Error creating post "${post.title}":`, error.response?.data || error.message);
    }
  }
}

// Main function
async function main() {
  console.log('════════════════════════════════════════════════════════════');
  console.log('🚀 Seeding Demo Data to WooCommerce/WordPress');
  console.log('════════════════════════════════════════════════════════════');
  console.log(`\nTarget: ${WP_URL}`);

  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    console.error('\n❌ Error: Missing WooCommerce API credentials!');
    console.error('Please set WC_CONSUMER_KEY and WC_CONSUMER_SECRET in your .env.local file.\n');
    process.exit(1);
  }

  try {
    // Test connection
    console.log('\n🔍 Testing API connection...');
    await axios.get(`${WP_URL}/wp-json/wc/v3/products`, {
      params: {
        per_page: 1,
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
      },
    });
    console.log('✅ Connection successful!\n');

    // Create content
    await createProducts();
    await createBlogPosts();

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('✅ Demo data seeding complete!');
    console.log('════════════════════════════════════════════════════════════');
    console.log('\n📊 Summary:');
    console.log(`   Products created: ${demoProducts.length}`);
    console.log(`   Blog posts created: ${demoPosts.length}`);
    console.log('\n🌐 Visit your site to see the new content:');
    console.log(`   Local: http://localhost:3000`);
    console.log(`   WordPress Admin: ${WP_URL}/wp-admin\n`);
  } catch (error) {
    console.error('\n❌ Error:', error.response?.data || error.message);
    console.error('\nPlease check your WooCommerce API credentials and try again.\n');
    process.exit(1);
  }
}

// Run the script
main();
