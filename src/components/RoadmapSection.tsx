import React, { useState } from 'react';
import { ROADMAP_PHASES, RoadmapPhase } from '../data/erpData';
import { Check, Clock } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<RoadmapPhase>(ROADMAP_PHASES[0]);
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'in_progress' | 'planned'>('all');

  const filteredPhases = ROADMAP_PHASES.filter((p) => {
    if (statusFilter === 'all') return true;
    return p.status === statusFilter;
  });

  const getStatusBadge = (status: RoadmapPhase['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-[#34c759]/15 dark:text-[#34c759] dark:border-transparent">
            <Check className="w-2.5 h-2.5" />
            <span>مكتملة</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-[#ff9500]/15 dark:text-[#ff9500] dark:border-transparent">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-[#ff9500] animate-pulse" />
            <span>قيد التنفيذ</span>
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-50 text-slate-600 border border-slate-200/60 dark:bg-white/[0.08] dark:text-[#86868b] dark:border-transparent">
            <span>مجدولة</span>
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2">
            خارطة طريق البناء الهندسي
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
            مراحل هندسية دقيقة. <br className="hidden sm:inline" />
            من التأسيس إلى إطلاق الإنتاج.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
            تعتمد كل مرحلة بنيوياً على المرحلة التي تسبقها لضمان استقرار قاعدة البيانات والأمان العالي قبل تشغيل العمليات الميدانية الواسعة.
          </p>
        </div>

        {/* Apple Segmented Status Filter */}
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-[#161617] p-1.5 sm:p-2 rounded-2xl sm:rounded-full border border-black/[0.06] dark:border-white/[0.08] mb-8 sm:mb-10 max-w-2xl mx-auto shadow-xs overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1 text-xs whitespace-nowrap">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-medium transition cursor-pointer min-h-[36px] ${
                statusFilter === 'all' 
                  ? 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] shadow-xs' 
                  : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              الكل (15)
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-medium transition cursor-pointer min-h-[36px] ${
                statusFilter === 'completed' 
                  ? 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] shadow-xs' 
                  : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              المكتملة (2)
            </button>
            <button
              onClick={() => setStatusFilter('in_progress')}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-medium transition cursor-pointer min-h-[36px] ${
                statusFilter === 'in_progress' 
                  ? 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] shadow-xs' 
                  : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              قيد البناء (1)
            </button>
            <button
              onClick={() => setStatusFilter('planned')}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-medium transition cursor-pointer min-h-[36px] ${
                statusFilter === 'planned' 
                  ? 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] shadow-xs' 
                  : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              المجدولة (12)
            </button>
          </div>

          <div className="text-xs text-[#0071e3] dark:text-[#2997ff] font-medium px-4 hidden md:block whitespace-nowrap">
            المرحلة الحالية: Phase 2
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredPhases.map((p, idx) => {
            const isSelected = selectedPhase.phase === p.phase;
            return (
              <div
                key={idx}
                onClick={() => setSelectedPhase(p)}
                className={`p-6 rounded-[24px] border text-right transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-[#1c1c1e] border-[#0071e3] dark:border-[#2997ff] shadow-sm'
                    : 'bg-white/70 dark:bg-[#161617]/70 border-black/[0.06] dark:border-white/[0.08] hover:bg-white dark:hover:bg-[#1c1c1e]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium text-[#86868b]">
                      {p.phase}
                    </span>
                    {getStatusBadge(p.status)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-base leading-snug">
                      {p.titleAr}
                    </h3>
                    <p className="text-xs font-mono text-[#86868b] mt-0.5">
                      {p.titleEn}
                    </p>
                  </div>

                  <div className="text-xs text-[#86868b]">
                    الوحدات: <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-mono">{p.modulesIncluded}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#86868b]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>{p.duration}</span>
                  </span>
                  <span className="font-mono text-[11px]">
                    {p.techFocus.split(',')[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Inspector Card */}
        <div className="bg-white dark:bg-[#161617] rounded-[24px] sm:rounded-[32px] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-10 shadow-sm text-right">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#0071e3] text-white">
                {selectedPhase.phase}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {selectedPhase.titleAr}
                </h3>
                <p className="text-xs font-mono text-[#86868b]">
                  {selectedPhase.titleEn}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {getStatusBadge(selectedPhase.status)}
              <span className="text-xs text-[#86868b] bg-[#f5f5f7] dark:bg-[#1d1d1f] px-3 py-1 rounded-full font-medium">
                المدة المقدرة: {selectedPhase.duration}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                المخرجات والمهام الأساسية للمرحلة:
              </div>
              <ul className="space-y-2.5">
                {selectedPhase.keyDeliverables.map((deliv, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1d1d1f] dark:text-[#f5f5f7] p-3.5 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.06]"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#34c759]/15 text-[#34c759] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="leading-relaxed font-normal">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.06] space-y-4">
              <div>
                <div className="text-xs text-[#86868b] mb-1">الوحدات المتضمنة:</div>
                <div className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] font-mono">
                  {selectedPhase.modulesIncluded}
                </div>
              </div>

              <div>
                <div className="text-xs text-[#86868b] mb-1">التركيز التقني والبرمجي:</div>
                <div className="text-xs font-mono text-[#1d1d1f] dark:text-[#f5f5f7] bg-white dark:bg-[#161617] p-3 rounded-xl border border-black/[0.04] dark:border-white/[0.06]">
                  {selectedPhase.techFocus}
                </div>
              </div>

              <div className="text-[11px] text-[#86868b] leading-relaxed pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                📌 يلتزم التطوير باختبارات Unit Tests واختبارات التكاملية قبل الاعتماد النهائي لكل مرحلة.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
