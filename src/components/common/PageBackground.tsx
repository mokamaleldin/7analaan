interface PageBackgroundProps {
  floatingEmojis?: [string, string, string];
}

const PageBackground: React.FC<PageBackgroundProps> = ({ 
  floatingEmojis = ['🎧', '🎙️', '🎵'] 
}) => {
  return (
    <>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-10 text-5xl animate-bounce opacity-20" style={{ animationDuration: '3s' }}>
        {floatingEmojis[0]}
      </div>
      <div className="absolute top-1/2 left-10 text-4xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        {floatingEmojis[1]}
      </div>
      <div className="absolute bottom-32 right-20 text-4xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        {floatingEmojis[2]}
      </div>
    </>
  );
};

export default PageBackground;
