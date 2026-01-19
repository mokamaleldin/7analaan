// YouTube Episodes URLs - Add new episodes here
export const youtubeEpisodes = [
  "https://youtu.be/NhhzZfWA9fA",
  "https://youtu.be/4q4X-xGjioI",
  "https://youtu.be/ADEkLdkAMro",
  "https://youtu.be/FLZk4la6xtU",
  "https://youtu.be/y0vnEBlSKBE",
  "https://youtu.be/DM_8VWC13ME",
  "https://youtu.be/GahNBf0JLTI",
  "https://youtu.be/3AEtcsZeMwY",
  "https://youtu.be/AdeaOEhj-dY",
  "https://youtu.be/X-H4PLqdGiE"
];

// Featured episodes for homepage (first 3)
export const featuredEpisodes = youtubeEpisodes.slice(0, 3);

// Helper to convert URLs to episode objects
export const getEpisodeObjects = (urls: string[]) => 
  urls.map((url, index) => ({
    id: index + 1,
    youtubeUrl: url
  }));
