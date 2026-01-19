import { Link } from 'react-router-dom';
import { MessageCircle, Users, Mic, Lightbulb, Sparkles, ArrowLeft, Play, Star } from 'lucide-react';
import EpisodeCard from '../Podcast/EpisodeCard';

const IntroSection = () => {
  // Featured episodes - 3 highlighted podcasts
  const featuredEpisodes = [
    { id: 1, youtubeUrl: "https://youtu.be/NhhzZfWA9fA" },
    { id: 2, youtubeUrl: "https://youtu.be/4q4X-xGjioI" },
    { id: 3, youtubeUrl: "https://youtu.be/ADEkLdkAMro" },
  ];

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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>ما يميزنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            لماذا <span className="text-orange-500">حان الآن</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن منصة للتفكير النقدي والحوار البناء، نسعى لتقديم منظور جديد حول القضايا التي تهم مجتمعنا
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Episodes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star size={16} />
              <span>حلقات مميزة</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أبرز <span className="text-orange-500">الحلقات</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اكتشف أفضل حلقاتنا المختارة لك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/podcast"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105"
            >
              <Play size={20} fill="currentColor" />
              شاهد جميع الحلقات
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>

        {/* Topics Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
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
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                اكتشف الحلقات
                <ArrowLeft size={18} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-orange-500 transition-colors duration-300 cursor-default"
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
