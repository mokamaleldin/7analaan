import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  pageType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const DEFAULT_OG_IMAGE = '/og-image.jpg';
const BRAND_NAME = 'حان الآن - 7analaan';

// Core brand keywords that should appear on every page
const BRAND_KEYWORDS = [
  '7analaan',
  'حان الآن',
  'حان الان',
  'Han Alaan',
  '7an Alan',
  'بودكاست حان الآن',
  'بودكاست عربي',
  'podcast 7analaan'
];


const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  pageType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  structuredData
}) => {
  const canonicalUrl = canonicalPath;
  const fullOgImage = ogImage;
  const allKeywords = [...BRAND_KEYWORDS, ...keywords].join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={BRAND_NAME} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} 
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content="ar_AR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@7analaan" />
      <meta name="twitter:creator" content="@7analaan" />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

// Export helper for creating BreadcrumbList structured data
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Export helper for creating Person structured data (for guests)
export const createPersonSchema = (person: {
  name: string;
  description: string;
  image?: string;
  jobTitle?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  description: person.description,
  image: person.image,
  jobTitle: person.jobTitle,
  url: person.url,
  memberOf: {
    '@type': 'Organization',
    name: 'حان الآن - 7analaan'
  }
});
