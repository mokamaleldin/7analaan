// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل هذا الملف - عدّل ملف content.ts بدلاً منه
// ═══════════════════════════════════════════════════════════════

import { guestsInput } from '../content';
import type { GuestEpisode, GuestShort, GuestSocialLink } from './types';
import { getEpisodeDetails } from './youtubeEpisodes';

export type { Guest, GuestInput, GuestSocialLink, GuestEpisode, GuestShort } from './types';

// Helper: Extract video ID from YouTube URL
const getVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/);
  return match ? match[1] : '';
};

// Helper: Extract video ID from YouTube Shorts URL
const getShortVideoId = (url: string): string => {
  const match = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  return match ? match[1] : '';
};

// Helper: Convert YouTube URL to episode object
const processEpisodes = (urls: string[]): GuestEpisode[] => {
  return urls.map((url, index) => {
    const videoId = getVideoId(url);
    return {
      id: index + 1,
      title: getEpisodeDetails(url)?.title || '',
      description: getEpisodeDetails(url)?.description,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      youtubeUrl: url,
    };
  });
};

// Helper: Convert YouTube Shorts URLs to short objects
const processShorts = (urls: string[] = []): GuestShort[] => {
  return urls.map((url, index) => ({
    id: index + 1,
    url,
    videoId: getShortVideoId(url),
  }));
};

// Guest data with processed episodes
export interface GuestWithEpisodes {
  id: number;
  name: string;
  title: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  socialLinks: GuestSocialLink[];
  episodes: GuestEpisode[];
  shorts: GuestShort[];
}

// معالجة الحلقات مع الاحتفاظ بروابط الضيوف الثابتة
export const guestsData: GuestWithEpisodes[] = guestsInput.map(guest => ({
  ...guest,
  id: guest.id,
  episodes: processEpisodes(guest.episodes),
  shorts: processShorts(guest.shorts),
}));
