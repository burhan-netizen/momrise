import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/site';

const AUTOPLAY_MS = 5500;

export default function Testimonials() {
  const testimonials = siteConfig.testimonials;
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const goTo = (index: number) => setActive(((index % testimonials.length) + testimonials.length) % testimonials.length);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let interval: number | undefined;

    const start = () => {
      interval = window.setInterval(() => setActive((a) => (a + 1) % testimonials.length), AUTOPLAY_MS);
    };
    const stop = () => window.clearInterval(interval);

    start();
    el.addEventListener('mouseenter', stop);
    el.addEventListener('mouseleave', start);

    return () => {
      stop();
      el.removeEventListener('mouseenter', stop);
      el.removeEventListener('mouseleave', start);
    };
  }, [testimonials.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.screenX ?? 0;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0]?.screenX ?? 0;
    const diff = touchStartX.current - endX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-[#FDFCFB] dark:bg-[#0B0F17] border-t border-[#FFEDD5]/60 dark:border-neutral-800 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
              Real Stories & Social Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-white">What Busy Moms Are Saying</h2>
            <p className="mt-2 text-[#4B5563] dark:text-[#94A3B8] text-sm sm:text-base">
              Real feedback from mothers building reliable income in daily 2 hour windows.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#FFEDD5] dark:border-neutral-800 flex items-center justify-center text-[#0F172A] dark:text-white hover:bg-[#FF6321] hover:text-white hover:border-[#FF6321] transition shadow-sm cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#FFEDD5] dark:border-neutral-800 flex items-center justify-center text-[#0F172A] dark:text-white hover:bg-[#FF6321] hover:text-white hover:border-[#FF6321] transition shadow-sm cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div
          ref={wrapRef}
          className="relative overflow-hidden rounded-[36px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-1">
                <div className="p-8 sm:p-10 rounded-[36px] bg-white dark:bg-[#0F172A] border-2 border-[#FFEDD5] dark:border-neutral-800 shadow-[0_24px_48px_-12px_rgba(255,99,33,0.12)] relative flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-1 text-[#FF6321]">
                        <span>★★★★★</span>
                        <span className="ml-2 text-xs font-black text-[#0F172A] dark:text-white">5.0 Star Review</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        ✓ Verified Purchase
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white leading-snug mb-4">
                      "{t.headline}"
                    </h3>

                    <p className="text-base text-[#4B5563] dark:text-[#CBD5E1] leading-relaxed mb-8">"{t.quote}"</p>
                  </div>

                  <div className="pt-6 border-t border-[#FFEDD5]/60 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} text-white flex items-center justify-center font-black text-base shadow-md shadow-[#FF6321]/20`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-[#0F172A] dark:text-white">{t.name}</h4>
                        <p className="text-xs text-[#6B6B6B] dark:text-[#94A3B8]">{t.role}</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-2xl bg-[#FFEDD5] dark:bg-[#7C2D12]/40 text-[#FF6321] dark:text-[#FED7AA] font-black text-xs">
                      {t.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === active ? 'w-8 bg-[#FF6321]' : 'w-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-[#FF6321]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
