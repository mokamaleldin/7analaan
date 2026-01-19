import { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { shorts, type Short } from '../../data/youtubeShorts';

interface ShortCardProps {
  short: Short;
}

const ShortCard: React.FC<ShortCardProps> = ({ short }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`;

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="group flex-shrink-0 w-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/5 hover:border-orange-500/30">
      {/* Video Container - Vertical 9:16 aspect ratio */}
      <div className="relative aspect-[9/16] overflow-hidden">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${short.videoId}?autoplay=1&loop=1&playlist=${short.videoId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumbnail}
              alt="Short video"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
              onClick={handleClick}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Play Button */}
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handleClick}
            >
              <div className="bg-orange-500/90 backdrop-blur-sm rounded-full p-5 opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-xl shadow-orange-500/50">
                <Play className="text-white" size={28} fill="currentColor" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ShortsSection = () => {
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

  return (
    <section className="py-16 px-6 lg:px-8 relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎬 مقاطع قصيرة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            استراحة <span className="text-orange-500">سريعة</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            مقاطع قصيرة ومميزة من حلقاتنا
          </p>
        </div>

        {/* Shorts Carousel */}
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
            {shorts.map((short) => (
              <ShortCard key={short.id} short={short} />
            ))}
          </div>
        </div>

        {/* View More Hint */}
        <div className="text-center mt-6 md:hidden">
          <p className="text-gray-500 text-sm">← اسحب لمشاهدة المزيد →</p>
        </div>
      </div>
    </section>
  );
};

export default ShortsSection;
