import { Youtube, Headphones, Mic, Star, TrendingUp, Users } from 'lucide-react';
import { SocialMediaCard } from '../common';
import { podcastSocialLinks, youtubeSubscribeUrl } from '../../data/types/socialLinks';

const JoinSection = () => {
  const highlights = [
    { icon: <Mic className="text-orange-400" size={24} />, text: 'حلقات أسبوعية' },
    { icon: <Users className="text-orange-400" size={24} />, text: 'ضيوف متميزون' },
    { icon: <TrendingUp className="text-orange-400" size={24} />, text: 'مواضيع تهمك' },
    { icon: <Star className="text-orange-400" size={24} />, text: 'محتوى حصري' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>🎧</div>
      <div className="absolute bottom-40 left-20 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎙️</div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/10">
            <Headphones size={18} className="text-orange-400" />
            <span>انضم إلى مجتمعنا</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            تابعنا على <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">منصاتنا</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            كن جزءاً من الحوار واحصل على أحدث الحلقات والمحتوى الحصري
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
              {item.icon}
              <span className="text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {podcastSocialLinks.map((social, index) => (
            <SocialMediaCard
              key={index}
              platform={social.platform}
              name={social.name}
              url={social.url}
              description={social.description}
              stats={social.stats}
              iconSize="w-5 h-5 sm:w-6 sm:h-6"
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur-xl opacity-30" />

          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  لا تفوت أي <span className="text-orange-400">حلقة</span> جديدة
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  اشترك في قناتنا على يوتيوب وفعّل جرس الإشعارات لتصلك كل الحلقات الجديدة فور نزولها
                </p>
                <a
                  href={youtubeSubscribeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
                >
                  <Youtube size={24} />
                  اشترك الآن
                </a>
              </div>

              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute inset-4 rounded-full border-2 border-orange-500/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />

                  <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-orange-500/30">
                    <span className="text-6xl mb-2">🎙️</span>
                    <p className="text-white font-bold">حان الآن</p>
                    <p className="text-white/80 text-xs">بودكاست</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
