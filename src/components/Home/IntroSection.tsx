import { Link } from 'react-router-dom';
import { MessageCircle, Users, Mic, Lightbulb, Sparkles, ArrowLeft, Play, Star } from 'lucide-react';
import EpisodeCard from '../Podcast/EpisodeCard';
import { featuredEpisodes, getEpisodeObjects } from '../../data/types/youtubeEpisodes';

const IntroSection = () => {
  // Featured episodes - 3 highlighted podcasts from data
  const episodes = getEpisodeObjects(featuredEpisodes);

  const features = [
    {
      icon: <MessageCircle className="text-white" size={26} />,
      title: "حوار مفتوح",
      description: "نناقش القضايا المهمة بصراحة ووضوح دون تحفظ"
    },
    {
      icon: <Users className="text-white" size={26} />,
      title: "ضيوف متميزون",
      description: "نستضيف خبراء ومفكرين لإثراء النقاش"
    },
    {
      icon: <Mic className="text-white" size={26} />,
      title: "إنتاج عالي الجودة",
      description: "نقدم محتوى صوتي ومرئي بجودة احترافية"
    },
    {
      icon: <Lightbulb className="text-white" size={26} />,
      title: "أفكار ملهمة",
      description: "نقدم رؤى جديدة تفتح آفاق التفكير"
    }
  ];

  const topics = [
    "العلاقات الأسرية",
    "القضايا المعاصرة",
    "التنمية الذاتية",
    "الهوية والثقافة",
    "الاقتصاد والمال",
    "التاريخ والسياسة"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/10">
            <Sparkles size={16} />
            <span>ما يميزنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            لماذا <span className="text-orange-500">حان الآن</span>؟
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            حان الآن منصة للتفكير النقدي والحوار البناء، نسعى لتقديم منظور جديد حول القضايا التي تهم مجتمعنا العربي
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 text-center transform hover:-translate-y-2 border border-white/10 hover:border-orange-500/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-primary text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Episodes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-sm font-medium font-arabic mb-4 border border-white/10">
              <Star size={16} />
              <span>حلقات مميزة</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold font-primary text-white mb-4">
              أبرز <span className="text-orange-500">الحلقات</span>
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              اكتشف أفضل حلقاتنا المختارة لك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/podcast"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105"
              >
                <Play size={20} fill="currentColor" />
                شاهد جميع الحلقات
                <ArrowLeft size={18} />
              </Link>
              <Link
                to="/guests"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/10"
              >
                تعرف على ضيوف حان الآن
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                نتحدث عن مواضيع <span className="text-orange-400">تهمك</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                نناقش في حلقاتنا مختلف القضايا التي تشغل المجتمع العربي والإسلامي، من العلاقات الأسرية إلى القضايا السياسية والاقتصادية، بأسلوب هادف وبناء.
              </p>
              <Link
                to="/podcast"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold font-arabic transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                اكتشف الحلقات
                <ArrowLeft size={18} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-medium font-arabic hover:bg-orange-500 transition-colors duration-300 cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
