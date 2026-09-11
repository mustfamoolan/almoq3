import React, { useState, useEffect } from 'react';
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
    </div>
  );
}
