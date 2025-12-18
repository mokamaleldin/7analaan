import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Logo */}
          <div className="text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-orange-500">حان</span>{' '}
            <span className="text-white">الآن</span>
          </div>
          
          {/* Subtitle */}
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-100 leading-tight">
            بودكاست حان الآن - حوار صريح عن قضايا الأمة والإنسان
          </h1>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            انضموا إلينا في رحلة فكرية ممتعة نناقش فيها أهم القضايا المعاصرة بصراحة ووضوح
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/podcast"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Play size={20} className="ml-2" />
              استمع للحلقات
              <ArrowLeft size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://youtube.com/@7analaan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center"
            >
              اشترك في القناة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;