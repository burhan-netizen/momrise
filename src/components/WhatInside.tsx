import { Check } from 'lucide-react';
import { formatPrice, handlePurchase, siteConfig } from '../config/site';
import CtaButton from './CtaButton';

const ribbonItems = ['6 Core Modules', '14 Fillable Worksheets', '25+ Outreach Scripts', '30 Day Step Roadmap'];

export default function WhatInside() {
  return (
    <section id="what-inside" className="py-16 sm:py-24 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1.5 rounded-full mb-3">
            {siteConfig.sectionLabels.productIntro}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white">
            It&apos;s more than an ebook.
            <br />
            <span className="text-[#FF6321]">This is a system designed to be used.</span>
          </h2>
          <p className="mt-4 text-[#4B5563] dark:text-[#94A3B8] text-base sm:text-lg">
            Momrise's practical framework for turning two focused hours a day into consistent progress toward
            building income from home.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-[#FDFCFB] dark:bg-[#0B0F17] border border-[#FFEDD5] dark:border-neutral-800 text-xs font-bold text-[#0F172A] dark:text-[#F1F5F9]">
            {ribbonItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-[#1E293B] shadow-sm border border-neutral-100 dark:border-neutral-700"
              >
                <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.modules.map((module) => (
            <div
              key={module.title}
              className="p-6 rounded-[28px] bg-[#FDFCFB] dark:bg-[#0B0F17] border border-[#FFEDD5] dark:border-neutral-800 hover:border-[#FF6321] transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(255,99,33,0.15)] flex flex-col group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-[#FFEDD5] dark:bg-[#7C2D12]/40 text-[#FF6321] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FF6321]/70">
                  {module.tag}
                </span>
              </div>

              <h3 className="text-lg font-black text-[#0F172A] dark:text-white leading-snug">{module.title}</h3>
              <p className="mt-1 text-xs text-[#6B7280] dark:text-[#94A3B8]">{module.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {module.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#334155] dark:text-[#CBD5E1] bg-white dark:bg-[#1E293B] border border-[#FFEDD5]/80 dark:border-neutral-700/80"
                  >
                    <Check className="w-3 h-3 text-emerald-500 shrink-0" strokeWidth={3} />
                    {benefit}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-black text-emerald-600 dark:text-emerald-400">
                {module.formatBadge}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <CtaButton size="lg" pulse onClick={handlePurchase}>
            <span>
              Get Instant Access •{' '}
              <span className="line-through opacity-70 text-sm font-bold mr-1">
                {formatPrice(siteConfig.pricing.original)}
              </span>{' '}
              {formatPrice(siteConfig.pricing.current)}
            </span>
          </CtaButton>
          <p className="text-xs font-bold text-[#FF6321] dark:text-[#FB923C]">
            ⏳ Special Discount Pricing • Offer Ends Soon
          </p>
        </div>
      </div>
    </section>
  );
}
