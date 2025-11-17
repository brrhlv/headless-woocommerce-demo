export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-4 text-white">About</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Modern headless commerce platform built with cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-red-600 transition-colors font-light text-sm">Products</a>
              </li>
              <li>
                <a href="/categories" className="text-gray-400 hover:text-red-600 transition-colors font-light text-sm">Categories</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-red-600 transition-colors font-light text-sm">Blog</a>
              </li>
              <li>
                <a href="/cart" className="text-gray-400 hover:text-red-600 transition-colors font-light text-sm">Cart</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-4 text-white">Connect</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><a href="/about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-red-600 transition-colors">Contact</a></li>
              <li><a href="/faq" className="hover:text-red-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-light text-sm tracking-wide">&copy; {new Date().getFullYear()} Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
