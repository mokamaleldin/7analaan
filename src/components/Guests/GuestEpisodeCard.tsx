import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface GuestEpisodeCardProps {
  episode: {
    id: number;
    thumbnail: string;
    youtubeUrl: string;
  };
}

const GuestEpisodeCard: React.FC<GuestEpisodeCardProps> = ({ episode }) => {
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Fetch video title from noembed API
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

  return (
    <a
      href={episode.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/5 hover:border-orange-500/30"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={episode.thumbnail}
          alt={title || "Episode thumbnail"}
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
        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2 min-h-[56px]">
          {loading ? (
            <div className="space-y-2">
              <span className="bg-gray-700 animate-pulse rounded block h-5 w-full"></span>
              <span className="bg-gray-700 animate-pulse rounded block h-5 w-3/4"></span>
            </div>
          ) : (
            title
          )}
        </h3>
      </div>
    </a>
  );
};

export default GuestEpisodeCard;
