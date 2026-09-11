import React from 'react';
import { ERPModule } from '../data/erpData';
import { DynamicIcon } from './DynamicIcon';
import { X, Check, Monitor, Smartphone, Truck, PackageCheck } from 'lucide-react';

interface ModuleDetailModalProps {
  module: ERPModule | null;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({ module, onClose, onOpenDemo }) => {
  if (!module) return null;

  const getPriorityBadgeClass = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-50 text-red-700 border-red-200/80 dark:bg-red-500/15 dark:text-red-400 dark:border-red-500/30';
      case 'high':
        return 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30';
      case 'medium':
        return 'bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200/80 dark:bg-white/10 dark:text-slate-300 dark:border-white/10';
    }
  };

  const renderPlatformBadge = (plat: string) => {
    switch (plat) {
      case 'desktop':
        return (
          <span key={plat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            <Monitor className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>سطح المكتب (Desktop)</span>
          </span>
        );
      case 'sales_mobile':
        return (
          <span key={plat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            <Smartphone className="w-3.5 h-3.5 text-[#34c759]" />
            <span>مندوب المبيعات (Offline)</span>
          </span>
        );
      case 'driver_mobile':
        return (
          <span key={plat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            <Truck className="w-3.5 h-3.5 text-[#ff9500]" />
            <span>السائق والتسليم</span>
          </span>
        );
      case 'loader_mobile':
        return (
          <span key={plat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            <PackageCheck className="w-3.5 h-3.5 text-[#af52de]" />
            <span>المجهّز والمخزن (FEFO)</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#1c1c1e] border border-black/10 dark:border-white/15 rounded-[32px] shadow-2xl overflow-hidden my-8 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-black/[0.06] dark:border-white/[0.08] flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center justify-center shrink-0">
              <DynamicIcon name={module.icon} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-[#86868b]">
                  MODULE {module.id < 10 ? `0${module.id}` : module.id}
                </span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getPriorityBadgeClass(module.priority)}`}>
                  {module.priorityLabel}
                </span>
                <span className="text-xs text-[#86868b]">
                  {module.categoryAr}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
                {module.titleAr}
              </h2>
              <p className="text-xs font-mono text-[#86868b] mt-0.5">
                {module.titleEn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Summary */}
          <div className="p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06]">
            <h4 className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider mb-1.5">
              ملخص الوحدة والهدف التشغيلي:
            </h4>
            <p className="text-sm text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed font-normal">
              {module.summary}
            </p>
          </div>

          {/* Platforms Supported */}
          <div>
            <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2.5">
              المنصات والتطبيقات المرتبطة بالوحدة:
            </div>
            <div className="flex flex-wrap gap-2">
              {module.platforms.map((plat) => renderPlatformBadge(plat))}
            </div>
          </div>

          {/* Subsections & Features */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
              المكونات الهندسية والعمليات التفصيلية:
            </div>

            {module.subsections.map((sub, sIdx) => (
              <div key={sIdx} className="p-5 rounded-2xl bg-[#fbfbfd] dark:bg-[#242426] border border-black/[0.04] dark:border-white/[0.06] space-y-3">
                <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
                  <span>{sub.title}</span>
                </h3>
                <ul className="space-y-2 pr-3 text-xs text-[#86868b]">
                  {sub.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#34c759]/15 text-[#34c759] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed font-normal text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Implementation Phase Info */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] text-xs">
            <span className="text-[#86868b]">مرحلة البناء في خارطة الطريق:</span>
            <span className="font-semibold text-[#0071e3] dark:text-[#2997ff] font-mono">المرحلة {module.phaseNumber}</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#86868b]">
            متوافق مع محرك PostgreSQL وأمان الصلاحيات JWT.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-full transition cursor-pointer"
            >
              إغلاق
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDemo();
              }}
              className="px-6 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition cursor-pointer shadow-xs"
            >
              طلب استعراض هذه الوحدة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
