import { useState, useEffect } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface Episode {
  id: number;
  youtubeUrl: string;
}

interface EpisodeCardProps {
  episode: Episode;
}

const getVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/);
  return match ? match[1] : '';
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = getVideoId(episode.youtubeUrl);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Fetch video title from noembed (works 100%)
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch(`https://noembed.com/embed?url=${episode.youtubeUrl}`);
        const data = await response.json();
        setTitle(data.title || 'حلقة من بودكاست حان الآن');
      } catch {
        setTitle('حلقة من بودكاست حان الآن');
      }
      setLoading(false);
    };
    fetchTitle();
  }, [episode.youtubeUrl]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleWatchOnYoutube = () => {
    window.open(episode.youtubeUrl, '_blank');
  };

  return (
    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/5 hover:border-orange-500/30">
      {/* Video / Thumbnail */}
      <div className="relative overflow-hidden">
        {isPlaying ? (
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="cursor-pointer" onClick={handlePlayClick}>
            <img
              src={thumbnail}
              alt={title || "Episode thumbnail"}
              className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-orange-500/90 backdrop-blur-sm rounded-full p-5 opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-xl shadow-orange-500/50">
                <Play className="text-white" size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-sm font-semibold font-primary text-white mb-4 leading-relaxed line-clamp-2 min-h-[40px]">
          {loading ? (
            <div className="space-y-2">
              <span className="bg-gray-700 animate-pulse rounded block h-4 w-full"></span>
              <span className="bg-gray-700 animate-pulse rounded block h-4 w-3/4"></span>
            </div>
          ) : (
            title
          )}
        </h3>

        {/* Action Button - Opens YouTube */}
        <button
          onClick={handleWatchOnYoutube}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02]"
        >
          <Play size={18} fill="currentColor" />
          <span>مشاهدة الحلقة</span>
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
