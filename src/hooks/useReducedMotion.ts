import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => globalThis.matchMedia?.(query).matches ?? false,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const updatePreference = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}
