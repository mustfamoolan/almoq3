import React from 'react';
import { ArrowUp, Printer, Mail, Phone } from 'lucide-react';
import { Almoq3Logo } from './Almoq3Logo';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenDemo }) => {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#161617] border-t border-black/[0.08] dark:border-white/[0.08] text-[#86868b] text-xs transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-right">
        
        {/* Footnote notes like Apple.com */}
        <div className="pb-8 mb-10 border-b border-black/[0.06] dark:border-white/[0.08] text-[11px] space-y-2 leading-relaxed">
          <p>
            1. ميزة Offline-First تعتمد على محرك SQLite مشفر محلياً على أجهزة المناديب والسائقين متوافق مع كافة أنظمة Android و iOS و Windows Desktop.
          </p>
          <p>
            2. تقليل الهدر بنسبة 35% محسوب استناداً إلى نتائج تطبيق قاعدة صرف FEFO التلقائية ومراقبة درجات حرارة التبريد في شاحنات ومستودعات التوزيع.
          </p>
          <p>
            3. نظام ALMOQ3 ERP تم تصميمه وتوثيقه بواسطة المهندس مصطفى صدي (Mustafa Sadee) كمنظومة تخطيط موارد المؤسسات المتخصصة في سلاسل إمداد الأغذية وتوزيع الجملة والتجزئة.
          </p>
        </div>

        {/* Apple Directory Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onScrollTo('hero')}>
              <Almoq3Logo size={22} />
              <span className="font-semibold text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">
                ALMOQ3 ERP Pro
              </span>
            </div>
            <p className="text-xs text-[#86868b] leading-relaxed max-w-sm">
              الحل التقني المتكامل لوكالات التوزيع وشركات الأغذية وسلاسل الإمداد. 37 وحدة متخصصة و4 منصات متزامنة تدعم العمل بدون إنترنت.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline cursor-pointer"
              >
                <span>طلب استشارة وعرض تجريبي للمنظومة &gt;</span>
              </button>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-xs">
              استكشف المنظومة
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onScrollTo('hero')} className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition cursor-pointer">
                  نظرة عامة
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platforms')} className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition cursor-pointer">
                  المنصات الأربعة
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('lifecycle')} className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition cursor-pointer">
                  دورة العمل (7 مراحل)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('modules')} className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition cursor-pointer">
                  فهرس الوحدات (37)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('advantages')} className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition cursor-pointer">
                  المزايا الجوهرية
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Tech Specs */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-xs">
              البنية والتقنية
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>• محرك Offline-First</li>
              <li>• مزامنة SQLite ثنائية الاتجاه</li>
              <li>• إدارة صرف FEFO للصلاحيات</li>
              <li>• مطابقة مشتريات 3-Way</li>
              <li>• تتبع الأصول والثلاجات</li>
              <li>• أتمتة إشعارات WhatsApp</li>
            </ul>
          </div>

          {/* Column 3: Document Details */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-xs">
              وثيقة وتواصل النظام
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <div>الإصدار: <span className="font-mono text-[#1d1d1f] dark:text-[#f5f5f7]">1.0 المعتمد</span></div>
              <div>المؤلف: <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">Mustafa Sadee</span></div>
              <div className="flex items-center gap-1.5 pt-0.5">
                <Mail className="w-3 h-3 text-[#0071e3] shrink-0" />
                <a 
                  href="mailto:mustfa.s.mjeed@gmail.com" 
                  className="font-mono text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition"
                  dir="ltr"
                >
                  mustfa.s.mjeed@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5 pt-0.5">
                <Phone className="w-3 h-3 text-[#34c759] shrink-0" />
                <a 
                  href="https://wa.me/9647737777424" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#34c759] transition"
                  dir="ltr"
                >
                  07737777424 (WhatsApp)
                </a>
              </div>
              <div>التاريخ: <span className="font-mono text-[#1d1d1f] dark:text-[#f5f5f7]">2026-09-11</span></div>
              <div className="pt-2">
                <button
                  onClick={() => window.print()}
                  className="hover:text-[#0071e3] transition text-[11px] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3 h-3" />
                  <span>طباعة ملخص الوثيقة</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div>
            جميع الحقوق محفوظة لنظام <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">ALMOQ3 ERP Pro</span> © 2026.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onScrollTo('hero')}
              className="text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] flex items-center gap-1 transition cursor-pointer"
            >
              <span>العودة لأعلى الصفحة</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
