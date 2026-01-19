// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل هذا الملف - عدّل ملف content.ts بدلاً منه
// ═══════════════════════════════════════════════════════════════

import { shortsUrls } from './content';
export { shortsUrls } from './content';
export type { Short } from './types';

// استخراج معرف الفيديو من رابط الشورت
export const getShortVideoId = (url: string): string => {
  const match = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  return match ? match[1] : '';
};

// تحويل الروابط إلى كائنات
export const shorts = shortsUrls.map((url, index) => ({
  id: index + 1,
  url,
  videoId: getShortVideoId(url),
}));
