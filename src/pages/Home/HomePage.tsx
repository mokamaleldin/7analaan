import { 
  HeroSection, 
  IntroSection, 
  ShortsSection, 
  SoundCloudSection, 
  JoinSection,
  GuestsSection
} from '../../components/Home';
import { SEO, createBreadcrumbSchema } from '../../components/common';

const HomePage = () => {
  const homeStructuredData = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' }
  ]);

  return (
    <>
      <SEO
        title="حان الآن - 7analaan | بودكاست عربي للحوار الهادف والنقاشات المعمقة"
        description="بودكاست حان الآن (7analaan) - أفضل بودكاست عربي يقدم حوارات صريحة ومفتوحة عن قضايا الأمة والإنسان. نستضيف نخبة من المفكرين والمتخصصين لنناقش الدين، التطوير الشخصي، القضايا الاجتماعية والمعاصرة. استمع الآن على يوتيوب وساوند كلاود."
        keywords={[
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
        structuredData={homeStructuredData}
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
