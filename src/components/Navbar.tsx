import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { formatPrice, handlePurchase, siteConfig } from '../config/site';
import MomriseLogo from './MomriseLogo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between gap-4 relative">
      <div className="flex items-center gap-2.5 shrink-0">
        <MomriseLogo variant="icon" className="w-11 h-11 rounded-2xl" />
        <div className="leading-tight">
          <p className="font-black text-lg tracking-tight uppercase text-[#0F172A] dark:text-white">
            {siteConfig.brand.name}
          </p>
          <p className="text-[10px] font-bold text-[#FF6321] uppercase tracking-widest">
            {siteConfig.productName}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:gap-6 shrink-0">
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs font-bold uppercase tracking-wide text-[#6B6B6B] dark:text-[#94A3B8]">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap hover:text-[#FF6321] transition">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={handlePurchase}
          className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl bg-[#FF6321] hover:bg-[#E5591E] active:bg-[#C2410C] text-white shadow-[0_8px_20px_-6px_rgba(255,99,33,0.5)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        >
          <span>{siteConfig.ctaText.secondary}</span>
          <span className="ml-2 font-mono">{formatPrice(siteConfig.pricing.current)}</span>
        </button>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="xl:hidden p-2 rounded-xl border border-[#FFEDD5] dark:border-neutral-800 text-[#0F172A] dark:text-white cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#FFEDD5] dark:border-neutral-800 shadow-xl p-5 z-40 space-y-1">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#334155] dark:text-neutral-200 hover:bg-[#FFEDD5] dark:hover:bg-[#7C2D12]/30 hover:text-[#FF6321] transition"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              handlePurchase();
            }}
            className="mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-xs font-black uppercase tracking-wider rounded-xl bg-[#FF6321] hover:bg-[#E5591E] text-white shadow-md transition cursor-pointer"
          >
            <span>{siteConfig.ctaText.secondary}</span>
            <span className="ml-2 font-mono">{formatPrice(siteConfig.pricing.current)}</span>
          </button>
        </div>
      )}
    </header>
  );
}
