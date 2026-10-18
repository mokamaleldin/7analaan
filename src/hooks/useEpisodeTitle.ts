import { useEffect, useState } from 'react';

const DEFAULT_TITLE = 'حلقة من بودكاست حان الآن';

export const useEpisodeTitle = (youtubeUrl: string, savedTitle?: string) => {
  const [fetchedTitle, setFetchedTitle] = useState<{ url: string; title: string }>();
  const title = savedTitle || (fetchedTitle?.url === youtubeUrl ? fetchedTitle.title : '');

  useEffect(() => {
    if (savedTitle) return;

    const controller = new AbortController();
    let active = true;
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    const fetchTitle = async () => {
      let resolvedTitle = DEFAULT_TITLE;
      try {
        const response = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(youtubeUrl.trim())}`, {
          signal: controller.signal,
        });
        if (response.ok) {
          const data = await response.json();
          if (typeof data.title === 'string' && data.title.trim()) resolvedTitle = data.title;
        }
      } catch {
        // Keep a readable title when the metadata service is unavailable.
      } finally {
        window.clearTimeout(timeout);
        if (active) setFetchedTitle({ url: youtubeUrl, title: resolvedTitle });
      }
    };

    void fetchTitle();
    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [youtubeUrl, savedTitle]);

  return { title, loading: !title };
};
