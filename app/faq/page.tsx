import { MOCK_PAGES } from '@/lib/mock-data';

export const metadata = {
  title: 'FAQ - Headless WooCommerce Demo',
  description: 'Frequently asked questions about ordering, shipping, returns, and more.',
};

export default function FAQPage() {
  const faqPage = MOCK_PAGES.find(p => p.slug === 'faq');

  if (!faqPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <article
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: faqPage.content.rendered }}
      />
    </div>
  );
}
