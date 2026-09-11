import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Truck, 
  PackageCheck,
  ChevronRight,
  WifiOff,
  Check,
  ArrowUpRight
} from 'lucide-react';
import { SYSTEM_STATS } from '../data/erpData';
import { Almoq3Logo } from './Almoq3Logo';

interface HeroProps {
  onScrollTo: (id: string) => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'sales' | 'driver' | 'loader'>('desktop');

  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Apple-style Eyebrow with Brand Logo */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.08] mb-4 max-w-full">
          <Almoq3Logo size={16} />
          <span className="text-[11px] sm:text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-wider uppercase truncate">
            ALMOQ3 ERP Pro — الجيل الجديد
          </span>
        </div>

        {/* Apple Big Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-5">
          عبقرية في التوزيع. <br className="hidden sm:inline" />
          <span className="text-black/80 dark:text-white/80">هندسة لا تتوقف.</span>
        </h1>

        {/* Apple Sub-headline */}
        <p className="text-sm sm:text-lg md:text-xl text-[#86868b] font-normal leading-relaxed max-w-3xl mx-auto mb-7 sm:mb-8 px-2">
          منظومة رقمية شاملة تضم 37 وحدة متخصصة و4 منصات متزامنة تعمل بكفاءة تامة بدون إنترنت، صُممت خصيصاً لوكالات التوزيع الكبرى وسلاسل إمداد الأغذية.
        </p>

        {/* Apple CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12 sm:mb-16 text-sm sm:text-base w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium px-7 py-3.5 sm:py-3 rounded-full transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer min-h-[44px] flex items-center justify-center text-sm"
          >
            طلب استشارة وعرض تجريبي
          </button>

          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm pt-1 sm:pt-0">
            <button
              onClick={() => onScrollTo('platforms')}
              className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer py-1"
            >
              <span>المنصات الأربعة</span>
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>

            <span className="text-[#86868b]">•</span>

            <button
              onClick={() => onScrollTo('modules')}
              className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer py-1"
            >
              <span>دليل الـ 37 وحدة</span>
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>

        {/* Apple-style Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 py-4 sm:py-6 border-y border-black/[0.08] dark:border-white/[0.1]">
          {SYSTEM_STATS.map((stat, i) => (
            <div key={i} className="text-center p-1">
              <div className="text-2xl sm:text-4xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm text-[#86868b] font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Apple Hardware Device Mockup Frame (Studio Display / Titanium Pro) */}
        <div className="max-w-5xl mx-auto">
          <div className="apple-device-frame p-1.5 sm:p-3 rounded-[24px] sm:rounded-[40px] bg-[#e5e5ea] dark:bg-[#2c2c2e] border border-black/10 dark:border-white/15">
            
            {/* Inner Screen */}
            <div className="bg-white dark:bg-[#161617] rounded-[20px] sm:rounded-[32px] overflow-hidden border border-black/5 dark:border-white/10 text-right">
              
              {/* Screen Top Bar / Segmented Switcher */}
              <div className="px-3 sm:px-5 py-3 sm:py-4 border-b border-black/[0.06] dark:border-white/[0.08] bg-[#fbfbfd] dark:bg-[#1a1a1c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                  <div className="flex items-center gap-1.5 mr-1.5 sm:mr-2">
                    <Almoq3Logo size={14} />
                    <span className="text-[11px] sm:text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                      محاكاة المنظومة الحية (ALMOQ3 OS)
                    </span>
                  </div>
                </div>

                {/* Apple Segmented Control Pill with horizontal scroll on small devices */}
                <div className="w-full sm:w-auto overflow-x-auto scrollbar-none pb-0.5">
                  <div className="bg-[#e8e8ed] dark:bg-[#262629] p-1 rounded-full inline-flex items-center gap-1 text-xs">
                    <button
                      onClick={() => setActiveTab('desktop')}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition cursor-pointer flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs min-h-[34px] ${
                        activeTab === 'desktop'
                          ? 'bg-white dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] shadow-xs'
                          : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>سطح المكتب</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('sales')}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition cursor-pointer flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs min-h-[34px] ${
                        activeTab === 'sales'
                          ? 'bg-white dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] shadow-xs'
                          : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>المندوب</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('driver')}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition cursor-pointer flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs min-h-[34px] ${
                        activeTab === 'driver'
                          ? 'bg-white dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] shadow-xs'
                          : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>السائق</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('loader')}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition cursor-pointer flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs min-h-[34px] ${
                        activeTab === 'loader'
                          ? 'bg-white dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] shadow-xs'
                          : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                      }`}
                    >
                      <PackageCheck className="w-3.5 h-3.5" />
                      <span>المجهّز FEFO</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Screen Body */}
              <div className="p-4 sm:p-8 lg:p-10">
                {activeTab === 'desktop' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-right">
                      <div className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider">
                        المنصة المركزية — Windows Desktop
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                        تحكّم استثنائي في الحسابات والمخازن وسلاسل الإمداد
                      </h3>
                      <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                        لوحة قيادة مركزية فائقة السرعة تتيح المطابقة الثلاثية لفواتير الشراء، إدارة شجرة الحسابات وقيود اليومية التلقائية، تتبع سيولة الصناديق والمصارف، ومراقبة أعمار الذمم اللحظية.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 text-xs text-[#1d1d1f] dark:text-[#f5f5f7]">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/20 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>مطابقة المشتريات 3-Way</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/20 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>توليد القيود المحاسبية التلقائية</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/20 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>حماية الهوامش وسقوف الائتمان</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/20 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>تقارير الأرباح والخسائر P&L اللحظية</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.08] text-right">
                      <div className="text-xs font-medium text-[#86868b] mb-4 flex items-center justify-between">
                        <span>مؤشرات التشغيل الحية (Live Telemetry)</span>
                        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="space-y-3 text-xs">
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">مبيعات اليوم المحققة</span>
                          <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-sm">18,450,000 د.ع</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">التحصيلات النقدية الميدانية</span>
                          <span className="font-semibold text-[#0071e3] dark:text-[#2997ff] text-sm">12,200,000 د.ع</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">طلبيات قيد التجهيز بالمخزن</span>
                          <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-sm">42 فاتورة</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">تنبيهات الصلاحية (أقل من 60 يوم)</span>
                          <span className="font-semibold text-[#ff3b30] text-sm">3 أصناف (حظر تلقائي)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'sales' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-right">
                      <div className="text-xs font-semibold text-[#34c759] uppercase tracking-wider flex items-center gap-1.5">
                        <WifiOff className="w-3.5 h-3.5" />
                        <span>تطبيق المندوب الميداني — يعمل 100% بدون إنترنت</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                        تجربة بيع استثنائية وسرعة قياسية في تسجيل الطلبات
                      </h3>
                      <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                        محرك SQLite محلي فائق السرعة يتيح للمندوب تسجيل الزيارات عبر الـ GPS، وتطبيق العروض والبونص فورياً، وإصدار سندات القبض والطباعة الحرارية حتى في أشد المناطق عزلة عن شبكات الاتصال.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 text-xs text-[#1d1d1f] dark:text-[#f5f5f7]">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#34c759]/20 text-[#34c759] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>مزامنة خلفية ذكية ومرنة</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#34c759]/20 text-[#34c759] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>تثبيت الزيارة ببصمة GPS</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#34c759]/20 text-[#34c759] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>حساب فوري لبونص الترويج</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#34c759]/20 text-[#34c759] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>طباعة الفاتورة بلوتوث</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.08] text-right">
                      <div className="text-xs font-medium text-[#86868b] mb-4 flex items-center justify-between">
                        <span>خطة الجولة الميدانية النشطة</span>
                        <span className="text-[#34c759] text-[11px] font-medium">Offline Active</span>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl shadow-xs border-r-2 border-[#34c759]">
                          <div className="flex justify-between items-center font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                            <span>سوبرماركت البركة — المنصور</span>
                            <span className="text-[10px] text-[#34c759] font-medium">تمت الزيارة</span>
                          </div>
                          <div className="text-[#86868b] mt-1 text-[11px]">
                            طلب بيع #8821: 1,850,000 د.ع | تحصيل كاش: 500,000 د.ع
                          </div>
                        </div>

                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl shadow-xs border-r-2 border-[#ff9500]">
                          <div className="flex justify-between items-center font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                            <span>أسواق النور — اليرموك</span>
                            <span className="text-[10px] text-[#ff9500] font-medium">الوجهة الحالية</span>
                          </div>
                          <div className="text-[#86868b] mt-1 text-[11px]">
                            رصيد العميل: 2,100,000 د.ع (سقف الائتمان 5,000,000 د.ع)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'driver' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-right">
                      <div className="text-xs font-semibold text-[#ff9500] uppercase tracking-wider">
                        تطبيق السائق — مانيفست الشاحنات والتحصيل
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                        تسليم الشحنات بدقة وإثبات التوقيع الإلكتروني
                      </h3>
                      <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                        تنظيم رحلات التوصيل اليومية خطوة بخطوة مع مسار الخرائط الأمثل، تسجيل المردودات الجزئية في الميدان فوريًا، وتوقيع إلكتروني لالتقاط إثبات الاستلام ومطابقة الصندوق عند العودة للمستودع.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 text-xs text-[#1d1d1f] dark:text-[#f5f5f7]">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#ff9500]/20 text-[#ff9500] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>إثبات التسليم الرقمي POD</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#ff9500]/20 text-[#ff9500] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>تصفية فورية لعهدة الكاش</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#ff9500]/20 text-[#ff9500] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>إنشاء إشعارات دائنة للمردودات</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#ff9500]/20 text-[#ff9500] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>بيان تسليم الشاحنة Trip Manifest</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.08] text-right">
                      <div className="text-xs font-medium text-[#86868b] mb-4 flex items-center justify-between">
                        <span>بيان تسوية الشاحنة #14</span>
                        <span className="text-[#ff9500] text-[11px] font-medium">نهاية اليوم</span>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">الفواتير المسلمة بالكامل</span>
                          <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">26 من 28 فاتورة</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">المردودات المرفوضة</span>
                          <span className="font-semibold text-[#ff3b30]">12 كرتونة (إشعار دائن #102)</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl flex justify-between items-center shadow-xs">
                          <span className="text-[#86868b]">المبلغ الواجب توريده</span>
                          <span className="font-semibold text-[#0071e3] dark:text-[#2997ff]">7,850,000 د.ع (مطابق)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'loader' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-right">
                      <div className="text-xs font-semibold text-[#af52de] uppercase tracking-wider">
                        تطبيق المجهّز — التجهيز الذكي بقاعدة FEFO
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                        إدارة الصلاحيات الصارمة وحماية المخزون من التلف
                      </h3>
                      <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                        توجيه الحمالين آلياً عبر مسارات الممرات لسحب الوجبات الأقرب انتهاءً أولاً، مع مطابقة باركود الصنف والكرتونة، لضمان صفر هدر في المواد سريعة التلف ومنتجات الألبان.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 text-xs text-[#1d1d1f] dark:text-[#f5f5f7]">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#af52de]/20 text-[#af52de] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>صرف FEFO: الأقرب انتهاءً أولاً</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#af52de]/20 text-[#af52de] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>مسح باركود الوجبة والعبوة</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#af52de]/20 text-[#af52de] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>بيان تحميل الشاحنة المنظم</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f]">
                          <div className="w-4 h-4 rounded-full bg-[#af52de]/20 text-[#af52de] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>احتساب حوافز سرعة التجهيز</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/[0.04] dark:border-white/[0.08] text-right">
                      <div className="text-xs font-medium text-[#86868b] mb-4 flex items-center justify-between">
                        <span>مهمة التجهيز الحالية (Task #408)</span>
                        <span className="text-[#af52de] text-[11px] font-medium">ممر C - رف 04</span>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl shadow-xs">
                          <div className="flex justify-between font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                            <span>حليب كامل الدسم 1 لتر (12 عبوة)</span>
                            <span className="text-[#34c759]">تم المسح ✓</span>
                          </div>
                          <div className="text-[#86868b] mt-1 text-[11px]">
                            الوجبة: B-9921 | الصلاحية: 2026/11/15 (FEFO معتمد)
                          </div>
                        </div>

                        <div className="p-3 bg-white dark:bg-[#161617] rounded-xl shadow-xs">
                          <div className="flex justify-between font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                            <span>جبنة مثلثات (36 علبة)</span>
                            <span className="text-[#ff9500]">بانتظار المسح</span>
                          </div>
                          <div className="text-[#86868b] mt-1 text-[11px]">
                            المطلوب: 15 كرتونة | المتبقي: 5 كراتين
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
