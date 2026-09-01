import { ArrowRight, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';
import { formatPrice, handlePurchase, savingsPercent, siteConfig } from '../config/site';
import CtaButton from './CtaButton';
import MomriseLogo from './MomriseLogo';
import ProductMockup, { FloatingRatingBadge } from './ProductMockup';

export default function Hero() {
  const { current, original } = siteConfig.pricing;

  return (
    <section className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#FF6321]/15 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-4 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-4 w-60 h-60 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-5">
          <div className="inline-flex items-center gap-2 text-[#0F172A] dark:text-white text-xs font-black uppercase tracking-[0.15em]">
            <MomriseLogo variant="icon" className="w-5 h-5 rounded-full" />
            <span>A Momrise Practical Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEDD5] dark:bg-[#7C2D12]/30 border border-[#FED7AA] dark:border-[#9A3412]/50 text-[#FF6321] dark:text-[#FB923C] text-xs font-black uppercase tracking-wider">
            <span className="flex text-amber-500">★★★★★</span>
            <span className="font-black">4.9/5</span>
            <span className="text-[#FF6321]/40 dark:text-[#FB923C]/40">|</span>
            <span>1,000+ Readers Enrolled</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#0F172A] dark:text-white">
            The <span className="text-[#FF6321]">2 Hour</span> Work From Home Plan
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-[#0F172A] dark:text-white leading-snug max-w-2xl">
            Build a flexible income stream in just 2 focused hours a day.
          </p>

          <p className="text-base text-[#4B5563] dark:text-[#CBD5E1] leading-relaxed max-w-2xl">
            {siteConfig.productPositioning}
          </p>

          <div className="flex items-center gap-8 py-1">
            {siteConfig.heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className={`text-2xl sm:text-3xl font-black ${
                    stat.accent ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#0F172A] dark:text-white'
                  }`}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
            {siteConfig.heroHighlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2.5 text-sm font-semibold text-[#1A1A1B] dark:text-neutral-200">
                <div className="w-5 h-5 rounded-full bg-[#FFEDD5] dark:bg-[#7C2D12]/40 text-[#FF6321] flex items-center justify-center shrink-0 text-xs font-black">
                  ✓
                </div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="w-full pt-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <CtaButton size="lg" pulse onClick={handlePurchase} className="text-center">
                <span>{siteConfig.ctaText.primary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CtaButton>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg line-through text-neutral-400 dark:text-neutral-500 font-bold decoration-red-500 decoration-2">
                      {formatPrice(original)}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-white">
                      {formatPrice(current)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40">
                      Save {savingsPercent()}%
                    </span>
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">⚡ Offer Ends Soon</span>
                  </div>
                </div>
                <div className="text-xs text-[#6B6B6B] dark:text-[#94A3B8] leading-tight border-l border-neutral-200 dark:border-neutral-800 pl-3">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 dark:bg-emerald-950/80 dark:text-emerald-400">
                    Instant Access
                  </span>
                  <p className="mt-0.5">Keep It Forever</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#FFEDD5] dark:border-neutral-800 space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#6B7280] dark:text-[#94A3B8]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Guaranteed Safe & Secure Checkout</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 shadow-sm text-xs font-bold text-[#0F172A] dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 shadow-sm text-xs font-bold text-[#0F172A] dark:text-white">
                  <Zap className="w-4 h-4 text-[#FF6321] shrink-0" />
                  <span>Instant Access</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 shadow-sm text-xs font-bold text-[#0F172A] dark:text-white">
                  <BadgeCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Lifetime Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF6321] via-[#FB923C] to-purple-500 rounded-[44px] blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />

            <div className="relative rounded-[36px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(255,99,33,0.22)] border border-[#FFEDD5] dark:border-[#7C2D12]/60 bg-white dark:bg-[#0F172A] p-6 sm:p-7 space-y-6 rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <ProductMockup />

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-1">
                    {siteConfig.productName}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base line-through text-neutral-400 dark:text-neutral-500 font-bold decoration-red-500 decoration-2">
                      {formatPrice(original)}
                    </span>
                    <p className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-white">
                      {formatPrice(current)}
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-[#FF6321] dark:text-[#FB923C] mt-0.5">
                    ⚡ Limited Time: Save {formatPrice(original - current)} ({savingsPercent()}% Off)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950/80 dark:text-emerald-400 px-3 py-1 rounded-full">
                    Instant Download
                  </span>
                </div>
              </div>

              <CtaButton size="lg" pulse onClick={handlePurchase} className="w-full">
                {siteConfig.ctaText.primary}
              </CtaButton>

              <div className="pt-3 border-t border-[#FFEDD5]/80 dark:border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#6B7280] dark:text-[#94A3B8]">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Secure Checkout
                  </span>
                  <span>Encrypted & Protected</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="p-2 rounded-xl bg-[#FDFCFB] dark:bg-[#1E293B]/70 border border-[#FFEDD5] dark:border-neutral-700/80 flex flex-col items-center justify-center gap-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[10px] font-bold text-[#0F172A] dark:text-neutral-200 leading-tight">SSL Encrypted</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FDFCFB] dark:bg-[#1E293B]/70 border border-[#FFEDD5] dark:border-neutral-700/80 flex flex-col items-center justify-center gap-1 shadow-sm">
                    <Zap className="w-4 h-4 text-[#FF6321]" />
                    <span className="text-[10px] font-bold text-[#0F172A] dark:text-neutral-200 leading-tight">Instant Access</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FDFCFB] dark:bg-[#1E293B]/70 border border-[#FFEDD5] dark:border-neutral-700/80 flex flex-col items-center justify-center gap-1 shadow-sm">
                    <BadgeCheck className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-bold text-[#0F172A] dark:text-neutral-200 leading-tight">Lifetime Access</span>
                  </div>
                </div>
              </div>
            </div>

            <FloatingRatingBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
