import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/site';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-[#FDFCFB] dark:bg-[#0B0F17] border-t border-[#FFEDD5]/60 dark:border-neutral-800 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#FF6321]/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#4B5563] dark:text-[#94A3B8] max-w-xl mx-auto">
            Everything you need to know about fitting this into a real, busy schedule.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            return (
              <div
                key={faq.question}
                className="rounded-3xl bg-white dark:bg-[#0F172A] border-2 border-[#FFEDD5] dark:border-neutral-800 shadow-[0_10px_25px_-8px_rgba(255,99,33,0.08)] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6321] cursor-pointer group"
                >
                  <span className="font-black text-[#0F172A] dark:text-white text-base sm:text-lg group-hover:text-[#FF6321] transition-colors flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#FFEDD5] dark:bg-[#7C2D12]/50 text-[#FF6321] flex items-center justify-center text-sm font-black shrink-0">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-[#FFF8F5] dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 flex items-center justify-center text-[#FF6321] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div id={contentId} className="px-6 pb-6 pt-0">
                    <div className="pt-2 border-t border-[#FFEDD5]/60 dark:border-neutral-800 text-sm text-[#4B5563] dark:text-[#CBD5E1] leading-relaxed space-y-2">
                      {faq.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-3xl bg-[#FFEDD5]/40 dark:bg-[#7C2D12]/20 border border-[#FFEDD5] dark:border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#FF6321] text-white flex items-center justify-center text-lg font-black shrink-0">
              💬
            </div>
            <div>
              <h4 className="font-black text-sm text-[#0F172A] dark:text-white">
                Have a specific question not listed here?
              </h4>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Our support team replies within 24 hours.</p>
            </div>
          </div>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#FFEDD5] dark:border-neutral-700 hover:border-[#FF6321] text-[#0F172A] dark:text-white text-xs font-black uppercase tracking-wider shadow-sm hover:scale-105 transition shrink-0"
          >
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
