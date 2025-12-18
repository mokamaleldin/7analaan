import React from 'react';
import { Play, Calendar, Eye, ExternalLink } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadDate: string;
  youtubeUrl: string;
}

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const handleWatchClick = () => {
    window.open(episode.youtubeUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      {/* Thumbnail */}
      <div className="relative group cursor-pointer" onClick={handleWatchClick}>
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="bg-orange-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <Play className="text-white" size={24} fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {episode.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {episode.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Eye size={16} className="ml-1" />
            <span>{episode.views} مشاهدة</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="ml-1" />
            <span>{episode.uploadDate}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleWatchClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
        >
          <Play size={18} className="ml-2" />
          مشاهدة الحلقة
          <ExternalLink size={16} className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;