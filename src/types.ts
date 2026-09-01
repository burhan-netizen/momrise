export interface Testimonial {
  quote: string;
  headline: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
  outcome: string;
}

export interface FaqItem {
  question: string;
  answer: string[];
}

export interface ProductModule {
  icon: string;
  tag: string;
  title: string;
  description: string;
  benefits: string[];
  formatBadge: string;
}

export interface ComparisonRow {
  icon: string;
  label: string;
  sub: string;
  usTitle: string;
  usSub: string;
  themTitle: string;
  themSub: string;
}

export interface EarningsRange {
  low: number;
  high: number;
}

export interface SkillOption {
  key: string;
  label: string;
  title: string;
  monthlyEarnings: {
    '1h': EarningsRange;
    '2h': EarningsRange;
    '3h': EarningsRange;
  };
  goal1: string;
  goal2: string;
}

export interface CurriculumItem {
  number: string;
  title: string;
  description: string;
}
