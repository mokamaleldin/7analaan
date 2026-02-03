import { Users, Sparkles, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { GuestCard } from '../../components/Guests';
import { PageBackground, SectionDivider, SEO, createBreadcrumbSchema } from '../../components/common';
import { guestsData } from '../../data/types/guests';

type SortType = 'latest' | 'alphabetical';

const GuestsPage = () => {
  const [sortType, setSortType] = useState<SortType>('latest');

  const guests = useMemo(() => {
    const guestsArray = [...guestsData];
    
    switch (sortType) {
      case 'alphabetical':
        return guestsArray.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
      case 'latest':
      default:
        return guestsArray; // Original order (latest first)
    }
  }, [sortType]);

  const guestsStructuredData = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'ضيوف الحلقات', url: '/guests' }
  ]);

  return (
    <>
      <SEO
        title="ضيوف بودكاست حان الآن - 7analaan | مفكرون ومتخصصون ومؤثرون"
        description="تعرف على نخبة الضيوف الذين شاركوا في حلقات بودكاست حان الآن (7analaan). علماء ومفكرون ومتخصصون وخبراء في مختلف المجالات. اكتشف قصصهم وحلقاتهم وتواصل معهم."
        keywords={[
          'ضيوف بودكاست',
          'متحدثون عرب',
          'مفكرون عرب',
          'خبراء ومتخصصون',
          '7analaan guests',
          'podcast guests',
          'ضيوف حان الآن',
          'شخصيات مؤثرة',
          'مقابلات شخصية'
        ]}
        canonicalPath="/guests"
        pageType="website"
        structuredData={guestsStructuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <PageBackground floatingEmojis={['🧑🏻‍💼', '⭐', '🎙️']} />

        {/* Header */}
        <div className="relative pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium font-arabic mb-6 border border-white/10">
                <Sparkles size={16} />
                <span>ضيوف الحلقات</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-primary mb-6">
                <span className="text-white">ضيوف </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">الحلقات</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                تعرف على الضيوف الذين شاركوا معنا في الحلقات السابقة
              </p>
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="relative pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionDivider icon={<Users size={16} />} label="الضيوف" />

            {/* Filter Controls */}
            <div className="mb-8 flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 flex items-center gap-2">
                <Filter size={16} className="text-orange-400 mr-2" />
                <button
                  onClick={() => setSortType('latest')}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 font-arabic text-sm ${
                    sortType === 'latest'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  الأحدث المضافة
                </button>
                <button
                  onClick={() => setSortType('alphabetical')}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 font-arabic text-sm ${
                    sortType === 'alphabetical'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  الترتيب الأبجدي
                </button>
              </div>
            </div>

            {guests.length === 0 ? (
              <div className="text-center text-gray-400">لا يوجد ضيوف مضافون بعد</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {guests.map((guest) => (
                  <GuestCard
                    key={guest.id}
                    guestId={guest.id}
                    imageUrl={guest.imageUrl}
                    name={guest.name}
                    title={guest.title}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestsPage;
