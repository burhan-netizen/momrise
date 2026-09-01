import { BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { formatPrice, handlePurchase, siteConfig } from '../config/site';

const pillars = [
  {
    icon: '⏱️',
    iconClass: 'bg-[#FFEDD5] text-[#FF6321]',
    title: 'Chunked Micro Routines',
    description: 'Built for 30 to 45 minute pockets of free time.',
  },
  {
    icon: '💡',
    iconClass: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400',
    title: 'Monetize Existing Skills',
    description: 'Turn skills you already use daily into paid work.',
  },
  {
    icon: '🛡️',
    iconClass: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400',
    title: '100% Scam Free',
    description: 'Real clients only. No schemes, no inventory.',
  },
];

export default function Author() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="author"
      className="py-16 sm:py-24 bg-white dark:bg-[#0F172A] border-t border-[#FFEDD5]/60 dark:border-neutral-800 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF6321]/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
            {siteConfig.sectionLabels.whyCreated}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white">Meet the Author</h2>
          <p className="mt-3 text-base text-[#4B5563] dark:text-[#94A3B8] max-w-2xl mx-auto">
            Created to eliminate guesswork and help busy parents build reliable remote income on their own terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-[36px] bg-[#FDFCFB] dark:bg-[#0B0F17] border-2 border-[#FFEDD5] dark:border-neutral-800 shadow-[0_20px_40px_-15px_rgba(255,99,33,0.15)] relative text-center">
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6321] via-amber-400 to-[#FF6321] p-1.5 shadow-lg shadow-[#FF6321]/20">
                  {photoFailed ? (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF6321] to-amber-500 flex flex-col items-center justify-center border-4 border-white dark:border-[#0F172A] text-white">
                      <span className="text-4xl font-black">{siteConfig.author.initials}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 mt-1">
                        {siteConfig.author.name}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={siteConfig.author.photo}
                      alt={siteConfig.author.name}
                      onError={() => setPhotoFailed(true)}
                      className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#0F172A]"
                    />
                  )}
                </div>

                <div className="absolute bottom-1 right-2 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 border-2 border-white dark:border-[#0F172A]">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0F172A] dark:text-white">{siteConfig.author.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF6321] dark:text-[#FB923C] mt-1">
                {siteConfig.author.title}
              </p>
              <p className="mt-3 text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {siteConfig.author.bioShort}
              </p>

              <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-[#FFEDD5] dark:border-neutral-800 text-center">
                <div className="p-2 rounded-2xl bg-white dark:bg-[#1E293B]/70 border border-[#FFEDD5]/80 dark:border-neutral-700/60">
                  <p className="text-base sm:text-lg font-black text-[#0F172A] dark:text-white">1,000+</p>
                  <p className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8]">Readers Guided</p>
                </div>
                <div className="p-2 rounded-2xl bg-white dark:bg-[#1E293B]/70 border border-[#FFEDD5]/80 dark:border-neutral-700/60">
                  <p className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">4.9★</p>
                  <p className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8]">Avg Rating</p>
                </div>
                <div className="p-2 rounded-2xl bg-white dark:bg-[#1E293B]/70 border border-[#FFEDD5]/80 dark:border-neutral-700/60">
                  <p className="text-base sm:text-lg font-black text-[#FF6321]">2 Hours</p>
                  <p className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8]">Daily Target</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-white tracking-tight">
                "You don't need a 40 hour work week to build meaningful income."
              </h3>

              <p>
                Traditional work from home advice ignores the reality of parenting. I built{' '}
                <strong>{siteConfig.productFullName}</strong> to teach high demand micro tasks that pay
                $25 to $50/hour, without coding skills or shady schemes.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#FF6321] dark:text-[#FB923C] flex items-center gap-2">
                <span>⚡</span> Why This System Actually Works
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FDFCFB] dark:bg-[#0B0F17] border border-[#FFEDD5] dark:border-neutral-800 space-y-2"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black ${pillar.iconClass}`}>
                      {pillar.icon}
                    </div>
                    <h5 className="font-black text-sm text-[#0F172A] dark:text-white">{pillar.title}</h5>
                    <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFEDD5]/40 dark:bg-[#7C2D12]/20 border border-[#FED7AA] dark:border-[#9A3412]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🤝</span>
                <div>
                  <p className="text-xs font-black text-[#0F172A] dark:text-white">A Personal Note From Me</p>
                  <p className="text-xs text-[#64748B] dark:text-[#CBD5E1] mt-0.5">
                    Stuck on the roadmap? Email me directly, I read every message.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handlePurchase}
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF6321] hover:bg-[#E5591E] text-white text-xs font-black uppercase tracking-wider shadow-sm transition cursor-pointer"
              >
                <span>Get Started</span>
                <span>{formatPrice(siteConfig.pricing.current)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
