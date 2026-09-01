import { Moon, Sun } from 'lucide-react';
import { formatPrice, handlePurchase, savingsPercent, siteConfig } from '../config/site';
import { useCountdown } from '../hooks/useCountdown';
import type { Theme } from '../hooks/useTheme';

interface AnnouncementBarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function AnnouncementBar({ theme, onToggleTheme }: AnnouncementBarProps) {
  const countdown = useCountdown(siteConfig.offerDurationMinutes);
  const { current, original } = siteConfig.pricing;

  return (
    <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white text-xs sm:text-sm font-semibold py-2 px-4 sticky top-0 z-50 shadow-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mx-auto lg:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#FF6321] text-white shadow-sm animate-pulse">
            <span>🔥 Limited Time Offer</span>
          </span>

          <span className="text-neutral-300 text-xs sm:text-sm">
            Regular{' '}
            <span className="line-through text-neutral-400 font-bold decoration-red-500 decoration-2 text-sm">
              {formatPrice(original)}
            </span>
            <span className="text-white font-extrabold ml-1">
              Now <span className="text-[#FF6321] font-black text-sm sm:text-base">{formatPrice(current)}</span>
            </span>
            <span className="hidden md:inline text-neutral-400 ml-1.5 font-normal">
              (Save {savingsPercent()}% Today)
            </span>
          </span>

          <div className="inline-flex items-center gap-1 bg-black/40 border border-white/10 px-2.5 py-1 rounded-xl text-xs font-mono font-bold text-white shadow-inner">
            <span className="text-amber-400 text-[11px]">⏳ Ends in:</span>
            <span className="bg-[#FF6321]/20 text-[#FED7AA] px-1.5 py-0.5 rounded">{countdown.hours}</span>
            <span className="text-[#FF6321] font-black">:</span>
            <span className="bg-[#FF6321]/20 text-[#FED7AA] px-1.5 py-0.5 rounded">{countdown.minutes}</span>
            <span className="text-[#FF6321] font-black">:</span>
            <span className="bg-[#FF6321]/20 text-[#FED7AA] px-1.5 py-0.5 rounded">{countdown.seconds}</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 ml-auto">
          <button
            type="button"
            onClick={handlePurchase}
            className="text-xs font-black uppercase tracking-wider text-[#FF6321] hover:text-[#FFA07A] underline underline-offset-4 decoration-2 transition cursor-pointer"
          >
            Claim Discount →
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
