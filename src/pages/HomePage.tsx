import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import JoinSection from '../components/JoinSection';
import ShortsSection from '../components/ShortsSection';
import SoundCloudSection from '../components/SoundCloudSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>حان الآن | بودكاست عربي - حوار صريح عن قضايا الأمة والإنسان</title>
        <meta name="description" content="بودكاست حان الآن - أفضل بودكاست عربي يقدم حوار صريح ومفتوح عن قضايا الأمة والإنسان. نناقش الدين، التطوير الشخصي، القضايا المعاصرة." />
        <link rel="canonical" href="https://7analaan.com/" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-10 text-5xl animate-bounce opacity-20" style={{ animationDuration: '3s' }}>🎧</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎙️</div>
        <div className="absolute bottom-32 right-20 text-4xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🎵</div>

        <div className="relative">
          <HeroSection />
          <ShortsSection />
          <IntroSection />
          <SoundCloudSection />
          <JoinSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;