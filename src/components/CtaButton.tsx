import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { handlePurchase } from '../config/site';

type Size = 'md' | 'lg' | 'xl';

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Size;
  pulse?: boolean;
  fullWidthOnMobile?: boolean;
}

const sizeClasses: Record<Size, string> = {
  md: 'px-6 py-3 text-xs',
  lg: 'px-9 py-4 text-base',
  xl: 'px-10 py-5 text-xl',
};

export default function CtaButton({
  children,
  size = 'lg',
  pulse = false,
  fullWidthOnMobile = false,
  className = '',
  onClick,
  ...props
}: CtaButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick ?? handlePurchase}
      className={[
        pulse ? 'animate-cta' : '',
        fullWidthOnMobile ? 'w-full sm:w-auto' : '',
        'group inline-flex items-center justify-center gap-2 rounded-2xl font-black uppercase tracking-wider text-white bg-[#FF6321] hover:bg-[#E5591E] active:bg-[#C2410C] active:scale-[0.98] shadow-[0_12px_28px_-6px_rgba(255,99,33,0.5)] hover:shadow-[0_16px_36px_-6px_rgba(255,99,33,0.65)] transition-all cursor-pointer',
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
