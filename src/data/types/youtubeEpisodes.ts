// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل هذا الملف - عدّل ملف content.ts بدلاً منه
// ═══════════════════════════════════════════════════════════════

import { youtubeEpisodes } from '../content';
export { youtubeEpisodes } from '../content';

// الحلقات المميزة للصفحة الرئيسية (أول 3)
export const featuredEpisodes = youtubeEpisodes.slice(0, 3);

export const getEpisodeObjects = (urls: string[]) => 
  urls.map((url, index) => ({
    id: index + 1,
    youtubeUrl: url
  }));
