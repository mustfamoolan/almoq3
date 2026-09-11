import React, { useState } from 'react';
import { Layers, Sparkles, Menu, X, PhoneCall, Sun, Moon, MessageCircle } from 'lucide-react';
import { Almoq3Logo } from './Almoq3Logo';

interface HeaderProps {
  onOpenDemo: () => void;
  onScrollTo: (id: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenDemo, 
  onScrollTo, 
  isDark, 
  onToggleTheme 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'المنصات الأربعة', id: 'platforms' },
    { label: 'دورة العمل (7 خطوات)', id: 'lifecycle' },
    { label: 'دليل الـ 37 وحدة', id: 'modules' },
    { label: 'مزايا التوزيع والمخازن', id: 'advantages' },
    { label: 'خارطة الطريق (14 مرحلة)', id: 'roadmap' },
    { label: 'حاسبة التجهيز', id: 'calculator' }
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. Apple Global Navigation Bar (44px) */}
      <nav className="fixed top-0 inset-x-0 z-50 h-11 apple-glass border-b border-black/[0.06] dark:border-white/[0.1] text-xs transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          
          {/* Apple-style Brand / Logo */}
          <div 
            onClick={() => onScrollTo('hero')}
            className="flex items-center gap-2 cursor-pointer text-[#1d1d1f] dark:text-[#f5f5f7] hover:opacity-80 transition-opacity"
            role="button"
            tabIndex={0}
          >
            <Almoq3Logo size={18} />
            <span className="font-semibold tracking-tight text-[13px]">
              ALMOQ3
            </span>
          </div>

          {/* Desktop Global Links */}
          <div className="hidden md:flex items-center gap-7 text-[12px] text-[#1d1d1f]/75 dark:text-[#f5f5f7]/75 font-normal tracking-tight">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp direct contact */}
            <a
              href="https://wa.me/9647737777424?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%86%D8%B8%D8%A7%D9%85%20ALMOQ3%20ERP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#34c759]/10 hover:bg-[#34c759]/20 text-[#34c759] transition-all text-[11px] font-medium cursor-pointer"
              title="تواصل مباشر عبر WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono" dir="ltr">07737777424</span>
              <span className="sm:hidden text-[10px]">واتساب</span>
            </a>

            {/* Apple-style theme toggle button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.05] dark:bg-white/[0.1] hover:bg-black/[0.08] dark:hover:bg-white/[0.16] text-[#1d1d1f] dark:text-[#f5f5f7] transition-all duration-200 cursor-pointer text-[11px] font-medium"
              title={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#ff9f0a]" />
                  <span className="hidden sm:inline">فاتح</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#515154]" />
                  <span className="hidden sm:inline">داكن</span>
                </>
              )}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-[#1d1d1f] dark:text-[#f5f5f7]"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 2. Apple Product Sub-Header (Sticky 52px) */}
      <header className="sticky top-11 z-40 h-[52px] apple-glass border-b border-black/[0.08] dark:border-white/[0.12] transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          
          {/* Product Title */}
          <div 
            onClick={() => onScrollTo('hero')}
            className="cursor-pointer select-none flex items-center gap-2.5"
          >
            <Almoq3Logo size={24} />
            <span className="text-[18px] sm:text-[20px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              ALMOQ3 ERP <span className="text-[11px] font-medium text-[#86868b] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10">Pro</span>
            </span>
            <span className="text-xs text-[#86868b] hidden sm:inline-block">
              المنظومة المتكاملة للتوزيع
            </span>
          </div>

          {/* Subnav Action Bar */}
          <div className="flex items-center gap-4 text-xs font-normal">
            <div className="hidden lg:flex items-center gap-4 text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70">
              <button onClick={() => handleNavClick('platforms')} className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                المنصات
              </button>
              <button onClick={() => handleNavClick('modules')} className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                المواصفات الفنية
              </button>
              <button onClick={() => handleNavClick('roadmap')} className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                الخطة الزمنية
              </button>
            </div>

            {/* Apple Signature Blue Pill Button */}
            <button
              onClick={onOpenDemo}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white font-normal text-xs px-4 py-1.5 rounded-full transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              طلب استشارة وعرض
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Dropdown (Apple style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-11 bottom-0 z-40 apple-glass p-6 flex flex-col justify-between md:hidden border-b border-black/10 dark:border-white/10 animate-in fade-in duration-200">
          <div className="space-y-4 pt-4">
            <div className="text-xs font-medium text-[#86868b] uppercase tracking-wider px-2">
              أقسام المنظومة
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-right py-3 px-3 text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] border-b border-black/5 dark:border-white/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#86868b] text-sm">›</span>
              </button>
            ))}
          </div>

          <div className="pt-6 space-y-3">
            {/* Theme Toggle in Mobile Menu */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-black/[0.04] dark:bg-white/[0.08]">
              <span className="text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                مظهر التطبيق:
              </span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] shadow-xs text-xs font-medium cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#ff9f0a]" />
                    <span>الوضع الفاتح</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#515154]" />
                    <span>الوضع الداكن</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="https://wa.me/9647737777424?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%86%D8%B8%D8%A7%D9%85%20ALMOQ3%20ERP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#34c759]/10 hover:bg-[#34c759]/20 text-[#34c759] font-medium text-sm rounded-full flex items-center justify-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب مباشرة: 07737777424</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm rounded-full text-center transition shadow-sm cursor-pointer"
            >
              طلب استشارة وعرض تجريبي مجاني
            </button>
          </div>
        </div>
      )}
    </>
  );
};
