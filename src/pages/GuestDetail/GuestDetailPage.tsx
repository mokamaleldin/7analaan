import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { getSocialIcon, getSocialLabel, getSocialColor, SEO, createBreadcrumbSchema, createPersonSchema } from '../../components/common';
import { GuestEpisodeCard, GuestShortsSection } from '../../components/Guests';
import { guestsData } from '../../data/types/guests';

const GuestDetailPage = () => {
  const { guestId } = useParams<{ guestId: string }>();
  const guest = guestsData.find((g) => g.id === Number(guestId));

  if (!guest) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-primary text-white mb-4">الضيف غير موجود</h1>
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

  const guestBreadcrumb = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'ضيوف الحلقات', url: '/guests' },
    { name: guest.name, url: `/guests/${guest.id}` }
  ]);

  const guestPersonSchema = createPersonSchema({
    name: guest.name,
    description: guest.bio,
    image: guest.imageUrl,
    jobTitle: guest.title,
    url: `/guests/${guest.id}`
  });

  // Combine both schemas
  const combinedStructuredData = [guestBreadcrumb, guestPersonSchema];

  return (
    <>
      <SEO
        title={`${guest.name} | ضيف بودكاست حان الآن - 7analaan`}
        description={`تعرف على ${guest.name} - ${guest.title}. ${guest.specialty}. ${guest.bio.substring(0, 120)}... شاهد جميع حلقاته في بودكاست حان الآن.`}
        keywords={[
          guest.name,
          guest.title,
          guest.specialty,
          'ضيف بودكاست',
          'مقابلة حصرية',
          `${guest.name} حان الآن`,
          `${guest.name} 7analaan`,
          'حوار مع',
          'لقاء خاص'
        ]}
        canonicalPath={`/guests/${guest.id}`}
        pageType="profile"
        ogImage={guest.imageUrl}
        structuredData={combinedStructuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium font-arabic mb-6 border border-white/10">
                  <Sparkles size={16} />
                  <span>ضيف الحلقات</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold font-primary text-white mb-4">{guest.name}</h1>
                <p className="text-xl text-orange-400 mb-6">{guest.title}</p>
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
                        className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-gray-300 transition-all duration-300 border border-white/10 ${getSocialColor(link.platform as any)}`}
                      >
                        {getSocialIcon(link.platform as any)}
                        <span className="text-sm font-medium font-arabic">{getSocialLabel(link.platform as any)}</span>
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
                  <GuestEpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Shorts Section */}
        {guest.shorts && guest.shorts.length > 0 && (
          <GuestShortsSection shorts={guest.shorts} guestName={guest.name} />
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
