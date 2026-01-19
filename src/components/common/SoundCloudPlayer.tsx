interface SoundCloudPlayerProps {
  url: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url }) => {
  const encodedUrl = encodeURIComponent(url);
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23f97316&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false`;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-white/5 hover:border-orange-500/30">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
        className="w-full"
        title="SoundCloud Player"
      />
    </div>
  );
};

export default SoundCloudPlayer;
