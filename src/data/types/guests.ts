// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل هذا الملف - عدّل ملف content.ts بدلاً منه
// ═══════════════════════════════════════════════════════════════

import { guestsInput } from '../content';
import type { GuestEpisode } from './types';

export type { Guest, GuestInput, GuestSocialLink, GuestEpisode } from './types';

// Helper: Extract video ID from YouTube URL
const getVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/);
  return match ? match[1] : '';
};

// Helper: Convert YouTube URL to episode object
const processEpisodes = (urls: string[]): GuestEpisode[] => {
  return urls.map((url, index) => {
    const videoId = getVideoId(url);
    return {
      id: index + 1,
      title: '', // Will be fetched dynamically
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      youtubeUrl: url,
    };
  });
};

// Guest data with processed episodes
export interface GuestWithEpisodes {
  id: number;
  name: string;
  title: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  socialLinks: { platform: string; url: string }[];
  episodes: GuestEpisode[];
}

// إنشاء الـ id تلقائياً ومعالجة الحلقات
export const guestsData: GuestWithEpisodes[] = guestsInput.map((guest, index) => ({
  ...guest,
  id: index + 1,
  episodes: processEpisodes(guest.episodes),
}));
