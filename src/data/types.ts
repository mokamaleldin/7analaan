// ═══════════════════════════════════════════════════════════════
// 📁 الأنواع والتعريفات (لا تعدل هذا الملف)
// ═══════════════════════════════════════════════════════════════

// استيراد النوع من المكون الأصلي
import type { SocialPlatform } from '../components/common/SocialIcons';
export type { SocialPlatform } from '../components/common/SocialIcons';

export interface GuestSocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface GuestEpisode {
  title: string;
  thumbnail: string;
  youtubeUrl: string;
}

export interface GuestInput {
  name: string;
  title: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  socialLinks: GuestSocialLink[];
  episodes: GuestEpisode[];
}

export interface Guest extends GuestInput {
  id: number;
}

export interface SocialLink {
  platform: SocialPlatform;
  name: string;
  url: string;
  handle: string;
  description: string;
  stats?: string;
}

export interface Short {
  id: number;
  url: string;
  videoId: string;
}
