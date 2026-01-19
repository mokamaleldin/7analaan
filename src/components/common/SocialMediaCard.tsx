import { Play } from 'lucide-react';
import { getSocialIcon, getSocialBrandTextColor, type SocialPlatform } from './SocialIcons';

interface SocialMediaCardProps {
  platform: SocialPlatform;
  name: string;
  url: string;
  description: string;
  handle?: string;
  stats?: string;
  iconSize?: string;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  platform,
  name,
  url,
  description,
  handle,
  stats,
  iconSize = "w-6 h-6 sm:w-8 sm:h-8"
}) => {
  const brandColor = getSocialBrandTextColor(platform);
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 text-center transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-xl border border-white/10 hover:border-orange-500/30 overflow-hidden"
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Icon */}
      <div className="relative flex justify-center mb-3">
        <div className={`bg-white/10 p-2 sm:p-2.5 rounded-xl group-hover:scale-110 transition-all duration-300 ${brandColor}`}>
          {getSocialIcon(platform, iconSize)}
        </div>
      </div>

      {/* Content */}
      <h3 className="relative text-lg sm:text-xl font-bold mb-1 text-white">{name}</h3>
      {handle && <p className="relative text-white/60 text-xs mb-1">{handle}</p>}
      <p className="relative text-white/80 text-xs sm:text-sm mb-2">{description}</p>

      {/* Stats Badge */}
      {stats && (
        <div className="relative inline-flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium text-white/80">
          <Play size={10} fill="currentColor" />
          {stats}
        </div>
      )}
    </a>
  );
};

export default SocialMediaCard;
