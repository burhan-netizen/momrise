import { siteConfig } from '../config/site';
import MomriseLogo from './MomriseLogo';

export default function BrandIntro() {
  return (
    <section className="py-12 bg-[#FDFCFB] dark:bg-[#0B0F17] border-b border-[#FFEDD5]/60 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        <MomriseLogo variant="icon" className="w-10 h-10 rounded-full mb-3" />
        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FF6321]">From Momrise</span>
        <p className="mt-3 text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
          Practical resources designed to help moms build income, develop valuable skills, and create greater
          independence, without needing to completely rearrange their lives.
        </p>
      </div>
    </section>
  );
}
