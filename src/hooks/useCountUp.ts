import { useEffect, useRef, useState } from 'react';

/** Animates a displayed number toward `target` whenever it changes. Skips animation for prefers-reduced-motion. */
export function useCountUp(target: number, durationMs = 600) {
  const [value, setValue] = useState(target);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const from = value;
    const delta = target - from;

    if (delta === 0) return;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + delta * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs]);

  return value;
}
