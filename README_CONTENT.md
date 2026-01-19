# 📚 دليل إضافة وتعديل المحتوى

## 📁 الملف الوحيد اللي تحتاج تعدله

```
src/data/content.ts
```

**كل المحتوى موجود في ملف واحد فقط!** 🎉

---

## 🎬 1. إضافة حلقة يوتيوب جديدة

ابحث عن هذا القسم في الملف:
```typescript
export const youtubeEpisodes = [
```

أضف رابط الحلقة الجديدة في **أول** القائمة:
```typescript
export const youtubeEpisodes = [
  "https://youtu.be/الحلقة_الجديدة",    // ← أضف هنا
  "https://youtu.be/NhhzZfWA9fA",
  // ... باقي الحلقات
];
```

> 💡 **ملاحظة:** الحلقات الثلاث الأولى تظهر في الصفحة الرئيسية

---

## 📱 2. إضافة شورت جديد

ابحث عن هذا القسم:
```typescript
export const shortsUrls = [
```

أضف رابط الشورت في **أول** القائمة:
```typescript
export const shortsUrls = [
  'https://youtube.com/shorts/الشورت_الجديد',    // ← أضف هنا
  'https://youtube.com/shorts/kO0rxiKzYWw',
  // ... باقي الشورتس
];
```

---

## 🎧 3. إضافة حلقة ساوند كلاود

ابحث عن هذا القسم:
```typescript
export const soundcloudTracks = [
```

أضف رابط الحلقة الصوتية في **أول** القائمة:
```typescript
export const soundcloudTracks = [
  'https://soundcloud.com/7analaan/الحلقة_الجديدة',    // ← أضف هنا
  'https://soundcloud.com/7analaan/...',
  // ... باقي الحلقات
];
```

> 💡 **ملاحظة:** الحلقات الثلاث الأولى تظهر في الصفحة الرئيسية

---

## 👤 4. إضافة ضيف جديد

ابحث عن هذا القسم:
```typescript
export const guestsInput: GuestInput[] = [
```

انسخ المثال أدناه وأضفه في القائمة:

```typescript
{
  name: 'اسم الضيف',
  title: 'الوظيفة',
  specialty: 'التخصص',
  imageUrl: '/guests/صورة-الضيف.png',
  bio: 'نبذة عن الضيف...',
  socialLinks: [
    { platform: 'youtube', url: 'https://youtube.com/@username' },
    { platform: 'instagram', url: 'https://instagram.com/username' },
    { platform: 'twitter', url: 'https://twitter.com/username' },
  ],
  episodes: [
    {
      title: 'عنوان الحلقة',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
    },
  ],
},
```

### كيف أضيف صورة الضيف؟
1. ضع الصورة في مجلد `public/guests/`
2. اكتب اسم الصورة في `imageUrl`

مثال: لو الصورة اسمها `ahmed.png`
```typescript
imageUrl: '/guests/ahmed.png',
```

### كيف أجيب صورة مصغرة للحلقة؟
استبدل `VIDEO_ID` برقم الفيديو من يوتيوب

مثال: لو رابط الفيديو `https://www.youtube.com/watch?v=abc123`
```typescript
thumbnail: 'https://img.youtube.com/vi/abc123/maxresdefault.jpg',
```

### المنصات المتاحة للسوشيال ميديا:
- `youtube`
- `instagram`
- `twitter`
- `facebook`
- `tiktok`
- `soundcloud`

---

## 🌐 5. تعديل روابط السوشيال ميديا

ابحث عن هذا القسم:
```typescript
export const podcastSocialLinks: SocialLink[] = [
```

غيّر `url` و `handle` حسب الحاجة:
```typescript
{
  platform: 'youtube',
  name: 'YouTube',
  url: 'https://youtube.com/@7analaan',    // ← الرابط
  handle: '@7analaan',                      // ← اسم الحساب
  description: 'شاهد جميع الحلقات',
},
```

---

## 📧 6. تغيير الإيميل

ابحث عن:
```typescript
export const contactEmail = '7analaan@gmail.com';
```

غيّر الإيميل حسب الحاجة.

---

## ✅ بعد التعديل

### لاختبار التغييرات محلياً:
```bash
npm run dev
```
ثم افتح المتصفح على: `http://localhost:5173`

### لرفع الموقع:
```bash
npm run build
```

---

## ⚠️ تنبيهات مهمة

1. **لا تمسح الفاصلة** `,` بعد كل عنصر
2. **لا تمسح الأقواس** `[]` أو `{}`
3. **استخدم علامات التنصيص** `'` أو `"` حول الروابط والنصوص
4. **الـ id يتم إنشاؤه تلقائياً** - لا تحتاج كتابته!

---

## 🆘 مثال كامل لإضافة ضيف

```typescript
{
  name: 'أحمد محمد',
  title: 'كاتب ومؤلف',
  specialty: 'الأدب العربي',
  imageUrl: '/guests/ahmed-mohamed.png',
  bio: 'كاتب ومؤلف مصري متخصص في الأدب العربي.',
  socialLinks: [
    { platform: 'twitter', url: 'https://twitter.com/ahmed' },
    { platform: 'instagram', url: 'https://instagram.com/ahmed' },
  ],
  episodes: [
    {
      title: 'حوار مع الكاتب أحمد محمد',
      thumbnail: 'https://img.youtube.com/vi/abc123xyz/maxresdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=abc123xyz',
    },
  ],
},
```

---

**إذا واجهت أي مشكلة، تأكد من:**
1. الفواصل في أماكنها الصحيحة
2. الأقواس مغلقة بشكل صحيح
3. علامات التنصيص موجودة حول النصوص والروابط
