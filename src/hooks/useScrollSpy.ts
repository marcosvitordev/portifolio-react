import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], defaultSection = 'home') {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const sectionKey = sectionIds.join('|');

  useEffect(() => {
    const ids = sectionKey.split('|').filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionKey]);

  return activeSection;
}
