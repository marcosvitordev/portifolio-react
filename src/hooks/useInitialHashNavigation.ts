import { useEffect } from 'react';

export function useInitialHashNavigation() {
  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    if (!sectionId) return undefined;

    let attempts = 0;
    let timer = 0;

    const findAndScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ block: 'start' });
        return;
      }

      attempts += 1;
      if (attempts < 20) timer = window.setTimeout(findAndScroll, 50);
    };

    timer = window.setTimeout(findAndScroll, 0);
    return () => window.clearTimeout(timer);
  }, []);
}
