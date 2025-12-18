import React, { useState } from 'react';
import { Search, Play, Calendar, Eye } from 'lucide-react';
import EpisodeCard from '../components/EpisodeCard';

const PodcastPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample episodes data - replace with real data from your API
  const episodes = [
    {
      id: 1,
      title: "أسرار العلاقات الناجحة.. وفن إدارة العلاقات الضاغطة! | د. خالد الحداد في بودكاست حان الآن",
      description: "حلقة مميزة مع الدكتور خالد الحداد حول أسرار بناء العلاقات الناجحة وكيفية التعامل مع الضغوط في العلاقات الإنسانية",
      thumbnail: "https://img.youtube.com/vi/DM_8VWC13ME/maxresdefault.jpg",
      duration: "2:02:40",
      views: "49K",
      uploadDate: "6 days ago",
      youtubeUrl: "https://youtu.be/DM_8VWC13ME?si=vetjfuSQbSSPFXz6"
    },
    {
      id: 2,
      title: "خطة إنقاذ مرتبك وإزاي تدير فلوسك صح؟ | بودكاست حان الآن مع الدكتور مصطفى شاهين",
      description: "حلقة هامة مع الدكتور مصطفى شاهين حول إدارة الأموال الشخصية ووضع خطة مالية ناجحة لحياة أفضل",
      thumbnail: "https://img.youtube.com/vi/y0vnEBlSKBE/maxresdefault.jpg",
      duration: "1:47:08",
      views: "36K",
      uploadDate: "3 weeks ago",
      youtubeUrl: "https://youtu.be/y0vnEBlSKBE?si=wgePyBEXcmCGB8-d"
    },
    {
      id: 3,
      title: "الهوية الإسلامية.. إلى أين؟! || بودكاست حان الآن مع الشيخ طه سليمان عامر",
      description: "حوار عميق مع الشيخ طه سليمان عامر حول الهوية الإسلامية في العصر الحديث والتحديات التي تواجهها",
      thumbnail: "https://img.youtube.com/vi/3AEtcsZeMwY/maxresdefault.jpg",
      duration: "1:44:17",
      views: "2.8K",
      uploadDate: "1 month ago",
      youtubeUrl: "https://youtu.be/3AEtcsZeMwY?si=gtY7jCdre2WRUil3"
    },
    {
      id: 4,
      title: "تأثير الحركة الطلابية في التاريخ المصري || بودكاست حان الآن مع الدكتور عمار فايد",
      description: "استكشاف دور الحركة الطلابية في تشكيل التاريخ المصري الحديث مع الدكتور عمار فايد",
      thumbnail: "https://img.youtube.com/vi/AdeaOEhj-dY/maxresdefault.jpg",
      duration: "2:25:48",
      views: "21K",
      uploadDate: "2 months ago",
      youtubeUrl: "https://youtu.be/AdeaOEhj-dY?si=pQXL_4i1UN5WyOd9"
    },
    {
      id: 5,
      title: "مفاتيح النجاة من الضغوط النفسية! | بودكاست حان الآن مع الدكتور خالد الحداد",
      description: "حلقة مهمة مع الدكتور خالد الحداد حول كيفية التعامل مع الضغوط النفسية وإيجاد طرق صحية للتخلص منها",
      thumbnail: "https://img.youtube.com/vi/X-H4PLqdGiE/maxresdefault.jpg",
      duration: "2:45:10",
      views: "296K",
      uploadDate: "3 months ago",
      youtubeUrl: "https://youtu.be/X-H4PLqdGiE?si=Qs_cYgTeTdjLAaVe"
    }
  ];

  const filteredEpisodes = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            حلقات <span className="text-orange-500">البودكاست</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف مكتبتنا الكاملة من الحلقات واختر ما يناسب اهتماماتك
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="ابحث في الحلقات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>

        {/* No results message */}
        {filteredEpisodes.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              لم يتم العثور على حلقات تطابق بحثك
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
            >
              مسح البحث
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastPage;