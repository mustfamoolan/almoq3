export interface ERPModule {
  id: number;
  titleAr: string;
  titleEn: string;
  category: 'core' | 'finance' | 'operations' | 'crm' | 'analytics' | 'tech';
  categoryAr: string;
  priority: 'critical' | 'high' | 'medium' | 'future';
  priorityLabel: string;
  badgeColor: string;
  icon: string;
  summary: string;
  subsections: {
    title: string;
    items: string[];
  }[];
  platforms: ('desktop' | 'sales_mobile' | 'driver_mobile' | 'loader_mobile')[];
  phaseNumber: number;
}

export interface PlatformDetail {
  id: 'desktop' | 'sales_mobile' | 'driver_mobile' | 'loader_mobile';
  titleAr: string;
  titleEn: string;
  tagline: string;
  targetAudience: string;
  badge: string;
  color: string;
  features: string[];
  offlineCapable: boolean;
  techStack: string;
  metrics: { label: string; value: string }[];
}

export interface RoadmapPhase {
  phase: string;
  titleAr: string;
  titleEn: string;
  duration: string;
  status: 'completed' | 'in_progress' | 'planned';
  modulesIncluded: string;
  keyDeliverables: string[];
  techFocus: string;
}

export const PLATFORMS_DATA: PlatformDetail[] = [
  {
    id: 'desktop',
    titleAr: 'تطبيق سطح المكتب المركزي',
    titleEn: 'Desktop ERP (Windows)',
    tagline: 'المركز العصبي للتحكم في كافة العمليات المالية، التخزينية، والإدارية',
    targetAudience: 'الإدارة العليا، المحاسبون، مدراء الفروع، مسؤولو المشتريات والمخازن',
    badge: 'المنصة المركزية',
    color: 'from-blue-600 to-indigo-700',
    features: [
      'لوحات تحكم تنفيذية لحظية ومراقبة حية للمبيعات والسيولة والأسطول',
      'إدارة متقدمة لشجرة الحسابات، قيود اليومية التلقائية، والقوائم المالية الختامية (P&L)',
      'إدارة المشتريات والوكالات بنظام المطابقة الثلاثية (3-Way Matching)',
      'التحكم الكامل بأسعار الشرائح، الاعتمادات الائتمانية، وتجميد الزبائن المتعثرين',
      'إعدادات التسعير والخصومات التلقائية وهياكل العمولات التصاعدية',
      'طباعة حرارية وفواتير A4 وتصدير Excel وتقارير مخصصة غير محدودة'
    ],
    offlineCapable: true,
    techStack: 'Go + Fiber Core / Electron + React Desktop / PostgreSQL',
    metrics: [
      { label: 'وحدات مفعلة', value: '37 وحدة' },
      { label: 'الاستجابة', value: '< 20ms' },
      { label: 'دعم الفروع', value: 'Multi-Branch' }
    ]
  },
  {
    id: 'sales_mobile',
    titleAr: 'تطبيق مندوب المبيعات الميداني',
    titleEn: 'Sales Rep Mobile App',
    tagline: 'تمكين المندوب ميدانياً مع ميزة العمل دون اتصال بالإنترنت (Offline-First)',
    targetAudience: 'مندوبو المبيعات الميدانية، مشرفو المناطق',
    badge: 'Offline-First',
    color: 'from-emerald-600 to-teal-700',
    features: [
      'يعمل بالكامل دون إنترنت مع مزامنة ذكية تلقائية عند توفر التغطية',
      'تحديد مسار الزيارات اليومية وتأكيد الزيارة بموقع الـ GPS والوقت',
      'إصدار أوامر البيع مع فحص فوري لسقف الائتمان ومديونية الزبون',
      'تحصيل الديون وإصدار سندات قبض فورية مع طباعة بلوتوث',
      'متابعة الإنجاز اليومي والشهري للأهداف والعمولات المحققة',
      'رصد أسعار المنافسين وتسجيل بيانات الزبائن المحتملين الجدد'
    ],
    offlineCapable: true,
    techStack: 'React Native / Flutter + Local SQLite + Sync Engine',
    metrics: [
      { label: 'دعم الأوفلاين', value: '100% كامل' },
      { label: 'زمن إصدار الطلب', value: 'أقل من 30 ثانية' },
      { label: 'دقة الـ GPS', value: 'تحديد دقيق للزيارة' }
    ]
  },
  {
    id: 'driver_mobile',
    titleAr: 'تطبيق السائق وعمليات التوصيل',
    titleEn: 'Driver Delivery App',
    tagline: 'إدارة رحلات التوصيل، التحصيل عند الاستلام (COD)، وتصفية العهدة بدقة',
    targetAudience: 'سائقو شاحنات التوزيع، مشرفو الحركة واللوجستيات',
    badge: 'COD & Manifest',
    color: 'from-amber-600 to-orange-700',
    features: [
      'استعراض بيان الرحلة (Trip Manifest) وفواتير الزبائن مرتبة جغرافياً',
      'تأكيد التسليم الجزئي أو الكلي مع توقيع العميل الرقمي وصورة الاستلام',
      'إنشاء فواتير مردود فوري للبضائع المرفوضة في الميدان',
      'تحصيل الدفعات النقدية عند التسليم وتوثيق المبالغ اللحظي',
      'تسجيل استهلاك الوقود وقراءات العداد عند كل محطة',
      'إغلاق وتصفية عهدة نهاية اليوم بدقة مع المحاسب (مباع + مردود + كاش)'
    ],
    offlineCapable: true,
    techStack: 'Mobile Native GPS + Camera POD + Bluetooth Print',
    metrics: [
      { label: 'دليل التسليم', value: 'توقيع + صورة' },
      { label: 'تصفية العهدة', value: 'مطابقة فورية' },
      { label: 'تحصيل كاش', value: 'COD موثق' }
    ]
  },
  {
    id: 'loader_mobile',
    titleAr: 'تطبيق المجهّز والحمّال',
    titleEn: 'Warehouse Loader App',
    tagline: 'تسريع تجهيز الطلبات من المستودع وتحميل السيارات وفق قاعدة FEFO الصارمة',
    targetAudience: 'عمال التجهيز، مسؤولو المستودعات، الحمالون',
    badge: 'FEFO Picking',
    color: 'from-violet-600 to-purple-700',
    features: [
      'استقبال أوامر التجهيز (Picking Lists) مقسمة حسب ممرات المستودع',
      'التقاط الأصناف بواسطة مسح الباركود السريع (Barcode Scanner)',
      'التحقق الصارم من تواريخ الصلاحية ورقم الوجبة (الأقرب انتهاءً أولاً)',
      'تجهيز وتحميل سيارات الشحن ومطابقتها مع مانيفست السائق',
      'إصدار تقرير الفوارق بين المطلوب والمجهّز والمحمّل فعلياً',
      'احتساب عدد الكراتين المجهزة لكل عامل وربطها بنظام الحوافز'
    ],
    offlineCapable: true,
    techStack: 'High-speed Barcode Scanner + Sound Feedback + Real-time Sync',
    metrics: [
      { label: 'نظام الصرف', value: 'FEFO معتمد' },
      { label: 'دقة التجهيز', value: '99.9%' },
      { label: 'مسح الباركود', value: 'لحظي' }
    ]
  }
];

export const ERP_MODULES: ERPModule[] = [
  {
    id: 1,
    titleAr: 'الأمان والهيكل التنظيمي والصلاحيات',
    titleEn: 'Security, Organizational Structure & Access Control',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'ShieldCheck',
    summary: 'إدارة الهيكل الهرمي متعدد الشركات والفروع، صلاحيات الموظفين الدقيقة وسجل التدقيق الشامل.',
    platforms: ['desktop', 'sales_mobile', 'driver_mobile', 'loader_mobile'],
    phaseNumber: 1,
    subsections: [
      {
        title: 'الهيكل التنظيمي متعدد المستويات',
        items: [
          'دعم تعدد الشركات والكيانات القانونية (Multi-Company Support)',
          'توزيع الفروع الجغرافية والتشغيلية وربطها بالمستودعات',
          'تقسيم الأقسام والإدارات (مبيعات، حسابات، مخازن، HR)',
          'تخصيص مناطق ومسارات التوزيع الحصرية لكل فرع'
        ]
      },
      {
        title: 'إدارة المستخدمين والأدوار والأذونات',
        items: [
          'أدوار جاهزة: Super Admin, Branch Admin, Accountant, Sales Rep, Driver, Loader...',
          'صلاحيات دقيقة على مستوى النموذج والعملية (CRUD Per Module)',
          'تقييد الوصول الجغرافي والفرعي (Scoped Access)',
          'إدارة الجلسات الفعالة وتسجيل الخروج عن بُعد لأي جهاز'
        ]
      },
      {
        title: 'المصادقة وسجل التدقيق (Audit Trail)',
        items: [
          'توثيق JWT مع Refresh Tokens وحماية الجلسات',
          'المصادقة الثنائية 2FA للإدارة وتسجيل الأجهزة وبصمة الجهاز',
          'سجل كامل لكل عملية (من أنشأ، متى، القيمة قبل وبعد التعديل)',
          'تنبيهات أمنية فورية عند العمليات الحساسة كحذف الفواتير أو تعديل الأسعار'
        ]
      }
    ]
  },
  {
    id: 2,
    titleAr: 'الموارد البشرية والموظفون',
    titleEn: 'Human Resources Management',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'Users',
    summary: 'دليل الموظفين الكامل، تسجيل الحضور بالـ GPS، الإجازات، العقود، وتقييم الأداء.',
    platforms: ['desktop'],
    phaseNumber: 6,
    subsections: [
      {
        title: 'دليل الموظفين والملفات الإلكترونية',
        items: [
          'أرشفة كاملة للبيانات الشخصية والوثائق ومسح الهويات والعقود',
          'تصنيف الموظفين: دائم، مؤقت، مياومة، عمال خارجيون',
          'تنبيهات ذكية قبل انتهاء الإقامات والعقود وتراخيص العمل'
        ]
      },
      {
        title: 'الحضور والانصراف والمناوبات',
        items: [
          'تسجيل الحضور عبر الموبايل ببصمة الـ GPS للميدانيين والمكتبيين',
          'جداول العمل والمناوبات الصباحية والمسائية',
          'دورة طلب واعتماد الإجازات الرقمية والربط التلقائي بالراتب'
        ]
      },
      {
        title: 'تقييم الأداء الوظيفي',
        items: [
          'دورات تقييم دورية ربع سنوية وسنوية بمعايير مخصصة لكل وظيفة',
          'ربط درجات التقييم تلقائياً بنظام الترقيات وزيادات الرواتب'
        ]
      }
    ]
  },
  {
    id: 3,
    titleAr: 'المندوبون والمبيعات الميدانية',
    titleEn: 'Sales Representatives & Field Sales',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Briefcase',
    summary: 'إدارة وتتبع مناديب التوزيع، خطط الزيارات بـ GPS، الأهداف الشهرية وأوامر البيع الميدانية.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 6,
    subsections: [
      {
        title: 'ملف المندوب ومناطق التوزيع',
        items: [
          'تخصيص القطاعات الجغرافية ومحفظة الزبائن لكل مندوب',
          'تسجيل وربط الأجهزة الموبايل المعتمدة الخاصة بالمندوب'
        ]
      },
      {
        title: 'الأهداف والعمولات والـ KPIs',
        items: [
          'أهداف بيعية بالقيمة والكمية وعدد الزيارات المستهدفة',
          'تتبع نسبة الإنجاز اليومي والترتيب التنافسي (Ranking Dashboard)',
          'أهداف تحصيل الديون ومتابعة المتأخرات الميدانية'
        ]
      },
      {
        title: 'خط سير الزيارات اليومية وأوامر البيع',
        items: [
          'خط سير مثالي مقترح يومياً مع إثبات الحضور بالـ GPS Check-in',
          'إنشاء أوامر البيع أوفلاين مع عرض رصيد الزبون وحد الائتمان',
          'تحصيل نقدي وإصدار سند قبض فوري من الطابعة المحمولة'
        ]
      }
    ]
  },
  {
    id: 4,
    titleAr: 'السائقون وعمليات التوصيل',
    titleEn: 'Drivers & Delivery Operations',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Truck',
    summary: 'جدولة الرحلات، بيان حمولة الشاحنة، إثبات التسليم بالصورة والتوقيع، وتصفية نهاية اليوم.',
    platforms: ['desktop', 'driver_mobile'],
    phaseNumber: 7,
    subsections: [
      {
        title: 'جدولة الرحلات وبيان التحميل',
        items: [
          'تعيين الرحلات اليومية وقائمة الفواتير المحملة (Trip Manifest)',
          'تسلسل محطات التوصيل حسب الخريطة وأقصر المسارات',
          'جرد ومطابقة حمولة السيارة مع الفواتير المسندة'
        ]
      },
      {
        title: 'التسليم الميداني والتحصيل (COD)',
        items: [
          'تأكيد التسليم الكامل أو الجزئي وإنشاء مردود فوري للبضاعة المرفوضة',
          'التوقيع الرقمي للزبون والتقاط صورة فوتوغرافية كإثبات استلام',
          'تحصيل قيمة الفاتورة كاش مع إصدار إشعار استلام'
        ]
      },
      {
        title: 'تصفية نهاية اليوم مع المحاسب',
        items: [
          'جرد ما تم تسليمه وما رُد وما تبقى في الشاحنة',
          'تصفية المبالغ النقدية المحصلة وإغلاق عهدة السائق',
          'إعادة جدولة وترحيل الفواتير المعلقة لليوم التالي'
        ]
      }
    ]
  },
  {
    id: 5,
    titleAr: 'المجهزون والحمالون وتجهيز السيارات',
    titleEn: 'Warehouse Loaders & Order Fulfillment',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'PackageCheck',
    summary: 'تجهيز الطلبات عبر قوائم الـ Picking وقاعدة FEFO ومسح الباركود ومطابقة تحميل السيارات.',
    platforms: ['desktop', 'loader_mobile'],
    phaseNumber: 7,
    subsections: [
      {
        title: 'قوائم التجهيز الذكية (Picking Lists)',
        items: [
          'توزيع أوامر التجهيز على تطبيق الحمالين فور اعتمادها',
          'توجيه العامل لمواقع الأرفف والممرات وفق الترتيب الأسرع',
          'فحص الوجبة وتاريخ الصلاحية آلياً بالأقرب انتهاءً (FEFO Picking)'
        ]
      },
      {
        title: 'تحميل ومطابقة الشاحنات',
        items: [
          'ربط البضاعة المجهزة بالسيارة المخصصة للسائق',
          'طباعة ومطابقة بيان التحميل (Load Sheet) وتوقيع السائق بالاستلام',
          'تقرير الفوارق اللحظي بين المجهز والمحمل في الشاحنة'
        ]
      },
      {
        title: 'قياس كفاءة الحمالين',
        items: [
          'تتبع عدد الصناديق والوزن المجهز لكل عامل يومياً',
          'ربط دقة وسرعة التجهيز بالحوافز الشهرية تلقائياً'
        ]
      }
    ]
  },
  {
    id: 6,
    titleAr: 'الزبائن والائتمان والتحصيل',
    titleEn: 'Customers, Credit Management & Collections',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Contact',
    summary: 'سجل العملاء وإحداثيات GPS، حدود الائتمان الصارمة، أعمار الديون والشيكات وكشوفات الحساب.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 2,
    subsections: [
      {
        title: 'دليل الزبائن والتصنيف الجغرافي',
        items: [
          'تصنيف المتاجر: سوبرماركت، جملة، مفرد، تجزئة، مؤسسات',
          'تثبيت الإحداثيات الجغرافية (GPS) لسهولة وصول المناديب والسائقين',
          'سجل جهات الاتصال المتعددة وصور الواجهة التجارية'
        ]
      },
      {
        title: 'الائتمان وسقوف المديونية',
        items: [
          'تحديد سقف الائتمان (Credit Limit) وفترات السماح (7/15/30/60 يوم)',
          'تجميد آلي لحساب الزبون ومنع البيع عند تجاوز الحد أو التأخر بالسداد',
          'صلاحيات استثنائية لمدير المبيعات لتجاوز التجميد المؤقت'
        ]
      },
      {
        title: 'أعمار الديون ومحفظة الشيكات',
        items: [
          'تقرير أعمار الديون التفاعلي (أقل من 30، 30-60، 60-90، فوق 90 يوماً)',
          'إرسال كشوف الحسابات بضغطة زر عبر WhatsApp أو PDF',
          'إدارة الشيكات (في الانتظار، مودع، مصروف، مرتجع) مع تنبيهات الاستحقاق'
        ]
      }
    ]
  },
  {
    id: 7,
    titleAr: 'الوكالات والموردون والمشتريات',
    titleEn: 'Agencies, Suppliers & Procurement',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Building2',
    summary: 'دورة المشتريات من RFQ إلى فواتير الاستلام مع المطابقة الثلاثية 3-Way Match وتوزيع التكاليف.',
    platforms: ['desktop'],
    phaseNumber: 4,
    subsections: [
      {
        title: 'إدارة الوكالات والموردين',
        items: [
          'تسجيل بيانات الوكالات الحصرية والموردين المحليين والدوليين',
          'شروط السداد، الخصم التجاري، والوكيل المعتمد'
        ]
      },
      {
        title: 'دورة الشراء والمطابقة الثلاثية (3-Way Match)',
        items: [
          'إصدار طلبات الأسعار (RFQ) وأوامر الشراء المعتمدة (PO)',
          'سندات استلام البضائع (GRN) ومطابقتها بأمر الشراء وفاتورة المورد',
          'رصد الفروقات وحجز الشحنات غير المطابقة تلقائياً'
        ]
      },
      {
        title: 'توزيع التكاليف الإضافية (Landed Cost)',
        items: [
          'توزيع مصاريف الشحن والجمارك والتخليص والتأمين على تكلفة الصنف',
          'إشعارات الخصم والإرجاع (Debit Notes) للموردين',
          'كشوفات حسابات الموردين وأعمار الذمم الدائنة'
        ]
      }
    ]
  },
  {
    id: 8,
    titleAr: 'المنتجات والأصناف وإدارة الكتالوج',
    titleEn: 'Products, Items & Catalog Management',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Layers',
    summary: 'كتالوج الأصناف الهرمي، وحدات القياس المتعددة، تتبع الوجبات والتواريخ وتصنيف ABC.',
    platforms: ['desktop', 'sales_mobile', 'loader_mobile'],
    phaseNumber: 2,
    subsections: [
      {
        title: 'هيكل الكتالوج والباركود',
        items: [
          'باركود دولي (EAN-13 / QR) مع الأسماء باللغتين العربية والإنجليزية',
          'شجرة التصنيفات الهرمية (قسم رئيسي > قسم فرعي > صنف)',
          'ربط كل منتج بالوكالة التابع لها لضمان دقة التقارير'
        ]
      },
      {
        title: 'وحدات القياس المتعددة (UOM)',
        items: [
          'التحويل التلقائي بين الوحدات (قطعة، باكت، شدة، كرتونة)',
          'البيع والشراء بأي وحدة قياس مع تحديث الأرصدة بدقة'
        ]
      },
      {
        title: 'تتبع الوجبات والصلاحيات (Batch & Expiry)',
        items: [
          'تسجيل رقم الوجبة وتاريخ الإنتاج والانتهاء لكل دفعة واردة',
          'تتبع رحلة الوجبة من فاتورة المورد حتى المستهلك النهائي',
          'تصنيف حركة الأصناف ABC حسب حجم المبيعات والربحية'
        ]
      }
    ]
  },
  {
    id: 9,
    titleAr: 'المخازن والمخزون والجرد',
    titleEn: 'Warehouses, Inventory & Stock Management',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Warehouse',
    summary: 'تعدد المستودعات، عهدة السيارات، حركة المخزون اللحظية، الجرد الدوري وإعادة الطلب.',
    platforms: ['desktop', 'loader_mobile'],
    phaseNumber: 3,
    subsections: [
      {
        title: 'تعدد المخازن والمواقع (Locations/Bins)',
        items: [
          'مستودعات رئيسية، فرعية، مستودع عينات، ومستودع البضاعة التالفة',
          'اعتبار كل سيارة توزيع مستودعاً متنقلاً له عهدة مستقلة',
          'التحويلات المخزنية بين المستودعات مع إجراءات الاعتماد'
        ]
      },
      {
        title: 'الجرد والتسويات الرقابية',
        items: [
          'إجراء جرد دوري مستمر (Cycle Count) أو جرد شامل سنوي',
          'حساب الفروقات التلقائي وتوليد قيود التسوية المخزنية',
          'تحديد حد إعادة الطلب الأدنى وتنبيه المشتريات آلياً'
        ]
      },
      {
        title: 'إدارة تواريخ الصلاحية والتلف',
        items: [
          'تقارير الأصناف المقاربة على الانتهاء (30 / 60 / 90 يوماً)',
          'إجراءات شطب وتكهين التالف وأثره المحاسبي المباشر'
        ]
      }
    ]
  },
  {
    id: 10,
    titleAr: 'المبيعات والفواتير وإدارة الأسعار',
    titleEn: 'Sales, Invoicing & Pricing Management',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'ReceiptText',
    summary: 'قوائم الأسعار المتعددة، أوامر البيع والفواتير الآجلة والنقدية، حماية الأسعار والمردودات.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 5,
    subsections: [
      {
        title: 'قوائم الأسعار وحماية الهوامش',
        items: [
          'قوائم أسعار مخصصة حسب شريحة الزبون (جملة، تجزئة، كبار عملاء)',
          'حماية السعر: منع البيع بأقل من التكلفة إلا بإذن مدير حصري',
          'أسعار خاصة تعاقدية للزبائن الاستراتيجيين'
        ]
      },
      {
        title: 'أوامر وفواتير البيع',
        items: [
          'إنشاء فواتير نقدية وآجلة من أوامر البيع المعتمدة',
          'دعم الخصومات المركبة (خصم صنف، خصم فاتورة، خصم تجاري)',
          'طباعة حرارية وتنسيقات فواتير ضريبية متعددة اللغات'
        ]
      },
      {
        title: 'مردودات المبيعات والإشعارات الدائنة',
        items: [
          'معالجة المردودات وربطها برقم الفاتورة الأصلية',
          'توليد إشعار دائن (Credit Note) وتحديث أرصدة المخزن والعميل آلياً'
        ]
      }
    ]
  },
  {
    id: 11,
    titleAr: 'العروض والحملات التسويقية والترويج',
    titleEn: 'Promotions, Trade Deals & Campaigns',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'Tag',
    summary: 'محرك العروض المتطور: هدايا مجانية (Free Goods)، حزم (Bundles)، وخصومات تمرير الوكالات.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 5,
    subsections: [
      {
        title: 'أنواع العروض التسويقية المتاحة',
        items: [
          'عرض البونص والهدية: اشتري 12 باكت واحصل على 1 مجاناً',
          'عروض الحزم المجمعة (Bundle Deals): اشتري X مع Y بسعر خاص',
          'عروض الفلاش المحدودة زمنياً وعروض الوكالات الممررة'
        ]
      },
      {
        title: 'شروط وقواعد التطبيق الدقيقة',
        items: [
          'تطبيق العرض حسب شريحة الزبون، المنطقة، أو نوع العميل',
          'جدولة العروض بتواريخ وساعات محددة مع أسبقية العروض',
          'منع التعارض وازدواجية الخصومات تلقائياً'
        ]
      },
      {
        title: 'تقييم كفاءة الحملات والتكلفة',
        items: [
          'احتساب تكلفة العرض وتحميلها على الشركة أو استردادها من الوكالة',
          'تقارير نمو المبيعات خلال فترة العرض وكميات البونص المصروفة'
        ]
      }
    ]
  },
  {
    id: 12,
    titleAr: 'اللوجستيات وخطوط السير والأسطول',
    titleEn: 'Logistics, Routes & Fleet Management',
    category: 'core',
    categoryAr: 'الوحدات التشغيلية الحرجة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Navigation',
    summary: 'تقسيم المناطق الجغرافية، تخطيط خطوط السير، متابعة وثائق الشاحنات والتتبع المباشر.',
    platforms: ['desktop', 'driver_mobile'],
    phaseNumber: 7,
    subsections: [
      {
        title: 'إدارة خطوط السير (Routes & Zones)',
        items: [
          'تقسيم جغرافي للمدن والمناطق والأحياء وفق مسارات ذكية',
          'تعيين خط السير لكل مندوب وسائق وشاحنة في جدول أسبوعي دوري',
          'ترتيب الزبائن على المسار لتقليل وقت النقل وتكلفة الوقود'
        ]
      },
      {
        title: 'إدارة أسطول الشاحنات والمركبات',
        items: [
          'سجل المركبات، أوزان التحميل، الحجم الاستيعابي، وسجل الصيانة',
          'تنبيهات انتهاء الفحص الدوري، التأمين، وتراخيص السير',
          'فحص الطاقة الاستيعابية مقارنة بوزن الفواتير المحملة'
        ]
      },
      {
        title: 'التتبع اللحظي (Live GPS Tracking)',
        items: [
          'متابعة مواقع الشاحنات على الخريطة في الوقت الفعلي',
          'تسجيل المسار الفعلي ومطابقته بالمسار المخطط والتنبيه عند الانحراف'
        ]
      }
    ]
  },
  {
    id: 13,
    titleAr: 'المحاسبة المالية والحسابات العامة',
    titleEn: 'Financial Accounting & General Ledger',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Calculator',
    summary: 'شجرة الحسابات الهرمية، القيود التلقائية، إغلاق الفترات، والقوائم المالية الختامية.',
    platforms: ['desktop'],
    phaseNumber: 8,
    subsections: [
      {
        title: 'شجرة الحسابات ومراكز التكلفة',
        items: [
          'هيكل هرمي متعدد المستويات (أصول، خصوم، ملكية، إيرادات، مصروفات)',
          'ربط القيود بالفروع ومراكز التكلفة لحساب أرباح كل فرع',
          'استيراد شجرة حسابات قياسية مع سهولة التعديل'
        ]
      },
      {
        title: 'القيود المحاسبية التلقائية واليدوية',
        items: [
          'توليد قيود فورية عند إصدار فواتير البيع والشراء والقبض والصرف والمخزن',
          'قيود تسوية يدوية مع دورة اعتماد للمبالغ الكبيرة',
          'إلغاء وعكس القيود بسهولة مع توثيق السبب'
        ]
      },
      {
        title: 'القوائم والتقارير المالية',
        items: [
          'ميزان المراجعة، قائمة الدخل والأرباح والخسائر (P&L)',
          'الميزانية العمومية وقائمة التدفقات النقدية (Cash Flow)',
          'إجراءات إغلاق الشهر والسنة المالية وترحيل الأرصدة'
        ]
      }
    ]
  },
  {
    id: 14,
    titleAr: 'الخزينة والبنوك والسيولة النقدية',
    titleEn: 'Treasury, Cash & Bank Management',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Landmark',
    summary: 'تعدد الصناديق وعهد المناديب، الحسابات البنكية، المطابقة البنكية، وسندات القبض والصرف.',
    platforms: ['desktop'],
    phaseNumber: 8,
    subsections: [
      {
        title: 'الصناديق والعهد النقدية',
        items: [
          'صندوق رئيسي، صناديق فرعية، وصندوق خاص بكل مندوب وسائق',
          'إغلاق وفتح الصناديق اليومية ومطابقة الرصيد الفعلي بالدفتري',
          'ترحيل المبالغ الميدانية إلى الخزينة المركزية'
        ]
      },
      {
        title: 'الحسابات البنكية والشيكات',
        items: [
          'إدارة الحسابات البنكية المتعددة والعملات الأجنبية',
          'المطابقة البنكية التلقائية مع كشوفات الحساب الإلكترونية',
          'سجل الشيكات الصادرة والواردة وتنبيهات مواعيد التحصيل والإيداع'
        ]
      },
      {
        title: 'سندات القبض والصرف',
        items: [
          'إصدار سندات قبض وصرف مسلسلة ومحمية مع إرفاق الوثائق',
          'ربط السند بالفواتير المفتوحة للعميل أو المورد مباشرة'
        ]
      }
    ]
  },
  {
    id: 15,
    titleAr: 'المديونيات والذمم الدائنة والمدينة',
    titleEn: 'Accounts Receivable & Accounts Payable',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Scale',
    summary: 'متابعة ما لنا وما علينا، التسويات والمقاصة، مخصصات الديون المعدومة والتنبيهات.',
    platforms: ['desktop'],
    phaseNumber: 8,
    subsections: [
      {
        title: 'الذمم المدينة (Accounts Receivable)',
        items: [
          'أرصدة الزبائن اللحظية وتواريخ استحقاق الفواتير بدقة',
          'تقارير أعمار الذمم للمناديب والفروع لتقييم كفاءة التحصيل',
          'إجراءات شطب ومخصص الديون المشكوك في تحصيلها'
        ]
      },
      {
        title: 'الذمم الدائنة (Accounts Payable)',
        items: [
          'مستحقات الموردين والوكالات وجدولة دفعاتها حسب الأولويات',
          'تنبيهات الاستحقاق قبل حلول الموعد للاستفادة من خصومات السداد المبكر'
        ]
      },
      {
        title: 'المقاصة والتسويات الثنائية',
        items: [
          'تسوية ومقاصة رصيد العميل إذا كان مورداً أو صاحب مردودات معلقة',
          'تسويات الأرصدة الافتتاحية والمطابقات الدورية'
        ]
      }
    ]
  },
  {
    id: 16,
    titleAr: 'الرواتب والعمولات والحوافز',
    titleEn: 'Payroll, Commissions & Incentives',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'BadgePercent',
    summary: 'احتساب مسير الرواتب الآلي، العمولات التصاعدية للمناديب، السلف والتحويلات البنكية.',
    platforms: ['desktop'],
    phaseNumber: 9,
    subsections: [
      {
        title: 'هياكل العمولات الديناميكية',
        items: [
          'عمولة على المبيعات المصدرة ونسبة من المبالغ المحصلة فعلياً',
          'مكافأة بلوغ الهدف (Target Bonus) وعمولات تصاعدية متعددة الشرائح',
          'عمولات خاصة على منتجات ووكالات معينة لتعزيز بيعها'
        ]
      },
      {
        title: 'مسير الرواتب الشهري الموحد',
        items: [
          'احتساب الرواتب الأساسية، البدلات، الخصومات والاستقطاعات بضغطة زر',
          'ربط التأخير والغياب بنظام الحضور والانصراف تلقائياً',
          'إصدار كشف الراتب (Payslip) وتصدير ملف التحويل البنكي'
        ]
      },
      {
        title: 'السلف والقروض الداخلية',
        items: [
          'طلب السلفة وموافقة الإدارة وجدولة الاستقطاع الشهري التلقائي'
        ]
      }
    ]
  },
  {
    id: 17,
    titleAr: 'التكاليف وحساب الأرباح والتسعير التحليلي',
    titleEn: 'Cost Analysis, Profitability & Analytical Pricing',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'TrendingUp',
    summary: 'تكلفة البضاعة المباعة COGS، ربحية الوكالات، ربحية المناديب والمناطق، وتحليل الهوامش.',
    platforms: ['desktop'],
    phaseNumber: 9,
    subsections: [
      {
        title: 'تكلفة البضاعة المباعة (COGS)',
        items: [
          'حساب التكلفة بطريقة المتوسط المرجح مع إضافة مصاريف الشحن والتخزين',
          'عرض هامش الربح الإجمالي والصافي لكل فاتورة بيع قبل اعتمادها'
        ]
      },
      {
        title: 'حساب ربحية الوكالات التجارية',
        items: [
          'إجمالي مبيعات الوكالة مقارنة بمشترياتها ومصروفاتها وهداياها',
          'كشف الحساب الحقيقي لربحية كل علامة تجارية تمثلها الشركة'
        ]
      },
      {
        title: 'ربحية المناديب والمناطق الجغرافية',
        items: [
          'صافي ربح كل مندوب بعد خصم عمولته ومصاريف سيارته ومردوداته',
          'تحديد المناطق الأكثر ربحية لتوجيه الاستثمارات'
        ]
      }
    ]
  },
  {
    id: 18,
    titleAr: 'الضرائب والامتثال القانوني',
    titleEn: 'Tax Management & Legal Compliance',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'FileCheck',
    summary: 'ضريبة القيمة المضافة، ضريبة الشراء والبيع، الإقرارات الضريبية، ومطابقة الفواتير الحكومية.',
    platforms: ['desktop'],
    phaseNumber: 9,
    subsections: [
      {
        title: 'إعداد الضرائب والإعفاءات',
        items: [
          'تحديد نسب ضريبة القيمة المضافة والرسوم الجمركية ورسوم الاستهلاك',
          'تطبيق الإعفاءات للزبائن أو الأصناف المعفاة نظامياً'
        ]
      },
      {
        title: 'الإقرارات الضريبية الدورية',
        items: [
          'حساب ضريبة المدخلات وضريبة المخرجات وصافي الضريبة المستحقة',
          'توليد تقرير الإقرار الضريبي المعتمد لتقديمه للجهات الحكومية'
        ]
      }
    ]
  },
  {
    id: 19,
    titleAr: 'الميزانية التقديرية والتخطيط المالي',
    titleEn: 'Budgeting & Financial Planning',
    category: 'finance',
    categoryAr: 'المالية والمحاسبة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'PieChart',
    summary: 'إعداد الميزانيات السنوية، مقارنة الفعلي بالمخطط (Variance Analysis)، والإنذار المبكر.',
    platforms: ['desktop'],
    phaseNumber: 10,
    subsections: [
      {
        title: 'إعداد موازنات الإدارات والفروع',
        items: [
          'ميزانية المبيعات المستهدفة وميزانية المشتريات ومصروفات التشغيل',
          'توزيع الميزانيات شهرياً على الفروع ومراكز التكلفة'
        ]
      },
      {
        title: 'مراقبة الانحرافات اللحظية (Actual vs Budget)',
        items: [
          'تنبيهات تلقائية عند اقتراب أي مركز تكلفة من تجاوز ميزانيته',
          'تحليل أسباب الانحرافات المالية والتشغيلية وتقديم التوصيات'
        ]
      }
    ]
  },
  {
    id: 20,
    titleAr: 'ضبط الجودة وفحص المستلمات',
    titleEn: 'Quality Control & Receiving Inspection',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'CheckCircle2',
    summary: 'فحص الشحنات عند الرصيف، مراقبة السلسلة الباردة، حجر البضاعة غير المطابقة وإشعارات الموردين.',
    platforms: ['desktop', 'loader_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'فحص الشحنات الواردة (Receiving QC)',
        items: [
          'قائمة تحقق معيارية: سلامة التغليف، مطابقة الباركود، وتاريخ الصلاحية',
          'فحص النسبة المتبقية من الصلاحية ورفض ما هو أقل من المعيار المعتمد',
          'حجر البضاعة المشكوك فيها (Quarantine Stock) بانتظار نتيجة الفحص'
        ]
      },
      {
        title: 'مراقبة السلسلة الباردة (Cold Chain Monitoring)',
        items: [
          'تسجيل درجة حرارة الشاحنات والمستلمات المبردة والمجمدة',
          'تنبيه فوري عند انقطاع السلسلة الباردة لتفادي تلف المواد الغذائية'
        ]
      }
    ]
  },
  {
    id: 21,
    titleAr: 'إدارة الأصول الثابتة والمعدات',
    titleEn: 'Asset Management & Equipment',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'Cpu',
    summary: 'سجل الأصول، الثلاجات الموضوعة لدى الزبائن، الإهلاك التلقائي، والصيانة الدورية.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'ثلاجات ومعدات الشركة لدى الزبائن (Customer Placements)',
        items: [
          'تتبع الثلاجات والستاندات الموضوعة في محلات العملاء برقابة رقمية',
          'ربط الأصل بشروط الاستخدام وحصرية عرض منتجات وكالتنا',
          'تنبيهات عند سوء الاستخدام أو انتهاء عقد الإعارة'
        ]
      },
      {
        title: 'الإهلاك والصيانة الوقائية',
        items: [
          'حساب الإهلاك التلقائي الدفتري (قسط ثابت أو متناقص)',
          'جدولة الصيانة الدورية للشاحنات، الرافعات، وأجهزة التبريد'
        ]
      }
    ]
  },
  {
    id: 22,
    titleAr: 'إدارة العينات والهدايا الترويجية',
    titleEn: 'Samples & Promotional Gifts Management',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'Gift',
    summary: 'مستودع العينات، عهدة عينات المناديب، ومعدل تحويل العينات إلى مبيعات فعلية.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'مستودع وعهدة العينات',
        items: [
          'مستودع مستقل للمواد الترويجية والعينات المجانية ومواد الدعاية',
          'تسجيل عهدة العينات المسلمة لكل مندوب وتوثيق تسليمها للزبائن'
        ]
      },
      {
        title: 'معدل التحويل البيعي (Sample Conversion Rate)',
        items: [
          'قياس مدى تحول العينات الموزعة إلى طلبيات بيع حقيقية لكل زبون ومندوب'
        ]
      }
    ]
  },
  {
    id: 23,
    titleAr: 'تخطيط الطلب والتنبؤ بالمبيعات',
    titleEn: 'Demand Planning & Sales Forecasting',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'LineChart',
    summary: 'تحليل الموسميات (رمضان، الأعياد)، توقع المبيعات بالذكاء الاصطناعي، واقتراح كميات الشراء.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'تحليل الأنماط الموسمية',
        items: [
          'استخلاص أنماط الطلب المتغيرة حسب المواسم والأعياد والفصول السنوية',
          'تحديد فترات ذروة الاستهلاك للمواد الغذائية والمشروبات'
        ]
      },
      {
        title: 'نماذج التنبؤ وأوامر الشراء المقترحة',
        items: [
          'توليد توقعات مبيعات شهرية وسنوية مبنية على البيانات التاريخية',
          'اقتراح كميات الشراء تلقائياً لتفادي نفاد المخزون دون تجميد السيولة'
        ]
      }
    ]
  },
  {
    id: 24,
    titleAr: 'إدارة الوقود ومصاريف السيارات التفصيلية',
    titleEn: 'Fuel Management & Vehicle Expenses',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'Fuel',
    summary: 'تسجيل تعبئة الوقود، حساب معدل الاستهلاك لكل 100 كم، ورصد تكلفة تشغيل كل رحلة.',
    platforms: ['desktop', 'driver_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'سجل التزود بالوقود والعداد',
        items: [
          'تسجيل لترات الوقود وقراءة عداد الكيلومتر من تطبيق السائق',
          'احتساب معدل استهلاك الوقود لكل سيارة ومقارنته بالمعيار الهندسي',
          'إنذار فوري عند رصد استهلاك غير اعتيادي أو تسريب محتمل'
        ]
      },
      {
        title: 'ربحية الرحلة وتشغيل المركبة',
        items: [
          'تجميع مصاريف الرسوم، الغيار، المخالفات، والوقود لكل مركبة',
          'حساب صافي ربح كل رحلة توزيع (قيمة المبيعات - تكلفة الرحلة)'
        ]
      }
    ]
  },
  {
    id: 25,
    titleAr: 'إدارة الطلبات المسبقة والباك أوردر',
    titleEn: 'Pre-orders & Backorders Management',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'Clock',
    summary: 'حجز البضاعة قبل وصول الشحنة، إدارة التوصيل الجزئي والطلبات المعلقة للزبائن.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 5,
    subsections: [
      {
        title: 'الطلبات المسبقة (Pre-Orders)',
        items: [
          'تسجيل طلبات البضائع غير المتوفرة حالياً وحجزها فور وصول الشحنة',
          'إشعار الزبون والمندوب فور توفر الأصناف المحجوزة'
        ]
      },
      {
        title: 'أوامر الانتظار (Backorders)',
        items: [
          'تسليم الفاتورة جزئياً وتحويل النواقص إلى Backorder يجدول تلقائياً'
        ]
      }
    ]
  },
  {
    id: 26,
    titleAr: 'الاستدامة وتتبع البضاعة والسلامة الغذائية',
    titleEn: 'Food Safety, Traceability & Product Recall',
    category: 'operations',
    categoryAr: 'العمليات والجودة',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'ShieldAlert',
    summary: 'التتبع الشامل من المورد للمستهلك، السحب الطارئ للمنتجات (Product Recall)، وشهادات الجودة.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'التتبع العكسي والكامل (End-to-End Traceability)',
        items: [
          'معرفة مصدر أي وجبة من رقم الشحنة وحتى اسم كل زبون اشترى منها',
          'تطبيق متطلبات هيئات الغذاء والدواء والجهات الرقابية بدقة'
        ]
      },
      {
        title: 'السحب الطارئ للمنتجات (Product Recall)',
        items: [
          'تحديد فوري لكافة المتاجر التي استلمت وجبة معيبة بنقرة واحدة',
          'توليد مهام سحب واسترجاع عاجلة للسائقين وتتبع نسب استعادة الشحنة'
        ]
      }
    ]
  },
  {
    id: 27,
    titleAr: 'علاقات الزبائن وما بعد البيع (CRM)',
    titleEn: 'Customer Relationship Management (CRM)',
    category: 'crm',
    categoryAr: 'علاقات العملاء والسوق',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'HeartHandshake',
    summary: 'رؤية 360 درجة للزبون، تذاكر الشكاوى وحلها (SLA)، برامج الولاء والنقاط، وقياس NPS.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'نظرة شاملة للزبون (Customer 360° View)',
        items: [
          'سجل موحد لجميع زيارات المناديب، الفواتير، المردودات، والشكاوى السابقة',
          'اقتراح فرص بيعية إضافية (Cross-sell / Up-sell) تناسب نشاط الزبون'
        ]
      },
      {
        title: 'إدارة الشكاوى والخدمة (Helpdesk)',
        items: [
          'تسجيل الشكاوى (تلف، خطأ فوترة، تأخر) مع تحديد اتفاقية مستوى الخدمة (SLA)',
          'إشعارات للزبون بحالة المعالجة وقياس مؤشر رضا الزبائن (NPS)'
        ]
      }
    ]
  },
  {
    id: 28,
    titleAr: 'مراقبة الأسعار وذكاء السوق والمنافسة',
    titleEn: 'Market Intelligence & Competitor Pricing',
    category: 'crm',
    categoryAr: 'علاقات العملاء والسوق',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'Crosshair',
    summary: 'رصد أسعار المنافسين ميدانياً، تحليل الفجوة السعرية، وتسجيل المتاجر والفرص الجديدة.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'رصد المنافسين من الميدان',
        items: [
          'تسجيل المندوب لأسعار وعروض الشركات المنافسة عبر هاتفه أثناء الزيارة',
          'تحليل الفجوة السعرية ومقارنة أسعارنا بالسوق لكل منطقة'
        ]
      },
      {
        title: 'فرص التوسع والحصة السوقية',
        items: [
          'تسجيل المتاجر الجديدة قيد الافتتاح وأسباب رفض الشراء إن وجدت',
          'تقدير الحصة السوقية التقريبية في كل قطاع جغرافي'
        ]
      }
    ]
  },
  {
    id: 29,
    titleAr: 'إدارة أداء الموردين والاتفاقيات التجارية',
    titleEn: 'Supplier Performance & Trade Rebates',
    category: 'crm',
    categoryAr: 'علاقات العملاء والسوق',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'Handshake',
    summary: 'تقييم التزام الوكالات، احتساب عمولات الأهداف السنوية (Rebates) ودعم التسويق المشترك.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'تقييم أداء الوكالة والمورد',
        items: [
          'معايير دقيقة: نسبة التسليم في الموعد، نسبة العيوب والمردودات، والأسعار',
          'تصنيف الموردين دورياً (ممتاز، جيد، غير موثوق)'
        ]
      },
      {
        title: 'مكافآت الحجم والاتفاقيات (Rebates)',
        items: [
          'متابعة أهداف الشراء السنوية المتفق عليها مع الوكالات العالمية',
          'احتساب مبالغ الـ Rebates المستحقة لنا تلقائياً ومطالبتها'
        ]
      }
    ]
  },
  {
    id: 30,
    titleAr: 'التقارير والتحليلات ولوحات التحكم',
    titleEn: 'Analytics, Dashboards & Reporting Engine',
    category: 'analytics',
    categoryAr: 'البيانات والذكاء الاصطناعي',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'BarChart3',
    summary: 'لوحات تحكم للإدارة العليا والمبيعات، ومحرك تقارير مخصص مع جدولة الإرسال التلقائي.',
    platforms: ['desktop'],
    phaseNumber: 10,
    subsections: [
      {
        title: 'لوحات التحكم التنفيذية (Executive Dashboards)',
        items: [
          'لوحة الإدارة: مبيعات اليوم اللحظية، السيولة، التحصيلات، والمخزون الحرج',
          'لوحة المبيعات: أداء المندوبين، إنجاز التارجت، والزبائن الأكثر ربحية'
        ]
      },
      {
        title: 'محرك التقارير المخصصة والتصدير',
        items: [
          'بناء أي تقرير بسحب وإفلات الأعمدة والفلاتر (Custom Report Builder)',
          'جدولة الإرسال التلقائي للتقارير للإدارة عبر البريد أو WhatsApp يومياً'
        ]
      }
    ]
  },
  {
    id: 31,
    titleAr: 'تحليل البيانات والذكاء الاصطناعي (AI / BI)',
    titleEn: 'Advanced Analytics & Business Intelligence',
    category: 'analytics',
    categoryAr: 'البيانات والذكاء الاصطناعي',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'Sparkles',
    summary: 'الخرائط الحرارية (Geo Heatmaps)، قاعدة باريتو 80/20، وتوقع تعثر سداد الزبائن.',
    platforms: ['desktop'],
    phaseNumber: 10,
    subsections: [
      {
        title: 'ذكاء الأعمال المتقدم (Advanced BI)',
        items: [
          'خرائط حرارية جغرافية توضح كثافة المبيعات ومناطق الضعف في السوق',
          'تحليل باريتو (Pareto Analysis): كشف الـ 20% من العملاء الذين يدرون 80% من الأرباح'
        ]
      },
      {
        title: 'نماذج التوقع الذكية (Predictive Models)',
        items: [
          'توقع العملاء المعرضين للتعثر في السداد قبل منحهم ائتماناً إضافياً',
          'توصيات بيعية ذكية للمندوب: أصناف اعتاد الزبون طلبها ولم يطلبها هذا الأسبوع'
        ]
      }
    ]
  },
  {
    id: 32,
    titleAr: 'الإعدادات العامة وإدارة النظام',
    titleEn: 'System Settings & Core Administration',
    category: 'tech',
    categoryAr: 'التقنية والتكامل',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Settings',
    summary: 'بيانات الشركة والترخيص، تسلسلات الترقيم، قوالب الفواتير، والنسخ الاحتياطي المشفر.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'إعدادات الهوية والترقيم',
        items: [
          'شعار الشركة، الترويسات الرسمية، والمعلومات الضريبية على الفواتير',
          'تسلسلات ترقيم مستقلة للفواتير والسندات لكل فرع وسنة مالية'
        ]
      },
      {
        title: 'النسخ الاحتياطي التلقائي',
        items: [
          'نسخ احتياطي يومي مشفر تلقائياً مع خيار الحفظ السحابي الآمن'
        ]
      }
    ]
  },
  {
    id: 33,
    titleAr: 'واجهات الـ API والتكامل مع التطبيقات',
    titleEn: 'API Gateway & Offline Sync Architecture',
    category: 'tech',
    categoryAr: 'التقنية والتكامل',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Globe',
    summary: 'بوابة الـ RESTful APIs، محرك المزامنة الأوفلاين، توثيق Swagger، وحل تعارض البيانات.',
    platforms: ['desktop', 'sales_mobile', 'driver_mobile', 'loader_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'معمارية الـ API ومزامنة الأوفلاين',
        items: [
          'واجهات RESTful سريعة جداً مبنية بلغة Go + Fiber لأقصى أداء',
          'محرك مزامنة ثنائي الاتجاه يتيح لتطبيقات الموبايل العمل دون إنترنت',
          'آلية متقدمة لحل تعارض البيانات (Conflict Resolution)'
        ]
      },
      {
        title: 'التوثيق والربط الخارجي',
        items: [
          'توثيق كامل لكافة نقاط النهاية عبر Swagger / OpenAPI',
          'بوابات آمنة لتبادل البيانات مع التطبيقات الخارجية والمتاجر الإلكترونية'
        ]
      }
    ]
  },
  {
    id: 34,
    titleAr: 'التواصل والرسائل الداخلية والإشعارات',
    titleEn: 'Messaging, Internal Chat & WhatsApp Integration',
    category: 'tech',
    categoryAr: 'التقنية والتكامل',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'MessageSquare',
    summary: 'محادثات داخلية للموظفين، إشعارات فورية وتكامل رسمي مع WhatsApp Business للزبائن.',
    platforms: ['desktop', 'sales_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'تكامل WhatsApp Business التلقائي',
        items: [
          'إرسال كشف حساب العميل وفواتير الشراء PDF بضغطة زر إلى واتساب العميل',
          'إشعارات استلام الطلب وتأكيد مواعيد وصول شاحنة التوصيل'
        ]
      },
      {
        title: 'الرسائل الداخلية والتنبيهات الحية',
        items: [
          'غرف محادثة داخلية للمناديب والمشرفين وإرفاق المستندات',
          'تنبيهات فورية بـ WebSockets عند العمليات الحرجة كالشيكات المستحقة'
        ]
      }
    ]
  },
  {
    id: 35,
    titleAr: 'تكامل الجهات الخارجية والحكومية',
    titleEn: 'Government, e-Invoicing & Payment Integrations',
    category: 'tech',
    categoryAr: 'التقنية والتكامل',
    priority: 'high',
    priorityLabel: 'عالية',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: 'Network',
    summary: 'الفوترة الإلكترونية الحكومية، بوابات الدفع الإلكتروني، وتكامل خرائط Google Maps وWaze.',
    platforms: ['desktop', 'driver_mobile'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'الفوترة الإلكترونية الحكومية (e-Invoicing)',
        items: [
          'الربط مع المنصات الضريبية الحكومية وإرسال الفواتير بصيغ XML/UBL المعتمدة',
          'توليد رمز الاستجابة السريعة (ZATCA / QR Code) المشفر'
        ]
      },
      {
        title: 'خرائط GPS وبوابات الدفع',
        items: [
          'تكامل خرائط Google Maps لحساب مسافات التوصيل وتحسين المسار تلقائياً',
          'استقبال مدفوعات البطاقات والمحافظ الرقمية وتسويتها بالرصيد فوراً'
        ]
      }
    ]
  },
  {
    id: 36,
    titleAr: 'إدارة المستندات والأرشفة الرقمية',
    titleEn: 'Document Management & Digital Archive',
    category: 'tech',
    categoryAr: 'التقنية والتكامل',
    priority: 'medium',
    priorityLabel: 'متوسطة',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: 'FolderArchive',
    summary: 'أرشفة إلكترونية لكافة الفواتير والعقود والشهادات، مع التوقيع الإلكتروني والبحث السريع.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'الأرشيف الإلكتروني المركزي',
        items: [
          'ربط الملفات والمستندات بملفات الزبائن والموردين والموظفين والشاحنات',
          'البحث النصي السريع داخل الوثائق المرفوعة وتصنيفها',
          'منع التعديل أو الحذف للمستندات المعتمدة مع الحفاظ على الأمان'
        ]
      }
    ]
  },
  {
    id: 37,
    titleAr: 'مراقبة النظام والـ DevOps وترحيل البيانات',
    titleEn: 'System Monitoring, DevOps & Data Migration',
    category: 'tech',
    categoryAr: 'التقنية والتكامل',
    priority: 'critical',
    priorityLabel: 'حرجة',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    icon: 'Server',
    summary: 'مراقبة استجابة الخوادم، تسجيل الأخطاء المركزية، وأدوات استيراد وترحيل البيانات من Excel.',
    platforms: ['desktop'],
    phaseNumber: 11,
    subsections: [
      {
        title: 'مراقبة الخوادم والصحة التقنية',
        items: [
          'متابعة أداء المعالج والذاكرة وزمن استجابة الـ API لحظياً',
          'سجل أخطاء مركزي وتنبيه فوري لفريق التطوير عند أي توقف أو استثناء'
        ]
      },
      {
        title: 'أدوات ترحيل البيانات السلسة',
        items: [
          'استيراد أرصدة الأصناف والزبائن والموردين من شيتات Excel بسهولة',
          'فحص سلامة البيانات والمطابقة قبل الترحيل، مع إمكانية التراجع الكامل'
        ]
      }
    ]
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'المرحلة 0',
    titleAr: 'البنية التحتية والبيئة الأساسية',
    titleEn: 'Project Foundation & Tooling',
    duration: 'أسبوع واحد',
    status: 'completed',
    modulesIncluded: 'إعداد البيئة التقنية',
    keyDeliverables: [
      'تأسيس بيئة Go + Fiber السريعة جداً وتجهيز Docker وPostgreSQL',
      'بناء نظام الـ Migrations، هيكل الـ APIs الموحد، ونظام الـ Logging المركزي'
    ],
    techFocus: 'Go, Fiber, GORM, PostgreSQL, Docker'
  },
  {
    phase: 'المرحلة 1',
    titleAr: 'الأمان والمصادقة والهيكل التنظيمي',
    titleEn: 'Security, Multi-Branch & Auth Core',
    duration: '1 - 2 أسبوع',
    status: 'completed',
    modulesIncluded: 'Module 01',
    keyDeliverables: [
      'جداول الشركات، الفروع، المستخدمين، الأدوار، والصلاحيات التفصيلية',
      'حماية كاملة بـ JWT وRefresh Tokens وتسجيل الأجهزة وبصمة الجلسة',
      'محرك سجل التدقيق (Audit Trail) لحفظ القيم قبل وبعد كل تعديل'
    ],
    techFocus: 'JWT, Scoped RBAC, Audit Engine'
  },
  {
    phase: 'المرحلة 2',
    titleAr: 'الكيانات والبيانات الأساسية',
    titleEn: 'Master Data (Products, Customers, Suppliers)',
    duration: '1 - 2 أسبوع',
    status: 'in_progress',
    modulesIncluded: 'Module 08 + Module 06 + Module 07',
    keyDeliverables: [
      'كتالوج المنتجات الهرمي ووحدات القياس المتعددة وتتبع أرقام الوجبات',
      'دليل الزبائن، الإحداثيات الجغرافية، وسقوف الائتمان وسياسات الدفع',
      'دليل الوكالات والموردين وقوائم الأسعار المتدرجة'
    ],
    techFocus: 'Hierarchical Catalog, Geo Data, Pricing Tiers'
  },
  {
    phase: 'المرحلة 3',
    titleAr: 'المخازن والمخزون وإدارة FEFO',
    titleEn: 'Inventory Core & FEFO Warehousing',
    duration: 'أسبوعان',
    status: 'planned',
    modulesIncluded: 'Module 09 + Module 20 (QC)',
    keyDeliverables: [
      'هيكل المستودعات المتعددة، التحويلات بين المخازن، وحركات المخزون الحية',
      'تطبيق قاعدة FEFO الصارمة (صرف الأقرب انتهاءً أولاً)',
      'فحص الجودة عند الرصيف، حجر البضاعة المشكوك بها، وتقارير الركود'
    ],
    techFocus: 'Transaction-Safe Stock, FEFO Logic, Batch Tracking'
  },
  {
    phase: 'المرحلة 4',
    titleAr: 'المشتريات والاستلام ومطابقة الفواتير',
    titleEn: 'Procurement & 3-Way Matching',
    duration: 'أسبوعان',
    status: 'planned',
    modulesIncluded: 'Module 07',
    keyDeliverables: [
      'أوامر الشراء (PO)، سندات استلام البضائع (GRN)، وفواتير الموردين',
      'المطابقة الثلاثية التلقائية وحساب فروقات الاستلام',
      'توزيع التكاليف الإضافية (Landed Cost) على تكلفة الصنف وتحديث الذمم'
    ],
    techFocus: '3-Way Match, Landed Cost Calculation'
  },
  {
    phase: 'المرحلة 5',
    titleAr: 'المبيعات والفوترة ومحرك العروض',
    titleEn: 'Sales, Invoicing & Promotions Engine',
    duration: '2 - 3 أسابيع',
    status: 'planned',
    modulesIncluded: 'Module 10 + Module 11 + Module 25',
    keyDeliverables: [
      'أوامر البيع، الفواتير النقدية والآجلة، فحص سقف الائتمان، وخصم المخزون',
      'محرك العروض الذكي (بونص مجاني، حزم، خصومات تجارية ممررة)',
      'معالجة المردودات، إصدار الإشعارات الدائنة، وإدارة أوامر الانتظار (Backorders)'
    ],
    techFocus: 'Invoicing Engine, Credit Guard, Promotion Rules'
  },
  {
    phase: 'المرحلة 6',
    titleAr: 'الموارد البشرية والمندوبون',
    titleEn: 'HR & Sales Reps Management',
    duration: '1 - 2 أسبوع',
    status: 'planned',
    modulesIncluded: 'Module 02 + Module 03',
    keyDeliverables: [
      'إدارة الموظفين والوثائق والحضور والانصراف بـ GPS',
      'خطط زيارات المناديب اليومية، تتبع الأهداف الشهرية، والتحصيل الميداني'
    ],
    techFocus: 'Attendance GPS, Target & Visit Tracking'
  },
  {
    phase: 'المرحلة 7',
    titleAr: 'اللوجستيات والتوزيع الميداني والتحميل',
    titleEn: 'Fleet, Route Optimization & Loading',
    duration: '2 - 3 أسابيع',
    status: 'planned',
    modulesIncluded: 'Module 04 + Module 05 + Module 12',
    keyDeliverables: [
      'بيان الرحلات، تطبيق السائق، التوقيع الرقمي وصور إثبات الاستلام (POD)',
      'تجهيز الطلبات عبر مسح الباركود السريع ومطابقة حمولة الشاحنات',
      'تصفية عهدة نهاية اليوم (مباع + مردود + كاش محصل)'
    ],
    techFocus: 'Route Optimization, Trip Manifest, Settlement Engine'
  },
  {
    phase: 'المرحلة 8',
    titleAr: 'التحصيل والخزينة والمحاسبة المالية',
    titleEn: 'Finance, Treasury & General Ledger',
    duration: '2 - 3 أسابيع',
    status: 'planned',
    modulesIncluded: 'Module 06 + Module 13 + Module 14 + Module 15',
    keyDeliverables: [
      'شجرة الحسابات، توليد القيود التلقائية لكافة عمليات البيع والمخزن',
      'صناديق الكاش، الحسابات البنكية، محفظة الشيكات، وسندات القبض والصرف',
      'أعمار الذمم (Aging AR/AP) وإغلاق الفترات والقوائم المالية'
    ],
    techFocus: 'Automated Accounting Entries, Aging Ledger'
  },
  {
    phase: 'المرحلة 9',
    titleAr: 'الرواتب والعمولات والتحليل الربحي',
    titleEn: 'Payroll, Dynamic Commissions & Costing',
    duration: '1 - 2 أسبوع',
    status: 'planned',
    modulesIncluded: 'Module 16 + Module 17 + Module 18',
    keyDeliverables: [
      'مسير الرواتب الآلي وحساب العمولات التصاعدية للمناديب على التحصيل والبيع',
      'احتساب COGS بالمتوسط المرجح وربحية كل وكالة وفاتورة ومندوب',
      'حساب ضريبة القيمة المضافة وإعداد الإقرارات الضريبية'
    ],
    techFocus: 'Commission Math, COGS Engine, Tax Compliance'
  },
  {
    phase: 'المرحلة 10',
    titleAr: 'لوحات التحكم والتقارير والذكاء الاصطناعي',
    titleEn: 'BI Dashboards, Reports & Analytics',
    duration: 'أسبوعان',
    status: 'planned',
    modulesIncluded: 'Module 19 + Module 30 + Module 31',
    keyDeliverables: [
      'لوحات القيادة اللحظية للإدارة العليا والمبيعات والمالية والمخازن',
      'محرك التقارير المخصصة وتصدير Excel وجدولة الإرسال التلقائي',
      'خرائط حرارية وتوقعات الطلب ونماذج كشف العملاء المعرضين للتعثر'
    ],
    techFocus: 'Data Visualization, Predictive Models, Custom Builder'
  },
  {
    phase: 'المرحلة 11',
    titleAr: 'الوحدات المتخصصة والتكاملات',
    titleEn: 'Specialized Enterprise Modules',
    duration: '3 - 4 أسابيع',
    status: 'planned',
    modulesIncluded: 'Modules 20 إلى 37',
    keyDeliverables: [
      'تكامل WhatsApp Business الرسمي لإرسال الكشوفات والفواتير',
      'سلامة الغذاء والسحب الطارئ للمنتجات (Product Recall)',
      'إدارة أصول الثلاجات لدى الزبائن، سجل الوقود، والفوترة الإلكترونية الحكومية'
    ],
    techFocus: 'WhatsApp API, E-Invoicing, Cold Chain IoT'
  },
  {
    phase: 'المرحلة 12',
    titleAr: 'تطبيقات الموبايل الميدانية الثلاثة',
    titleEn: 'Field Mobile Applications Suite',
    duration: '4 - 6 أسابيع',
    status: 'planned',
    modulesIncluded: 'Sales Rep + Driver + Loader Mobile Apps',
    keyDeliverables: [
      'إطلاق تطبيق مندوب المبيعات الميداني الداعم للعمل أوفلاين',
      'إطلاق تطبيق السائق لبيان الرحلات، إثبات التسليم، وتحصيل الـ COD',
      'إطلاق تطبيق المجهز لمسح الباركود وتجهيز الطلبات وتحميل الشاحنات'
    ],
    techFocus: 'Cross-Platform Mobile, SQLite Offline Sync, Barcode'
  },
  {
    phase: 'المرحلة 13',
    titleAr: 'تطبيق سطح المكتب المركزي المكتمل',
    titleEn: 'Windows Desktop Enterprise Client',
    duration: '4 - 6 أسابيع',
    status: 'planned',
    modulesIncluded: 'Central Desktop App',
    keyDeliverables: [
      'واجهات سطح مكتب فائقة السرعة لكافة الوحدات والعمليات',
      'دعم الطابعات الحرارية والباركود والعمل دون اتصال مع مزامنة مركزية'
    ],
    techFocus: 'Electron / Tauri, Desktop Native Printing, Fast Grid'
  },
  {
    phase: 'المرحلة 14',
    titleAr: 'النشر الإنتاجي والإطلاق الميداني',
    titleEn: 'Production Launch & Go-Live',
    duration: '1 - 2 أسبوع',
    status: 'planned',
    modulesIncluded: 'Full ERP Rollout',
    keyDeliverables: [
      'تجهيز السيرفرات السحابية والنسخ الاحتياطي التلقائي المشفر',
      'ترحيل البيانات من الأنظمة القديمة وشيتات Excel',
      'تدريب الكوادر الميدانية والإدارية والإطلاق الرسمي 🎉'
    ],
    techFocus: 'CI/CD, High Availability, Zero Downtime'
  }
];

export const OPERATION_CYCLE_STEPS = [
  {
    step: 1,
    title: 'المشتريات والاستلام والـ 3-Way Match',
    description: 'طلب الشراء من الوكالات، سند استلام البضائع (GRN)، مطابقة الأسعار والكميات وتوزيع تكاليف الشحن (Landed Cost).',
    icon: 'Building2',
    badge: 'Module 07'
  },
  {
    step: 2,
    title: 'فحص الجودة والتخزين وفق FEFO',
    description: 'فحص درجات الحرارة والصلاحيات، حجر المشكوك به، وتخزين الوجبات مع تتبع تاريخ الصلاحية ورقم الدفعة.',
    icon: 'Warehouse',
    badge: 'Modules 08, 09, 20'
  },
  {
    step: 3,
    title: 'أمر البيع الميداني عبر تطبيق المندوب',
    description: 'يقوم المندوب بزيارة الزبون موثقة بالـ GPS، فحص سقف الائتمان، تطبيق العروض، وإرسال أمر البيع مباشرة أو أوفلاين.',
    icon: 'Smartphone',
    badge: 'Modules 03, 10, 11'
  },
  {
    step: 4,
    title: 'التجهيز السريع والتحميل في الشاحنة',
    description: 'استلام قائمة الـ Picking على تطبيق المجهز، مسح باركود الأصناف الأقرب انتهاءً، وتحميل الشاحنة مع مانيفست السائق.',
    icon: 'PackageCheck',
    badge: 'Modules 04, 05, 12'
  },
  {
    step: 5,
    title: 'التسليم الميداني والتحصيل الفوري (COD)',
    description: 'السائق يسلم الطلب، توقيع ديجيتال وصورة إثبات استلام، تسجيل أي مردود فوري، وتحصيل الكاش مع إصدار إيصال.',
    icon: 'Truck',
    badge: 'Modules 04, 06'
  },
  {
    step: 6,
    title: 'تصفية العهدة والقيود المحاسبية التلقائية',
    description: 'إغلاق عهدة نهاية اليوم مع المحاسب (مباع + مردود + كاش)، وتوليد قيود اليومية وتحديث أرصدة المخازن والزبائن آلياً.',
    icon: 'Calculator',
    badge: 'Modules 13, 14, 15'
  },
  {
    step: 7,
    title: 'الرواتب، العمولات، والتقارير التنفيذية',
    description: 'احتساب عمولة المندوب تلقائياً على التحصيل، تحديث قائمة الدخل والأرباح (P&L)، وتحليل ربحية كل وكالة ومنطقة.',
    icon: 'LineChart',
    badge: 'Modules 16, 17, 30'
  }
];

export const SYSTEM_STATS = [
  { label: 'وحدة برمجية متكاملة', value: '37' },
  { label: 'تطبيقات منصات متزامنة', value: '4' },
  { label: 'دعم العمل الأوفلاين', value: '100%' },
  { label: 'دورة عمل مغلقة ومؤتمتة', value: 'كاملة' }
];
