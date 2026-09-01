import { useEffect, useState } from 'react';

const STORAGE_KEY = 'offer_expires_at';

function readExpiry(durationMs: number): number {
  if (typeof window === 'undefined') return Date.now() + durationMs;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const parsed = stored ? parseInt(stored, 10) : NaN;
  if (!parsed || Number.isNaN(parsed) || parsed <= Date.now()) {
    const next = Date.now() + durationMs;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  }
  return parsed;
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

/** Client-side countdown that persists its expiry in localStorage and resets once it elapses. */
export function useCountdown(durationMinutes: number) {
  const durationMs = durationMinutes * 60 * 1000;
  const [expiresAt, setExpiresAt] = useState(() => readExpiry(durationMs));
  const [remainingMs, setRemainingMs] = useState(() => Math.max(0, expiresAt - Date.now()));

  useEffect(() => {
    const id = window.setInterval(() => {
      const diff = expiresAt - Date.now();
      if (diff <= 0) {
        const next = Date.now() + durationMs;
        window.localStorage.setItem(STORAGE_KEY, String(next));
        setExpiresAt(next);
        setRemainingMs(durationMs);
      } else {
        setRemainingMs(diff);
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, [expiresAt, durationMs]);

  const totalSeconds = Math.floor(remainingMs / 1000);
  return {
    hours: pad(Math.floor(totalSeconds / 3600)),
    minutes: pad(Math.floor((totalSeconds % 3600) / 60)),
    seconds: pad(totalSeconds % 60),
  };
}
