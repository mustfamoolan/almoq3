import React from 'react';
import { 
  WifiOff, 
  ShieldAlert, 
  Scale, 
  Fuel, 
  BadgePercent, 
  Cpu, 
  MessageSquare, 
  Check
} from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      icon: <WifiOff className="w-5 h-5 text-[#34c759]" />,
      tag: 'Offline-First',
      title: 'العمل 100% بدون إنترنت ومزامنة ذكية',
      description: 'تم تصميم تطبيقات المناديب والسائقين لتعمل بسلاسة داخل مستودعات الجملة المعزولة أو المناطق الوعرة، مع مزامنة خلفية فور استعادة الاتصال وحل تعارض الفواتير.',
      highlight: 'استمرارية تامة للبيع والتحصيل'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#ff9500]" />,
      tag: 'FEFO & Safety',
      title: 'إدارة الصلاحيات الصارمة وقاعدة FEFO',
      description: 'صرف الأقرب انتهاءً أولاً تلقائياً لمنع تلف البضائع، مراقبة درجات حرارة السلسلة الباردة، والقدرة على سحب أي وجبة إنتاج معيبة بنقرة واحدة لكافة الزبائن.',
      highlight: 'صفر هدر في تواريخ الصلاحية'
    },
    {
      icon: <Scale className="w-5 h-5 text-[#0071e3] dark:text-[#2997ff]" />,
      tag: '3-Way Match',
      title: 'المطابقة الثلاثية وتكلفة الاستيراد الحقيقية',
      description: 'مطابقة أمر الشراء وسند الاستلام وفاتورة الوكالة لمنع فوارق التوريد، مع توزيع تكاليف الشحن والجمارك والتخليص تلقائياً على سعر الصنف الفردي (Landed Cost).',
      highlight: 'حساب دقيق لصافي أرباح الصنف'
    },
    {
      icon: <Fuel className="w-5 h-5 text-[#ff3b30]" />,
      tag: 'Fleet Telemetry',
      title: 'مراقبة استهلاك الوقود وربحية الشاحنات',
      description: 'تسجيل عدادات الوقود والكيلومتر لكل شاحنة، واحتساب معدل الاستهلاك لكل 100 كم، مع مقارنة تكلفة تشغيل الشاحنة بإيرادات المبيعات لكشف الهدر والتسريب.',
      highlight: 'تحليل دقيق لربحية كل خط سير'
    },
    {
      icon: <BadgePercent className="w-5 h-5 text-[#af52de]" />,
      tag: 'Commission Engine',
      title: 'محرك العمولات التصاعدية وربطها بالتحصيل',
      description: 'حساب عمولة المندوب بدقة استناداً إلى المبيعات الفعلية ونسب التحصيل النقدي وبلوغ التارجت الشهري، مع شرائح تصاعدية آلية تنهي الخلافات وتضمن الشفافية.',
      highlight: 'أتمتة كاملة لمسير العمولات'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#5856d6]" />,
      tag: 'Assets Tracking',
      title: 'تتبع ثلاجات وستاندات الشركة لدى الزبائن',
      description: 'إدارة الأصول الثابتة من ثلاجات العرض والمعدات في محلات العملاء، والتحقق من التزام العميل بحصرية عرض منتجات الوكالة وجدولة الصيانة الدورية الدورية.',
      highlight: 'حماية استثمارات الشركة التسويقية'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#34c759]" />,
      tag: 'WhatsApp Sync',
      title: 'أتمتة الفواتير وكشوف الحساب عبر WhatsApp',
      description: 'إرسال كشوف الحسابات وفواتير المبيعات بصيغة PDF فورياً إلى واتساب أصحاب المتاجر والمطاعم، مع ردود آلية لاستفسارات الأرصدة المعلقة لتسريع السداد.',
      highlight: 'تسريع التحصيل وبناء الثقة المتبادلة'
    }
  ];

  return (
    <section id="advantages" className="py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2">
            المزايا الهندسية الجوهرية
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">
            مبني خصيصاً للميدان. <br className="hidden sm:inline" />
            لا مجرد شاشات محاسبية تقليدية.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
            الأنظمة العادية تفشل في الميدان لأنها لم تُبنَ لتفاصيل وكالات التوزيع الكبرى. صُمم ALMOQ3 ERP ليحل التحديات الحقيقية لمدراء المبيعات والمستودعات والمالية.
          </p>
        </div>

        {/* Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161617] rounded-[22px] sm:rounded-[24px] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between hover:border-black/[0.12] dark:hover:border-white/[0.16] transition-all duration-200 shadow-xs hover:shadow-md group text-right"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] dark:bg-[#262629] flex items-center justify-center">
                    {diff.icon}
                  </div>
                  <span className="text-[11px] font-mono text-[#86868b] px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08]">
                    {diff.tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] leading-snug">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center gap-2 text-xs font-medium text-[#34c759]">
                <div className="w-4 h-4 rounded-full bg-[#34c759]/15 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{diff.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
