import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const JoinSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">انضم</span> إلينا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نحن نرحب بمشاركاتكم وآرائكم. تواصلوا معنا لاقتراح موضوعات أو للمشاركة في الحوار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">البريد الإلكتروني</h3>
            <p className="text-gray-300 mb-4">
              راسلونا لاقتراح موضوعات أو مشاركة آرائكم
            </p>
            <a
              href="mailto:info@hanalaan.com"
              className="text-orange-400 hover:text-orange-300 font-medium"
            >
              info@hanalaan.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">واتساب</h3>
            <p className="text-gray-300 mb-4">
              تواصلوا معنا مباشرة عبر الواتساب
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              اضغط للتواصل
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">نموذج التواصل</h3>
            <p className="text-gray-300 mb-4">
              املأوا النموذج وسنتواصل معكم قريباً
            </p>
            <a
              href="/contact"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              املأ النموذج
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-orange-500/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">كن جزءاً من المحادثة</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              صوتكم مهم بالنسبة لنا. شاركونا أفكاركم واقتراحاتكم لنبني معاً منصة حوار هادفة تخدم مجتمعنا
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;