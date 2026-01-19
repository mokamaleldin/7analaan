import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { PageBackground, getSocialIcon, getSocialLabel, getSocialColor } from '../../components/common';
import { guestsData } from '../../data/guests';

const GuestDetailPage = () => {
  const { guestId } = useParams<{ guestId: string }>();
  const guest = guestsData.find((g) => g.id === Number(guestId));

  if (!guest) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">الضيف غير موجود</h1>
          <Link
            to="/guests"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة لصفحة الضيوف</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{guest.name} | حان الآن - ضيف الحلقات</title>
        <meta name="description" content={`تعرف على ${guest.name} - ${guest.title}. ${guest.bio}`} />
        <link rel="canonical" href={`https://7analaan.com/guests/${guest.id}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <PageBackground floatingEmojis={['🧑🏻‍💼', '⭐', '🎙️']} />

        {/* Back Button */}
        <div className="relative pt-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/guests"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              <span>العودة لصفحة الضيوف</span>
            </Link>
          </div>
        </div>

        {/* Guest Header */}
        <div className="relative pt-8 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Guest Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src={guest.imageUrl}
                  alt={guest.name}
                  className="relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Guest Info */}
              <div className="flex-1 text-center lg:text-right">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                  <Sparkles size={16} />
                  <span>ضيف الحلقات</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">{guest.name}</h1>
                <p className="text-xl text-orange-400 mb-2">{guest.title}</p>
                <p className="text-lg text-gray-400 mb-6">{guest.specialty}</p>
                <p className="text-gray-300 max-w-2xl leading-relaxed mb-8">{guest.bio}</p>

                {/* Social Links */}
                {guest.socialLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {guest.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-gray-300 transition-all duration-300 border border-white/10 ${getSocialColor(link.platform)}`}
                      >
                        {getSocialIcon(link.platform)}
                        <span className="text-sm font-medium">{getSocialLabel(link.platform)}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Episodes Section */}
        {guest.episodes.length > 0 && (
          <div className="relative pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center gap-2 text-gray-400">
                  <Play size={16} className="text-orange-400" />
                  <span>الحلقات مع {guest.name}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {guest.episodes.map((episode) => (
                  <a
                    key={episode.id}
                    href={episode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/5 hover:border-orange-500/30"
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-orange-500/90 backdrop-blur-sm rounded-full p-4 opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-xl shadow-orange-500/50">
                          <Play className="text-white" size={24} fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                        {episode.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Episodes */}
        {guest.episodes.length === 0 && (
          <div className="relative pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <p className="text-gray-400">لا توجد حلقات مسجلة حالياً</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GuestDetailPage;
