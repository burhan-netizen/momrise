import type {
  ComparisonRow,
  CurriculumItem,
  FaqItem,
  ProductModule,
  SkillOption,
  Testimonial,
} from '../types';

/**
 * Central configuration for the landing page.
 * Change product name, pricing, copy, checkout URL, and content arrays here —
 * everything below is wired directly into the presentation components.
 */
export const siteConfig = {
  domain: 'https://yourdomain.com',

  // Momrise is the parent brand. "The 2 Hour Work From Home Plan" is its flagship product.
  brand: {
    name: 'Momrise',
    tagline: 'Practical tools for moms building income, skills & independence',
    iconLogo: '/momrise-icon.png',
    lockupLogo: '/momrise-lockup.png',
    fullLogo: '/momrise-full.png',
  },

  productName: 'The 2 Hour Plan',
  productFullName: 'The 2 Hour Work From Home Plan',
  productTagline: 'A Real Income Plan for Busy Moms',
  productPositioning:
    'A practical Momrise guide for moms who want to build income from home with just 2 focused hours a day.',

  sectionLabels: {
    productIntro: 'The Momrise 2 Hour Plan',
    method: 'The Momrise Method',
    whyCreated: 'Why Momrise Created This',
  },

  author: {
    name: 'Burhan Kapasi',
    title: 'Founder, Momrise',
    initials: 'BK',
    photo: '/author.jpg',
    bioShort:
      'Building practical income, skill, and independence resources for moms at Momrise.',
    email: 'burhan@magolabs.in',
  },

  pricing: {
    currency: 'USD',
    currencySymbol: '$',
    current: 19.97,
    original: 49.97,
  },

  // Checkout / payment link every CTA button redirects to.
  purchaseUrl: 'https://6218953023022.gumroad.com/l/2-hour-mom-income-plan?wanted=true',

  ctaText: {
    primary: 'I Want This!',
    secondary: 'Get Access',
    pricing: 'Get The 2 Hour Plan',
    final: 'Get The Momrise 2 Hour Plan',
  },

  offerDurationMinutes: 30,

  seo: {
    title: 'The 2 Hour Work From Home Plan by Momrise | Real Income Plan for Busy Moms',
    description:
      'Build a flexible $500 to $2,000+/month income in just 2 focused hours a day around nap times and school runs. The step by step Momrise plan for busy moms with actionable guides, client templates, and milestone roadmaps.',
    ogImage: 'https://yourdomain.com/og-image.jpg',
  },

  nav: [
    { label: 'Overview', href: '#what-inside' },
    { label: 'Comparison', href: '#comparison' },
    { label: "Who It's For", href: '#who-for' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Author', href: '#author' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'FAQ', href: '#faq' },
  ],

  trustStrip: [
    { icon: '⭐', label: '4.9/5 Rating' },
    { icon: '👩‍👧', label: '5,000+ Readers' },
    { icon: '⚡', label: 'Instant Digital Access' },
    { icon: '📋', label: 'Practical Templates' },
    { icon: '🌱', label: 'Beginner Friendly' },
  ],

  heroStats: [
    { value: '4.9 / 5', label: 'Average Rating' },
    { value: '5,000+', label: 'Moms Started' },
    { value: '100%', label: 'Actionable', accent: true },
  ],

  heroHighlights: [
    'No get rich quick fluff',
    '30 Day step by step roadmap',
    'First $100 & $500 milestones',
    'Ready to use client templates',
  ],

  problems: [
    {
      icon: '⏰',
      title: '"I have no free time"',
      description: 'You have 45 minutes during naptime, not 40 free hours a week.',
    },
    {
      icon: '❓',
      title: '"I don\'t know what to offer"',
      description: "You have real skills, but no idea how to package them.",
    },
    {
      icon: '🚩',
      title: '"Overwhelmed by hype"',
      description: 'Every video promises $10k/month passive income. You want honesty.',
    },
  ],

  modules: [
    {
      icon: '📖',
      tag: 'Module 1',
      title: 'Practical 2 Hour Strategy',
      description: 'Real income models for small pockets of time.',
      benefits: ['Micro pocket framework', '5 high demand niches', 'Beginner friendly tools'],
      formatBadge: '✓ Instant Download',
    },
    {
      icon: '✏️',
      tag: 'Module 2',
      title: 'Fill In Worksheets',
      description: 'Price your services and skills with confidence.',
      benefits: ['Skills Inventory Matrix', 'Rate & Pricing Calculator', 'Target Client Persona'],
      formatBadge: '✓ 14 Worksheets',
    },
    {
      icon: '📅',
      tag: 'Module 3',
      title: '30 Day Step Plan',
      description: 'Always know exactly what to work on next.',
      benefits: ['Days 1 to 10: Setup', 'Days 11 to 20: Outreach', 'Days 21 to 30: Close'],
      formatBadge: '✓ 30 Days Mapped',
    },
    {
      icon: '🎯',
      tag: 'Module 4',
      title: 'First $100 Quick Start',
      description: 'A fast milestone formula that proves the concept.',
      benefits: ['Micro Task Mini Offers', 'No Experience Required', 'Confidence Multiplier'],
      formatBadge: '✓ Fast Track',
    },
    {
      icon: '💬',
      tag: 'Module 5',
      title: '25+ Copy Paste Scripts',
      description: 'Warm, ready to send scripts for every touchpoint.',
      benefits: ['Zero Awkwardness Outreach', 'Simple 1 Page Agreement', 'Repeat Retainer Scripts'],
      formatBadge: '✓ 25+ Docs',
    },
    {
      icon: '🛡️',
      tag: 'Module 6',
      title: 'Scam Defense Guide',
      description: 'Spot red flags before they cost you.',
      benefits: ['7 Major Scam Types', 'Verification Checklist', 'Safe Payment Gateways'],
      formatBadge: '✓ 100% Safe',
    },
  ] as ProductModule[],

  curriculum: [
    {
      number: '01',
      title: 'Finding Your Monetizable Skills',
      description:
        'Uncover the skills you take for granted (organization, writing, scheduling, research, Canva design) and see how small businesses are actively hiring for them right now.',
    },
    {
      number: '02',
      title: 'Crafting Your Irresistible Starter Offer',
      description:
        'Learn how to package your service so it\'s a "no brainer" for clients. Includes pricing guidelines so you never undercharge or price yourself out as a beginner.',
    },
    {
      number: '03',
      title: 'Building a Fast Portfolio Without Past Clients',
      description:
        'How to create 2 to 3 sample project deliverables in a single afternoon that showcase your competence and give potential buyers immediate confidence.',
    },
    {
      number: '04',
      title: 'The 2 Hour Workday Time Management Matrix',
      description:
        'Specific operational systems for 2 hour days, 1 hour days, and emergency 30 minute days when life interrupts your routine.',
    },
    {
      number: '05',
      title: 'Using Free AI & Online Tools to Double Your Speed',
      description:
        'A curated list of free AI prompts and workflow shortcuts to draft client emails, summarize documents, and create graphics in minutes.',
    },
  ] as CurriculumItem[],

  comparisonRows: [
    {
      icon: '⏱️',
      label: 'Daily Time Requirement',
      sub: 'Time needed to see real results',
      usTitle: '2 focused hours/day',
      usSub: 'Split into 30 to 45 min nap windows & school pockets',
      themTitle: '5 to 8 hours/day required',
      themSub: "Assumes uninterrupted quiet blocks parents don't have",
    },
    {
      icon: '🧠',
      label: 'Learning Curve & Skills',
      sub: 'What you need before making money',
      usTitle: 'Monetize existing skills on Day 1',
      usSub: 'Worksheets map everyday organization & writing to paid niches',
      themTitle: 'Months of steep learning',
      themSub: 'Pushes complex coding, dropshipping, or expensive software',
    },
    {
      icon: '📋',
      label: 'Templates & Worksheets',
      sub: 'Ready to use plug and play assets',
      usTitle: '14 Fillable PDFs + 25+ Scripts',
      usSub: 'Ready outreach messages, agreements & calculators',
      themTitle: 'Blank page from scratch',
      themSub: 'Zero fillable templates; you have to write everything blindly',
    },
    {
      icon: '🛡️',
      label: 'Scam Defense & Verification',
      sub: 'Protection against fraudulent traps',
      usTitle: '100% Scam Free Field Guide',
      usSub: '7 scam red flags identified + client legitimacy checklist',
      themTitle: 'High scam vulnerability',
      themSub: 'Easy prey for fake check overpayment & predatory recruiters',
    },
    {
      icon: '🗺️',
      label: 'Daily Action Roadmap',
      sub: 'Knowing what to do each day',
      usTitle: 'Segmented 30 Day Checklist',
      usSub: 'Days 1 to 10 Setup, Days 11 to 20 Outreach, Days 21 to 30 Close',
      themTitle: 'Overwhelmed & Scattered',
      themSub: 'Endless conflicting opinions leaving you stuck in analysis paralysis',
    },
    {
      icon: '💵',
      label: 'Time to First $100',
      sub: 'Fastest realistic earning milestone',
      usTitle: 'Target: First 14 to 30 Days',
      usSub: "Using Module 4's 3 micro task mini offers designed for fast approvals",
      themTitle: '3 to 6+ Months of Unpaid Work',
      themSub: 'Most give up before landing their very first paid client',
    },
  ] as ComparisonRow[],

  whoFor: [
    "You're a mom looking for a flexible income source that works around your children.",
    'You only have 2 to 3 hours a day and need to make every minute count.',
    'You want practical, realistic advice rather than unrealistic "get rich overnight" claims.',
    "You're willing to follow a 30 day plan and take real, consistent action.",
  ],

  notFor: [
    'You expect guaranteed overnight earnings without putting in effort.',
    "You're searching for push button magic passive income shortcuts.",
    "You aren't willing to spend time testing offers and talking to potential clients.",
    'You prefer theoretical reading over completing actionable worksheets.',
  ],

  testimonials: [
    {
      quote:
        "I was terrified that 2 hours a day wouldn't be enough to start anything real. The 2 hour daily matrix completely eliminated my overwhelm. I split my time: 45 minutes during the afternoon nap and an hour after bedtime. By Day 20, I signed my first local client for email and calendar management. This plan gave me my confidence back!",
      headline: 'I made $750 my very first month working strictly during nap times.',
      name: 'Sarah M.',
      role: 'Mom of 2 (Ages 3 & 5) • Virtual Assistant',
      initials: 'SM',
      gradient: 'from-[#FF6321] to-[#E5591E]',
      outcome: '🎯 Outcome: $750/mo in 90 min/day',
    },
    {
      quote:
        "Most business courses feel like they were written for 22 year olds with zero obligations. This plan actually understands what it's like to have a teething baby and mountains of laundry. The outreach email templates felt natural and respectful, and I signed my first monthly retainer client in week 3. Best $20 I've ever spent!",
      headline: 'The copy paste outreach scripts saved me weeks of awkward guessing.',
      name: 'Elena R.',
      role: 'Mom of an 8 Month Old • Content & Copy',
      initials: 'ER',
      gradient: 'from-amber-500 to-[#FF6321]',
      outcome: '🎯 Outcome: Landed $500/mo Client in 3 Weeks',
    },
    {
      quote:
        "I was driving 40 minutes each way for a stressful part time administrative job that barely covered daycare. Following the bookkeeping and spreadsheet modules in the plan, I replaced that income with two recurring remote clients. I do my work in the morning before school pickup and I haven't missed a school event since.",
      headline:
        'I was able to stop commuting for my part time job and stay home with my kids.',
      name: 'Jessica T.',
      role: 'Mom of 3 School Age Kids • Bookkeeping & Ops',
      initials: 'JT',
      gradient: 'from-rose-500 to-[#FF6321]',
      outcome: '🎯 Outcome: $1,400/mo Remote Business',
    },
  ] as Testimonial[],

  skillOptions: [
    {
      key: 'admin',
      label: 'Admin / Email / Organization (Virtual Assistant)',
      title: 'Executive Virtual Assistant & Inbox Specialist',
      monthlyEarnings: {
        '1h': { low: 150, high: 300 },
        '2h': { low: 350, high: 700 },
        '3h': { low: 600, high: 1200 },
      },
      goal1: 'Package 3 core VA tasks (Email triage, calendar booking, customer replies).',
      goal2: 'Reach out to 5 busy real estate agents or consultants daily.',
    },
    {
      key: 'writing',
      label: 'Writing / Proofreading / Blog Posts / Copy',
      title: 'B2B Blog Writer & Social Media Copywriter',
      monthlyEarnings: {
        '1h': { low: 200, high: 400 },
        '2h': { low: 500, high: 1000 },
        '3h': { low: 800, high: 1600 },
      },
      goal1: 'Publish 2 writing samples and format into a portfolio link.',
      goal2: 'Pitch 5 local boutique agency owners with tailored topic headlines.',
    },
    {
      key: 'social',
      label: 'Social Media Scheduling & Canva Graphics',
      title: 'Canva Content Creator & Social Media Scheduler',
      monthlyEarnings: {
        '1h': { low: 180, high: 350 },
        '2h': { low: 400, high: 800 },
        '3h': { low: 700, high: 1400 },
      },
      goal1: 'Design 5 carousel graphics and 3 template kits in Canva.',
      goal2: 'Direct message 5 founders who post infrequently with a free sample graphic.',
    },
    {
      key: 'bookkeeping',
      label: 'Bookkeeping / Spreadsheet Management',
      title: 'Small Business Bookkeeping & Spreadsheet Organizer',
      monthlyEarnings: {
        '1h': { low: 250, high: 500 },
        '2h': { low: 600, high: 1200 },
        '3h': { low: 1000, high: 2000 },
      },
      goal1: 'Build a sample monthly reconciliation template in a spreadsheet.',
      goal2: 'Reach out to local trade businesses & ecommerce shop owners.',
    },
    {
      key: 'support',
      label: 'Customer Care / Community Moderation',
      title: 'Live Chat & Customer Happiness Representative',
      monthlyEarnings: {
        '1h': { low: 150, high: 300 },
        '2h': { low: 350, high: 650 },
        '3h': { low: 550, high: 1100 },
      },
      goal1: 'Set up your remote work profile and draft responses to standard FAQ scenarios.',
      goal2: 'Apply to 3 boutique SaaS / creator businesses looking for part time support.',
    },
  ] as SkillOption[],

  faqs: [
    {
      question: 'What exactly do I receive when I buy?',
      answer: [
        'Instant access to the Plan PDF, 14 fillable worksheets, and 25+ outreach scripts. Works on any phone, tablet, Mac, or PC.',
      ],
    },
    {
      question: 'What if I only have 30 to 60 minutes a day?',
      answer: [
        'The guide adapts to 30 and 60 minute micro windows, so you never need a single uninterrupted 2 hour block.',
      ],
    },
    {
      question: 'Do I need experience or a degree?',
      answer: [
        'No. Module 1 helps you package everyday skills you already have into paid, beginner friendly freelance niches.',
      ],
    },
    {
      question: 'Is this a course, or just a PDF guide?',
      answer: [
        "It's a full system: strategy guide, worksheets, a 30 day roadmap, scripts, and a safety guide, all built to be used together.",
      ],
    },
    {
      question: 'How soon can I land my first paying client?',
      answer: [
        'Most readers target Days 14 to 30, using Module 4\'s low friction "mini offer" approach for fast client approvals.',
      ],
    },
  ] as FaqItem[],
};

export const handlePurchase = () => {
  // Replace this with your own checkout / payment provider redirect.
  if (typeof window !== 'undefined') {
    window.location.href = siteConfig.purchaseUrl;
  }
};

export function formatPrice(value: number) {
  return `${siteConfig.pricing.currencySymbol}${value.toFixed(2)}`;
}

export function savingsPercent() {
  const { current, original } = siteConfig.pricing;
  return Math.round(((original - current) / original) * 100);
}
