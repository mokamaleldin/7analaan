import { Link } from 'react-router-dom';
import { Play, ArrowLeft, Youtube, Headphones } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]" />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          {/* Left Content - 1/3 */}
          <div className="text-center lg:text-right order-2 lg:order-1 lg:col-span-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Headphones size={16} />
              <span>بودكاست عربي متميز</span>
            </div>

            {/* Main Logo */}
            <div className="text-6xl lg:text-8xl font-bold mb-6">
              <span className="text-orange-500">حان</span>{' '}
              <span className="text-white">الآن</span>
            </div>

            {/* Subtitle */}
            <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-100 leading-tight">
              حوار صريح عن قضايا الأمة والإنسان
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              انضموا إلينا في رحلة فكرية ممتعة نناقش فيها أهم القضايا المعاصرة مع نخبة من المفكرين والخبراء
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link
                to="/podcast"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-orange-500/25 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Play size={20} className="ml-2" fill="currentColor" />
                شاهد الحلقات
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://youtube.com/@7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center shadow-lg shadow-orange-500/20"
              >
                <Youtube size={20} className="ml-2" />
                اشترك في القناة
              </a>
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
                    src="https://www.youtube.com/embed/NhhzZfWA9fA"
                    title="Latest Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-gray-900 to-gray-800">
                  <p className="text-orange-400 text-sm font-medium mb-1">أحدث حلقة</p>
                  <p className="text-white font-semibold">شاهد آخر حلقاتنا الآن</p>
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