import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Apple Dark Theme Preview - Headless WooCommerce Demo',
  description: 'Preview of Apple-inspired dark theme design system',
};

export default function AppleDarkPreviewPage() {
  return (
    <div className="apple-theme dark min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="apple-max-width relative px-6 py-24 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6">
            Premium Wireless<br />Headphones
          </h1>
          <p className="text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience superior sound quality with active noise cancellation and 30-hour battery life.
          </p>
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <button className="apple-button-primary">
              Buy Now
            </button>
            <Link href="/" className="text-blue-400 text-lg font-medium hover:underline">
              Learn more →
            </Link>
          </div>
          <div className="mt-16">
            <div className="relative h-96 w-full">
              <Image
                src="https://picsum.photos/seed/headphones/800/800"
                alt="Premium Wireless Headphones"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="apple-section-padding">
        <div className="apple-max-width px-6">
          <h2 className="text-5xl font-semibold text-center mb-16">
            Why you&apos;ll love it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center apple-fade-in">
              <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Premium Sound
              </h3>
              <p className="text-lg text-gray-400">
                Custom-tuned drivers deliver rich, balanced audio across all frequencies.
              </p>
            </div>

            <div className="text-center apple-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                30-Hour Battery
              </h3>
              <p className="text-lg text-gray-400">
                All-day listening with fast charging. 5 minutes gives you 3 hours of playback.
              </p>
            </div>

            <div className="text-center apple-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Active Noise Cancellation
              </h3>
              <p className="text-lg text-gray-400">
                Block out distractions and immerse yourself in your music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section with Glass Effect */}
      <section className="apple-section-padding">
        <div className="apple-max-width-lg px-6">
          <h2 className="text-5xl font-semibold text-center mb-4">
            Explore the lineup.
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Choose the best one for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="apple-card-dark">
              <div className="relative h-64 mb-6">
                <Image
                  src="https://picsum.photos/seed/headphones/400/400"
                  alt="Wireless Headphones"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white bg-red-500 px-2 py-1 rounded">
                    SALE
                  </span>
                </div>
                <h3 className="text-xl font-semibold">
                  Premium Wireless Headphones
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">$249.99</span>
                  <span className="text-2xl font-semibold">$199.99</span>
                </div>
                <button className="apple-button-primary w-full">
                  Buy
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="apple-card-dark">
              <div className="relative h-64 mb-6">
                <Image
                  src="https://picsum.photos/seed/smartwatch/400/400"
                  alt="Smart Watch Pro"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="h-6"></div>
                <h3 className="text-xl font-semibold">
                  Smart Watch Pro
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold">$299.99</span>
                </div>
                <button className="apple-button-primary w-full">
                  Buy
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="apple-card-dark">
              <div className="relative h-64 mb-6">
                <Image
                  src="https://picsum.photos/seed/speaker/400/400"
                  alt="Bluetooth Speaker"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white bg-red-500 px-2 py-1 rounded">
                    SALE
                  </span>
                </div>
                <h3 className="text-xl font-semibold">
                  Portable Bluetooth Speaker
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">$99.99</span>
                  <span className="text-2xl font-semibold">$79.99</span>
                </div>
                <button className="apple-button-primary w-full">
                  Buy
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="apple-card-dark">
              <div className="relative h-64 mb-6">
                <Image
                  src="https://picsum.photos/seed/keyboard/400/400"
                  alt="Mechanical Keyboard"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="h-6"></div>
                <h3 className="text-xl font-semibold">
                  Mechanical Keyboard RGB
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold">$149.99</span>
                </div>
                <button className="apple-button-primary w-full">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Effect CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
        <div className="apple-glass-dark relative apple-max-width mx-6 px-12 py-16 text-center rounded-3xl">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Ready to get started?
          </h2>
          <p className="text-2xl mb-12 text-gray-300">
            Experience the difference with premium audio equipment.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="apple-button-primary">
              Shop Now
            </button>
            <Link href="/" className="apple-button-secondary inline-block">
              Back to Site
            </Link>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="apple-section-padding">
        <div className="apple-max-width px-6">
          <h2 className="text-4xl font-semibold mb-12">
            Component Library - Dark Theme
          </h2>

          {/* Buttons */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="apple-button-primary">
                Primary Button
              </button>
              <button className="apple-button-secondary">
                Secondary Button
              </button>
              <button className="text-blue-400 px-6 py-3 rounded-full font-medium hover:bg-blue-900/20 transition-colors">
                Tertiary Button
              </button>
              <button className="bg-gray-700 text-gray-500 px-6 py-3 rounded-full font-medium cursor-not-allowed">
                Disabled Button
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Input Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="apple-input apple-input-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Appleseed"
                  className="apple-input apple-input-dark"
                />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-800">
                New
              </span>
              <span className="bg-green-900/40 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-800">
                In Stock
              </span>
              <span className="bg-orange-900/40 text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-800">
                Limited
              </span>
              <span className="bg-red-900/40 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-800">
                Sale
              </span>
              <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
                Standard
              </span>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Typography</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Headline 1</p>
                <h1 className="text-6xl font-semibold">The quick brown fox</h1>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Headline 2</p>
                <h2 className="text-5xl font-semibold">The quick brown fox</h2>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Headline 3</p>
                <h3 className="text-4xl font-semibold">The quick brown fox</h3>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Body Large</p>
                <p className="text-xl text-gray-300">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Body</p>
                <p className="text-base text-gray-300">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Body Small</p>
                <p className="text-sm text-gray-400">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Comparison Section */}
      <section className="apple-section-padding bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="apple-max-width px-6">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Two Themes. One System.
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            This demo showcases both the Apple-inspired light theme and dark theme variations.
            Visit <Link href="/apple-preview" className="text-blue-400 hover:underline">the light theme preview</Link> to see
            the same design system in a light color scheme.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apple-card-dark">
              <h3 className="text-xl font-semibold mb-3">Dark Theme</h3>
              <p className="text-gray-400 mb-4">
                Pure black backgrounds (#000000) with elevated surfaces in dark greys. Blue accent color (#0A84FF) optimized for dark mode visibility.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-12 bg-black border border-gray-700 rounded"></div>
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 rounded"></div>
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded"></div>
                <div className="w-12 h-12 bg-blue-500 rounded"></div>
              </div>
            </div>
            <div className="apple-card-dark">
              <h3 className="text-xl font-semibold mb-3">Light Theme</h3>
              <p className="text-gray-400 mb-4">
                Clean white and light grey backgrounds with deeper blue accent (#0071E3). Optimized for daylight viewing with subtle shadows.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-12 bg-white border border-gray-700 rounded"></div>
                <div className="w-12 h-12 bg-gray-50 border border-gray-700 rounded"></div>
                <div className="w-12 h-12 bg-gray-200 border border-gray-700 rounded"></div>
                <div className="w-12 h-12 bg-blue-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
