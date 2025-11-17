import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Apple Design Preview - Headless WooCommerce Demo',
  description: 'Preview of Apple-inspired design system',
};

export default function ApplePreviewPage() {
  return (
    <div className="apple-theme min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-[980px] mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Premium Wireless<br />Headphones
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience superior sound quality with active noise cancellation and 30-hour battery life.
          </p>
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <button className="apple-button-primary">
              Buy Now
            </button>
            <Link href="/" className="text-blue-600 text-lg font-medium hover:underline">
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
      <section className="py-24">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-5xl font-semibold text-gray-900 text-center mb-16">
            Why you&apos;ll love it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Premium Sound
              </h3>
              <p className="text-lg text-gray-600">
                Custom-tuned drivers deliver rich, balanced audio across all frequencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                30-Hour Battery
              </h3>
              <p className="text-lg text-gray-600">
                All-day listening with fast charging. 5 minutes gives you 3 hours of playback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Active Noise Cancellation
              </h3>
              <p className="text-lg text-gray-600">
                Block out distractions and immerse yourself in your music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-semibold text-gray-900 text-center mb-4">
            Explore the lineup.
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Choose the best one for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-semibold text-gray-900">
                  Premium Wireless Headphones
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">$249.99</span>
                  <span className="text-2xl font-semibold text-gray-900">$199.99</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Buy
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-semibold text-gray-900">
                  Smart Watch Pro
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-gray-900">$299.99</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Buy
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-semibold text-gray-900">
                  Portable Bluetooth Speaker
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">$99.99</span>
                  <span className="text-2xl font-semibold text-gray-900">$79.99</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Buy
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-semibold text-gray-900">
                  Mechanical Keyboard RGB
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-gray-900">$149.99</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Liquid Glass Effect */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        <div className="relative max-w-[980px] mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Ready to get started?
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Experience the difference with premium audio equipment.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors inline-block">
              Back to Site
            </Link>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="bg-white py-24">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">
            Component Library
          </h2>

          {/* Buttons */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Primary Button
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Secondary Button
              </button>
              <button className="text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Tertiary Button
              </button>
              <button className="bg-gray-200 text-gray-400 px-6 py-3 rounded-full font-medium cursor-not-allowed">
                Disabled Button
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Input Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Appleseed"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                New
              </span>
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                In Stock
              </span>
              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                Limited
              </span>
              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                Sale
              </span>
              <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                Standard
              </span>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Typography</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Headline 1</p>
                <h1 className="text-6xl font-semibold text-gray-900">The quick brown fox</h1>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Headline 2</p>
                <h2 className="text-5xl font-semibold text-gray-900">The quick brown fox</h2>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Headline 3</p>
                <h3 className="text-4xl font-semibold text-gray-900">The quick brown fox</h3>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Body Large</p>
                <p className="text-xl text-gray-700">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Body</p>
                <p className="text-base text-gray-700">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Body Small</p>
                <p className="text-sm text-gray-600">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
