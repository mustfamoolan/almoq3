import React, { useState } from 'react';
import { OPERATION_CYCLE_STEPS } from '../data/erpData';
import { DynamicIcon } from './DynamicIcon';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface LifecycleSectionProps {
  onSelectModuleId?: (id: number) => void;
}

export const LifecycleSection: React.FC<LifecycleSectionProps> = ({ onSelectModuleId }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = OPERATION_CYCLE_STEPS[activeStepIndex];

  return (
    <section id="lifecycle" className="py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2">
            الدورة التشغيلية المتكاملة
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
            تدفق بياني مستمر. <br className="hidden sm:inline" />
            من الشراء حتى القوائم الختامية.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
            سبع مراحل مترابطة آلياً تضمن ألا تُفقد فاتورة، ولا يتأخر تسليم، ولا يُهدر مخزون، مع توليد فوري للقيود المحاسبية.
          </p>
        </div>

        {/* Apple Segmented Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-10">
          {OPERATION_CYCLE_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-[20px] text-right transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-[#1c1c1e] border-[#0071e3] dark:border-[#2997ff] shadow-sm'
                    : 'bg-white/60 dark:bg-[#161617]/60 border-black/[0.06] dark:border-white/[0.08] hover:bg-white dark:hover:bg-[#1c1c1e]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-semibold ${
                    isActive 
                      ? 'bg-[#0071e3] text-white' 
                      : 'bg-black/[0.06] dark:bg-white/[0.1] text-[#86868b]'
                  }`}>
                    {step.step}
                  </span>
                  <div className={isActive ? 'text-[#0071e3] dark:text-[#2997ff]' : 'text-[#86868b]'}>
                    <DynamicIcon name={step.icon} className="w-4 h-4" />
                  </div>
                </div>
                <div className={`text-xs leading-snug line-clamp-2 ${
                  isActive ? 'font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]' : 'text-[#86868b]'
                }`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Apple Card */}
        <div className="bg-white dark:bg-[#161617] rounded-[32px] border border-black/[0.06] dark:border-white/[0.08] p-8 sm:p-12 shadow-sm text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider">
                  المرحلة {currentStep.step} من 7
                </span>
                <span className="text-xs text-[#86868b] px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08]">
                  {currentStep.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                {currentStep.title}
              </h3>

              <p className="text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
                {currentStep.description}
              </p>

              <div>
                <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-3">
                  الإجراءات الذكية المنفذة آلياً:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {currentStep.step === 1 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">مطابقة أمر الشراء (PO) بسند الاستلام وفاتورة المورد آلياً 3-Way Match.</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">توزيع مصاريف الشحن والجمارك على تكلفة الصنف الفعلية Landed Cost.</span>
                      </div>
                    </>
                  )}
                  {currentStep.step === 2 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">فحص الصلاحية ورقم الوجبة وتسجيل حرارة السلسلة الباردة فور الاستلام.</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">توليد باركود فريد وتحديد موقع الرف والخانة في المستودع آلياً.</span>
                      </div>
                    </>
                  )}
                  {currentStep.step === 3 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">تثبيت زيارة المندوب بإحداثيات الـ GPS ومنع التلاعب بالزيارات الوهمية.</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">فحص سقف الائتمان وحجب البيع آلياً عند وجود مديونيات متجاوزة الحد.</span>
                      </div>
                    </>
                  )}
                  {currentStep.step === 4 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">صرف البضائع وفق قاعدة FEFO الصارمة (الأقرب انتهاءً يصرف أولاً).</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">مسح باركود الكراتين لتأكيد تطابق حمولة الشاحنة مع مانيفست التحميل.</span>
                      </div>
                    </>
                  )}
                  {currentStep.step === 5 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">التقاط التوقيع الرقمي وصورة إثبات التسليم POD عبر هاتف السائق.</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">إصدار إشعار دائن فوري للمردودات وتحصيل الدفع النقدي COD بدقة.</span>
                      </div>
                    </>
                  )}
                  {currentStep.step === 6 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">مطابقة عهدة الكاش مع سندات القبض وتوريدها لحساب الخزينة المركزي.</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">إعادة المخزون المتبقي للعهدة المستودعية وإغلاق مانيفست الرحلة.</span>
                      </div>
                    </>
                  )}
                  {currentStep.step === 7 && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">احتساب عمولة المندوب تلقائياً وتوزيع الأرباح على الوكالات التجارية.</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#0071e3]/15 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">تحديث قائمة الدخل والميزانية وتقارير ربحية المسارات والسيارات.</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Step Navigation Pill Controls */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.06] space-y-5">
              <div>
                <div className="text-xs text-[#86868b] mb-1">الخطوة التالية في المنظومة:</div>
                <div className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {OPERATION_CYCLE_STEPS[(activeStepIndex + 1) % OPERATION_CYCLE_STEPS.length].title}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : OPERATION_CYCLE_STEPS.length - 1))}
                  className="flex-1 py-2.5 text-xs font-medium bg-white dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] rounded-full transition cursor-pointer shadow-xs border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>السابق</span>
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % OPERATION_CYCLE_STEPS.length)}
                  className="flex-1 py-2.5 text-xs font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full transition shadow-xs cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>التالي</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
