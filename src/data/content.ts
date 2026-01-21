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
    "https://youtu.be/OnR06Uc8dgE?si=27iGZ0mB6mm5IopF",
  "https://youtu.be/_zejgocD4i8?si=6K-uc54FN_znqkJT",
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
  // د. خالد حمدي
  'https://youtube.com/shorts/YsTnha03RAk',
  'https://youtube.com/shorts/dHPi1WbImOE',
  'https://youtube.com/shorts/1UX6L26GM_A',
  // أيمن نور
  'https://youtube.com/shorts/7uS3AfOKTAY',
  'https://youtube.com/shorts/8Jc3ftF-QIc',
  'https://youtube.com/shorts/SV6F8x-GYxs',
  'https://youtube.com/shorts/K_Es8odQtRg',
  // حسام عبدالكريم
  'https://youtube.com/shorts/y7o3PCX4N50',
  'https://youtube.com/shorts/MX-mLbIIuOY',
  'https://youtube.com/shorts/jlavR7u4P5U',
  // خالد الحداد
  'https://youtube.com/shorts/-G-ng6k-lXo',
  'https://youtube.com/shorts/sitzd_y6CmM',
  'https://youtube.com/shorts/Y72Zu3ieph0',
  'https://youtube.com/shorts/JOrCoGLAiuk',
  'https://youtube.com/shorts/F7obt044_P8',
  'https://youtube.com/shorts/AV4dl9Qt1k0',
  'https://youtube.com/shorts/RYyqr3MYz5g',
  'https://youtube.com/shorts/eve7QrTImYc',
  'https://youtube.com/shorts/202m7wLaH70',
  'https://youtube.com/shorts/40R0WGHEcq8',
  'https://youtube.com/shorts/FG74i0NtcGw',
  'https://youtube.com/shorts/g9TnoUSlT2I',
  'https://youtube.com/shorts/1Z-fPoOSLAU',
  'https://youtube.com/shorts/CrDcjsyXJ5Y',
  'https://youtube.com/shorts/V1lMfj76nrU',
  'https://youtube.com/shorts/uGH-E-9Rf9I',
  'https://youtube.com/shorts/zJbPNM1u9R4',
  // محمد غباشي
  'https://youtube.com/shorts/s5JqY5YhWQ0',
  'https://youtube.com/shorts/17vrgc-x8pY',
  'https://youtube.com/shorts/lU42PoP9pXQ',
  'https://youtube.com/shorts/Pw4_T6jMLL0',
  'https://youtube.com/shorts/ndfAQKm5c4k',
  'https://youtube.com/shorts/Hdjv2L1kdxo',
  // أحمد الجندي
  'https://youtube.com/shorts/vw_3SmRG3YY',
  'https://youtube.com/shorts/BfFO-PwxjcU',
  'https://youtube.com/shorts/ixi-F1Ydt94',
  'https://youtube.com/shorts/AuUi1OmeHv0',
  'https://youtube.com/shorts/y_S3XtPlB48',
  'https://youtube.com/shorts/t0_W8HSsBnc',
  // أحمد إبراهيم
  'https://youtube.com/shorts/27iACJwT3ng',
  'https://youtube.com/shorts/kO0rxiKzYWw',
  'https://youtube.com/shorts/4nqC1ouzyew',
  'https://youtube.com/shorts/MkEdeKfxXxU',
  'https://youtube.com/shorts/5kSEGlWI9nU',
  'https://youtube.com/shorts/tzT9b8yNYVQ',
  'https://youtube.com/shorts/pDebFSDyGtE',
  'https://youtube.com/shorts/texVRMlWNws',
  // محمد عفان
  'https://youtube.com/shorts/7qtgeOa_PnM',
  'https://youtube.com/shorts/fWqTFh2a-70',
  'https://youtube.com/shorts/ybMfwiElDZU',
  'https://youtube.com/shorts/4ZE0Ar5r_Mk',
  'https://youtube.com/shorts/BVz_x_7NiCM',
  'https://youtube.com/shorts/mZur4KsP1X4',
  'https://youtube.com/shorts/mI0fMMa9PYk',
  // مصطفى شاهين
  'https://youtube.com/shorts/yKOAuNhbPMA',
  'https://youtube.com/shorts/ofpzi7THDNM',
  'https://youtube.com/shorts/WGaaj305p9I',
  'https://youtube.com/shorts/fNd31iBg-r4',
  'https://youtube.com/shorts/Le5PC00qXGE',
  'https://youtube.com/shorts/m3Qa2XgArqI',
  // سليمان عامر
  'https://youtube.com/shorts/15twQ0Ga4-A',
  'https://youtube.com/shorts/NOuLQ87iv_w',
  'https://youtube.com/shorts/86s-Yv0aNkI',
  'https://youtube.com/shorts/-H8ZpbN65gI',
  'https://youtube.com/shorts/dwGL2Bq9TOE',
  'https://youtube.com/shorts/_lGa2Fz7K1s',
  'https://youtube.com/shorts/f67w1z4FGBA',
  // عمار فايد
  'https://youtube.com/shorts/yS9MAqmRGCU',
  'https://youtube.com/shorts/AMl7IGkG-kM',
  'https://youtube.com/shorts/q57Q4Byps7I',
  'https://youtube.com/shorts/jE0Aqszz_Sw',
  'https://youtube.com/shorts/s_npj7DFPEs',
  'https://youtube.com/shorts/qZU8SwS-ZlM',
  'https://youtube.com/shorts/NXAB20vwUlI',
  'https://youtube.com/shorts/7yfY2w98U84',
  'https://youtube.com/shorts/jA2qFX-lCY4',
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
    imageUrl: '/guests/خالد حمدي.jpg',
    bio: 'الدكتور خالد حمدي هو مستشار أسري وتربوي متخصص في شؤون الأسرة والعلاقات الزوجية. يمتلك خبرة واسعة في مجال الإرشاد الأسري والتربوي، وقد ساهم في حل العديد من المشكلات الأسرية والاجتماعية. يقدم الدكتور خالد محتوى تثقيفي هادف يساعد الأسر على بناء علاقات صحية ومتينة، ويعمل على نشر الوعي بأهمية التربية السليمة والتواصل الفعال بين أفراد الأسرة.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://www.youtube.com/watch?v=_zejgocD4i8',
    ],
    shorts: [
      'https://youtube.com/shorts/YsTnha03RAk',
      'https://youtube.com/shorts/dHPi1WbImOE',
      'https://youtube.com/shorts/1UX6L26GM_A',
    ],
  },
  {
    name: 'أحمد إبراهيم',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/أحمد إبراهيم.jpg',
    bio: 'أحمد إبراهيم ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/GahNBf0JLTI',
    ],
    shorts: [
      'https://youtube.com/shorts/27iACJwT3ng',
      'https://youtube.com/shorts/kO0rxiKzYWw',
      'https://youtube.com/shorts/4nqC1ouzyew',
      'https://youtube.com/shorts/MkEdeKfxXxU',
      'https://youtube.com/shorts/5kSEGlWI9nU',
      'https://youtube.com/shorts/tzT9b8yNYVQ',
      'https://youtube.com/shorts/pDebFSDyGtE',
      'https://youtube.com/shorts/texVRMlWNws',
    ],
  },
  {
    name: 'أحمد الجندي',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/ahmed_elgendy.jpg',
    bio: 'أحمد الجندي ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/ADEkLdkAMro',
    ],
    shorts: [
      'https://youtube.com/shorts/vw_3SmRG3YY',
      'https://youtube.com/shorts/BfFO-PwxjcU',
      'https://youtube.com/shorts/ixi-F1Ydt94',
      'https://youtube.com/shorts/AuUi1OmeHv0',
      'https://youtube.com/shorts/y_S3XtPlB48',
      'https://youtube.com/shorts/t0_W8HSsBnc',
    ],
  },
  {
    name: 'أيمن نور',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/ayman_nour.jpg',
    bio: 'أيمن نور ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/OnR06Uc8dgE',
    ],
    shorts: [
      'https://youtube.com/shorts/7uS3AfOKTAY',
      'https://youtube.com/shorts/8Jc3ftF-QIc',
      'https://youtube.com/shorts/SV6F8x-GYxs',
      'https://youtube.com/shorts/K_Es8odQtRg',
    ],
  },
  {
    name: 'حسام عبدالكريم',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/حسام عبدالكريم.jpg',
    bio: 'حسام عبدالكريم ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/NhhzZfWA9fA',
    ],
    shorts: [
      'https://youtube.com/shorts/y7o3PCX4N50',
      'https://youtube.com/shorts/MX-mLbIIuOY',
      'https://youtube.com/shorts/jlavR7u4P5U',
    ],
  },
  {
    name: 'د. خالد الحداد',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/خالد الحداد 2.jpg',
    bio: 'الدكتور خالد الحداد ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/DM_8VWC13ME',
      'https://youtu.be/X-H4PLqdGiE',
    ],
    shorts: [
      'https://youtube.com/shorts/-G-ng6k-lXo',
      'https://youtube.com/shorts/sitzd_y6CmM',
      'https://youtube.com/shorts/Y72Zu3ieph0',
      'https://youtube.com/shorts/JOrCoGLAiuk',
      'https://youtube.com/shorts/F7obt044_P8',
      'https://youtube.com/shorts/AV4dl9Qt1k0',
      'https://youtube.com/shorts/RYyqr3MYz5g',
      'https://youtube.com/shorts/eve7QrTImYc',
      'https://youtube.com/shorts/202m7wLaH70',
      'https://youtube.com/shorts/40R0WGHEcq8',
      'https://youtube.com/shorts/FG74i0NtcGw',
      'https://youtube.com/shorts/g9TnoUSlT2I',
      'https://youtube.com/shorts/1Z-fPoOSLAU',
      'https://youtube.com/shorts/CrDcjsyXJ5Y',
      'https://youtube.com/shorts/V1lMfj76nrU',
      'https://youtube.com/shorts/uGH-E-9Rf9I',
      'https://youtube.com/shorts/zJbPNM1u9R4',
    ],
  },
  {
    name: 'سليمان عامر',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/طه عامر.jpg',
    bio: 'سليمان عامر ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/3AEtcsZeMwY',
    ],
    shorts: [
      'https://youtube.com/shorts/15twQ0Ga4-A',
      'https://youtube.com/shorts/NOuLQ87iv_w',
      'https://youtube.com/shorts/86s-Yv0aNkI',
      'https://youtube.com/shorts/-H8ZpbN65gI',
      'https://youtube.com/shorts/dwGL2Bq9TOE',
      'https://youtube.com/shorts/_lGa2Fz7K1s',
      'https://youtube.com/shorts/f67w1z4FGBA',
    ],
  },
  {
    name: 'عمار فايد',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/عمار فايد.jpg',
    bio: 'عمار فايد ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/AdeaOEhj-dY',
    ],
    shorts: [
      'https://youtube.com/shorts/yS9MAqmRGCU',
      'https://youtube.com/shorts/AMl7IGkG-kM',
      'https://youtube.com/shorts/q57Q4Byps7I',
      'https://youtube.com/shorts/jE0Aqszz_Sw',
      'https://youtube.com/shorts/s_npj7DFPEs',
      'https://youtube.com/shorts/qZU8SwS-ZlM',
      'https://youtube.com/shorts/NXAB20vwUlI',
      'https://youtube.com/shorts/7yfY2w98U84',
      'https://youtube.com/shorts/jA2qFX-lCY4',
    ],
  },
  {
    name: 'محمد عفان',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/محمد عفان.jpg',
    bio: 'محمد عفان ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/FLZk4la6xtU',
    ],
    shorts: [
      'https://youtube.com/shorts/7qtgeOa_PnM',
      'https://youtube.com/shorts/fWqTFh2a-70',
      'https://youtube.com/shorts/ybMfwiElDZU',
      'https://youtube.com/shorts/4ZE0Ar5r_Mk',
      'https://youtube.com/shorts/BVz_x_7NiCM',
      'https://youtube.com/shorts/mZur4KsP1X4',
      'https://youtube.com/shorts/mI0fMMa9PYk',
    ],
  },
  {
    name: 'محمد غباشي',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/محمد غباشي.jpg',
    bio: 'محمد غباشي ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/4q4X-xGjioI',
    ],
    shorts: [
      'https://youtube.com/shorts/s5JqY5YhWQ0',
      'https://youtube.com/shorts/17vrgc-x8pY',
      'https://youtube.com/shorts/lU42PoP9pXQ',
      'https://youtube.com/shorts/Pw4_T6jMLL0',
      'https://youtube.com/shorts/ndfAQKm5c4k',
      'https://youtube.com/shorts/Hdjv2L1kdxo',
    ],
  },
  {
    name: 'مصطفى شاهين',
    title: 'ضيف بودكاست حان الآن',
    specialty: 'متحدث ومؤثر',
    imageUrl: '/guests/مصطفى شاهين.jpg',
    bio: 'مصطفى شاهين ضيف مميز في بودكاست حان الآن، شارك في حوار ثري حول مواضيع متنوعة تهم المجتمع العربي.',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@7analaan' },
    ],
    episodes: [
      'https://youtu.be/y0vnEBlSKBE',
    ],
    shorts: [
      'https://youtube.com/shorts/yKOAuNhbPMA',
      'https://youtube.com/shorts/ofpzi7THDNM',
      'https://youtube.com/shorts/WGaaj305p9I',
      'https://youtube.com/shorts/fNd31iBg-r4',
      'https://youtube.com/shorts/Le5PC00qXGE',
      'https://youtube.com/shorts/m3Qa2XgArqI',
    ],
  },
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
