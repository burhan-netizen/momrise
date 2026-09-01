import { formatPrice, handlePurchase, siteConfig } from '../config/site';
import { useScrolledPast } from '../hooks/useScrolledPast';
import MomriseLogo from './MomriseLogo';

export default function StickyBar() {
  const visible = useScrolledPast(450);
  const { current, original } = siteConfig.pricing;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-t border-[#FFEDD5] dark:border-neutral-800 shadow-2xl transition-transform duration-300 flex items-center justify-between max-w-5xl mx-auto sm:rounded-t-3xl sm:mb-2 sm:px-8 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <MomriseLogo variant="icon" className="w-10 h-10 rounded-xl hidden sm:block shrink-0 shadow-sm" />
        <div>
          <p className="font-black text-xs sm:text-sm text-[#0F172A] dark:text-white line-clamp-1">
            {siteConfig.productFullName}
          </p>
          <p className="text-xs text-[#FF6321] dark:text-[#FB923C] font-bold">
            ⚡ Offer Ends Soon: {formatPrice(current)}{' '}
            <span className="line-through text-neutral-400 dark:text-neutral-500 font-normal">
              ({formatPrice(original)})
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <div className="text-[11px] line-through text-neutral-400 font-bold">{formatPrice(original)}</div>
          <span className="text-xl font-black text-[#0F172A] dark:text-white">{formatPrice(current)}</span>
        </div>
        <button
          type="button"
          onClick={handlePurchase}
          className="animate-buy-pulse inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#FF6321] hover:bg-[#E5591E] text-white text-xs font-black uppercase tracking-wider shadow-[0_8px_16px_-4px_rgba(255,99,33,0.5)] transition transform active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <span>Buy Now</span>
          <span className="ml-2 font-mono sm:hidden">{formatPrice(current)}</span>
        </button>
      </div>
    </div>
  );
}
