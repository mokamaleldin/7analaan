import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Users } from 'lucide-react';
import { guestsData } from '../../data/guests';

interface GuestCardProps {
  guestId: number;
  imageUrl: string;
  name: string;
  title: string;
}

const GuestCard: React.FC<GuestCardProps> = ({ guestId, imageUrl, name, title }) => {
  return (
    <Link 
      to={`/guests/${guestId}`}
      className="group flex-shrink-0 w-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/5 hover:border-orange-500/30 block"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{name}</h3>
          <p className="text-gray-300 text-sm line-clamp-1">{title}</p>
        </div>
      </div>
    </Link>
  );
};

const GuestsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Don't render if no guests
  if (guestsData.length === 0) return null;

  return (
    <section className="py-16 px-6 lg:px-8 relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users size={14} className="inline ml-1" />
            ضيوف الحلقات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            تعرف على <span className="text-orange-500">ضيوفنا</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            نخبة من المفكرين والخبراء شاركوا معنا في الحلقات
          </p>
        </div>

        {/* Guests Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {guestsData.map((guest) => (
              <GuestCard 
                key={guest.id} 
                guestId={guest.id}
                imageUrl={guest.imageUrl}
                name={guest.name}
                title={guest.title}
              />
            ))}
          </div>
        </div>

        {/* View More Hint (Mobile) */}
        <div className="text-center mt-6 md:hidden">
          <p className="text-gray-500 text-sm">← اسحب لمشاهدة المزيد →</p>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/guests"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105"
          >
            <Users size={20} />
            عرض جميع الضيوف
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
