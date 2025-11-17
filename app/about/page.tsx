import { MOCK_PAGES } from '@/lib/mock-data';

export const metadata = {
  title: 'About Us - Headless WooCommerce Demo',
  description: 'Learn about our store, mission, and values.',
};

export default function AboutPage() {
  const aboutPage = MOCK_PAGES.find(p => p.slug === 'about');

  if (!aboutPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: aboutPage.content.rendered }}
      />
    </div>
  );
}
