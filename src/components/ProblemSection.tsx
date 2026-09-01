import { siteConfig } from '../config/site';

export default function ProblemSection() {
  return (
    <section className="py-16 bg-white dark:bg-[#0F172A] border-y border-[#FFEDD5]/60 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-[#FFEDD5] dark:bg-[#7C2D12]/30 text-[#FF6321] rounded-full text-xs font-black uppercase tracking-wider mb-3">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-white">
            Does this sound like your typical day?
          </h2>
          <p className="mt-3 text-[#4B5563] dark:text-[#94A3B8]">
            The standard advice doesn't fit a mother's reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.problems.map((problem) => (
            <div
              key={problem.title}
              className="p-7 rounded-[28px] bg-[#FDFCFB] dark:bg-[#0B0F17] border border-[#FFEDD5] dark:border-neutral-800 text-center space-y-3 hover:shadow-[0_16px_32px_-8px_rgba(255,99,33,0.12)] hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FFEDD5] dark:bg-[#7C2D12]/40 flex items-center justify-center text-3xl">
                {problem.icon}
              </div>
              <h3 className="text-lg font-black text-[#0F172A] dark:text-white">{problem.title}</h3>
              <p className="text-sm text-[#4B5563] dark:text-[#94A3B8] leading-snug">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 rounded-[32px] bg-gradient-to-br from-[#FFEDD5]/80 to-[#FED7AA]/40 dark:from-[#7C2D12]/20 dark:to-[#431407]/20 border border-[#FFEDD5] dark:border-[#9A3412]/50 text-center">
          <p className="text-lg sm:text-xl font-black text-[#0F172A] dark:text-[#FED7AA]">
            💡 The Shift: You don't need a 40 hour work week to earn meaningful money.
          </p>
          <p className="mt-2 text-sm text-[#4B5563] dark:text-[#CBD5E1] max-w-2xl mx-auto font-medium">
            When you focus on <strong>one clear skill, one specific client, and one simple offer</strong>, you
            can achieve more in 2 focused hours than most people do in an entire disorganized week.
          </p>
        </div>
      </div>
    </section>
  );
}
