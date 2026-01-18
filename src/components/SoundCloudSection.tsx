import { Link } from 'react-router-dom';
import { Headphones, ArrowLeft } from 'lucide-react';

// SoundCloud track URLs
const soundcloudTracks = [
  'https://soundcloud.com/7analaan/b4e0c51e-5f89-475e-8470-b1b1ec440be4',
  'https://soundcloud.com/7analaan/1f6728dc-28b0-4a7e-b913-04fe95f666b6',
  'https://soundcloud.com/7analaan/d0137357-e467-4789-9acc-a0c6b571e7bc',
];

interface SoundCloudPlayerProps {
  url: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url }) => {
  // Encode the URL for the embed - use visual=false for waveform style
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

const SoundCloudSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Headphones size={16} />
            <span>استمع الآن</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            بودكاست <span className="text-orange-500">صوتي</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            استمع لحلقاتنا أثناء التنقل على ساوند كلاود
          </p>
        </div>

        {/* SoundCloud Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {soundcloudTracks.map((track, index) => (
            <SoundCloudPlayer key={index} url={track} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/soundcloud"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105"
          >
            <Headphones size={20} />
            جميع الحلقات الصوتية
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoundCloudSection;
