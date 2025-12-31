import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

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
            <div className="flex space-x-3 space-x-reverse">
              <a
                href="https://youtube.com/@7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors text-white"
              >
                <Youtube className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com/7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors text-white"
              >
                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com/7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors text-white"
              >
                <Instagram className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://facebook.com/7analaan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors text-white"
              >
                <Facebook className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} حان الآن. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            site by{' '}
            <a
              href="https://www.mokamaleldin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Mohmaed kamaleldin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;