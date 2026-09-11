import React, { useState } from 'react';
import { PLATFORMS_DATA, PlatformDetail } from '../data/erpData';
import { Monitor, Smartphone, Truck, PackageCheck, Check, WifiOff, ChevronRight } from 'lucide-react';

interface PlatformsSectionProps {
  onOpenDemo: () => void;
}

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({ onOpenDemo }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformDetail>(PLATFORMS_DATA[0]);

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'desktop': return <Monitor className="w-5 h-5" />;
      case 'sales_mobile': return <Smartphone className="w-5 h-5" />;
      case 'driver_mobile': return <Truck className="w-5 h-5" />;
      case 'loader_mobile': return <PackageCheck className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <section id="platforms" className="py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2">
            منظومة التطبيقات الأربعة
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
            أجهزة مختلفة. <br className="hidden sm:inline" />
            تناغم كامل كأنها نظام واحد.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
            تربط المنظومة موظفي الإدارة بالمكتب وسيارات التوزيع وعمال المستودعات في شبكة بيانية فورية وموثوقة تدعم العمل الميداني المستمر دون اتصال إنترنت.
          </p>
        </div>

        {/* Apple Product Lineup Grid (4 Products) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PLATFORMS_DATA.map((plat) => {
            const isSelected = selectedPlatform.id === plat.id;
            return (
              <div
                key={plat.id}
                onClick={() => setSelectedPlatform(plat)}
                className={`p-6 rounded-[24px] transition-all duration-200 cursor-pointer flex flex-col justify-between text-right border ${
                  isSelected
                    ? 'bg-white dark:bg-[#1c1c1e] border-[#0071e3] dark:border-[#2997ff] shadow-md scale-[1.02]'
                    : 'bg-white/70 dark:bg-[#161617]/70 border-black/[0.06] dark:border-white/[0.08] hover:bg-white dark:hover:bg-[#1c1c1e] hover:border-black/[0.12] dark:hover:border-white/[0.15]'
                }`}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] dark:bg-[#262629] text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center justify-center">
                      {getPlatformIcon(plat.id)}
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-[#86868b]">
                      {plat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                    {plat.titleAr}
                  </h3>
                  <p className="text-xs font-mono text-[#86868b] mb-3">
                    {plat.titleEn}
                  </p>

                  <p className="text-xs text-[#86868b] leading-relaxed line-clamp-3 mb-4">
                    {plat.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="text-[#86868b] flex items-center gap-1">
                    <WifiOff className="w-3.5 h-3.5 text-[#34c759]" />
                    <span>أوفلاين 100%</span>
                  </span>
                  <span className={`font-medium flex items-center gap-0.5 ${
                    isSelected ? 'text-[#0071e3] dark:text-[#2997ff]' : 'text-[#86868b]'
                  }`}>
                    <span>التفاصيل</span>
                    <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple-style Detailed Showcase Card for Selected Platform */}
        <div className="bg-white dark:bg-[#161617] rounded-[32px] border border-black/[0.06] dark:border-white/[0.08] p-8 sm:p-12 shadow-sm text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider">
                  {selectedPlatform.badge} • المواصفات التشغيلية
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mt-1">
                  {selectedPlatform.titleAr}
                </h3>
                <p className="text-sm sm:text-base text-[#86868b] mt-2 leading-relaxed">
                  {selectedPlatform.tagline}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.06]">
                <div className="text-xs font-medium text-[#86868b] mb-1">المستخدم المستهدف في الشركة:</div>
                <div className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {selectedPlatform.targetAudience}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-3">
                  أبرز الإمكانيات والوظائف الميدانية
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPlatform.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fbfbfd] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.06] text-xs text-[#1d1d1f] dark:text-[#f5f5f7]"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#34c759]/20 text-[#34c759] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed font-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenDemo}
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-xs cursor-pointer"
                >
                  طلب تجربة {selectedPlatform.titleAr}
                </button>
                <div className="text-xs text-[#86868b] font-mono">
                  البنية البرمجية: <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">{selectedPlatform.techStack}</span>
                </div>
              </div>
            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-3 text-xs">
                  <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">مؤشرات الأداء القياسية</span>
                  <span className="text-[#34c759] font-medium">مزامنة مشفرة آمنة</span>
                </div>

                <div className="space-y-2.5">
                  {selectedPlatform.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3.5 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs text-xs">
                      <span className="text-[#86868b]">{metric.label}</span>
                      <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#161617] border border-black/[0.04] dark:border-white/[0.06] text-xs text-[#86868b] leading-relaxed">
                  <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold block mb-1">
                    محرك Offline-First المتزامن:
                  </strong>
                  تم تصميم التطبيقات بقواعد بيانات محلية خفيفة تحفظ العمليات وتضمن استمرارية البيع والتحصيل بلا توقف، وتتزامن آلياً فور استعادة الاتصال.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
