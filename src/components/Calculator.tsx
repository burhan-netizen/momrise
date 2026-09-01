import { useMemo, useState } from 'react';
import { formatPrice, handlePurchase, siteConfig } from '../config/site';
import { useCountUp } from '../hooks/useCountUp';
import CtaButton from './CtaButton';

type TimeChoice = '1h' | '2h' | '3h';

const timeOptions: { key: TimeChoice; label: string }[] = [
  { key: '1h', label: '1 Hour' },
  { key: '2h', label: '2 Hours' },
  { key: '3h', label: '3 Hours' },
];

function dollars(value: number) {
  return `$${Math.round(value).toLocaleString()}`;
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const animated = useCountUp(value);
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-[#1E293B]/70 border border-[#FFEDD5] dark:border-neutral-700/80 text-center shadow-sm">
      <p className="text-lg sm:text-xl font-black text-[#FF6321]">{dollars(animated)}</p>
      <p className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-widest mt-0.5">
        {label} {suffix}
      </p>
    </div>
  );
}

export default function Calculator() {
  const [time, setTime] = useState<TimeChoice>('2h');
  const [skillKey, setSkillKey] = useState(siteConfig.skillOptions[0].key);

  const skill = siteConfig.skillOptions.find((s) => s.key === skillKey) ?? siteConfig.skillOptions[0];
  const range = skill.monthlyEarnings[time];

  const { weekly, monthly, annual } = useMemo(() => {
    const monthlyMid = (range.low + range.high) / 2;
    return {
      weekly: (monthlyMid * 12) / 52,
      monthly: monthlyMid,
      annual: monthlyMid * 12,
    };
  }, [range]);

  return (
    <section id="calculator" className="py-16 bg-[#FDFCFB] dark:bg-[#0B0F17] border-b border-[#FFEDD5]/60 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-4 py-1 rounded-full mb-2">
            Interactive Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-white">
            Calculate Your 2 Hour Potential
          </h2>
          <p className="text-sm text-[#4B5563] dark:text-[#94A3B8] mt-2">
            Select your daily available time and primary skill set to preview your custom income action path.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-[36px] bg-white dark:bg-[#0F172A] border border-[#FFEDD5] dark:border-neutral-800 shadow-[0_32px_64px_-16px_rgba(255,99,33,0.12)] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#6B6B6B] dark:text-[#94A3B8] mb-2">
                1. Your Daily Time Window
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setTime(opt.key)}
                    className={`py-3 px-3 text-xs font-black uppercase rounded-2xl transition cursor-pointer ${
                      time === opt.key
                        ? 'border-2 border-[#FF6321] bg-[#FFEDD5] dark:bg-[#7C2D12]/60 text-[#FF6321] dark:text-[#FED7AA] shadow-[0_4px_12px_rgba(255,99,33,0.25)]'
                        : 'border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-[#4B5563] dark:text-neutral-200 hover:border-[#FF6321]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="skill-select" className="block text-xs font-black uppercase tracking-wider text-[#6B6B6B] dark:text-[#94A3B8] mb-2">
                2. Your Strongest Background / Interest
              </label>
              <select
                id="skill-select"
                value={skillKey}
                onChange={(e) => setSkillKey(e.target.value)}
                className="w-full py-3 px-3 rounded-2xl border border-[#FFEDD5] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-[#0F172A] dark:text-white text-sm font-bold focus:ring-2 focus:ring-[#FF6321] outline-none"
              >
                {siteConfig.skillOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-6 rounded-[24px] bg-[#FDFCFB] dark:bg-[#0B0F17] border border-[#FFEDD5] dark:border-neutral-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#FFEDD5] dark:border-neutral-800 pb-4">
              <div>
                <p className="text-xs text-[#9CA3AF] uppercase font-black tracking-widest">Recommended Starter Offer</p>
                <h4 className="text-lg font-black text-[#FF6321]">{skill.title}</h4>
              </div>
              <div className="sm:text-right">
                <p className="text-xs text-[#9CA3AF] uppercase font-black tracking-widest">Target Earnings</p>
                <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                  {dollars(range.low)} to {dollars(range.high)} / month
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <StatCard label="Weekly" suffix="Potential" value={weekly} />
              <StatCard label="Monthly" suffix="Potential" value={monthly} />
              <StatCard label="Annual" suffix="Potential" value={annual} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold text-[#0F172A] dark:text-neutral-200 mb-1">🎯 Day 1 to 10 Goal:</p>
                <p className="text-[#4B5563] dark:text-[#94A3B8]">{skill.goal1}</p>
              </div>
              <div>
                <p className="font-bold text-[#0F172A] dark:text-neutral-200 mb-1">🚀 Day 11 to 30 Goal:</p>
                <p className="text-[#4B5563] dark:text-[#94A3B8]">{skill.goal2}</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <CtaButton size="lg" onClick={handlePurchase}>
              <span>Get the Full 30 Day Plan</span>
              <span className="font-bold opacity-90">(Only {formatPrice(siteConfig.pricing.current)})</span>
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
