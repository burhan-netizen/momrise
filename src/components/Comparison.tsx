import { formatPrice, handlePurchase, siteConfig } from '../config/site';

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="py-16 sm:py-24 bg-[#FDFCFB] dark:bg-[#0B0F17] border-t border-[#FFEDD5]/60 dark:border-neutral-800 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FF6321]/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
            Side By Side Reality Check
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white">
            {siteConfig.productName} vs. <br className="hidden sm:inline" />
            <span className="text-[#FF6321]">Generic DIY Guesswork</span>
          </h2>
          <p className="mt-3 text-base text-[#4B5563] dark:text-[#94A3B8] max-w-2xl mx-auto">
            Why piecing together random YouTube tutorials and Reddit threads costs you months of wasted time,
            confusion, and scam risks.
          </p>
        </div>

        <div className="rounded-[32px] sm:rounded-[36px] bg-white dark:bg-[#0F172A] border-2 border-[#FFEDD5] dark:border-neutral-800 shadow-[0_24px_50px_-15px_rgba(255,99,33,0.12)] overflow-hidden">
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#FFEDD5] dark:border-neutral-800">
                  <th className="p-5 sm:p-6 text-xs font-black uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] w-1/3">
                    Key Evaluation Criteria
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5]/40 dark:bg-[#7C2D12]/20 border-x-2 border-[#FF6321] w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6321] animate-pulse" />
                      <span className="text-sm font-black text-[#0F172A] dark:text-white">{siteConfig.productName}</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#FF6321] block mt-0.5">Streamlined & Mom Tested</span>
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-black uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] w-1/3">
                    <span className="text-sm font-black text-[#64748B] dark:text-[#94A3B8]">Generic DIY / YouTube</span>
                    <span className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 block mt-0.5">Fragmented & Risky</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FFEDD5]/70 dark:divide-neutral-800/80 text-sm">
                {siteConfig.comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-[#FFF8F5]/60 dark:hover:bg-[#1E293B]/40 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-[#0F172A] dark:text-white align-top">
                      <div className="flex items-start gap-2.5">
                        <span className="text-base">{row.icon}</span>
                        <div>
                          <span className="block">{row.label}</span>
                          <span className="text-xs font-normal text-[#64748B] dark:text-[#94A3B8]">{row.sub}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 font-bold text-[#0F172A] dark:text-white bg-[#FFEDD5]/20 dark:bg-[#7C2D12]/10 border-x-2 border-[#FF6321] align-top">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 font-black text-base shrink-0">✓</span>
                        <div>
                          <span className="text-emerald-700 dark:text-emerald-400 font-black">{row.usTitle}</span>
                          <p className="text-xs font-normal text-[#64748B] dark:text-[#CBD5E1] mt-0.5">{row.usSub}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-[#64748B] dark:text-[#94A3B8] align-top">
                      <div className="flex items-start gap-2">
                        <span className="text-[#FF6321] font-black text-base shrink-0">✕</span>
                        <div>
                          <span className="text-red-600 dark:text-red-400 font-bold">{row.themTitle}</span>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{row.themSub}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="block sm:hidden divide-y divide-[#FFEDD5] dark:divide-neutral-800">
            {siteConfig.comparisonRows.map((row) => (
              <div key={row.label} className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{row.icon}</span>
                  <h4 className="font-black text-sm text-[#0F172A] dark:text-white">{row.label}</h4>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 dark:text-emerald-300">
                    <span>✓ {siteConfig.productName}:</span>
                  </div>
                  <p className="text-xs text-emerald-900 dark:text-emerald-200 mt-1 font-medium">{row.usSub}</p>
                </div>
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-800 dark:text-red-300">
                    <span>✕ Generic DIY Method:</span>
                  </div>
                  <p className="text-xs text-red-900 dark:text-red-200 mt-1 font-medium">{row.themSub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 bg-[#FFEDD5]/40 dark:bg-[#7C2D12]/20 border-t border-[#FFEDD5] dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FF6321] text-white flex items-center justify-center text-lg font-black shrink-0">
                ⚡
              </div>
              <div>
                <p className="text-sm font-black text-[#0F172A] dark:text-white">Save 60+ Hours of Trial & Error</p>
                <p className="text-xs text-[#64748B] dark:text-[#CBD5E1]">
                  Get the complete step by step system for less than the cost of a takeout dinner.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handlePurchase}
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FF6321] hover:bg-[#E5591E] text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-[1.02] transition cursor-pointer"
            >
              <span>{siteConfig.ctaText.pricing} • {formatPrice(siteConfig.pricing.current)}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
