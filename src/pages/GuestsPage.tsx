import { Helmet } from 'react-helmet-async';
import { Users, Sparkles } from 'lucide-react';
import GuestCard from '../components/GuestCard';

interface Guest {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

const GuestsPage = () => {
  // ضع الضيوف هنا — أضف/عدل العناصر كما تريد
  const guests: Guest[] = [
    {
      id: 1,
      name: 'ضيف سابق',
      title: 'كاتب وباحث',
      imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    },
  ];

  return (
    <>
      <Helmet>
        <title>ضيوف الحلقات | حان الآن - ضيوف الحلقات السابقة</title>
        <meta name="description" content="تعرف على الضيوف الذين شاركوا في حلقات بودكاست حان الآن." />
        <link rel="canonical" href="https://7analaan.com/guests" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-10 text-5xl animate-bounce opacity-20" style={{ animationDuration: '3s' }}>🧑🏻‍💼</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-32 right-20 text-4xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🎙️</div>

        {/* Header */}
        <div className="relative pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                <Sparkles size={16} />
                <span>ضيوف الحلقات</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
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
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center gap-2 text-gray-400">
                <Users size={16} className="text-orange-400" />
                <span>الضيوف</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {guests.length === 0 ? (
              <div className="text-center text-gray-400">لا يوجد ضيوف مضافون بعد</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {guests.map((guest) => (
                  <GuestCard
                    key={guest.id}
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
