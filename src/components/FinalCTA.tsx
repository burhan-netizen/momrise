import { BadgeCheck, ShieldCheck, Zap } from 'lucide-react';
import { formatPrice, handlePurchase, savingsPercent, siteConfig } from '../config/site';
import CtaButton from './CtaButton';
import MomriseLogo from './MomriseLogo';

export default function FinalCTA() {
  const { current, original } = siteConfig.pricing;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0F172A] via-[#0B0F17] to-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF6321]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <MomriseLogo variant="icon" className="w-16 h-16 rounded-full mx-auto shadow-[0_8px_20px_-4px_rgba(255,99,33,0.3)]" />

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Ready to Rise?</h2>

        <p className="text-base sm:text-lg text-[#CBD5E1] max-w-xl mx-auto">Start with two focused hours.</p>

        <div className="pt-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg line-through text-neutral-500 font-bold decoration-red-500 decoration-2">
              {formatPrice(original)}
            </span>
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FF6321]/15 text-[#FED7AA] border border-[#FF6321]/30">
              {savingsPercent()}% Off • Offer Ends Soon
            </span>
          </div>

          <CtaButton size="xl" pulse onClick={handlePurchase} fullWidthOnMobile>
            <span>{siteConfig.ctaText.final}</span>
            <span className="ml-1 px-3 py-1 bg-white/20 rounded-xl text-base font-black">{formatPrice(current)}</span>
          </CtaButton>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-[#CBD5E1]">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 shadow-sm text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SSL Encrypted Checkout</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 shadow-sm text-xs font-bold text-white">
              <Zap className="w-4 h-4 text-[#FF6321] shrink-0" />
              <span>Instant Digital Access</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 shadow-sm text-xs font-bold text-white">
              <BadgeCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lifetime Access, Yours to Keep</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
