import { Helmet } from 'react-helmet-async';
import { Youtube, Instagram, Twitter, Facebook, Mail, Sparkles, MessageCircle, Heart, Users, Mic } from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />,
      url: 'https://youtube.com/@7analaan',
      description: 'شاهد جميع الحلقات',
      handle: '@7analaan'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />,
      url: 'https://instagram.com/7analaan',
      description: 'تابعنا للمقتطفات',
      handle: '@7analaan'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />,
      url: 'https://twitter.com/7analaan',
      description: 'آخر الأخبار',
      handle: '@7analaan'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />,
      url: 'https://facebook.com/7analaan',
      description: 'انضم لمجتمعنا',
      handle: '7analaan'
    }
  ];

  const values = [
    { icon: <Mic className="text-orange-400" size={28} />, title: 'حوار هادف', description: 'نقدم محتوى يثري الفكر والوجدان' },
    { icon: <Users className="text-orange-400" size={28} />, title: 'مجتمع متنامي', description: 'انضم لآلاف المتابعين' },
    { icon: <Heart className="text-orange-400" size={28} />, title: 'شغف حقيقي', description: 'نحب ما نفعله ونفعله بإتقان' },
    { icon: <MessageCircle className="text-orange-400" size={28} />, title: 'تواصل مستمر', description: 'نستمع لآرائكم باهتمام' }
  ];

  return (
    <>
      <Helmet>
        <title>تواصل معنا | حان الآن - تابعنا على منصاتنا</title>
        <meta name="description" content="تواصل مع فريق بودكاست حان الآن. تابعنا على يوتيوب، انستغرام، تويتر وفيسبوك للحصول على أحدث الحلقات والمحتوى الحصري." />
        <link rel="canonical" href="https://7analaan.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-10 text-5xl animate-bounce opacity-20" style={{ animationDuration: '3s' }}>💬</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎙️</div>
        <div className="absolute bottom-32 right-20 text-4xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>❤️</div>

        <div className="relative">
          {/* Hero Header */}
          <div className="pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                  <Sparkles size={16} />
                  <span>نحب نسمع منكم</span>
                </div>

                {/* Title */}
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">تواصل</span>
                  <span className="text-white"> معنا</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  نحن نقدر آراءكم ومقترحاتكم. تابعونا على منصاتنا وشاركونا أفكاركم
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2"
                  >
                  <div className="flex justify-center mb-3">{value.icon}</div>
                  <h3 className="text-white font-bold mb-1">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Section Title */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center gap-2 text-gray-400">
                  <MessageCircle size={16} className="text-orange-400" />
                  <span>تابعونا على منصاتنا</span>
              </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

              {/* Social Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-7 sm:p-8 text-center transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-xl border border-white/10 hover:border-orange-500/30 overflow-hidden"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Icon */}
                  <div className="relative flex justify-center mb-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 text-white">
                      {social.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-bold mb-1">{social.name}</h3>
                  <p className="relative text-white/60 text-sm mb-2">{social.handle}</p>
                  <p className="relative text-white/80 text-sm">{social.description}</p>
                </a>
              ))}
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur-xl opacity-20" />
              
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-xl shadow-orange-500/30">
                    <Mail size={36} className="text-white" />
                </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    راسلونا عبر البريد الإلكتروني
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    لديك سؤال أو اقتراح لموضوع جديد؟ نحب نسمع منك! راسلنا وسنرد عليك في أقرب وقت
                  </p>

                  <a
                    href="mailto:7analaan@gmail.com"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
                  >
                    <Mail size={24} />
                    7analaan@gmail.com
                  </a>

                  <div className="mt-8 flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      نرد خلال 24 ساعة
                    </span>
                    <span>•</span>
                    <span>نقرأ جميع الرسائل</span>
                    <span>•</span>
                    <span>نقدر اقتراحاتكم</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className="inline-block">
                <p className="text-gray-500 text-lg">
                  شكراً لدعمكم المستمر
                  <span className="inline-block animate-pulse mx-2">❤️</span>
                  أنتم سبب استمرارنا
                </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactPage;