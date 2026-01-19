import { Helmet } from 'react-helmet-async';
import { Headphones } from 'lucide-react';
import { SoundCloudPlayer, PageBackground, SectionDivider } from '../../components/common';
import { soundcloudTracks } from '../../data/soundcloudTracks';

const SoundCloudPage = () => {
  return (
    <>
      <Helmet>
        <title>البودكاست الصوتي | حان الآن - استمع على ساوند كلاود</title>
        <meta name="description" content="استمع لجميع حلقات بودكاست حان الآن على ساوند كلاود. استمع أثناء التنقل في أي وقت وأي مكان." />
        <link rel="canonical" href="https://7analaan.com/soundcloud" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <PageBackground floatingEmojis={['🎧', '🎵', '🎶']} />

        {/* Hero Header */}
        <div className="relative pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                <Headphones size={16} />
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
            <SectionDivider icon={<Headphones size={16} />} label="الحلقات" />

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
