import AnnouncementBar from './components/AnnouncementBar';
import Author from './components/Author';
import BrandIntro from './components/BrandIntro';
import Calculator from './components/Calculator';
import Comparison from './components/Comparison';
import Curriculum from './components/Curriculum';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import ProblemSection from './components/ProblemSection';
import StickyBar from './components/StickyBar';
import Testimonials from './components/Testimonials';
import TrustStrip from './components/TrustStrip';
import WhatInside from './components/WhatInside';
import WhoItsFor from './components/WhoItsFor';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#0B0F17] transition-colors duration-300">
      <AnnouncementBar theme={theme} onToggleTheme={toggleTheme} />
      <Navbar />
      <Hero />
      <BrandIntro />
      <TrustStrip />
      <ProblemSection />
      <WhatInside />
      <Curriculum />
      <Comparison />
      <WhoItsFor />
      <Testimonials />
      <Pricing />
      <Calculator />
      <Author />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBar />
    </div>
  );
}
