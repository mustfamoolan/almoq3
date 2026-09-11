import React, { useState, useMemo } from 'react';
import { ERP_MODULES, ERPModule } from '../data/erpData';
import { DynamicIcon } from './DynamicIcon';
import { Search, Filter, ChevronLeft, Monitor, Smartphone, Truck, PackageCheck, AlertCircle } from 'lucide-react';

interface ModulesExplorerProps {
  onSelectModule: (module: ERPModule) => void;
}

export const ModulesExplorer: React.FC<ModulesExplorerProps> = ({ onSelectModule }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'الكل', count: 37 },
    { id: 'core', label: 'الوحدات الأساسية', count: 12 },
    { id: 'finance', label: 'المالية والمحاسبة', count: 7 },
    { id: 'operations', label: 'العمليات واللوجستيات', count: 7 },
    { id: 'crm', label: 'علاقات العملاء والسوق', count: 3 },
    { id: 'analytics', label: 'البيانات والذكاء الاصطناعي', count: 2 },
    { id: 'tech', label: 'البنية والتكامل', count: 6 }
  ];

  const priorities = [
    { id: 'all', label: 'كافة الأولويات' },
    { id: 'critical', label: 'حرجة (15)' },
    { id: 'high', label: 'عالية (15)' },
    { id: 'medium', label: 'متوسطة (7)' }
  ];

  const platforms = [
    { id: 'all', label: 'كافة المنصات' },
    { id: 'desktop', label: 'سطح المكتب (Desktop)' },
    { id: 'sales_mobile', label: 'مندوب المبيعات' },
    { id: 'driver_mobile', label: 'السائق والتوصيل' },
    { id: 'loader_mobile', label: 'المجهّز والمخزن' }
  ];

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

  const filteredModules = useMemo(() => {
    return ERP_MODULES.filter((m) => {
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        return false;
      }
      if (selectedPriority !== 'all' && m.priority !== selectedPriority) {
        return false;
      }
      if (selectedPlatform !== 'all' && !m.platforms.includes(selectedPlatform as any)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inId = m.id.toString() === query || `module ${m.id}`.includes(query);
        const inTitleAr = m.titleAr.toLowerCase().includes(query);
        const inTitleEn = m.titleEn.toLowerCase().includes(query);
        const inSummary = m.summary.toLowerCase().includes(query);
        const inItems = m.subsections.some((sub) =>
          sub.title.toLowerCase().includes(query) ||
          sub.items.some((item) => item.toLowerCase().includes(query))
        );
        return inId || inTitleAr || inTitleEn || inSummary || inItems;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedPriority, selectedPlatform]);

  return (
    <section id="modules" className="py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2">
            دليل الوحدات الشامل
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
            37 وحدة متخصصة. <br className="hidden sm:inline" />
            عمق استثنائي لكل تفصيل.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
            استكشف الشاشات والعمليات الهندسية المعتمدة وفق وثيقة النظام. صُمم كل موديول ليتكامل بانسيابية تامة مع بقية أجزاء المنظومة.
          </p>
        </div>

        {/* Apple-style Search & Filters Bar */}
        <div className="bg-white dark:bg-[#161617] rounded-[28px] border border-black/[0.06] dark:border-white/[0.08] p-4 sm:p-6 mb-12 shadow-sm space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#86868b] absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن وحدة أو ميزة (FEFO، عمولات، شيكات، وقود، باركود، سقف الائتمان...)"
              className="w-full pl-4 pr-11 py-3 bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.06] rounded-full text-sm text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition text-right"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white bg-black/[0.05] dark:bg-white/[0.1] px-2.5 py-1 rounded-full cursor-pointer"
              >
                مسح
              </button>
            )}
          </div>

          {/* Category Pill Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] shadow-xs'
                      : 'bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white border border-transparent'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-white/20 dark:bg-black/20 font-semibold' : 'bg-black/[0.05] dark:bg-white/[0.08]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#86868b] font-medium flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>التصفية:</span>
              </span>

              {/* Priority Select */}
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.06] dark:border-white/[0.08] rounded-full px-3 py-1.5 text-[#1d1d1f] dark:text-[#f5f5f7] focus:outline-none focus:ring-1 focus:ring-[#0071e3]"
              >
                {priorities.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>

              {/* Platform Select */}
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.06] dark:border-white/[0.08] rounded-full px-3 py-1.5 text-[#1d1d1f] dark:text-[#f5f5f7] focus:outline-none focus:ring-1 focus:ring-[#0071e3]"
              >
                {platforms.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-[#86868b]">
              الوحدات المطابقة: <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">{filteredModules.length}</strong> من 37
            </div>
          </div>

        </div>

        {/* Modules Grid */}
        {filteredModules.length === 0 ? (
          <div className="bg-white dark:bg-[#161617] rounded-[28px] border border-black/[0.06] dark:border-white/[0.08] p-12 text-center max-w-md mx-auto shadow-xs">
            <AlertCircle className="w-10 h-10 text-[#86868b] mx-auto mb-3" />
            <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1">لا توجد وحدات تطابق هذا البحث</h3>
            <p className="text-xs text-[#86868b] mb-4">
              جرّب تغيير كلمات البحث أو إعادة تعيين معايير الفلترة.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriority('all');
                setSelectedPlatform('all');
              }}
              className="px-5 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full cursor-pointer"
            >
              إعادة تعيين الفلاتر
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredModules.map((module) => (
              <div
                key={module.id}
                onClick={() => onSelectModule(module)}
                className="bg-white dark:bg-[#161617] hover:bg-[#fbfbfd] dark:hover:bg-[#1c1c1e] border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.12] dark:hover:border-white/[0.16] rounded-[24px] p-6 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group text-right"
              >
                <div className="space-y-4">
                  {/* Card Header: Module Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-[#86868b]">
                        MODULE {module.id < 10 ? `0${module.id}` : module.id}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getPriorityBadgeClass(module.priority)}`}>
                        {module.priorityLabel}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] dark:bg-[#262629] text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center justify-center group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition">
                      <DynamicIcon name={module.icon} className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & English Subtitle */}
                  <div>
                    <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition leading-snug">
                      {module.titleAr}
                    </h3>
                    <p className="text-xs font-mono text-[#86868b] mt-0.5">
                      {module.titleEn}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[#86868b] leading-relaxed line-clamp-2">
                    {module.summary}
                  </p>

                  {/* Subsections sample */}
                  <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] space-y-1.5 text-xs text-[#86868b]">
                    {module.subsections.slice(0, 2).map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]/60 dark:bg-[#2997ff]/60" />
                        <span className="truncate text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">{sub.title}</span>
                      </div>
                    ))}
                    {module.subsections.length > 2 && (
                      <div className="text-[10px] text-[#86868b]">
                        + {module.subsections.length - 2} أقسام تفصيلية إضافية
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Platform Icons & Action Link */}
                <div className="pt-4 mt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#86868b]">
                    {module.platforms.includes('desktop') && (
                      <span title="مدعوم على سطح المكتب">
                        <Monitor className="w-3.5 h-3.5 text-[#0071e3]" />
                      </span>
                    )}
                    {module.platforms.includes('sales_mobile') && (
                      <span title="مدعوم على تطبيق المندوب">
                        <Smartphone className="w-3.5 h-3.5 text-[#34c759]" />
                      </span>
                    )}
                    {module.platforms.includes('driver_mobile') && (
                      <span title="مدعوم على تطبيق السائق">
                        <Truck className="w-3.5 h-3.5 text-[#ff9500]" />
                      </span>
                    )}
                    {module.platforms.includes('loader_mobile') && (
                      <span title="مدعوم على تطبيق المجهّز">
                        <PackageCheck className="w-3.5 h-3.5 text-[#af52de]" />
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-medium text-[#0071e3] dark:text-[#2997ff] group-hover:underline flex items-center gap-0.5">
                    <span>استعراض المواصفات</span>
                    <ChevronLeft className="w-3.5 h-3.5 transition group-hover:-translate-x-0.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
