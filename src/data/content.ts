// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║   📝 ملف المحتوى الرئيسي - عدّل هنا فقط!                                  ║
// ║                                                                           ║
// ║   هذا هو الملف الوحيد اللي تحتاج تعدله لإضافة محتوى جديد                 ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

import type { GuestInput, SocialLink } from './types/types';

// ═══════════════════════════════════════════════════════════════════════════
// 🎬 حلقات اليوتيوب
// ═══════════════════════════════════════════════════════════════════════════
// أضف رابط الحلقة الجديدة في أول القائمة
// ✨ الحلقات الثلاث الأولى تظهر في الصفحة الرئيسية
// ═══════════════════════════════════════════════════════════════════════════

export const youtubeEpisodes = [
  "https://youtu.be/NhhzZfWA9fA",
  "https://youtu.be/4q4X-xGjioI",
  "https://youtu.be/ADEkLdkAMro",
  "https://youtu.be/FLZk4la6xtU",
  "https://youtu.be/y0vnEBlSKBE",
  "https://youtu.be/DM_8VWC13ME",
  "https://youtu.be/GahNBf0JLTI",
  "https://youtu.be/3AEtcsZeMwY",
  "https://youtu.be/AdeaOEhj-dY",
  "https://youtu.be/X-H4PLqdGiE"
];

// ═══════════════════════════════════════════════════════════════════════════
// 📱 شورتس اليوتيوب
// ═══════════════════════════════════════════════════════════════════════════
// أضف رابط الشورت الجديد في أول القائمة
// ═══════════════════════════════════════════════════════════════════════════

export const shortsUrls = [
  'https://youtube.com/shorts/kO0rxiKzYWw',
  'https://youtube.com/shorts/F7obt044_P8',
  'https://youtube.com/shorts/dwGL2Bq9TOE',
  'https://youtube.com/shorts/tQgP4SVc4kw',
  'https://youtube.com/shorts/AuUi1OmeHv0',
  'https://youtube.com/shorts/8Jc3ftF-QIc',
  'https://youtube.com/shorts/SV6F8x-GYxs',
  'https://youtube.com/shorts/dHPi1WbImOE',
  'https://youtube.com/shorts/MX-mLbIIuOY',
];

// ═══════════════════════════════════════════════════════════════════════════
// 🎧 حلقات ساوند كلاود (الحلقات الصوتية)
// ═══════════════════════════════════════════════════════════════════════════
// أضف رابط الحلقة الصوتية الجديدة في أول القائمة
// ✨ الحلقات الثلاث الأولى تظهر في الصفحة الرئيسية
// ═══════════════════════════════════════════════════════════════════════════

export const soundcloudTracks = [
  'https://soundcloud.com/7analaan/b4e0c51e-5f89-475e-8470-b1b1ec440be4',
  'https://soundcloud.com/7analaan/1f6728dc-28b0-4a7e-b913-04fe95f666b6',
  'https://soundcloud.com/7analaan/d0137357-e467-4789-9acc-a0c6b571e7bc',
  'https://soundcloud.com/7analaan/b9043ec4-92b9-4385-9f35-6999e4f96b6a',
  'https://soundcloud.com/7analaan/44260578-4da2-4956-a697-fe777bbf1c3d',
  'https://soundcloud.com/7analaan/8db0c564-b216-4f56-a901-81f523f53839',
  'https://soundcloud.com/7analaan/ammarfayed',
  'https://soundcloud.com/7analaan/khaledelhaddad',
];

// ═══════════════════════════════════════════════════════════════════════════
// 👤 بيانات الضيوف
// ═══════════════════════════════════════════════════════════════════════════
// لإضافة ضيف جديد: انسخ المثال وعدّل البيانات
// ضع صورة الضيف في مجلد public/guests/
//
// المنصات المتاحة للسوشيال ميديا:
// youtube, instagram, twitter, facebook, tiktok, soundcloud
//
// للصورة المصغرة للحلقة استخدم:
// https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
// (استبدل VIDEO_ID برقم الفيديو من يوتيوب)
// ═══════════════════════════════════════════════════════════════════════════

export const guestsInput: GuestInput[] = [
  {
    name: 'د. خالد حمدي',
    title: 'مستشار أسري وتربوي',
    specialty: 'شؤون الأسرة والتربية',
    imageUrl: '/guests/haled-hamdi.png',
    bio: 'الدكتور خالد حمدي هو مستشار أسري وتربوي متخصص في شؤون الأسرة والعلاقات الزوجية. يمتلك خبرة واسعة في مجال الإرشاد الأسري والتربوي، وقد ساهم في حل العديد من المشكلات الأسرية والاجتماعية. يقدم الدكتور خالد محتوى تثقيفي هادف يساعد الأسر على بناء علاقات صحية ومتينة، ويعمل على نشر الوعي بأهمية التربية السليمة والتواصل الفعال بين أفراد الأسرة.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    // ✨ فقط ضع روابط يوتيوب! العنوان والصورة يتم جلبها تلقائياً
    episodes: [
      'https://www.youtube.com/watch?v=_zejgocD4i8',
    ],
  },
  // مثال على إضافة ضيف جديد:
  // {
  //   name: 'اسم الضيف',
  //   title: 'المسمى الوظيفي',
  //   specialty: 'التخصص',
  //   imageUrl: '/guests/guest-image.png',
  //   bio: 'نبذة عن الضيف...',
  //   socialLinks: [
  //     { platform: 'youtube', url: 'https://youtube.com/@example' },
  //     { platform: 'twitter', url: 'https://twitter.com/example' },
  //   ],
  //   episodes: [
  //     'https://www.youtube.com/watch?v=VIDEO_ID_1',
  //     'https://www.youtube.com/watch?v=VIDEO_ID_2',
  //   ],
  // },
];





// ═══════════════════════════════════════════════════════════════════════════
// 🌐 روابط السوشيال ميديا للبودكاست
// ═══════════════════════════════════════════════════════════════════════════
// عدّل الروابط (url) وأسماء الحسابات (handle) حسب الحاجة
// ═══════════════════════════════════════════════════════════════════════════

export const podcastSocialLinks: SocialLink[] = [
  {
    platform: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@7analaan',
    handle: '@7analaan',
    description: 'شاهد جميع الحلقات',
    stats: 'الحلقات الكاملة'
  },
  {
    platform: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@7analaan',
    handle: '@7analaan',
    description: 'مقاطع قصيرة وممتعة',
    stats: 'فيديوهات يومية'
  },
  {
    platform: 'soundcloud',
    name: 'SoundCloud',
    url: 'https://soundcloud.com/7analaan',
    handle: '7analaan',
    description: 'استمع للحلقات الصوتية',
    stats: 'بودكاست صوتي'
  },
  {
    platform: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/7analaan',
    handle: '@7analaan',
    description: 'تابعنا للمقتطفات',
    stats: 'مقاطع قصيرة'
  },
  {
    platform: 'twitter',
    name: 'X',
    url: 'https://twitter.com/7analaan',
    handle: '@7analaan',
    description: 'آخر الأخبار والتحديثات',
    stats: 'منشورات يومية'
  },
  {
    platform: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/7analaan',
    handle: '7analaan',
    description: 'انضم لمجتمعنا',
    stats: 'منشورات حصرية'
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// 📧 الإيميل للتواصل
// ═══════════════════════════════════════════════════════════════════════════

export const contactEmail = '7analaan@gmail.com';

// ═══════════════════════════════════════════════════════════════════════════
// 🔔 رابط الاشتراك في اليوتيوب
// ═══════════════════════════════════════════════════════════════════════════

export const youtubeSubscribeUrl = 'https://youtube.com/@7analaan?sub_confirmation=1';
