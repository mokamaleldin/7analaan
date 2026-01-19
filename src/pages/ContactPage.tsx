import { Helmet } from 'react-helmet-async';
import { Mail, Sparkles, MessageCircle, Heart, Users, Mic } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import SectionDivider from '../components/SectionDivider';
import SocialMediaCard from '../components/SocialMediaCard';
import { podcastSocialLinks, contactEmail } from '../data/socialLinks';

const ContactPage = () => {

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
        <PageBackground floatingEmojis={['💬', '🎙️', '❤️']} />

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
              <SectionDivider icon={<MessageCircle size={16} />} label="تابعونا على منصاتنا" />

              {/* Social Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {podcastSocialLinks.map((social, index) => (
                  <SocialMediaCard
                    key={index}
                    platform={social.platform}
                    name={social.name}
                    url={social.url}
                    description={social.description}
                    handle={social.handle}
                  />
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
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
                  >
                    <Mail size={24} />
                    {contactEmail}
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