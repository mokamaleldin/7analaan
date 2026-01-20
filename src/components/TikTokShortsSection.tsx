import { useRef } from 'react';

// Default TikTok videos from @7analaan
const DEFAULT_VIDEOS = [
  'https://www.tiktok.com/@7analaan/video/7595257877040794900',
  'https://www.tiktok.com/@7analaan/video/7565231531602513170',
  'https://www.tiktok.com/@7analaan/video/7580424122895846676',
  'https://www.tiktok.com/@7analaan/video/7529919918570048775',
  'https://www.tiktok.com/@7analaan/video/7548135190023916818',
  'https://www.tiktok.com/@7analaan/video/7563363015450496276',
  'https://www.tiktok.com/@7analaan/video/7574109639906790677',
];

// Declare TikTok embed type for TypeScript
declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        render: () => void;
      };
    };
  }
}

/**
 * Extracts the video ID from a TikTok URL
 */
export function extractTikTokId(url: string): string | null {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : null;
}

interface TikTokVideoCardProps {
  videoId: string;
}

/**
 * Individual TikTok video card - minimal player (video only)
 * Iframe shows TikTok player with thumbnail; plays when clicked.
 */
const TikTokVideoCard = ({ videoId }: TikTokVideoCardProps) => {
  return (
    <div className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[340px]">
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 hover:scale-[1.02]">
        <div className="relative aspect-[9/16]">
          <iframe
            src={`https://www.tiktok.com/embed/v2/${videoId}`}
            loading="lazy"
            allowFullScreen
            allow="encrypted-media"
            className="absolute inset-0 w-full h-full"
            title={`TikTok video ${videoId}`}
          />
        </div>
      </div>
    </div>
  );
};

interface TikTokShortsSectionProps {
  videos?: string[];
  title?: string;
}

/**
 * TikTok Shorts Section - Horizontal scrollable strip of TikTok videos
 */
const TikTokShortsSection = ({
  videos = DEFAULT_VIDEOS,
}: TikTokShortsSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract video IDs
  const videoIds = videos
    .map((url) => extractTikTokId(url))
    .filter((id): id is string => id !== null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
  };

  if (videoIds.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* No header or captions - show videos only */}

        {/* Carousel Container with Navigation */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 hover:bg-orange-500 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2 hover:scale-110 backdrop-blur-sm"
            aria-label="التمرير يسارًا"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 hover:bg-orange-500 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1/2 hover:scale-110 backdrop-blur-sm"
            aria-label="التمرير يمينًا"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Strip */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'thin' }}
          >
            {/* Left Padding */}
            <div className="shrink-0 w-2 sm:w-4" />

            {videoIds.map((id) => (
              <TikTokVideoCard key={id} videoId={id} />
            ))}

            {/* Right Padding */}
            <div className="shrink-0 w-2 sm:w-4" />
          </div>
        </div>

        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TikTokShortsSection;
