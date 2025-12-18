import React from 'react';
import { MessageCircle, Users, Mic, Heart } from 'lucide-react';

const IntroSection = () => {
  const features = [
    {
      icon: <MessageCircle className="text-orange-500" size={32} />,
      title: "حوار مفتوح",
      description: "نناقش القضايا المهمة بصراحة ووضوح دون تحفظ"
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "ضيوف متميزون",
      description: "نستضيف خبراء ومفكرين لإثراء النقاش"
    },
    {
      icon: <Mic className="text-orange-500" size={32} />,
      title: "إنتاج عالي الجودة",
      description: "نقدم محتوى صوتي ومرئي بجودة احترافية"
    },
    {
      icon: <Heart className="text-orange-500" size={32} />,
      title: "مجتمع متفاعل",
      description: "نبني جسور التواصل مع جمهورنا المتميز"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            لماذا <span className="text-orange-500">حان الآن</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن أكثر من مجرد بودكاست - نحن منصة للتفكير النقدي والحوار البناء. 
            نسعى لتقديم منظور جديد حول القضايا التي تهم مجتمعنا العربي والإسلامي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              رحلتنا مع البودكاست
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              بدأت فكرة "حان الآن" من إيماننا العميق بأهمية الحوار الهادف في عصر تتسارع فيه الأحداث 
              وتتضارب فيه الآراء. نحن نؤمن بأن الحق يظهر من خلال النقاش الصريح والمفتوح، 
              وأن كل صوت له قيمة في بناء فهم أعمق للواقع الذي نعيشه.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">12.8K</div>
                <div className="text-gray-600">مشترك</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">49+</div>
                <div className="text-gray-600">حلقة</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">1M+</div>
                <div className="text-gray-600">مشاهدة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;