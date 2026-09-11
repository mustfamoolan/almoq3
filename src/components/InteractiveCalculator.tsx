import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface InteractiveCalculatorProps {
  onOpenDemo: () => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onOpenDemo }) => {
  const [branches, setBranches] = useState<number>(2);
  const [salesReps, setSalesReps] = useState<number>(15);
  const [trucks, setTrucks] = useState<number>(8);
  const [warehouses, setWarehouses] = useState<number>(3);

  // Estimates
  const totalMobileUsers = salesReps + trucks + Math.round(warehouses * 2);
  const dailyInvoicesEst = salesReps * 20;
  const settlementTimeSaved = Math.round(trucks * 35);
  const wasteReductionPct = 35;

  return (
    <section id="calculator" className="py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2">
            حاسبة التوسع والجدوى التشغيلية
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
            صُمم ليتوسع مع نمو أعمالك. <br className="hidden sm:inline" />
            أياً كان الحجم والانتشار.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
            حدد عدد الفروع والشاحنات والمناديب الميدانيين لاحتساب الطاقة التشغيلية المتوقعة والوقت الموفر يومياً في التسويات والمخازن.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161617] rounded-[32px] border border-black/[0.06] dark:border-white/[0.08] p-8 space-y-6 shadow-xs text-right">
            <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
              مؤشرات الأسطول والفريق التشغيلي:
            </h3>

            {/* Slider 1: Branches */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#86868b]">عدد الفروع والمراكز:</span>
                <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] font-mono">{branches} فروع</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={branches}
                onChange={(e) => setBranches(Number(e.target.value))}
                className="w-full h-1.5 bg-[#e5e5ea] dark:bg-[#2c2c2e] rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
              />
              <div className="flex justify-between text-[10px] text-[#86868b] font-mono">
                <span>فرع واحد</span>
                <span>10 فروع</span>
              </div>
            </div>

            {/* Slider 2: Sales Reps */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#86868b]">عدد مناديب المبيعات الميدانية:</span>
                <span className="font-semibold text-[#0071e3] dark:text-[#2997ff] font-mono">{salesReps} مندوب</span>
              </div>
              <input
                type="range"
                min="2"
                max="80"
                value={salesReps}
                onChange={(e) => setSalesReps(Number(e.target.value))}
                className="w-full h-1.5 bg-[#e5e5ea] dark:bg-[#2c2c2e] rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
              />
              <div className="flex justify-between text-[10px] text-[#86868b] font-mono">
                <span>2 مناديب</span>
                <span>80 مندوب</span>
              </div>
            </div>

            {/* Slider 3: Trucks */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#86868b]">عدد شاحنات وسيارات التوزيع:</span>
                <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] font-mono">{trucks} شاحنة</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={trucks}
                onChange={(e) => setTrucks(Number(e.target.value))}
                className="w-full h-1.5 bg-[#e5e5ea] dark:bg-[#2c2c2e] rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
              />
              <div className="flex justify-between text-[10px] text-[#86868b] font-mono">
                <span>شاحنة واحدة</span>
                <span>40 شاحنة</span>
              </div>
            </div>

            {/* Slider 4: Warehouses */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#86868b]">عدد المستودعات ومخازن التبريد:</span>
                <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] font-mono">{warehouses} مستودعات</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={warehouses}
                onChange={(e) => setWarehouses(Number(e.target.value))}
                className="w-full h-1.5 bg-[#e5e5ea] dark:bg-[#2c2c2e] rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
              />
              <div className="flex justify-between text-[10px] text-[#86868b] font-mono">
                <span>مستودع 1</span>
                <span>10 مستودعات</span>
              </div>
            </div>

          </div>

          {/* Results Box (Apple Pro Card) */}
          <div className="lg:col-span-5 bg-[#1c1c1e] text-[#f5f5f7] rounded-[32px] p-8 flex flex-col justify-between shadow-xl space-y-6 text-right border border-white/10">
            <div>
              <div className="text-xs font-semibold text-[#2997ff] uppercase tracking-wider mb-1">
                التقدير التشغيلي المباشر
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">
                مؤشرات الكفاءة المتوقعة
              </h3>

              <div className="space-y-3 text-xs">
                <div className="bg-white/[0.06] p-4 rounded-2xl flex justify-between items-center border border-white/[0.05]">
                  <span className="text-[#86868b]">الأجهزة الميدانية المتزامنة:</span>
                  <span className="text-base font-semibold text-white">{totalMobileUsers} جهاز نشط</span>
                </div>

                <div className="bg-white/[0.06] p-4 rounded-2xl flex justify-between items-center border border-white/[0.05]">
                  <span className="text-[#86868b]">طاقة الفواتير اليومية:</span>
                  <span className="text-base font-semibold text-[#34c759]">~{dailyInvoicesEst.toLocaleString()} فاتورة/يوم</span>
                </div>

                <div className="bg-white/[0.06] p-4 rounded-2xl flex justify-between items-center border border-white/[0.05]">
                  <span className="text-[#86868b]">الوقت الموفر يومياً في التصفية:</span>
                  <span className="text-base font-semibold text-[#ff9500]">~{settlementTimeSaved} دقيقة</span>
                </div>

                <div className="bg-white/[0.06] p-4 rounded-2xl flex justify-between items-center border border-white/[0.05]">
                  <span className="text-[#86868b]">تقليل الهدر بنظام FEFO:</span>
                  <span className="text-base font-semibold text-[#2997ff]">أكثر من {wasteReductionPct}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 rounded-full font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] transition shadow-xs flex items-center justify-center gap-1.5 text-sm cursor-pointer"
              >
                <span>طلب دراسة متطلبات شركتك</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#86868b] text-center">
                خطة تدريب ميداني شاملة لكافة المناديب والسائقين وعمال المستودعات.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
