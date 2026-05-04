import { 
  HeroSection, 
  IntroSection, 
  ShortsSection, 
  SoundCloudSection, 
  JoinSection,
  GuestsSection
} from '../../components/Home';
import { SEO, createBreadcrumbSchema, createPodcastSeriesSchema, createWebsiteSchema } from '../../components/common';

const HomePage = () => {
  const homeDescription = 'بودكاست حان الآن منصة حوار عربية تناقش القضايا الملحّة مع ضيوف من الخبراء والمفكرين. شاهد الحلقات الكاملة والمقاطع القصيرة من حان الآن على يوتيوب وساوند كلاود.';

  const homeStructuredData = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' }
  ]);

  const podcastSeriesSchema = createPodcastSeriesSchema({
    name: 'بودكاست حان الآن - 7analaan',
    description: homeDescription,
    url: '/',
    sameAs: [
      'https://youtube.com/@7analaan',
      'https://soundcloud.com/7analaan',
      'https://www.tiktok.com/@7analaan',
      'https://instagram.com/7analaan',
      'https://twitter.com/7analaan',
      'https://facebook.com/7analaan'
    ]
  });

  const websiteSchema = createWebsiteSchema({
    name: 'حان الآن - 7analaan',
    description: homeDescription,
    url: '/'
  });

  return (
    <>
      <SEO
        title="حان الآن | بودكاست عربي للحوار الهادف والنقاشات المعمقة"
        description={homeDescription}
        keywords={[
          'حان الآن',
          'بودكاست حان الآن',
          'حان الان',
          '7analaan',
          'بودكاست عربي',
          'بودكاست حواري',
          'نقاشات دينية',
          'تطوير شخصي',
          'قضايا اجتماعية',
          'حوار هادف',
          'بودكاست يوتيوب عربي',
          'Han Alan podcast',
          'Arabic podcast',
          'Middle East podcast'
        ]}
        canonicalPath="/"
        pageType="website"
        structuredData={[homeStructuredData, podcastSeriesSchema, websiteSchema]}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="relative">
          <HeroSection />
          <ShortsSection />
          <IntroSection />
          <GuestsSection />
          <SoundCloudSection />
          <JoinSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
