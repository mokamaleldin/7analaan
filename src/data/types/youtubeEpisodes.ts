// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل هذا الملف - عدّل ملف content.ts بدلاً منه
// ═══════════════════════════════════════════════════════════════

import { latestEpisodeContent, youtubeEpisodes } from '../content';
export { youtubeEpisodes } from '../content';

const getVideoId = (url: string) =>
  url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/)?.[1] || '';

const episodeDetails = new Map(
  Object.values(latestEpisodeContent).map(episode => [getVideoId(episode.youtubeUrl), episode])
);

export const getEpisodeDetails = (url: string) => episodeDetails.get(getVideoId(url));

// الحلقات المميزة للصفحة الرئيسية (أول 3)
export const featuredEpisodes = youtubeEpisodes.slice(0, 3);

export const getEpisodeObjects = (urls: string[]) => 
  urls.map((url, index) => ({
    id: index + 1,
    youtubeUrl: url,
    title: getEpisodeDetails(url)?.title,
    description: getEpisodeDetails(url)?.description,
  }));
