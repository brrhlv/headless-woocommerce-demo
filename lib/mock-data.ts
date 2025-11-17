// Mock data for demo when WordPress is not available
// This allows the site to function as a complete demo without requiring a WordPress backend

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    permalink: '/products/premium-wireless-headphones',
    price: '199.99',
    regular_price: '249.99',
    sale_price: '199.99',
    on_sale: true,
    description: '<p>Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.</p>',
    short_description: '<p>Premium wireless headphones with active noise cancellation</p>',
    images: [
      {
        id: 1,
        src: 'https://picsum.photos/seed/headphones/800/800',
        name: 'headphones',
        alt: 'Premium Wireless Headphones'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 50
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    slug: 'smart-watch-pro',
    permalink: '/products/smart-watch-pro',
    price: '299.99',
    regular_price: '299.99',
    sale_price: '',
    on_sale: false,
    description: '<p>Stay connected and track your fitness with our advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.</p>',
    short_description: '<p>Advanced fitness tracking smartwatch</p>',
    images: [
      {
        id: 2,
        src: 'https://picsum.photos/seed/smartwatch/800/800',
        name: 'smartwatch',
        alt: 'Smart Watch Pro'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 30
  },
  {
    id: 3,
    name: 'Minimalist Leather Wallet',
    slug: 'minimalist-leather-wallet',
    permalink: '/products/minimalist-leather-wallet',
    price: '49.99',
    regular_price: '49.99',
    sale_price: '',
    on_sale: false,
    description: '<p>Handcrafted genuine leather wallet with RFID protection. Sleek, compact design fits easily in your pocket.</p>',
    short_description: '<p>Genuine leather wallet with RFID protection</p>',
    images: [
      {
        id: 3,
        src: 'https://picsum.photos/seed/wallet/800/800',
        name: 'wallet',
        alt: 'Minimalist Leather Wallet'
      }
    ],
    categories: [{ id: 2, name: 'Accessories', slug: 'accessories' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 100
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    slug: 'portable-bluetooth-speaker',
    permalink: '/products/portable-bluetooth-speaker',
    price: '79.99',
    regular_price: '99.99',
    sale_price: '79.99',
    on_sale: true,
    description: '<p>Waterproof portable speaker with 360° sound, 12-hour battery life, and deep bass. Perfect for outdoor adventures.</p>',
    short_description: '<p>Waterproof portable speaker with 360° sound</p>',
    images: [
      {
        id: 4,
        src: 'https://picsum.photos/seed/speaker/800/800',
        name: 'speaker',
        alt: 'Portable Bluetooth Speaker'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 75
  },
  {
    id: 5,
    name: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    permalink: '/products/ergonomic-office-chair',
    price: '399.99',
    regular_price: '499.99',
    sale_price: '399.99',
    on_sale: true,
    description: '<p>Premium ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back. Perfect for long work sessions.</p>',
    short_description: '<p>Premium ergonomic office chair with lumbar support</p>',
    images: [
      {
        id: 5,
        src: 'https://picsum.photos/seed/chair/800/800',
        name: 'chair',
        alt: 'Ergonomic Office Chair'
      }
    ],
    categories: [{ id: 3, name: 'Furniture', slug: 'furniture' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 20
  },
  {
    id: 6,
    name: 'Stainless Steel Water Bottle',
    slug: 'stainless-steel-water-bottle',
    permalink: '/products/stainless-steel-water-bottle',
    price: '29.99',
    regular_price: '29.99',
    sale_price: '',
    on_sale: false,
    description: '<p>Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.</p>',
    short_description: '<p>Insulated stainless steel water bottle</p>',
    images: [
      {
        id: 6,
        src: 'https://picsum.photos/seed/bottle/800/800',
        name: 'bottle',
        alt: 'Stainless Steel Water Bottle'
      }
    ],
    categories: [{ id: 2, name: 'Accessories', slug: 'accessories' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 150
  },
  {
    id: 7,
    name: 'Mechanical Keyboard RGB',
    slug: 'mechanical-keyboard-rgb',
    permalink: '/products/mechanical-keyboard-rgb',
    price: '149.99',
    regular_price: '149.99',
    sale_price: '',
    on_sale: false,
    description: '<p>Gaming mechanical keyboard with customizable RGB backlighting, Cherry MX switches, and programmable macro keys.</p>',
    short_description: '<p>Gaming mechanical keyboard with RGB backlighting</p>',
    images: [
      {
        id: 7,
        src: 'https://picsum.photos/seed/keyboard/800/800',
        name: 'keyboard',
        alt: 'Mechanical Keyboard RGB'
      }
    ],
    categories: [{ id: 1, name: 'Electronics', slug: 'electronics' }],
    tags: [],
    attributes: [],
    stock_status: 'instock',
    stock_quantity: 45
  },
  {
    id: 8,
    name: 'Yoga Mat Premium',
    slug: 'yoga-mat-premium',
    permalink: '/products/yoga-mat-premium',
    price: '59.99',
    regular_price: '79.99',
    sale_price: '59.99',
    on_sale: true,
    description: '<p>Extra-thick non-slip yoga mat with alignment marks. Made from eco-friendly TPE material. Includes carrying strap.</p>',
    short_description: '<p>Extra-thick non-slip yoga mat with carrying strap</p>',
    images: [
      {
        id: 8,
        src: 'https://picsum.photos/seed/yogamat/800/800',
        name: 'yogamat',
        alt: 'Yoga Mat Premium'
      }
    ],
    categories: [{ id: 4, name: 'Sports & Fitness', slug: 'sports-fitness' }],
    tags: [],
    attributes: [],
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
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">About Our Store</h1>

        <div class="mb-8">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="Our Store" class="w-full h-64 object-cover rounded-lg mb-6" />
        </div>

        <p class="text-xl text-gray-600 mb-8">We're passionate about bringing you high-quality products that enhance your daily life. Since 2020, we've been dedicated to curating the finest selection of electronics, accessories, and lifestyle products.</p>

        <h2 class="text-3xl font-bold mb-4">Our Story</h2>
        <p class="mb-6">Founded by a team of tech enthusiasts and design lovers, our store was born from a simple idea: everyone deserves access to premium products that combine functionality, style, and value. What started as a small online shop has grown into a trusted destination for thousands of customers worldwide.</p>

        <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
        <p class="mb-6">To provide carefully curated products that enhance your daily life, backed by exceptional customer service and a commitment to quality. We believe that great products should be accessible to everyone, and we work tirelessly to bring you the best at competitive prices.</p>

        <h2 class="text-3xl font-bold mb-4">Why Shop With Us?</h2>
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">🚀 Fast & Free Shipping</h3>
            <p>Free shipping on orders over $50. Most orders arrive within 3-5 business days.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">✅ 30-Day Guarantee</h3>
            <p>Not satisfied? Return any item within 30 days for a full refund, no questions asked.</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">💳 Secure Checkout</h3>
            <p>Your payment information is encrypted and secure with industry-standard SSL technology.</p>
          </div>
          <div class="bg-yellow-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">⭐ Premium Support</h3>
            <p>Our customer service team is here to help you 7 days a week via phone, email, or live chat.</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-4">Our Values</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start">
            <span class="text-2xl mr-3">🌟</span>
            <div>
              <strong class="block">Quality First</strong>
              <span class="text-gray-600">We carefully vet every product to ensure it meets our high standards for quality and durability.</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-3">🤝</span>
            <div>
              <strong class="block">Customer Focused</strong>
              <span class="text-gray-600">Your satisfaction is our priority. We listen to feedback and continuously improve our service.</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-3">🌍</span>
            <div>
              <strong class="block">Sustainability</strong>
              <span class="text-gray-600">We partner with eco-conscious brands and use sustainable packaging whenever possible.</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-3">💡</span>
            <div>
              <strong class="block">Innovation</strong>
              <span class="text-gray-600">We stay ahead of trends to bring you the latest and greatest products on the market.</span>
            </div>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mb-4">Our Team</h2>
        <p class="mb-6">We're a distributed team of passionate individuals who love what we do. From product curation to customer service, every team member is committed to making your shopping experience exceptional.</p>

        <div class="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-3">Join Our Community</h3>
          <p class="mb-4">Follow us on social media for exclusive deals, new product announcements, and behind-the-scenes content!</p>
          <div class="flex gap-4">
            <a href="#" class="text-blue-600 hover:text-blue-800">Instagram</a>
            <a href="#" class="text-blue-600 hover:text-blue-800">Twitter</a>
            <a href="#" class="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" class="text-blue-600 hover:text-blue-800">LinkedIn</a>
          </div>
        </div>
      </div>
    ` }
  },
  {
    id: 202,
    title: { rendered: 'FAQ' },
    slug: 'faq',
    content: { rendered: `
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p class="text-xl text-gray-600 mb-8">Find answers to common questions about ordering, shipping, returns, and more.</p>

        <div class="space-y-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Ordering & Payment</h2>

            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-lg mb-2">How do I place an order?</h3>
                <p class="text-gray-600">Simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your order.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p class="text-gray-600">We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">Is my payment information secure?</h3>
                <p class="text-gray-600">Yes! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">Can I modify or cancel my order?</h3>
                <p class="text-gray-600">You can modify or cancel your order within 1 hour of placing it. Contact our customer service team immediately for assistance. Orders cannot be modified once they've been shipped.</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Shipping & Delivery</h2>

            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-lg mb-2">How much does shipping cost?</h3>
                <p class="text-gray-600">Shipping is FREE on orders over $50. For orders under $50, standard shipping is $5.99. Express shipping options are available at checkout.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">How long does delivery take?</h3>
                <p class="text-gray-600">Standard shipping typically takes 3-5 business days. Express shipping delivers within 1-2 business days. You'll receive a tracking number once your order ships.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">Do you ship internationally?</h3>
                <p class="text-gray-600">Currently, we ship to the United States and Canada. International shipping to other countries will be available soon!</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">How can I track my order?</h3>
                <p class="text-gray-600">You'll receive a shipping confirmation email with a tracking number once your order is dispatched. You can track your package using this number on our website or the carrier's website.</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Returns & Refunds</h2>

            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-lg mb-2">What is your return policy?</h3>
                <p class="text-gray-600">We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, return the item in its original condition for a full refund.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">How do I initiate a return?</h3>
                <p class="text-gray-600">Contact our customer service team with your order number and reason for return. We'll provide you with a return shipping label and instructions.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">When will I receive my refund?</h3>
                <p class="text-gray-600">Refunds are processed within 5-7 business days after we receive your returned item. The refund will be credited to your original payment method.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">What if my item arrives damaged?</h3>
                <p class="text-gray-600">We're sorry to hear that! Contact us immediately with photos of the damaged item. We'll send a replacement or issue a full refund, and you won't need to return the damaged item.</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Products & Inventory</h2>

            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-lg mb-2">How do I know if an item is in stock?</h3>
                <p class="text-gray-600">Our website shows real-time inventory. If an item is available to add to cart, it's in stock. Out-of-stock items will show "Notify Me" instead.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">Do you restock sold-out items?</h3>
                <p class="text-gray-600">Yes! Most items are restocked regularly. Sign up for notifications on product pages to be alerted when items are back in stock.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">Are your products authentic?</h3>
                <p class="text-gray-600">Absolutely! We only source products from authorized distributors and manufacturers. All items come with manufacturer warranties where applicable.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">Do products come with warranties?</h3>
                <p class="text-gray-600">Many products include manufacturer warranties. Check the product description for specific warranty information. We also offer extended warranty options at checkout.</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Account & Privacy</h2>

            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-lg mb-2">Do I need an account to shop?</h3>
                <p class="text-gray-600">No, you can checkout as a guest. However, creating an account lets you track orders, save items, and checkout faster on future purchases.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">How is my personal information used?</h3>
                <p class="text-gray-600">We only use your information to process orders and communicate with you. We never sell your data to third parties. See our Privacy Policy for full details.</p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2">How do I unsubscribe from emails?</h3>
                <p class="text-gray-600">Click the "Unsubscribe" link at the bottom of any marketing email. You'll still receive order confirmation and shipping notifications.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Still have questions?</h2>
          <p class="text-gray-600 mb-6">Our customer service team is here to help!</p>
          <a href="/contact" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </div>
    ` }
  },
  {
    id: 203,
    title: { rendered: 'Contact Us' },
    slug: 'contact',
    content: { rendered: `
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-gray-600 mb-8">We'd love to hear from you! Whether you have a question about products, orders, or just want to say hi, our team is ready to help.</p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Customer Service</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <span class="text-2xl mr-3">📧</span>
                <div>
                  <strong class="block">Email</strong>
                  <a href="mailto:support@example.com" class="text-blue-600 hover:text-blue-800">support@example.com</a>
                  <p class="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-2xl mr-3">📞</span>
                <div>
                  <strong class="block">Phone</strong>
                  <a href="tel:1-800-123-4567" class="text-blue-600 hover:text-blue-800">1-800-123-4567</a>
                  <p class="text-sm text-gray-500">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-2xl mr-3">💬</span>
                <div>
                  <strong class="block">Live Chat</strong>
                  <button class="text-blue-600 hover:text-blue-800">Start Chat</button>
                  <p class="text-sm text-gray-500">Available 9am-6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Business Hours</h2>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="font-medium">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium">Saturday:</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-blue-50 rounded">
              <p class="text-sm text-gray-600">💡 For fastest response, use live chat during business hours or email us anytime!</p>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-2">First Name *</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Last Name *</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email *</label>
              <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Order Number (if applicable)</label>
              <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Subject *</label>
              <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <option value="">Select a topic...</option>
                <option value="order">Order Status</option>
                <option value="product">Product Question</option>
                <option value="return">Return/Refund</option>
                <option value="shipping">Shipping</option>
                <option value="technical">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Message *</label>
              <textarea rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Send Message
            </button>
          </form>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-3xl mb-3">🚚</div>
            <h3 class="font-semibold mb-2">Shipping Questions</h3>
            <p class="text-sm text-gray-600">Track your order or ask about delivery times</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-3xl mb-3">↩️</div>
            <h3 class="font-semibold mb-2">Returns & Refunds</h3>
            <p class="text-sm text-gray-600">30-day money-back guarantee on all items</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-3xl mb-3">🛍️</div>
            <h3 class="font-semibold mb-2">Product Support</h3>
            <p class="text-sm text-gray-600">Need help choosing or using a product?</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">Join Our Community</h2>
          <p class="mb-6">Follow us on social media for exclusive deals, new arrivals, and customer stories!</p>
          <div class="flex justify-center gap-6">
            <a href="#" class="hover:opacity-80 transition">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">📷</div>
              <p class="text-sm mt-2">Instagram</p>
            </a>
            <a href="#" class="hover:opacity-80 transition">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🐦</div>
              <p class="text-sm mt-2">Twitter</p>
            </a>
            <a href="#" class="hover:opacity-80 transition">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">📘</div>
              <p class="text-sm mt-2">Facebook</p>
            </a>
          </div>
        </div>
      </div>
    ` }
  }
];
