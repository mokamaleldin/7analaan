import { Helmet } from 'react-helmet-async';
import { Play, Sparkles } from 'lucide-react';
import EpisodeCard from '../components/EpisodeCard';

const PodcastPage = () => {
  // Just add YouTube URLs here - everything else is automatic!
  const youtubeUrls = [
    "https://youtu.be/NhhzZfWA9fA",
    "https://youtu.be/4q4X-xGjioI",
    "https://youtu.be/ADEkLdkAMro",
    "https://youtu.be/FLZk4la6xtU",
    "https://youtu.be/y0vnEBlSKBE",
    "https://youtu.be/DM_8VWC13ME",
    "https://youtu.be/GahNBf0JLTI",
    "https://youtu.be/3AEtcsZeMwY",
    "https://youtu.be/AdeaOEhj-dY",
    "https://youtu.be/X-H4PLqdGiE"
  ];

  // Convert URLs to episode objects
  const episodes = youtubeUrls.map((url, index) => ({
    id: index + 1,
    youtubeUrl: url
  }));

  return (
    <>
      <Helmet>
        <title>حلقات البودكاست | حان الآن - شاهد جميع الحلقات</title>
        <meta name="description" content="شاهد جميع حلقات بودكاست حان الآن. نقاشات معمقة حول الدين، التطوير الشخصي، القضايا الاجتماعية. استمع الآن!" />
        <link rel="canonical" href="https://7analaan.com/podcast" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-10 text-5xl animate-bounce opacity-20" style={{ animationDuration: '3s' }}>🎧</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎙️</div>
        <div className="absolute bottom-32 right-20 text-4xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🎵</div>

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
            {/* Section Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center gap-2 text-gray-400">
                <Play size={16} className="text-orange-400" fill="currentColor" />
                <span>أحدث الحلقات</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

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