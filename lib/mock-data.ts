// Mock data for demo when WordPress is not available
// This allows the site to function as a complete demo without requiring a WordPress backend

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: '199.99',
    regular_price: '249.99',
    sale_price: '199.99',
    on_sale: true,
    description: '<p>Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.</p>',
    short_description: '<p>Premium wireless headphones with active noise cancellation</p>',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        alt: 'Premium Wireless Headphones'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    stock_status: 'instock',
    stock_quantity: 50
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    slug: 'smart-watch-pro',
    price: '299.99',
    regular_price: '299.99',
    description: '<p>Stay connected and track your fitness with our advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.</p>',
    short_description: '<p>Advanced fitness tracking smartwatch</p>',
    images: [
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        alt: 'Smart Watch Pro'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    stock_status: 'instock',
    stock_quantity: 30
  },
  {
    id: 3,
    name: 'Minimalist Leather Wallet',
    slug: 'minimalist-leather-wallet',
    price: '49.99',
    regular_price: '49.99',
    description: '<p>Handcrafted genuine leather wallet with RFID protection. Sleek, compact design fits easily in your pocket.</p>',
    short_description: '<p>Genuine leather wallet with RFID protection</p>',
    images: [
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
        alt: 'Minimalist Leather Wallet'
      }
    ],
    categories: [{ id: 2, name: 'Accessories', slug: 'accessories' }],
    stock_status: 'instock',
    stock_quantity: 100
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    slug: 'portable-bluetooth-speaker',
    price: '79.99',
    regular_price: '99.99',
    sale_price: '79.99',
    on_sale: true,
    description: '<p>Waterproof portable speaker with 360° sound, 12-hour battery life, and deep bass. Perfect for outdoor adventures.</p>',
    short_description: '<p>Waterproof portable speaker with 360° sound</p>',
    images: [
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
        alt: 'Portable Bluetooth Speaker'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    stock_status: 'instock',
    stock_quantity: 75
  },
  {
    id: 5,
    name: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    price: '399.99',
    regular_price: '499.99',
    sale_price: '399.99',
    on_sale: true,
    description: '<p>Premium ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back. Perfect for long work sessions.</p>',
    short_description: '<p>Premium ergonomic office chair with lumbar support</p>',
    images: [
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
        alt: 'Ergonomic Office Chair'
      }
    ],
    categories: [{ id: 3, name: 'Furniture', slug: 'furniture' }],
    stock_status: 'instock',
    stock_quantity: 20
  },
  {
    id: 6,
    name: 'Stainless Steel Water Bottle',
    slug: 'stainless-steel-water-bottle',
    price: '29.99',
    regular_price: '29.99',
    description: '<p>Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.</p>',
    short_description: '<p>Insulated stainless steel water bottle</p>',
    images: [
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
        alt: 'Stainless Steel Water Bottle'
      }
    ],
    categories: [{ id: 2, name: 'Accessories', slug: 'accessories' }],
    stock_status: 'instock',
    stock_quantity: 150
  },
  {
    id: 7,
    name: 'Mechanical Keyboard RGB',
    slug: 'mechanical-keyboard-rgb',
    price: '149.99',
    regular_price: '149.99',
    description: '<p>Gaming mechanical keyboard with customizable RGB backlighting, Cherry MX switches, and programmable macro keys.</p>',
    short_description: '<p>Gaming mechanical keyboard with RGB backlighting</p>',
    images: [
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
        alt: 'Mechanical Keyboard RGB'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    stock_status: 'instock',
    stock_quantity: 45
  },
  {
    id: 8,
    name: 'Yoga Mat Premium',
    slug: 'yoga-mat-premium',
    price: '59.99',
    regular_price: '79.99',
    sale_price: '59.99',
    on_sale: true,
    description: '<p>Extra-thick non-slip yoga mat with alignment marks. Made from eco-friendly TPE material. Includes carrying strap.</p>',
    short_description: '<p>Extra-thick non-slip yoga mat with carrying strap</p>',
    images: [
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
        alt: 'Yoga Mat Premium'
      }
    ],
    categories: [{ id: 4, name: 'Sports & Fitness', slug: 'sports-fitness' }],
    stock_status: 'instock',
    stock_quantity: 60
  }
];

export const MOCK_CATEGORIES = [
  { id: 1, name: 'Electronics', slug: 'electronics', count: 4 },
  { id: 2, name: 'Accessories', slug: 'accessories', count: 2 },
  { id: 3, name: 'Furniture', slug: 'furniture', count: 1 },
  { id: 4, name: 'Sports & Fitness', slug: 'sports-fitness', count: 1 }
];

export const MOCK_BLOG_POSTS = [
  {
    id: 101,
    title: { rendered: 'Welcome to Our Store' },
    slug: 'welcome-to-our-store',
    excerpt: { rendered: '<p>Discover our curated collection of premium products designed to enhance your lifestyle.</p>' },
    content: { rendered: `
      <h2>Welcome to Our Store!</h2>
      <p>We're excited to have you here. Our store offers a carefully curated selection of premium products across multiple categories.</p>
      <h3>What We Offer</h3>
      <ul>
        <li><strong>Electronics:</strong> Latest gadgets and tech accessories</li>
        <li><strong>Accessories:</strong> Stylish and functional everyday items</li>
        <li><strong>Furniture:</strong> Ergonomic and modern pieces for your space</li>
        <li><strong>Sports & Fitness:</strong> Gear to support your active lifestyle</li>
      </ul>
      <p>Browse our collection and find exactly what you need!</p>
    ` },
    date: '2025-01-15T10:00:00',
    categories: [1],
    _embedded: {
      author: [{ name: 'Store Admin' }],
      'wp:featuredmedia': [{
        source_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
        alt_text: 'Welcome to our store'
      }]
    }
  },
  {
    id: 102,
    title: { rendered: 'Top 5 Tech Gadgets for 2025' },
    slug: 'top-tech-gadgets-2025',
    excerpt: { rendered: '<p>Explore the must-have tech gadgets that will transform your daily life this year.</p>' },
    content: { rendered: `
      <h2>Top 5 Tech Gadgets for 2025</h2>
      <p>Technology continues to evolve, and these gadgets are leading the way:</p>
      <ol>
        <li><strong>Wireless Headphones:</strong> Superior sound with noise cancellation</li>
        <li><strong>Smart Watches:</strong> Track fitness and stay connected</li>
        <li><strong>Bluetooth Speakers:</strong> Portable audio perfection</li>
        <li><strong>Mechanical Keyboards:</strong> Enhanced typing experience</li>
        <li><strong>Smart Home Devices:</strong> Automate your living space</li>
      </ol>
      <p>Check out our electronics section for the latest tech!</p>
    ` },
    date: '2025-01-14T14:30:00',
    categories: [1],
    _embedded: {
      author: [{ name: 'Tech Editor' }],
      'wp:featuredmedia': [{
        source_url: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&q=80',
        alt_text: 'Tech gadgets'
      }]
    }
  },
  {
    id: 103,
    title: { rendered: 'Creating Your Perfect Home Office' },
    slug: 'perfect-home-office',
    excerpt: { rendered: '<p>Tips and product recommendations for setting up an ergonomic and productive workspace.</p>' },
    content: { rendered: `
      <h2>Creating Your Perfect Home Office</h2>
      <p>Working from home? Here's how to create a space that boosts productivity:</p>
      <h3>Essential Elements</h3>
      <ul>
        <li><strong>Ergonomic Chair:</strong> Invest in proper lumbar support</li>
        <li><strong>Proper Lighting:</strong> Reduce eye strain with good lighting</li>
        <li><strong>Organization:</strong> Keep your space clutter-free</li>
        <li><strong>Quality Equipment:</strong> Keyboard, mouse, and monitor matter</li>
      </ul>
      <p>Browse our furniture collection for ergonomic office solutions!</p>
    ` },
    date: '2025-01-13T09:00:00',
    categories: [2],
    _embedded: {
      author: [{ name: 'Lifestyle Editor' }],
      'wp:featuredmedia': [{
        source_url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
        alt_text: 'Home office setup'
      }]
    }
  }
];

export const MOCK_PAGES = [
  {
    id: 201,
    title: { rendered: 'About Us' },
    slug: 'about',
    content: { rendered: `
      <h1>About Our Store</h1>
      <p>We're passionate about bringing you high-quality products that enhance your daily life.</p>
      <h2>Our Mission</h2>
      <p>To provide carefully curated products that combine functionality, style, and value.</p>
      <h2>Why Shop With Us?</h2>
      <ul>
        <li>🚀 Fast, free shipping on orders over $50</li>
        <li>✅ 30-day money-back guarantee</li>
        <li>💳 Secure checkout</li>
        <li>📦 Easy returns</li>
        <li>⭐ Premium customer service</li>
      </ul>
    ` }
  },
  {
    id: 202,
    title: { rendered: 'Contact Us' },
    slug: 'contact',
    content: { rendered: `
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Get in touch with our team.</p>
      <h2>Customer Service</h2>
      <ul>
        <li>📧 Email: support@example.com</li>
        <li>📞 Phone: 1-800-123-4567</li>
        <li>💬 Live Chat: Available 9am-6pm EST</li>
      </ul>
      <h2>Business Hours</h2>
      <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br>
      Saturday: 10:00 AM - 4:00 PM EST<br>
      Sunday: Closed</p>
    ` }
  }
];
