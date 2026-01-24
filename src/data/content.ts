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
    title: 'داعية وخبير تربوي ومستشار أسري',
    specialty: 'الشؤون الأسرية والتربية',
    imageUrl: '/guests/خالد حمدي.jpg',
    bio: 'داعية وخبير تربوي ومستشار أسري، يركز على الجوانب التربوية والإيمانية وبناء العلاقات الأسرية الناجحة بأسلوب يجمع بين الأصالة الشرعية واللغة العصرية. تخرج من جامعة الأزهر، قسم الدراسات الإسلامية بكلية التربية، وحصل على درجة الدكتوراة في علم الاجتماع. هذا المزيج بين الشريعة والتربية وعلم الاجتماع منحه عمقاً فريداً في فهم قضايا الأسرة والشباب. يُعرف بتقديمه للعديد من الدورات والمحاضرات في مجال بناء العلاقات الزوجية الناجحة، ويعتبر مستشاراً أسرياً معتمداً. له اهتمام كبير بقضايا الشباب في العصر الحديث، وتحديات الهوية للمسلمين في بلاد المهجر. يتميز منهجه بالتركيز على صناعة الأثر وبناء الإنسان من الداخل، ومعالجة القضايا الاجتماعية المعاصرة من منظور إيماني عملي. (مقيم في قطر)',
    socialLinks: [],
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
    name: 'د. أحمد إبراهيم',
    title: 'طبيب وخبير إدارة أعمال',
    specialty: 'الطب والإدارة والاستشارات',
    imageUrl: '/guests/أحمد إبراهيم.jpg',
    bio: 'طبيب تخرج من كلية الطب جامعة عين شمس عام 1995. حصل على دبلوم في الإدارة من إنجلترا، وماجستير في الإدارة من أمريكا، وماجستير إدارة الأعمال للمديرين التنفيذيين (EMBA) من كندا. يعمل منذ أكثر من 25 عاماً في الإدارة وشركات الإدارة. عمل كمستشار تدريب في أمريكا في الإدارة والتسويق والإدارة العامة، وشغل منصب مدير لعدد من الشركات في كندا والخليج. يجمع بين الخبرة الطبية والإدارية في مسيرة مهنية متميزة تمتد لعقود.',
    socialLinks: [],
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
    name: 'د. أحمد الجندي',
    title: 'أستاذ الدراسات اليهودية وباحث',
    specialty: 'الدراسات الإسرائيلية والشأن اليهودي',
    imageUrl: '/guests/ahmed_elgendy.jpg',
    bio: 'أستاذ الدراسات اليهودية بجامعة القاهرة، باحث ومفكر مصري متخصص في الدراسات الإسرائيلية والشأن اليهودي، مقيم حالياً في إسطنبول. يُعرف بتحليلاته العميقة التي تربط بين الأبعاد السياسية والدينية والتاريخية للصراع في الشرق الأوسط. حصل على درجة الدكتوراه في العلوم السياسية، وتتركز أبحاثه على بنية المجتمع الإسرائيلي وتياراته الفكرية وعلاقة الدين بالسياسة. يعمل كباحث أول في عدة مراكز بحثية مرموقة مثل منتدى الشرق ومنتدى الدراسات المستقبلية، وكاتب منتظم في منصات إعلامية رائدة مثل العربي الجديد.',
    socialLinks: [],
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
    title: 'سياسي وإعلامي',
    specialty: 'السياسة والشؤون العامة',
    imageUrl: '/guests/ayman_nour.jpg',
    bio: 'أيمن نور سياسي وإعلامي مصري بارز، له تاريخ طويل في العمل السياسي والإعلامي. شغل مناصب مهمة في الحياة السياسية المصرية وله مواقف واضحة من القضايا السياسية والاجتماعية. يتمتع بخبرة واسعة في تحليل الأوضاع السياسية الإقليمية والدولية، ويسعى من خلال ظهوره الإعلامي إلى تقديم رؤية نقدية للأحداث الجارية.',
    socialLinks: [],
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
    name: 'م. حسام عبد الكريم',
    title: 'باحث ومحلل سياسي واستراتيجي',
    specialty: 'تحليل البيانات والتحليل السياسي',
    imageUrl: '/guests/حسام عبدالكريم.jpg',
    bio: 'باحث مصري يجمع ببراعة بين الخلفية الهندسية والخبرة العميقة في تحليل البيانات، وتطبيقها على مجالات التحليل السياسي والاستراتيجي. يتميز بقدرته على تفكيك القضايا المعقدة، خاصة تلك المتعلقة بالأمن القومي والتحولات الإقليمية، مستخدماً منهجية تحليلية قائمة على البيانات. نشر تحليلات وتقارير بحثية في منصات إعلامية مرموقة مثل الجزيرة نت وعربي 21، تغطي قضايا مثل إخفاقات التحقيقات الإسرائيلية والقرار المصري تجاه إسرائيل.',
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/share/16yNjv8Q4t/' },
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
    title: 'طبيب نفسي ومدرب ومستشار تطوير تنظيمي',
    specialty: 'الطب النفسي والتدريب والاستشارات',
    imageUrl: '/guests/خالد الحداد 2.jpg',
    bio: 'طبيب يتمتع بخبرة عملية واسعة كطبيب نفسي، ومدرب متخصص في مهارات الأعمال والمهارات الشخصية، ومحاضر، ومستشار تطوير تنظيمي. يجمع بين الخلفية الطبية السريرية (الطب النفسي) والخبرة الإدارية والتدريبية الممتدة لأكثر من 30 عاماً في كبرى الشركات متعددة الجنسيات والجهات الحكومية. بدأ مسيرته المهنية في القطاع الطبي والصيدلي، ثم انتقل إلى مجال الموارد البشرية والتدريب، حيث أسس شركته الخاصة "تري للموارد البشرية" (TREE Human Resources) عام 2013. يمتلك خبرة تتجاوز 65,000 ساعة في ممارسة الكوتشنج (التوجيه الحياتي والمهني والزواجي).',
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/share/1JdedJX2mm/' },
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
    name: 'الشيخ طه عامر',
    title: 'داعية ومفكر إسلامي',
    specialty: 'الدعوة والفكر الإسلامي',
    imageUrl: '/guests/طه عامر.jpg',
    bio: 'داعية ومفكر إسلامي مصري الأصل، يحمل الجنسية الألمانية ويقيم في مدينة فرانكفورت منذ عام 2004. تخرج من جامعة الأزهر الشريف بالقاهرة وحصل على درجة الماجستير في الفقه وأصوله. من الشخصيات القيادية البارزة في العمل الإسلامي بألمانيا وأوروبا، حيث يجمع بين الخلفية الأزهرية العريقة والنشاط الدعوي الموجه لخدمة الجاليات المسلمة في السياق الأوروبي. يشغل عدة مناصب مهمة: رئيس هيئة العلماء والدعاة في ألمانيا، المدير العلمي للكلية الأوروبية للعلوم الإنسانية بفرانكفورت، رئيس لجنة التعريف بالإسلام في أوروبا، وعضو الاتحاد العالمي لعلماء المسلمين.',
    socialLinks: [],
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
    name: 'د. عمار فايد',
    title: 'باحث في العلوم السياسية والعلاقات الدولية',
    specialty: 'الشؤون الاستراتيجية وتحليل الشرق الأوسط',
    imageUrl: '/guests/عمار فايد.jpg',
    bio: 'باحث مصري بارز متخصص في العلوم السياسية والعلاقات الدولية. يُعرف بكونه أحد الأصوات البحثية الشابة والمؤثرة في تحليل قضايا الشرق الأوسط. يمتلك سجلاً مهنياً حافلاً في مراكز الأبحاث والمنصات الإعلامية الاستراتيجية، حيث يشغل حالياً منصب مدير البحوث في منصة "أسباب" (Asbab) للشؤون الاستراتيجية. يعمل أيضاً باحثاً في مركز الجزيرة للدراسات، متخصصاً في الشؤون المصرية وحركات الإسلام السياسي. عمل مديراً للبحوث في منتدى الشرق (Sharq Forum)، وهو كاتب ومحلل سياسي منتظم في منصات كبرى مثل الجزيرة نت وعربي 21 وعربي بوست.',
    socialLinks: [],
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
    name: 'د. محمد عفان',
    title: 'دكتور وباحث وأكاديمي',
    specialty: 'العلوم السياسية والعلاقات الدولية',
    imageUrl: '/guests/محمد عفان.jpg',
    bio: 'دكتور وباحث وأكاديمي مصري يعمل في إسطنبول. يشغل منصب مدير أكاديمية الشرق في منتدى الشرق، ويُدرّس في قسم العلوم السياسية والعلاقات الدولية بجامعة ابن خلدون. حصل على دكتوراه في دراسات الشرق الأوسط من جامعة إكستر (بريطانيا، 2020)، ودرجة الماجستير في السياسة المقارنة من الجامعة الأميركية في القاهرة (2015). له كتاب بعنوان "صدام العلمانية والإسلاموية..." ضمن سلسلة دراسات دمقرطة الشرق الأوسط. يتميز بتحليلاته العميقة للقضايا السياسية والاجتماعية في المنطقة.',
    socialLinks: [],
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
    name: 'أ. محمد الغباشي',
    title: 'خبير علم النفس الإرشادي ومدير تنفيذي',
    specialty: 'علم النفس والعلاقات الأسرية',
    imageUrl: '/guests/محمد غباشي.jpg',
    bio: 'يجمع بين خلفية أكاديمية عميقة في مجال علم النفس الإرشادي ونشاط إعلامي مؤثر يهدف إلى رفع الوعي وتعميق الأفكار حول القضايا الاجتماعية والفكرية الراهنة. يتوزع نشاطه بين العمل كمعالج نفسي وخبير في العلاقات الأسرية، وبين دوره كمدير تنفيذي لمنصة رواحل الفكرية. شغل سابقاً منصب رئيس قسم الإصدارات والبحوث في مؤسسة الشيخ ثاني بن عبد الله للخدمات الإنسانية راف. يتميز بقدرته على تبسيط المفاهيم النفسية والاجتماعية المعقدة وتقديمها بأسلوب عملي وقابل للتطبيق.',
    socialLinks: [],
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
    name: 'د. مصطفى شاهين',
    title: 'خبير اقتصادي ومحاضر أكاديمي',
    specialty: 'الاقتصاد والتحليل المالي',
    imageUrl: '/guests/مصطفى شاهين.jpg',
    bio: 'خبير اقتصادي مصري بارز ومحاضر أكاديمي مقيم في الولايات المتحدة الأمريكية، أستاذ الاقتصاد في كلية أوكلاند المجتمعية في ميشيغان. اشتهر بتحليلاته الاقتصادية المعمقة التي تركز بشكل خاص على الشأن الاقتصادي المصري والعالمي. يجمع الدكتور شاهين بين الخبرة الأكاديمية في تدريس الاقتصاد في الجامعات الأمريكية والنشاط الإعلامي الواسع عبر منصاته الرقمية، مما جعله مرجعاً للعديد من المتابعين والمهتمين بالشؤون المالية والاقتصادية. (مقيم في أمريكا)',
    socialLinks: [],
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
  // {
  //   name: 'د. حاتم عبد العظيم',
  //   title: 'أستاذ الفقه الإسلامي وأصوله',
  //   specialty: 'الشريعة الإسلامية والعمل البرلماني',
  //   imageUrl: '/guests/حاتم عبد العظيم.jpg',
  //   bio: 'أستاذ الفقه الإسلامي وأصوله، حصل على دكتوراه في الشريعة الإسلامية (2008) من دار العلوم، جامعة الفيوم. كان عضواً في مجلس الشعب المصري عام 2012 وعضواً في اللجنة التشريعية بمجلس الشعب 2012، كما شارك في الجمعية التأسيسية التي قامت بصياغة دستور 2012. يُعتبر فاعلاً بارزاً في الإعلام والدعوة، ويقدم محاضرات ودروس دينية بانتظام. له مساهمات مهمة في الربط بين الفقه الإسلامي والواقع المعاصر.',
  //   socialLinks: [],
  //   episodes: [],
  //   shorts: [],
  // },
  // {
  //   name: 'د. حسام الحملاوي',
  //   title: 'صحفي وباحث أكاديمي وناشط اشتراكي',
  //   specialty: 'الصحافة والبحث الأكاديمي والنضال الاجتماعي',
  //   imageUrl: '/guests/حسام الحملاوي.jpg',
  //   bio: 'صحفي مصري، ومدون، ومصور، وناشط اشتراكي، وباحث أكاديمي. تخرج من الجامعة الأمريكية بالقاهرة وحصل على دكتوراه في العلوم السياسية من جامعة برلين بألمانيا عن دور الأجهزة الأمنية في الثورة المضادة المصرية. يتميز بمسيرة مهنية ونضالية تركز على قضايا العدالة الاجتماعية، وحقوق العمال، وتحليل دور المؤسسات الأمنية والعسكرية في مصر والمنطقة. عمل كصحفي ومصور، واشتهر بتوثيقه للإضرابات العمالية والاحتجاجات في مصر منذ عام 2006. عضو في تنظيم الاشتراكيون الثوريون ومركز الدراسات الاشتراكية، وكان له دور بارز في الحراك السياسي المصري، بما في ذلك كونه من منظمي ثورة 25 يناير 2011. (مقيم في ألمانيا)',
  //   socialLinks: [
  //     { platform: 'facebook', url: 'https://www.facebook.com/share/1Mwh2tS44p/' },
  //   ],
  //   episodes: [],
  //   shorts: [],
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
