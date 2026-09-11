import React, { useState } from 'react';
import { X, Check, Building, User, Phone, Send, Loader2, MessageSquare } from 'lucide-react';
import { Almoq3Logo } from './Almoq3Logo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    sector: 'مواد غذائية ومشروبات',
    fleetSize: '5 - 15 شاحنة / مندوب',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionDate = new Date().toLocaleString('ar-IQ', { dateStyle: 'full', timeStyle: 'short' });

    // 1. Save locally for backup
    try {
      const existing = JSON.parse(localStorage.getItem('almoq3_demo_requests') || '[]');
      existing.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('almoq3_demo_requests', JSON.stringify(existing));
    } catch {
      // ignore local storage errors
    }

    // 2. Send email directly to mustfa.s.mjeed@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/mustfa.s.mjeed@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ طلب عرض تجريبي جديد لنظام ALMOQ3 ERP — ${formData.companyName}`,
          "اسم الشركة / المؤسسة": formData.companyName,
          "اسم المسؤول": formData.contactName,
          "رقم الهاتف": formData.phone,
          "النشاط التجاري": formData.sector,
          "حجم الأسطول": formData.fleetSize,
          "ملاحظات أو متطلبات خاصة": formData.notes || 'لا توجد ملاحظات إضافية',
          "وقت وتاريخ الطلب": submissionDate,
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (err) {
      console.warn('Direct email dispatch notification:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#1c1c1e] border border-black/10 dark:border-white/15 rounded-[32px] shadow-2xl overflow-hidden my-8 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Almoq3Logo size={32} />
            <div>
              <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider">
                استشارة تقنية مجانية
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                طلب عرض تجريبي لمنظومة ALMOQ3 ERP
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#34c759]/15 text-[#34c759] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                  تم استلام طلبك وإرساله بنجاح
                </h4>
                <p className="text-xs text-[#34c759] font-medium mt-1">
                  ✓ تم توجيه إشعار فوري إلى الإدارة على mustfa.s.mjeed@gmail.com
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed max-w-sm mx-auto">
                شكراً لاهتمامك بنظام ALMOQ3 ERP. سيتواصل معك مستشار النظم والمهندس المعني لمناقشة متطلبات وكالتكم وتحديد موعد الاستعراض.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={`https://wa.me/9647737777424?text=${encodeURIComponent(`مرحباً مهندس مصطفى، قمت بتقديم طلب استعراض لمنظومة ALMOQ3 ERP لشركة: ${formData.companyName} (${formData.contactName} - ${formData.phone})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-black/[0.05] dark:bg-white/[0.1] hover:bg-black/[0.08] dark:hover:bg-white/[0.15] rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#34c759]" />
                  <span>تأكيد عبر WhatsApp: 07737777424</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition cursor-pointer"
                >
                  تم
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">
                  اسم الشركة / الوكالة التجارية *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#86868b] absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="مثال: شركة الرافدين لتوزيع المواد الغذائية"
                    className="w-full pl-3 pr-10 py-2.5 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-xs text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">
                  اسم المسؤول أو المدير المعني *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#86868b] absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="مثال: أ. مصطفى صادق"
                    className="w-full pl-3 pr-10 py-2.5 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-xs text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">
                  رقم الهاتف أو WhatsApp للتواصل *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#86868b] absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="tel"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+964 7XX XXX XXXX"
                    className="w-full pl-3 pr-10 py-2.5 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-xs text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">
                    النشاط التجاري
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-xs text-[#1d1d1f] dark:text-[#f5f5f7] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                  >
                    <option value="مواد غذائية ومشروبات">مواد غذائية ومشروبات</option>
                    <option value="وكالة تجارية حصرية">وكالة تجارية حصرية</option>
                    <option value="ألبان ومجمدات وسلسلة باردة">ألبان ومجمدات وسلسلة باردة</option>
                    <option value="مواد تنظيف واستهلاكية">مواد تنظيف واستهلاكية</option>
                    <option value="تجارة جملة وتوزيع">تجارة جملة وتوزيع</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">
                    حجم الأسطول
                  </label>
                  <select
                    value={formData.fleetSize}
                    onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-xs text-[#1d1d1f] dark:text-[#f5f5f7] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                  >
                    <option value="1 - 5 شاحنات">1 - 5 شاحنات</option>
                    <option value="5 - 15 شاحنة">5 - 15 شاحنة</option>
                    <option value="15 - 40 شاحنة">15 - 40 شاحنة</option>
                    <option value="أكثر من 40 شاحنة">أكثر من 40 شاحنة</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">
                  ملاحظات أو متطلبات خاصة (اختياري)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="مثال: الربط مع أنظمة موازية أو استيراد أرصدة سابقة..."
                  className="w-full p-3 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-xs text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-70 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>جاري إرسال الطلب إلى بريدك الإلكتروني...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>إرسال طلب العرض التجريبي</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
