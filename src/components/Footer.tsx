import { siteConfig } from '../config/site';
import MomriseLogo from './MomriseLogo';

const links = ['Privacy Policy', 'Terms', 'Contact'];

export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-[#0B0F17] border-t border-[#FFEDD5] dark:border-neutral-800 text-center text-xs text-[#9CA3AF]">
      <div className="max-w-6xl mx-auto px-4 space-y-3">
        <MomriseLogo variant="icon" className="w-10 h-10 rounded-full mx-auto" />
        <p className="font-black uppercase tracking-widest text-[#0F172A] dark:text-white text-sm">
          {siteConfig.brand.name}
        </p>
        <p className="max-w-sm mx-auto text-[#6B6B6B] dark:text-[#94A3B8]">{siteConfig.brand.tagline}</p>
        <p className="italic text-[#9CA3AF]">
          "{siteConfig.productFullName} is an original {siteConfig.brand.name} product."
        </p>

        <div className="flex justify-center gap-6 font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-[#94A3B8] pt-2 pb-1">
          {links.map((link) =>
            link === 'Contact' ? (
              <a key={link} href={`mailto:${siteConfig.author.email}`} className="hover:text-[#FF6321] transition">
                {link}
              </a>
            ) : (
              <a key={link} href="#" className="hover:text-[#FF6321] transition">
                {link}
              </a>
            ),
          )}
        </div>
        <p>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
