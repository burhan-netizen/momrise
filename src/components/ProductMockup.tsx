import { BookOpen, CheckCircle2, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';
import MomriseLogo from './MomriseLogo';

/**
 * A self-contained, illustrated product cover — no external image dependency.
 * Carries the Momrise brand identity so the cover reads as an official Momrise publication.
 */
export default function ProductMockup() {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 relative group cursor-default bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#7C2D12]">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#FF6321]/30 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl" />

      <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 text-white transform transition duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/95">
            <MomriseLogo variant="icon" className="w-5 h-5 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#0F172A] pr-0.5">
              {siteConfig.brand.name}
            </span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#FED7AA] border border-white/20 rounded-full px-2.5 py-1">
            Original Guide
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
            {siteConfig.productFullName}
          </h3>
          <p className="text-[11px] text-white/60 mt-1 leading-snug max-w-xs">{siteConfig.brand.tagline}</p>
          <div className="flex items-center gap-3 mt-3 text-[11px] font-bold text-white/80">
            <span className="inline-flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> PDF Guide</span>
            <span className="inline-flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> 14 Worksheets</span>
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> 30 Day Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FloatingRatingBadge() {
  return (
    <div
      className="animate-float absolute -right-4 sm:-right-8 -bottom-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#FFEDD5] dark:border-neutral-800 shadow-[0_16px_32px_-10px_rgba(255,99,33,0.35)] z-10"
      style={{ animationDelay: '1.2s' }}
    >
      <span className="text-amber-500 text-sm">★★★★★</span>
      <div className="text-left">
        <p className="text-xs font-black text-[#0F172A] dark:text-white leading-none">4.9/5</p>
        <p className="text-[10px] font-bold text-[#9CA3AF]">1,000+ readers</p>
      </div>
    </div>
  );
}
