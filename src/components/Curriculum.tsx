import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/site';

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#FDFCFB] dark:bg-[#0B0F17] border-t border-[#FFEDD5]/60 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
            {siteConfig.sectionLabels.method}
          </span>
          <h2 className="text-3xl font-black text-[#0F172A] dark:text-white">What You&apos;ll Learn Step by Step</h2>
          <p className="mt-2 text-sm text-[#4B5563] dark:text-[#94A3B8]">
            Everything is broken down into bite sized actionable modules.
          </p>
        </div>

        <div className="relative space-y-3">
          <div
            aria-hidden="true"
            className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-[#FF6321]/60 via-[#FF6321]/20 to-transparent"
          />
          {siteConfig.curriculum.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.number} className="relative flex gap-4">
                <div className="relative z-10 w-12 flex justify-center pt-3.5 shrink-0">
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border-2 transition-colors ${
                      isOpen
                        ? 'bg-[#FF6321] border-[#FF6321] text-white'
                        : 'bg-white dark:bg-[#0F172A] border-[#FF6321]/40 text-[#FF6321]'
                    }`}
                  >
                    {item.number}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#FFEDD5] dark:border-neutral-800 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full py-3.5 px-5 text-left flex items-center justify-between gap-3 font-black text-sm sm:text-base text-[#0F172A] dark:text-white hover:text-[#FF6321] transition cursor-pointer"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm text-[#4B5563] dark:text-[#94A3B8] border-t border-[#FFEDD5]/40 dark:border-neutral-800 pt-3">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
