import { siteConfig } from '../config/site';

type Variant = 'icon' | 'lockup' | 'full';

interface MomriseLogoProps {
  variant?: Variant;
  className?: string;
}

const srcMap: Record<Variant, string> = {
  icon: siteConfig.brand.iconLogo,
  lockup: siteConfig.brand.lockupLogo,
  full: siteConfig.brand.fullLogo,
};

export default function MomriseLogo({ variant = 'icon', className = 'h-11 w-auto' }: MomriseLogoProps) {
  return (
    <img
      src={srcMap[variant]}
      alt={siteConfig.brand.name}
      className={className}
      loading={variant === 'icon' ? 'eager' : 'lazy'}
    />
  );
}
