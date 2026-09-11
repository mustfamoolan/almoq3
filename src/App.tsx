import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlatformsSection } from './components/PlatformsSection';
import { LifecycleSection } from './components/LifecycleSection';
import { ModulesExplorer } from './components/ModulesExplorer';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { Footer } from './components/Footer';
import { ModuleDetailModal } from './components/ModuleDetailModal';
import { DemoModal } from './components/DemoModal';
import { ERPModule } from './data/erpData';

export default function App() {
  const [selectedModule, setSelectedModule] = useState<ERPModule | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  // Theme state: defaults strictly to clean Light Mode
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('almoq3_theme') || localStorage.getItem('mandoub_theme');
      if (saved) return saved === 'dark';
      return false; // clean, crisp light mode default
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('almoq3_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('almoq3_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white font-['Cairo','SF_Pro_Display',-apple-system,BlinkMacSystemFont,sans-serif] transition-colors duration-200">
      {/* Navigation Header */}
      <Header
        onOpenDemo={() => setDemoModalOpen(true)}
        onScrollTo={handleScrollTo}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Landing Sections */}
      <main>
        {/* 1. Hero & Interactive Live Platform Switcher */}
        <Hero
          onScrollTo={handleScrollTo}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 2. 4 Platforms Detailed Overview */}
        <PlatformsSection
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 3. Integrated 7-Step Business Lifecycle */}
        <LifecycleSection
          onSelectModuleId={(id) => {
            // Can locate module and open modal
          }}
        />

        {/* 4. Complete 37 Modules Searchable & Filterable Catalog */}
        <ModulesExplorer
          onSelectModule={(module) => setSelectedModule(module)}
        />

        {/* 5. FMCG & Food Distribution Specialized Advantages */}
        <DifferentiatorsSection />

        {/* 6. 15-Phase Development Roadmap */}
        <RoadmapSection />

        {/* 7. Interactive Fleet & Branch Sizing Calculator */}
        <InteractiveCalculator
          onOpenDemo={() => setDemoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenDemo={() => setDemoModalOpen(true)}
      />

      {/* Modals */}
      <ModuleDetailModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onOpenDemo={() => setDemoModalOpen(true)}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      {/* Floating WhatsApp Action for Mobile screens */}
      <div className="fixed bottom-5 left-5 z-40 sm:hidden">
        <a
          href="https://wa.me/9647737777424?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%86%D8%B8%D8%A7%D9%85%20ALMOQ3%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white px-4 py-2.5 rounded-full shadow-lg border border-white/20 transition-all font-medium text-xs cursor-pointer"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>تواصل واتساب</span>
        </a>
      </div>
    </div>
  );
}
