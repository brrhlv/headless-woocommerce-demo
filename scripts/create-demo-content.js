#!/usr/bin/env node

/**
 * Demo Content Creator
 *
 * Creates sample blog posts, pages, and products for the headless WooCommerce demo
 *
 * Usage:
 *   node scripts/create-demo-content.js
 *
 * Configuration:
 *   Set SITE_URL and AUTH_TOKEN below, or use environment variables
 */

const SITE_URL = process.env.SITE_URL || 'https://headless-woocommerce-demo.vercel.app';
const AUTH_TOKEN = process.env.WP_AUTH_TOKEN || 'YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM=';

// Demo blog posts content
const DEMO_POSTS = [
  {
    title: 'Welcome to Our Headless WordPress Blog',
    content: `
      <h2>Introducing Our New Headless CMS</h2>
      <p>We're excited to announce the launch of our new headless WordPress blog, built with cutting-edge technology and designed for performance.</p>

      <h3>What is Headless WordPress?</h3>
      <p>Headless WordPress separates the content management system (backend) from the presentation layer (frontend). This architecture provides several benefits:</p>

      <ul>
        <li><strong>Better Performance:</strong> Static site generation means faster load times</li>
        <li><strong>Enhanced Security:</strong> Reduced attack surface with decoupled architecture</li>
        <li><strong>Flexibility:</strong> Use any frontend framework (we chose Next.js)</li>
        <li><strong>Scalability:</strong> Handle traffic spikes with CDN distribution</li>
      </ul>

      <h3>Our Tech Stack</h3>
      <p>This site is built with:</p>
      <ul>
        <li>Next.js 15 with App Router</li>
        <li>WordPress REST API</li>
        <li>TypeScript for type safety</li>
        <li>Tailwind CSS for styling</li>
        <li>Vercel for deployment</li>
      </ul>

      <p>Stay tuned for more updates and articles about modern web development!</p>
    `,
    excerpt: 'Discover how we built a modern headless blog with WordPress and Next.js, combining the power of a robust CMS with cutting-edge frontend technology.',
    status: 'publish'
  },
  {
    title: '10 Tips for Building Fast E-commerce Sites',
    content: `
      <h2>Speed Matters in E-commerce</h2>
      <p>Did you know that a 1-second delay in page load time can reduce conversions by 7%? Here are 10 essential tips for building lightning-fast e-commerce sites.</p>

      <h3>1. Optimize Images</h3>
      <p>Use modern image formats like WebP and implement lazy loading. Next.js Image component does this automatically.</p>

      <h3>2. Implement Server-Side Rendering</h3>
      <p>SSR improves initial page load and SEO. Next.js makes this easy with built-in support.</p>

      <h3>3. Use a Content Delivery Network</h3>
      <p>CDNs like Vercel Edge Network distribute your content globally, reducing latency.</p>

      <h3>4. Minimize JavaScript Bundle Size</h3>
      <p>Code splitting and tree shaking help reduce the amount of JavaScript shipped to browsers.</p>

      <h3>5. Cache Aggressively</h3>
      <p>Implement caching at multiple levels: browser, CDN, and API responses.</p>

      <h3>6. Optimize Third-Party Scripts</h3>
      <p>Load analytics and tracking scripts asynchronously to avoid blocking rendering.</p>

      <h3>7. Use Static Generation Where Possible</h3>
      <p>Pre-render pages at build time for instant page loads.</p>

      <h3>8. Implement Progressive Enhancement</h3>
      <p>Ensure core functionality works without JavaScript, then enhance with interactivity.</p>

      <h3>9. Monitor Performance Metrics</h3>
      <p>Track Core Web Vitals: LCP, FID, and CLS to measure real user experience.</p>

      <h3>10. Test on Real Devices</h3>
      <p>Desktop performance doesn't translate to mobile. Test on actual devices with real network conditions.</p>

      <h3>Conclusion</h3>
      <p>Performance is not a feature—it's a requirement. Implement these tips to create fast, conversion-optimized e-commerce experiences.</p>
    `,
    excerpt: 'Learn 10 essential techniques for building blazing-fast e-commerce sites that convert visitors into customers with optimal performance.',
    status: 'publish'
  },
  {
    title: 'The Future of Headless Commerce',
    content: `
      <h2>Why Headless Commerce is Taking Over</h2>
      <p>The e-commerce landscape is rapidly evolving, and headless commerce is leading the charge. Let's explore why this architecture is becoming the standard for modern online stores.</p>

      <h3>What is Headless Commerce?</h3>
      <p>Headless commerce decouples the frontend presentation layer from the backend commerce functionality. This separation enables:</p>

      <blockquote>
        <p>"The ability to deliver content and commerce experiences anywhere, on any device, without being constrained by the limitations of a monolithic platform."</p>
      </blockquote>

      <h3>Key Benefits</h3>

      <h4>Omnichannel Experiences</h4>
      <p>With headless, your commerce backend can power:</p>
      <ul>
        <li>Web applications</li>
        <li>Mobile apps (iOS/Android)</li>
        <li>Smart devices (IoT)</li>
        <li>Voice assistants</li>
        <li>In-store kiosks</li>
      </ul>

      <h4>Developer Freedom</h4>
      <p>Choose your preferred frontend framework—React, Vue, Svelte, or anything else. We chose Next.js for its excellent performance and developer experience.</p>

      <h4>Faster Time to Market</h4>
      <p>Frontend and backend teams can work independently, speeding up development and releases.</p>

      <h3>Real-World Success Stories</h3>
      <p>Major brands like Nike, Target, and Amazon use headless architectures to deliver exceptional shopping experiences across all touchpoints.</p>

      <h3>Getting Started</h3>
      <p>Ready to go headless? Here's what you need:</p>
      <ol>
        <li>Choose a headless commerce platform (WooCommerce, Shopify, Commerce.js)</li>
        <li>Select a frontend framework (Next.js, Gatsby, Nuxt)</li>
        <li>Set up your development environment</li>
        <li>Connect to APIs and start building</li>
      </ol>

      <p>The future of commerce is headless, and that future is now.</p>
    `,
    excerpt: 'Explore the rise of headless commerce architecture and learn why leading brands are adopting this approach for their e-commerce platforms.',
    status: 'publish'
  },
  {
    title: 'Getting Started with Next.js 15',
    content: `
      <h2>Your Guide to Next.js 15</h2>
      <p>Next.js 15 brings exciting new features and improvements. Here's everything you need to know to get started with the latest version.</p>

      <h3>What's New in Next.js 15?</h3>

      <h4>App Router Improvements</h4>
      <p>The App Router, introduced in Next.js 13, is now stable and more powerful than ever. Key features include:</p>
      <ul>
        <li>Server Components by default</li>
        <li>Improved data fetching patterns</li>
        <li>Better streaming and suspense support</li>
        <li>Enhanced error handling</li>
      </ul>

      <h4>Turbopack</h4>
      <p>Turbopack, Vercel's Rust-based bundler, offers significantly faster build times compared to Webpack.</p>

      <h4>Server Actions</h4>
      <p>Server Actions simplify data mutations and form handling with automatic progressive enhancement.</p>

      <h3>Creating Your First Next.js 15 App</h3>

      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>

      <h3>Project Structure</h3>
      <p>The new App Router uses a file-system based routing structure:</p>

      <pre><code>app/
  ├── page.tsx          # Home page
  ├── layout.tsx        # Root layout
  ├── about/
  │   └── page.tsx      # /about route
  └── blog/
      ├── page.tsx      # /blog route
      └── [slug]/
          └── page.tsx  # /blog/[slug] route</code></pre>

      <h3>Server vs Client Components</h3>
      <p>By default, all components in the App Router are Server Components. Use the 'use client' directive for interactive components:</p>

      <pre><code>'use client'

export default function Counter() {
  const [count, setCount] = useState(0)
  return &lt;button onClick={() => setCount(count + 1)}&gt;{count}&lt;/button&gt;
}</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use Server Components for static content and data fetching</li>
        <li>Only use Client Components when you need interactivity</li>
        <li>Leverage streaming for better performance</li>
        <li>Implement proper error boundaries</li>
        <li>Use TypeScript for type safety</li>
      </ul>

      <h3>Resources</h3>
      <ul>
        <li><a href="https://nextjs.org/docs">Official Documentation</a></li>
        <li><a href="https://nextjs.org/learn">Next.js Tutorial</a></li>
        <li><a href="https://github.com/vercel/next.js">GitHub Repository</a></li>
      </ul>

      <p>Happy coding with Next.js 15!</p>
    `,
    excerpt: 'Learn about the latest features in Next.js 15 and how to build modern web applications with the App Router, Server Components, and more.',
    status: 'publish'
  },
  {
    title: 'SEO Best Practices for Headless Sites',
    content: `
      <h2>Optimizing SEO in Headless Architecture</h2>
      <p>One common concern with headless sites is SEO. However, with the right approach, headless sites can actually outperform traditional architectures in search rankings.</p>

      <h3>Server-Side Rendering is Key</h3>
      <p>SSR ensures search engines receive fully-rendered HTML, making your content easily crawlable and indexable.</p>

      <h3>Essential SEO Elements</h3>

      <h4>Meta Tags</h4>
      <p>Implement proper meta tags for every page:</p>
      <pre><code>&lt;title&gt;Page Title - Brand&lt;/title&gt;
&lt;meta name="description" content="Page description" /&gt;
&lt;meta property="og:title" content="Social Title" /&gt;
&lt;meta property="og:image" content="image-url" /&gt;</code></pre>

      <h4>Structured Data</h4>
      <p>Add JSON-LD structured data for rich snippets:</p>
      <pre><code>{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "image": "product-image.jpg",
  "offers": {
    "@type": "Offer",
    "price": "29.99",
    "priceCurrency": "USD"
  }
}</code></pre>

      <h4>Sitemaps</h4>
      <p>Generate XML sitemaps automatically and submit to search engines.</p>

      <h4>robots.txt</h4>
      <p>Configure proper crawling rules:</p>
      <pre><code>User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml</code></pre>

      <h3>Performance = SEO</h3>
      <p>Google considers Core Web Vitals as ranking factors:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Load main content quickly</li>
        <li><strong>FID (First Input Delay):</strong> Respond to user interactions fast</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Prevent layout shifts</li>
      </ul>

      <h3>Mobile-First Indexing</h3>
      <p>Google predominantly uses mobile versions for indexing. Ensure:</p>
      <ul>
        <li>Responsive design</li>
        <li>Fast mobile performance</li>
        <li>Mobile-friendly navigation</li>
        <li>Readable font sizes</li>
      </ul>

      <h3>Internal Linking</h3>
      <p>Create a strong internal linking structure to help search engines understand your site hierarchy and distribute page authority.</p>

      <h3>Monitoring and Analytics</h3>
      <p>Track your SEO performance with:</p>
      <ul>
        <li>Google Search Console</li>
        <li>Google Analytics 4</li>
        <li>PageSpeed Insights</li>
        <li>Lighthouse audits</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Headless architecture doesn't mean sacrificing SEO. With proper implementation, you can achieve better search rankings while enjoying the benefits of modern web development.</p>
    `,
    excerpt: 'Master SEO optimization for headless websites with these proven strategies for server-side rendering, structured data, and Core Web Vitals.',
    status: 'publish'
  }
];

// Demo pages content
const DEMO_PAGES = [
  {
    title: 'About Us',
    content: `
      <h1>About Our Company</h1>

      <p class="lead">We're passionate about building modern, performant web experiences that delight users and drive business results.</p>

      <h2>Our Mission</h2>
      <p>To democratize cutting-edge web technology by providing open-source examples and educational resources that help developers build better websites and applications.</p>

      <h2>What We Do</h2>
      <p>We specialize in headless CMS implementations, JAMstack architecture, and modern e-commerce solutions. Our expertise includes:</p>

      <ul>
        <li><strong>Headless WordPress Development</strong> - Leveraging WordPress as a powerful backend CMS</li>
        <li><strong>Next.js Applications</strong> - Building fast, SEO-friendly React applications</li>
        <li><strong>E-commerce Solutions</strong> - Creating seamless shopping experiences with WooCommerce</li>
        <li><strong>Performance Optimization</strong> - Ensuring lightning-fast load times and Core Web Vitals compliance</li>
        <li><strong>API Development</strong> - Creating robust, scalable REST and GraphQL APIs</li>
      </ul>

      <h2>Our Values</h2>

      <h3>🚀 Performance First</h3>
      <p>We believe every millisecond counts. Our solutions are optimized for speed from the ground up.</p>

      <h3>📱 Mobile-First</h3>
      <p>With over 60% of web traffic coming from mobile devices, we design and build for mobile first.</p>

      <h3>♿ Accessibility Matters</h3>
      <p>Everyone deserves access to great web experiences. We follow WCAG guidelines to ensure our sites are inclusive.</p>

      <h3>🔒 Security by Design</h3>
      <p>We implement security best practices at every layer, from infrastructure to application code.</p>

      <h3>🌱 Continuous Learning</h3>
      <p>Web technology evolves rapidly. We stay current with the latest tools, frameworks, and best practices.</p>

      <h2>Our Team</h2>
      <p>We're a distributed team of developers, designers, and digital strategists who love building for the web. Our combined experience spans frontend and backend development, DevOps, UX design, and digital marketing.</p>

      <h2>Open Source</h2>
      <p>This demo site is completely open source! Check out our code on GitHub and use it as a foundation for your own projects. We believe in learning by example and sharing knowledge with the community.</p>

      <h2>Get in Touch</h2>
      <p>Have a project in mind? Want to collaborate? <a href="/contact">Get in touch</a> and let's build something amazing together.</p>
    `,
    status: 'publish'
  },
  {
    title: 'Contact',
    content: `
      <h1>Contact Us</h1>

      <p class="lead">We'd love to hear from you! Whether you have a question about our demo, want to collaborate, or just want to say hi, feel free to reach out.</p>

      <h2>Get in Touch</h2>

      <div class="contact-info">
        <h3>📧 Email</h3>
        <p><a href="mailto:hello@example.com">hello@example.com</a></p>

        <h3>💬 Social Media</h3>
        <ul>
          <li><a href="https://github.com" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>

        <h3>📍 Location</h3>
        <p>Remote-first team<br>Serving clients worldwide</p>
      </div>

      <h2>Frequently Asked Questions</h2>

      <h3>Can I use this demo code for my project?</h3>
      <p>Absolutely! This is an open-source demo. Feel free to use it as a starting point for your own headless WordPress or WooCommerce project.</p>

      <h3>Do you offer consulting services?</h3>
      <p>This is a demo project for educational purposes. However, the architecture and code patterns shown here are production-ready and can be adapted for real-world use.</p>

      <h3>How do I set up this demo locally?</h3>
      <p>Check out the README.md file in the GitHub repository for detailed setup instructions. You'll need a WordPress installation with WooCommerce and the proper API credentials.</p>

      <h3>What if I find a bug?</h3>
      <p>Please open an issue on our GitHub repository! We appreciate contributions and feedback from the community.</p>

      <h2>Technical Support</h2>
      <p>For technical questions about the implementation:</p>
      <ul>
        <li>Check the comprehensive documentation in the repository</li>
        <li>Review the code comments and examples</li>
        <li>Open a GitHub issue for specific problems</li>
        <li>Join our community discussions</li>
      </ul>

      <h2>Business Inquiries</h2>
      <p>For partnership opportunities, sponsorships, or other business-related questions, please email us with details about your inquiry.</p>

      <hr>

      <p><em>We typically respond within 24-48 hours during business days.</em></p>
    `,
    status: 'publish'
  },
  {
    title: 'Privacy Policy',
    content: `
      <h1>Privacy Policy</h1>

      <p><em>Last updated: ${new Date().toLocaleDateString()}</em></p>

      <h2>Introduction</h2>
      <p>This is a demo website created for educational purposes. This privacy policy explains how we handle information for demonstration purposes only.</p>

      <h2>Information Collection</h2>
      <p>This demo site may collect the following types of information:</p>

      <h3>Automatically Collected Information</h3>
      <ul>
        <li><strong>Analytics Data:</strong> We may use analytics services to understand how visitors use the site</li>
        <li><strong>Log Data:</strong> Standard server logs including IP addresses, browser types, and timestamps</li>
        <li><strong>Cookies:</strong> We use cookies to maintain shopping cart state and user preferences</li>
      </ul>

      <h3>Information You Provide</h3>
      <ul>
        <li><strong>Contact Forms:</strong> Name and email if you contact us</li>
        <li><strong>Shopping Cart:</strong> Billing information if you place a test order</li>
        <li><strong>Account Information:</strong> Username and email if you create an account</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>Information collected on this demo site is used solely for:</p>
      <ul>
        <li>Demonstrating e-commerce functionality</li>
        <li>Testing the headless WordPress architecture</li>
        <li>Improving the demo experience</li>
        <li>Preventing abuse and spam</li>
      </ul>

      <h2>Data Storage</h2>
      <p>Demo data is stored in:</p>
      <ul>
        <li>WordPress database (backend)</li>
        <li>Browser local storage (shopping cart)</li>
        <li>Vercel hosting infrastructure (logs and analytics)</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>This demo may use the following third-party services:</p>
      <ul>
        <li><strong>Vercel:</strong> Hosting and analytics</li>
        <li><strong>WordPress:</strong> Content management system</li>
        <li><strong>WooCommerce:</strong> E-commerce functionality</li>
      </ul>

      <h2>Data Security</h2>
      <p>We implement appropriate security measures including:</p>
      <ul>
        <li>HTTPS encryption for all traffic</li>
        <li>Secure API authentication</li>
        <li>Regular security updates</li>
        <li>Limited data collection</li>
      </ul>

      <h2>Your Rights</h2>
      <p>As this is a demo site, you have the right to:</p>
      <ul>
        <li>Request deletion of any personal information</li>
        <li>Opt out of analytics tracking</li>
        <li>Access data we have collected</li>
        <li>Update or correct your information</li>
      </ul>

      <h2>Cookies</h2>
      <p>We use cookies for:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Shopping cart functionality</li>
        <li><strong>Analytics Cookies:</strong> Understanding site usage (if enabled)</li>
        <li><strong>Preference Cookies:</strong> Remembering your settings</li>
      </ul>

      <p>You can disable cookies in your browser settings, though some functionality may be affected.</p>

      <h2>Children's Privacy</h2>
      <p>This demo site is not intended for children under 13. We do not knowingly collect information from children.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this privacy policy as needed for the demo. Significant changes will be noted in the documentation.</p>

      <h2>Contact</h2>
      <p>For questions about this privacy policy or data handling, please contact us through the contact page or GitHub repository.</p>

      <h2>Disclaimer</h2>
      <p><strong>Important:</strong> This is a demonstration website. Any orders placed are for testing purposes only and no actual transactions will be processed. Do not enter real payment information.</p>
    `,
    status: 'publish'
  }
];

// Helper function to create content
async function createContent(endpoint, data) {
  try {
    const response = await fetch(`${SITE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${AUTH_TOKEN}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create content at ${endpoint}:`, error.message);
    throw error;
  }
}

// Main function
async function createDemoContent() {
  console.log('\n🚀 Creating Demo Content for Headless WooCommerce Demo\n');
  console.log(`Site: ${SITE_URL}\n`);

  const results = {
    posts: [],
    pages: [],
    errors: []
  };

  // Create blog posts
  console.log('📝 Creating Blog Posts...\n');
  for (let i = 0; i < DEMO_POSTS.length; i++) {
    const post = DEMO_POSTS[i];
    try {
      console.log(`  [${i + 1}/${DEMO_POSTS.length}] Creating: "${post.title}"`);
      const result = await createContent('/api/posts', post);
      results.posts.push(result);
      console.log(`  ✅ Created post ID: ${result.id}`);
    } catch (error) {
      console.log(`  ❌ Failed: ${error.message}`);
      results.errors.push({ type: 'post', title: post.title, error: error.message });
    }
  }

  console.log('\n📄 Creating Pages...\n');
  for (let i = 0; i < DEMO_PAGES.length; i++) {
    const page = DEMO_PAGES[i];
    try {
      console.log(`  [${i + 1}/${DEMO_PAGES.length}] Creating: "${page.title}"`);
      const result = await createContent('/api/pages', page);
      results.pages.push(result);
      console.log(`  ✅ Created page ID: ${result.id}`);
    } catch (error) {
      console.log(`  ❌ Failed: ${error.message}`);
      results.errors.push({ type: 'page', title: page.title, error: error.message });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary');
  console.log('='.repeat(60));
  console.log(`✅ Blog Posts Created: ${results.posts.length}/${DEMO_POSTS.length}`);
  console.log(`✅ Pages Created: ${results.pages.length}/${DEMO_PAGES.length}`);

  if (results.errors.length > 0) {
    console.log(`\n❌ Errors: ${results.errors.length}`);
    results.errors.forEach(err => {
      console.log(`   - ${err.type}: "${err.title}" - ${err.error}`);
    });
  } else {
    console.log('\n🎉 All demo content created successfully!');
  }

  console.log('\n🔗 View your content:');
  console.log(`   Blog: ${SITE_URL}/blog`);
  console.log(`   Pages: ${SITE_URL}/about, ${SITE_URL}/contact`);
  console.log('\n');

  return results;
}

// Run if called directly
if (require.main === module) {
  createDemoContent()
    .then(() => process.exit(0))
    .catch(error => {
      console.error('\n💥 Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { createDemoContent, DEMO_POSTS, DEMO_PAGES };
