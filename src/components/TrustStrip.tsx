import { siteConfig } from '../config/site';

export default function TrustStrip() {
  return (
    <div className="border-y border-[#FFEDD5]/60 dark:border-neutral-800 bg-white/60 dark:bg-[#0F172A]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-bold text-[#6B7280] dark:text-[#94A3B8]">
        {siteConfig.trustStrip.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
