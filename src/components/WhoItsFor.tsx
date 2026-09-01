import { siteConfig } from '../config/site';

export default function WhoItsFor() {
  return (
    <section id="who-for" className="py-16 sm:py-24 bg-white dark:bg-[#0F172A] border-t border-[#FFEDD5]/60 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-white">
            Is This Plan Right for You?
          </h2>
          <p className="mt-2 text-[#4B5563] dark:text-[#94A3B8] text-sm sm:text-base">
            Let&apos;s be 100% transparent about who will succeed with this and who should not buy it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[32px] bg-emerald-50/70 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-900/60 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm">
                ✓
              </div>
              <h3 className="text-xl font-black text-emerald-900 dark:text-emerald-300">This IS For You If:</h3>
            </div>

            <ul className="space-y-3 text-sm text-[#1A1A1B] dark:text-neutral-300 font-medium">
              {siteConfig.whoFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-[32px] bg-[#FFEDD5]/60 dark:bg-[#7C2D12]/20 border-2 border-[#FED7AA] dark:border-[#9A3412]/60 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#FF6321] text-white flex items-center justify-center font-black text-sm">
                ✕
              </div>
              <h3 className="text-xl font-black text-[#9A3412] dark:text-[#FED7AA]">This is NOT For You If:</h3>
            </div>

            <ul className="space-y-3 text-sm text-[#1A1A1B] dark:text-neutral-300 font-medium">
              {siteConfig.notFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#FF6321] font-black">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
