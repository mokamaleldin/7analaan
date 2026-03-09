import { Link } from 'react-router-dom';
import { Play, ArrowLeft, Youtube, Headphones } from 'lucide-react';
import { youtubeEpisodes } from '../../data/content';

// Helper: Extract video ID from YouTube URL
const getVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/);
  return match ? match[1] : '';
};

const HeroSection = () => {
  // Get the first (latest) episode
  const latestEpisodeUrl = youtubeEpisodes[0];
  const latestVideoId = getVideoId(latestEpisodeUrl);
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          {/* Left Content - 1/3 */}
          <div className="text-center lg:text-right order-2 lg:order-1 lg:col-span-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium font-arabic mb-6">
              <Headphones size={16} />
              <span>بودكاست عربي متميز</span>
            </div>

            {/* Main Logo */}
            <div className="mb-6">
              <img src="/logo.svg" alt="حان الآن" className="h-32 lg:h-64 w-auto mx-auto lg:mx-0 lg:mr-0" />
            </div>

            {/* Subtitle */}
            <p className="text-2xl lg:text-3xl font-bold font-primary mb-6 text-gray-100 leading-tight">
              حوار صريح عن قضايا الأمة والإنسان
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              انضموا إلينا في رحلة فكرية ممتعة نناقش فيها أهم القضايا المعاصرة مع نخبة من المفكرين والخبراء
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link
                to="/podcast"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold font-arabic transition-all duration-300 flex items-center shadow-lg hover:shadow-orange-500/25 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Play size={32} className="ml-2" fill="currentColor" />
                شاهد الحلقات
                {/* <ArrowLeft size={32} className="mr-2 group-hover:-translate-x-1 transition-transform" /> */}
              </Link>
              <Link
                to="https://youtube.com/@7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold font-arabic transition-all duration-300 flex items-center shadow-lg hover:shadow-orange-500/25 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Youtube size={32} className="ml-2" />
                اشترك في القناة
              </Link>
            </div>
          </div>

          {/* Right Content - Latest Episode - 2/3 */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl" />

              {/* Video Container */}
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${latestVideoId}`}
                    title="Latest Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-gray-900 to-gray-800">
                  <p className="text-orange-400 text-sm font-medium mb-1">أحدث حلقة</p>
                  <p className="text-white font-semibold font-primary">شاهد آخر حلقاتنا الآن</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
