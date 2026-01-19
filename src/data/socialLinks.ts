import type { SocialPlatform } from '../components/common/SocialIcons';

export interface SocialLink {
  platform: SocialPlatform;
  name: string;
  url: string;
  handle: string;
  description: string;
  stats?: string;
}

// Centralized social links data for the podcast
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

// Email for contact
export const contactEmail = '7analaan@gmail.com';

// YouTube subscription link
export const youtubeSubscribeUrl = 'https://youtube.com/@7analaan?sub_confirmation=1';
