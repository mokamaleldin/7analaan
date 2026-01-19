// YouTube Shorts URLs - Add new shorts here
export const shortsUrls = [
  'https://youtube.com/shorts/kO0rxiKzYWw',
  'https://youtube.com/shorts/F7obt044_P8',
  'https://youtube.com/shorts/dwGL2Bq9TOE',
  'https://youtube.com/shorts/tQgP4SVc4kw',
  'https://youtube.com/shorts/AuUi1OmeHv0',
  'https://youtube.com/shorts/8Jc3ftF-QIc',
  'https://youtube.com/shorts/SV6F8x-GYxs',
  'https://youtube.com/shorts/dHPi1WbImOE',
  'https://youtube.com/shorts/MX-mLbIIuOY',
];

// Extract video ID from YouTube Shorts URL
export const getShortVideoId = (url: string): string => {
  const match = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  return match ? match[1] : '';
};

// Short interface
export interface Short {
  id: number;
  url: string;
  videoId: string;
}

// Convert URLs to Short objects
export const shorts: Short[] = shortsUrls.map((url, index) => ({
  id: index + 1,
  url,
  videoId: getShortVideoId(url),
}));
