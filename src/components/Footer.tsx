import React from 'react';
import { Youtube, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-orange-500">حان</span>{' '}
              <span className="text-white">الآن</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              بودكاست حان الآن - منصة للحوار الصريح والمفتوح حول قضايا الأمة والإنسان. 
              نسعى لتقديم محتوى هادف يثري الفكر ويفتح آفاق جديدة للنقاش البناء.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعونا على</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://youtube.com/@7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} حان الآن. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;