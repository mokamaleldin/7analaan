import { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, Film } from 'lucide-react';
import type { GuestShort } from '../../data/types/types';

interface ShortCardProps {
  short: GuestShort;
}

const ShortCard: React.FC<ShortCardProps> = ({ short }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`;

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="group flex-shrink-0 w-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/5 hover:border-orange-500/30">
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
              <div className="bg-orange-500/90 backdrop-blur-sm rounded-full p-4 opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-xl shadow-orange-500/50">
                <Play className="text-white" size={24} fill="currentColor" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface GuestShortsSectionProps {
  shorts: GuestShort[];
  guestName: string;
}

const GuestShortsSection: React.FC<GuestShortsSectionProps> = ({ shorts, guestName }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (shorts.length === 0) {
    return null;
  }

  return (
    <div className="relative pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex items-center gap-2 text-gray-400">
            <Film size={16} className="text-red-400" />
            <span>مقتطفات مع {guestName}</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Shorts Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {shorts.length > 4 && (
            <>
              <button
                onClick={() => scroll('right')}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
              <button
                onClick={() => scroll('left')}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            </>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {shorts.map((short) => (
              <ShortCard key={short.id} short={short} />
            ))}
          </div>
        </div>

        {/* View More Hint */}
        {shorts.length > 3 && (
          <div className="text-center mt-4 md:hidden">
            <p className="text-gray-500 text-sm">← اسحب لمشاهدة المزيد →</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestShortsSection;
