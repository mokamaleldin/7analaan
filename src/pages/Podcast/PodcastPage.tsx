import { Play, Sparkles } from 'lucide-react';
import { EpisodeCard } from '../../components/Podcast';
import { PageBackground, SectionDivider, SEO, createBreadcrumbSchema } from '../../components/common';
import { youtubeEpisodes, getEpisodeObjects } from '../../data/types/youtubeEpisodes';

const PodcastPage = () => {
  // Convert URLs to episode objects
  const episodes = getEpisodeObjects(youtubeEpisodes);

  const podcastStructuredData = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'حلقات البودكاست', url: '/podcast' }
  ]);

  return (
    <>
      <SEO
        title="حلقات بودكاست حان الآن - 7analaan | شاهد جميع الحلقات على يوتيوب"
        description="شاهد جميع حلقات بودكاست حان الآن (7analaan) على يوتيوب. حوارات معمقة مع ضيوف متميزين حول الدين والفكر والتطوير الشخصي والقضايا الاجتماعية المعاصرة. اشترك الآن ولا تفوت أي حلقة جديدة."
        keywords={[
          'حلقات بودكاست',
          'فيديوهات بودكاست',
          'يوتيوب بودكاست عربي',
          'حلقات حان الآن',
          '7analaan episodes',
          'بودكاست فيديو',
          'مقابلات عربية',
          'podcast episodes',
          'YouTube Arabic podcast'
        ]}
        canonicalPath="/podcast"
        pageType="website"
        structuredData={podcastStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <PageBackground floatingEmojis={['🎧', '🎙️', '🎵']} />

        {/* Hero Header */}
        <div className="relative pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                <Sparkles size={16} />
                <span>جميع الحلقات</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">حلقات </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">البودكاست</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                استكشف مكتبتنا الكاملة من الحلقات واختر ما يناسب اهتماماتك
              </p>
            </div>
          </div>
        </div>

        {/* Episodes Section */}
        <div className="relative pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionDivider icon={<Play size={16} fill="currentColor" />} label="أحدث الحلقات" />

            {/* Episodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className="transform transition-all duration-500 hover:z-10"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <EpisodeCard episode={episode} />
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="relative inline-block">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse" />

                <a
                  href="https://youtube.com/@7analaan?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
                >
                  شاهد المزيد على يوتيوب
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">→</span>
                </a>
              </div>
              <p className="text-gray-500 mt-4 text-sm">اشترك وفعّل الجرس ليصلك كل جديد</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastPage;
