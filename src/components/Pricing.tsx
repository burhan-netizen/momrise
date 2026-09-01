import { BadgeCheck, ShieldCheck, Zap } from 'lucide-react';
import { formatPrice, handlePurchase, savingsPercent, siteConfig } from '../config/site';
import CtaButton from './CtaButton';

export default function Pricing() {
  const { current, original } = siteConfig.pricing;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0F172A] border-t border-[#FFEDD5]/60 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
          Simple, One Time Pricing
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white">
          Get The <span className="text-[#FF6321]">Momrise 2 Hour Plan</span>
        </h2>
        <p className="mt-3 text-base text-[#4B5563] dark:text-[#94A3B8]">
          The practical guide for building income from home, two focused hours at a time.
        </p>

        <div className="mt-10 p-8 sm:p-12 rounded-[36px] bg-[#FDFCFB] dark:bg-[#0B0F17] border-2 border-[#FFEDD5] dark:border-neutral-800 shadow-[0_32px_64px_-16px_rgba(255,99,33,0.15)]">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl sm:text-2xl line-through text-neutral-400 dark:text-neutral-500 font-bold decoration-red-500 decoration-2">
              {formatPrice(original)}
            </span>
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFEDD5] text-[#FF6321] dark:bg-[#7C2D12]/40 dark:text-[#FED7AA]">
              {savingsPercent()}% Off
            </span>
          </div>
          <p className="mt-2 text-5xl sm:text-6xl font-black text-[#0F172A] dark:text-white">{formatPrice(current)}</p>
          <p className="mt-1 text-sm font-bold text-[#6B6B6B] dark:text-[#94A3B8]">one time payment</p>

          <div className="mt-8 flex justify-center">
            <CtaButton size="xl" pulse onClick={handlePurchase} fullWidthOnMobile>
              {siteConfig.ctaText.pricing}
            </CtaButton>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 text-xs font-bold text-[#0F172A] dark:text-white">
              <Zap className="w-4 h-4 text-[#FF6321]" />
              Instant Digital Access
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 text-xs font-bold text-[#0F172A] dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Secure Checkout
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 text-xs font-bold text-[#0F172A] dark:text-white">
              <BadgeCheck className="w-4 h-4 text-amber-500" />
              Lifetime Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
