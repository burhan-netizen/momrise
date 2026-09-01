import { useEffect, useState } from 'react';

/** Tracks whether the page has been scrolled past a given vertical offset. */
export function useScrolledPast(threshold: number) {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolledPast;
}
