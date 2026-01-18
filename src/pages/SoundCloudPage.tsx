import { Helmet } from 'react-helmet-async';
import { Headphones, Sparkles } from 'lucide-react';

// SoundCloud track URLs - add more tracks here
const soundcloudTracks = [
  'https://soundcloud.com/7analaan/b4e0c51e-5f89-475e-8470-b1b1ec440be4',
  'https://soundcloud.com/7analaan/1f6728dc-28b0-4a7e-b913-04fe95f666b6',
  'https://soundcloud.com/7analaan/d0137357-e467-4789-9acc-a0c6b571e7bc',
  'https://soundcloud.com/7analaan/b9043ec4-92b9-4385-9f35-6999e4f96b6a',
  'https://soundcloud.com/7analaan/44260578-4da2-4956-a697-fe777bbf1c3d',
  'https://soundcloud.com/7analaan/8db0c564-b216-4f56-a901-81f523f53839',
  'https://soundcloud.com/7analaan/ammarfayed',
  'https://soundcloud.com/7analaan/khaledelhaddad',
];

interface SoundCloudPlayerProps {
  url: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url }) => {
  const encodedUrl = encodeURIComponent(url);
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23f97316&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false`;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-white/5 hover:border-orange-500/30">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
        className="w-full"
      />
    </div>
  );
};

const SoundCloudPage = () => {
  return (
    <>
      <Helmet>
        <title>البودكاست الصوتي | حان الآن - استمع على ساوند كلاود</title>
        <meta name="description" content="استمع لجميع حلقات بودكاست حان الآن على ساوند كلاود. استمع أثناء التنقل في أي وقت وأي مكان." />
        <link rel="canonical" href="https://7analaan.com/soundcloud" />
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
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎵</div>
        <div className="absolute bottom-32 right-20 text-4xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🎶</div>

        {/* Hero Header */}
        <div className="relative pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                <Sparkles size={16} />
                <span>ساوند كلاود</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">البودكاست </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">الصوتي</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                استمع لحلقاتنا في أي وقت وأي مكان
              </p>
            </div>
          </div>
        </div>



        {/* Individual Tracks Section */}
        <div className="relative pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center gap-2 text-gray-400">
                <Headphones size={16} className="text-orange-400" />
                <span>الحلقات</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Tracks Grid - Single column for horizontal players */}
            <div className="grid grid-cols-1 gap-6">
              {soundcloudTracks.map((track, index) => (
                <SoundCloudPlayer key={index} url={track} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoundCloudPage;
