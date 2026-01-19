import type { SocialPlatform } from '../components/common/SocialIcons';

export interface GuestSocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface GuestEpisode {
  id: number;
  title: string;
  thumbnail: string;
  youtubeUrl: string;
}

export interface Guest {
  id: number;
  name: string;
  title: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  socialLinks: GuestSocialLink[];
  episodes: GuestEpisode[];
}

// بيانات الضيوف - أضف الضيوف هنا
export const guestsData: Guest[] = [
  {
    id: 1,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 2,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 3,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 4,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 5,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 6,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 7,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 8,
    name: 'ضيف سابق',
    title: 'كاتب وباحث',
    specialty: 'الكتابة والبحث العلمي',
    imageUrl: 'https://via.placeholder.com/800x800.png?text=%D8%B6%D9%8A%D9%81+%D8%B3%D8%A7%D8%A8%D9%82',
    bio: 'نبذة عن الضيف وإنجازاته ومسيرته المهنية.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example' },
      { platform: 'instagram', url: 'https://instagram.com/example' },
    ],
    episodes: [
      {
        id: 1,
        title: 'عنوان الحلقة الأولى',
        thumbnail: 'https://via.placeholder.com/400x225.png?text=Episode+1',
        youtubeUrl: 'https://youtube.com/watch?v=example1',
      },
    ],
  },
];
