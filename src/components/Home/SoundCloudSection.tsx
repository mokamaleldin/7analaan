import { Link } from 'react-router-dom';
import { Headphones, ArrowLeft } from 'lucide-react';
import { SoundCloudPlayer } from '../common';
import { homepageSoundcloudTracks } from '../../data/types/soundcloudTracks';

const SoundCloudSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
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
          {homepageSoundcloudTracks.map((track, index) => (
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
