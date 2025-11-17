import { MOCK_PAGES } from '@/lib/mock-data';

export const metadata = {
  title: 'Contact Us - Headless WooCommerce Demo',
  description: 'Get in touch with our customer service team.',
};

export default function ContactPage() {
  const contactPage = MOCK_PAGES.find(p => p.slug === 'contact');

  if (!contactPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contactPage.content.rendered }}
      />
    </div>
  );
}
