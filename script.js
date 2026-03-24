/* ==========================================
siteforge.ma — script.js
مُصلَح ومُنظَّم بالكامل
========================================== */

/* ===== 1. نجوم الهيرو ===== */
(function () {
  const container = document.getElementById('heroStars');
  if (!container) return;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 55; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size  = Math.random() * 2.5 + 0.5;
    const op    = Math.random() * 0.35 + 0.08;
    const delay = Math.random() * 6;
    const dur   = Math.random() * 3 + 2;
    star.style.cssText =
      `width:${size}px;height:${size}px;` +
      `top:${Math.random() * 100}%;left:${Math.random() * 100}%;` +
      `--d:${dur}s;--op:${op};animation-delay:${delay}s;`;
    fragment.appendChild(star);
  }
  container.appendChild(fragment);
})();

/* ===== 2. الترجمات (AR / EN / FR) ===== */
const translations = {
  ar: {
    // Nav & footer common
    nav_projects:  'أعمالي',
    nav_services:  'الخدمات',
    nav_pricing:   'الأسعار',
    contact:       'تواصل',
    footer_tagline: 'مطور مواقع',
    privacy:       'سياسة الخصوصية',
    terms:         'شروط الاستخدام',
    refund:        'سياسة الاسترداد',
    faq:           'الأسئلة الشائعة',
    copyright:     '© 2025 siteforge.ma · جميع الحقوق محفوظة',
    float_chat:    'تواصل معي',

    // Hero & general
    hero_tag:      'مطور مواقع',
    hero_line1:    'موقع مصمم خصيصاً لك،',
    hero_line2:    'يعكس مشروعك ويجذب العملاء',
    hero_sub:      'تصميم احترافي · تسليم سريع · نتائج حقيقية',
    hero_cta:      'ابدأ مشروعك ←',
    hero_work:     'مشاهدة الأعمال',
    stat_delivery: 'تسليم سريع',
    stat_support:  'دعم بعد التسليم',
    stat_quality:  'ضمان الجودة',

    // Why me
    why_label:     'لماذا أنا',
    why_title:     'لماذا تختارني؟',
    why1: 'تواصل سريع',
    why2: 'تصميم احترافي',
    why3: 'تسليم سريع',
    why4: 'توافق مع الهاتف',
    why5: 'صيانة ودعم',
    why6: 'نتيجة تخدم مشروعك',
    why1_desc: 'أرد على رسائلك بسرعة وأبقى معك في كل خطوة حتى يكون كل شيء واضحاً وسهلاً.',
    why2_desc: 'أصمم موقعاً أنيقاً ومنظماً يعكس مشروعك بشكل جميل ويعطي انطباعاً قوياً للزائر.',
    why3_desc: 'أبدأ العمل بسرعة وأحرص على تسليم الموقع في أقرب وقت ممكن دون إهمال الجودة.',
    why4_desc: 'يظهر موقعك بشكل ممتاز على الهاتف والتابلت والكمبيوتر ليحصل كل زائر على تجربة مريحة.',
    why5_desc: 'أبقى متاحاً بعد التسليم للمساعدة في التعديلات البسيطة وحل أي مشكلة قد تظهر.',
    why6_desc: 'الهدف ليس فقط موقع جميل، بل موقع يساعدك على عرض خدماتك بشكل واضح وجذب العملاء.',

    // Projects
    projects_label: 'أعمالي',
    projects_title: 'شوف نماذج من المواقع اللي صممناها',
    projects_desc:  'كل موقع خدمناه كان بهدف واضح: تصميم عصري، سرعة في التصفح، وتجربة مستخدم تخلي الزائر يثق في المشروع من أول زيارة.',
    project1_tag: 'متجر',       project1_number: '01 — مكتبة',     project1_title: 'مكتبة النور',       project1_desc: 'موقع مكتبة إلكترونية مخصص لبيع الكتب أونلاين.',
    project2_tag: 'متجر',       project2_number: '02 — عطور',      project2_title: 'متجر العطور',        project2_desc: 'متجر عطور بتصميم أنيق يبرز جمالية المنتجات.',
    project3_tag: 'صفحة بيع',   project3_number: '03 — تسويق',     project3_title: 'دورة تسويق رقمي',   project3_desc: 'موقع احترافي لعرض دورة في التسويق الرقمي.',
    project4_tag: 'مطعم',       project4_number: '04 — مطعم',      project4_title: 'مطعم أطلس',          project4_desc: 'موقع مطعم يعرض المنيو والصور بطريقة جذابة.',
    project5_tag: 'موقع شركة',  project5_number: '05 — وكالة سفر', project5_title: 'سفاري',              project5_desc: 'موقع وكالة سفر يعرض الرحلات والعروض بوضوح.',
    view: 'عرض ←',

    // Services
    services_label: 'خدماتي',
    services_title: 'ماذا أقدم لك؟',
    services_desc:  'كل ما تحتاجه لتحويل فكرتك إلى موقع يبيع.',
    service1: 'متجر إلكتروني',     service1_desc: 'سلة تسوق، طلبات، وتكامل مع واتساب.',
    service2: 'صفحة بيع',          service2_desc: 'تحويل أكبر عدد من الزوار إلى مشترين.',
    service3: 'موقع شركة / مطعم',  service3_desc: 'تقديم احترافي يبني الثقة ويجذب العملاء.',
    service4: 'تصميم متجاوب 100%', service4_desc: 'مثالي على الجوال والكمبيوتر واللوحة.',
    service5: 'تسليم سريع',        service5_desc: 'موقعك جاهز خلال 48 ساعة فقط.',
    service6: 'جودة مضمونة',       service6_desc: 'دعم كامل بعد التسليم وضمان الجودة.',

    // Pricing
    pricing_label: 'الأسعار',
    pricing_title: 'عروض خاصة لفترة محدودة',
    pricing_desc:  'استغل التخفيضات الآن',
    basic_name:  'الأساسي',
    basic_note:  'بدون دومين — رابط GitHub مجاني',
    basic_feat1: 'صفحة واحدة (متجر أو Landing Page)',
    basic_feat2: 'تصميم احترافي متجاوب',
    basic_feat3: 'تكامل مع واتساب',
    basic_feat4: 'تسليم خلال 48 ساعة',
    basic_feat5: 'أسبوع دعم مجاني',
    basic_feat6: 'دومين خاص',
    basic_feat7: 'صفحات متعددة',
    order_now:    'اطلب الآن',
    most_popular: 'الأكثر طلباً',
    premium_name:  'المتكامل',
    premium_note:  'مع دومين .com لمدة سنة ✦',
    premium_feat1: 'حتى 4 صفحات',
    premium_feat2: 'تصميم احترافي متجاوب',
    premium_feat3: 'تكامل مع واتساب',
    premium_feat4: 'تسليم خلال 5 أيام',
    premium_feat5: 'شهر دعم مجاني',
    premium_feat6: 'دومين .com لسنة كاملة',
    premium_feat7: 'نموذج تواصل مخصص',
    start_now:    'ابدأ الآن ✦',
    currency:     'درهم',
    extras_title: 'خدمات إضافية',
    extra1: 'تعديل بسيط',      extra1_price: '50 درهم',
    extra2: 'إضافة صفحة',      extra2_price: '100 درهم',
    extra3: 'دومين .ma مغربي', extra3_price: '120 درهم/سنة',
    extra4: 'صيانة شهرية',     extra4_price: '80 درهم/شهر',

    // CTA
    cta_title: 'جاهز تبدأ مشروعك؟ 🚀',
    cta_desc:  'تواصل معي الآن — خلال 24 ساعة يكون معك تصور كامل. لا دفع مسبق.',
    cta_btn:   'واتساب',
    cta_ig:    'إنستغرام',

    // Privacy page
    privacy_legal_badge: 'قانوني',
    privacy_title: 'سياسة الخصوصية',
    privacy_updated: 'آخر تحديث: يناير 2025',
    privacy_intro: 'نحن في <strong>siteforge.ma</strong> نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذه السياسة توضح كيفية جمع واستخدام المعلومات التي تشاركها معنا.',
    privacy_s1_title: '١. المعلومات التي نجمعها',
    privacy_s1_text: 'عند تواصلك معنا أو طلب خدماتنا، قد نجمع المعلومات التالية:',
    privacy_s1_li1: 'الاسم الكامل ورقم الهاتف (لأغراض التواصل فقط)',
    privacy_s1_li2: 'عنوان البريد الإلكتروني إن أرسلته طوعاً',
    privacy_s1_li3: 'تفاصيل المشروع التي تشاركها معنا',
    privacy_s1_li4: 'بيانات التصفح الأساسية (زيارات الصفحة بدون تحديد هوية)',
    privacy_s2_title: '٢. كيف نستخدم معلوماتك',
    privacy_s2_li1: 'التواصل معك بخصوص طلبك أو مشروعك',
    privacy_s2_li2: 'تقديم الخدمات المتفق عليها',
    privacy_s2_li3: 'إرسال تحديثات تخص مشروعك فقط',
    privacy_s2_li4: 'تحسين جودة خدماتنا',
    privacy_s3_title: '٣. مشاركة المعلومات مع أطراف ثالثة',
    privacy_s3_text: 'نحن <strong>لا نبيع ولا نشارك</strong> معلوماتك الشخصية مع أي طرف ثالث لأغراض تجارية. المعلومات تُستخدم حصرياً لتقديم الخدمة المطلوبة.',
    privacy_highlight: '💡 جميع التواصل يتم عبر واتساب فقط — لا نخزن بياناتك على خوادم خارجية.',
    privacy_s4_title: '٤. ملفات الكوكيز',
    privacy_s4_text: 'مواقعنا لا تستخدم ملفات كوكيز تتبع أو أدوات تحليل متقدمة. الموقع ثابت (Static) ولا يجمع أي بيانات تلقائياً.',
    privacy_s5_title: '٥. حقوقك',
    privacy_s5_li1: 'يحق لك طلب حذف أي معلومات نملكها عنك',
    privacy_s5_li2: 'يحق لك الاطلاع على البيانات التي جمعناها',
    privacy_s5_li3: 'يحق لك طلب تصحيح أي معلومات غير دقيقة',
    privacy_s6_title: '٦. التواصل',
    privacy_s6_text: 'لأي استفسار حول سياسة الخصوصية، تواصل معنا مباشرة على واتساب: <strong dir="ltr">+212 680 916 653</strong>',
    privacy_back_link: '← العودة إلى الصفحة الرئيسية',

    // Terms page
    terms_legal_badge: 'قانوني',
    terms_title: 'شروط الاستخدام',
    terms_updated: 'آخر تحديث: يناير 2025',
    terms_intro: 'باستخدامك لخدمات <strong>siteforge.ma</strong> أو التواصل معنا، فأنت توافق على الشروط والأحكام التالية. يُرجى قراءتها بعناية قبل الطلب.',
    terms_s1_title: '١. طبيعة الخدمة',
    terms_s1_text: 'نقدم خدمات تصميم وتطوير مواقع الويب الثابتة (HTML/CSS/JS) المستضافة على GitHub Pages. الخدمة تشمل:',
    terms_s1_li1: 'تصميم وتطوير الموقع حسب المتفق عليه',
    terms_s1_li2: 'رفع الموقع على GitHub Pages',
    terms_s1_li3: 'دعم فني لمدة أسبوع بعد التسليم (للباقة الأساسية والاحترافية)',
    terms_s1_li4: 'دعم فني لمدة شهر (للباقة المتكاملة)',
    terms_s2_title: '٢. الدفع والأسعار',
    terms_s2_li1: 'لا يُطلب أي دفع مسبق — الدفع عند الاستلام والموافقة',
    terms_s2_li2: 'الأسعار المذكورة نهائية وتشمل ما هو مذكور في كل باقة',
    terms_s2_li3: 'أي خدمات إضافية خارج نطاق الباقة تُحتسب بشكل منفصل',
    terms_s2_li4: 'الدفع عبر الوسائل المتفق عليها بين الطرفين',
    terms_highlight: '✅ لا دفع مسبق — تدفع فقط عند استلامك الموقع ورضاك عنه.',
    terms_s3_title: '٣. حقوق الملكية الفكرية',
    terms_s3_li1: 'بعد الدفع الكامل، تنتقل ملكية الموقع بالكامل إليك',
    terms_s3_li2: 'يحق لنا إضافة المشروع لمعرض أعمالنا ما لم تطلب خلاف ذلك صراحةً',
    terms_s3_li3: 'المحتوى الذي تزودنا به (صور، نصوص) يبقى ملكك',
    terms_s3_li4: 'الكود المكتوب حصرياً لمشروعك يصبح ملكك بالكامل',
    terms_s4_title: '٤. التزامات العميل',
    terms_s4_li1: 'تزويدنا بالمحتوى (صور، نصوص، لوجو) في الوقت المناسب',
    terms_s4_li2: 'الرد على استفساراتنا خلال 24 ساعة لضمان سرعة التسليم',
    terms_s4_li3: 'عدم طلب تعديلات خارج نطاق المشروع المتفق عليه دون اتفاق مسبق',
    terms_s5_title: '٥. حدود المسؤولية',
    terms_s5_text: 'نحن غير مسؤولين عن:',
    terms_s5_li1: 'أي انقطاع في خدمة GitHub Pages (خارج عن إرادتنا)',
    terms_s5_li2: 'نتائج المبيعات أو التسويق — نوفر الموقع فقط',
    terms_s5_li3: 'محتوى يزودنا به العميل وقد ينتهك حقوق الغير',
    terms_warn: '⚠️ العميل مسؤول عن ضمان أن المحتوى الذي يزودنا به لا ينتهك أي حقوق ملكية فكرية.',
    terms_s6_title: '٦. إنهاء الخدمة',
    terms_s6_text: 'يحق لأي طرف إنهاء التعاقد قبل بدء العمل دون أي التزامات. في حال بدء العمل، يُتفق على شروط الإلغاء بشكل مباشر.',
    terms_s7_title: '٧. التواصل والنزاعات',
    terms_s7_text: 'في حال أي خلاف، يُفضّل حله ودياً عبر واتساب: <strong dir="ltr">+212 680 916 653</strong>',
    terms_back_link: '← العودة إلى الصفحة الرئيسية',

    // Refund page
    refund_legal_badge: 'قانوني',
    refund_title: 'سياسة الاسترجاع والاستبدال',
    refund_updated: 'آخر تحديث: يناير 2025',
    refund_green_box: '✅ مبدأنا الأساسي: <strong>لا دفع مسبق</strong> — تدفع فقط بعد استلامك الموقع ورضاك عنه بالكامل.',
    refund_s1_title: '١. ضمان الرضا',
    refund_s1_text: 'نؤمن بأن العميل يجب أن يكون راضياً 100% قبل أن يدفع أي مبلغ. لهذا نعمل بنظام:',
    refund_s1_li1: 'عرض أولي للتصميم قبل البدء في التطوير',
    refund_s1_li2: 'مراجعتان مجانيتان على الأقل خلال مرحلة التطوير',
    refund_s1_li3: 'التسليم النهائي فقط عند موافقتك الكاملة',
    refund_s1_li4: 'الدفع بعد الاستلام والموافقة',
    refund_s2_title: '٢. حالات الاسترجاع',
    refund_scenario1_title: '✅ استرجاع كامل — قبل بدء العمل',
    refund_scenario1_desc: 'إذا قررت إلغاء الطلب قبل أن نبدأ أي عمل، لا يوجد أي التزام مالي من طرفك.',
    refund_scenario2_title: '✅ استرجاع كامل — الموقع لا يعمل تقنياً',
    refund_scenario2_desc: 'إذا سلّمنا موقعاً يحتوي على أخطاء تقنية جوهرية ولم نصلحها خلال 48 ساعة من الإبلاغ، يحق لك استرجاع المبلغ كاملاً.',
    refund_scenario3_title: '🔄 تعديل مجاني — المواصفات غير مطابقة',
    refund_scenario3_desc: 'إذا كان الموقع المسلَّم لا يطابق المواصفات المتفق عليها كتابةً، نلتزم بالتعديل مجاناً حتى المطابقة الكاملة.',
    refund_scenario4_title: '⚠️ لا استرجاع — تغيير الرأي بعد الموافقة',
    refund_scenario4_desc: 'إذا وافقت على الموقع ودفعت، ثم قررت تغيير المشروع بالكامل أو إلغاءه لأسباب شخصية، لا يمكن استرجاع المبلغ. التعديلات الإضافية تُحتسب بشكل منفصل.',
    refund_s3_title: '٣. مدة معالجة الاسترجاع',
    refund_s3_text: 'في الحالات المؤهلة للاسترجاع، يتم معالجة الطلب خلال <strong>3-5 أيام عمل</strong> عبر نفس وسيلة الدفع المستخدمة.',
    refund_s4_title: '٤. كيف تطلب الاسترجاع؟',
    refund_s4_text: 'تواصل معنا مباشرة على واتساب مع ذكر سبب الطلب: <strong dir="ltr">+212 680 916 653</strong>',
    refund_highlight: '💬 نحن نقدّر ثقتك — وهدفنا دائماً أن تخرج من التجربة راضياً.',
    refund_back_link: '← العودة إلى الصفحة الرئيسية',

    // FAQ page
    faq_help_badge: 'مساعدة',
    faq_title: 'الأسئلة الشائعة (FAQ)',
    faq_updated: 'آخر تحديث: مارس 2025',
    faq_q1: 'س: هل يمكن تعديل الموقع بعد التسليم؟',
    faq_a1: 'ج: نعم، يمكنك طلب تعديلات بسيطة مجاناً خلال أسبوع من التسليم. التعديلات الكبيرة يتم تقديرها بشكل منفصل.',
    faq_q2: 'س: هل يشمل الموقع دومين واستضافة؟',
    faq_a2: 'ج: الدومين والاستضافة ليسا مشمولين في الباقة الأساسية، لكن يمكن توفيرهما مقابل تكلفة إضافية إذا رغبت.',
    faq_q3: 'س: كم تستغرق عملية التسليم؟',
    faq_a3: 'ج: عادةً يتم تسليم الموقع خلال 3–7 أيام حسب حجم المشروع والخطة المختارة.',
    faq_q4: 'س: هل أعطيني ضمان على الموقع؟',
    faq_a4: 'ج: نعم، بعد التسليم أقدّم دعم فني لمدة أسبوع لتصحيح أي مشكلة تقنية أو تعديل بسيط.',
    faq_q5: 'س: كيف يمكنني التواصل معك؟',
    faq_a5: 'ج: يمكن التواصل عبر WhatsApp مباشرة من زر التواصل في الموقع أو عبر البريد الإلكتروني.',
    faq_q6: 'س: هل يمكن إضافة صفحات جديدة لاحقاً؟',
    faq_a6: 'ج: نعم، يمكن إضافة صفحات جديدة لاحقاً مقابل تكلفة إضافية حسب طبيعة المشروع.',
    faq_back_link: '← العودة إلى الصفحة الرئيسية',
  },

  en: {
    // Nav & footer common
    nav_projects:  'My Work',
    nav_services:  'Services',
    nav_pricing:   'Pricing',
    contact:       'Contact',
    footer_tagline: 'Web Developer',
    privacy:       'Privacy Policy',
    terms:         'Terms of Use',
    refund:        'Refund Policy',
    faq:           'FAQ',
    copyright:     '© 2025 siteforge.ma · All rights reserved',
    float_chat:    'Contact me',

    // Hero & general
    hero_tag:      'Web Developer',
    hero_line1:    'A website built just for you,',
    hero_line2:    'that reflects your brand & converts visitors',
    hero_sub:      'Pro design · Fast delivery · Real results',
    hero_cta:      'Start your project →',
    hero_work:     'View work',
    stat_delivery: 'Fast delivery',
    stat_support:  'Post-launch support',
    stat_quality:  'Quality guarantee',

    // Why me
    why_label:     'Why me',
    why_title:     'Why choose me?',
    why1: 'Fast communication',
    why2: 'Professional design',
    why3: 'Fast delivery',
    why4: 'Mobile friendly',
    why5: 'Maintenance & support',
    why6: 'Results that serve your project',
    why1_desc: 'I respond quickly and stay with you every step to ensure everything is clear and easy.',
    why2_desc: 'I design an elegant and organized website that reflects your project beautifully and makes a strong impression.',
    why3_desc: 'I start work quickly and ensure delivery as soon as possible without compromising quality.',
    why4_desc: 'Your site looks great on mobile, tablet, and desktop, giving every visitor a comfortable experience.',
    why5_desc: 'I remain available after delivery to help with simple adjustments and fix any issues.',
    why6_desc: 'The goal is not just a beautiful site, but one that helps you showcase your services clearly and attract clients.',

    // Projects
    projects_label: 'My Work',
    projects_title: 'Check out our recent projects',
    projects_desc:  'Every site we built had a clear goal: modern design, fast load, and a user experience that builds trust from the first visit.',
    project1_tag: 'Store',       project1_number: '01 — Books',   project1_title: 'Al-Nour Bookstore',     project1_desc: 'An online bookstore for easy book selection and ordering.',
    project2_tag: 'Store',       project2_number: '02 — Perfume', project2_title: 'Perfume Store',          project2_desc: 'An elegant perfume store with a smooth shopping experience.',
    project3_tag: 'Landing Page',project3_number: '03 — Marketing',project3_title:'Digital Marketing Course',project3_desc:'A professional site to showcase and sell a marketing course.',
    project4_tag: 'Restaurant',  project4_number: '04 — Restaurant',project4_title:'Atlas Restaurant',      project4_desc: 'A restaurant site displaying the menu in an attractive way.',
    project5_tag: 'Business',    project5_number: '05 — Travel',  project5_title: 'Safari Travel Agency',   project5_desc: 'A travel agency site showcasing trips and offers clearly.',
    view: 'View →',

    // Services
    services_label: 'Services',
    services_title: 'What I offer',
    services_desc:  'Everything you need to turn your idea into a selling website.',
    service1: 'E-commerce Store',     service1_desc: 'Cart, orders and WhatsApp integration.',
    service2: 'Landing Page',         service2_desc: 'Convert maximum visitors into buyers.',
    service3: 'Business / Restaurant',service3_desc: 'Professional presentation that builds trust.',
    service4: '100% Responsive',      service4_desc: 'Perfect on mobile, desktop and tablet.',
    service5: 'Fast Delivery',        service5_desc: 'Your site is ready within 48 hours.',
    service6: 'Quality Guaranteed',   service6_desc: 'Full support after delivery.',

    // Pricing
    pricing_label: 'Pricing',
    pricing_title: 'Special limited-time offers',
    pricing_desc:  'Grab the deals now',
    basic_name:  'Basic',
    basic_note:  'No domain — free GitHub link',
    basic_feat1: 'Single page (store or landing page)',
    basic_feat2: 'Professional responsive design',
    basic_feat3: 'WhatsApp integration',
    basic_feat4: 'Delivery within 48 hours',
    basic_feat5: '1 week free support',
    basic_feat6: 'Custom domain',
    basic_feat7: 'Multiple pages',
    order_now:    'Order now',
    most_popular: 'Most popular',
    premium_name:  'Premium',
    premium_note:  'With .com domain for 1 year ✦',
    premium_feat1: 'Up to 4 pages',
    premium_feat2: 'Professional responsive design',
    premium_feat3: 'WhatsApp integration',
    premium_feat4: 'Delivery within 5 days',
    premium_feat5: '1 month free support',
    premium_feat6: '.com domain for 1 year',
    premium_feat7: 'Custom contact form',
    start_now:    'Start now ✦',
    currency:     'MAD',
    extras_title: 'Extra services',
    extra1: 'Simple edit',        extra1_price: '50 MAD',
    extra2: 'Add a page',         extra2_price: '100 MAD',
    extra3: '.ma Moroccan domain',extra3_price: '120 MAD/yr',
    extra4: 'Monthly maintenance',extra4_price: '80 MAD/mo',

    // CTA
    cta_title: 'Ready to start? 🚀',
    cta_desc:  'Message me on WhatsApp — get a full proposal within 24h. No upfront payment.',
    cta_btn:   'WhatsApp',
    cta_ig:    'Instagram',

    // Privacy page
    privacy_legal_badge: 'Legal',
    privacy_title: 'Privacy Policy',
    privacy_updated: 'Last updated: January 2025',
    privacy_intro: 'At <strong>siteforge.ma</strong>, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect and use information you share with us.',
    privacy_s1_title: '1. Information We Collect',
    privacy_s1_text: 'When you contact us or request our services, we may collect the following information:',
    privacy_s1_li1: 'Full name and phone number (for communication purposes only)',
    privacy_s1_li2: 'Email address if voluntarily provided',
    privacy_s1_li3: 'Project details you share with us',
    privacy_s1_li4: 'Basic browsing data (page visits without identification)',
    privacy_s2_title: '2. How We Use Your Information',
    privacy_s2_li1: 'Communicate with you regarding your request or project',
    privacy_s2_li2: 'Provide the agreed services',
    privacy_s2_li3: 'Send updates related only to your project',
    privacy_s2_li4: 'Improve the quality of our services',
    privacy_s3_title: '3. Sharing Information with Third Parties',
    privacy_s3_text: 'We <strong>do not sell or share</strong> your personal information with any third party for commercial purposes. Information is used solely to provide the requested service.',
    privacy_highlight: '💡 All communication is via WhatsApp only — we do not store your data on external servers.',
    privacy_s4_title: '4. Cookies',
    privacy_s4_text: 'Our websites do not use tracking cookies or advanced analytics tools. The site is static and does not automatically collect any data.',
    privacy_s5_title: '5. Your Rights',
    privacy_s5_li1: 'You have the right to request deletion of any information we hold about you',
    privacy_s5_li2: 'You have the right to access the data we have collected',
    privacy_s5_li3: 'You have the right to request correction of any inaccurate information',
    privacy_s6_title: '6. Contact',
    privacy_s6_text: 'For any questions regarding this privacy policy, contact us directly on WhatsApp: <strong dir="ltr">+212 680 916 653</strong>',
    privacy_back_link: '← Back to home',

    // Terms page
    terms_legal_badge: 'Legal',
    terms_title: 'Terms of Use',
    terms_updated: 'Last updated: January 2025',
    terms_intro: 'By using <strong>siteforge.ma</strong> services or contacting us, you agree to the following terms and conditions. Please read them carefully before ordering.',
    terms_s1_title: '1. Nature of Service',
    terms_s1_text: 'We provide design and development services for static websites (HTML/CSS/JS) hosted on GitHub Pages. The service includes:',
    terms_s1_li1: 'Design and development of the site as agreed',
    terms_s1_li2: 'Uploading the site to GitHub Pages',
    terms_s1_li3: 'Technical support for one week after delivery (Basic and Professional packages)',
    terms_s1_li4: 'Technical support for one month (Premium package)',
    terms_s2_title: '2. Payment and Pricing',
    terms_s2_li1: 'No upfront payment is required — payment upon delivery and approval',
    terms_s2_li2: 'Listed prices are final and include what is stated in each package',
    terms_s2_li3: 'Any additional services outside the package are charged separately',
    terms_s2_li4: 'Payment via agreed methods between the parties',
    terms_highlight: '✅ No upfront payment — you only pay after receiving and approving the site.',
    terms_s3_title: '3. Intellectual Property Rights',
    terms_s3_li1: 'After full payment, full ownership of the site transfers to you',
    terms_s3_li2: 'We reserve the right to include the project in our portfolio unless you explicitly request otherwise',
    terms_s3_li3: 'Content you provide (images, text) remains your property',
    terms_s3_li4: 'Code written exclusively for your project becomes your property',
    terms_s4_title: '4. Client Obligations',
    terms_s4_li1: 'Provide us with content (images, text, logo) in a timely manner',
    terms_s4_li2: 'Respond to our inquiries within 24 hours to ensure fast delivery',
    terms_s4_li3: 'Do not request changes outside the agreed scope without prior agreement',
    terms_s5_title: '5. Limitation of Liability',
    terms_s5_text: 'We are not responsible for:',
    terms_s5_li1: 'Any interruption in GitHub Pages service (beyond our control)',
    terms_s5_li2: 'Sales or marketing results — we only provide the site',
    terms_s5_li3: 'Content provided by the client that may infringe on third-party rights',
    terms_warn: '⚠️ The client is responsible for ensuring that the content provided does not infringe any intellectual property rights.',
    terms_s6_title: '6. Termination of Service',
    terms_s6_text: 'Either party may terminate the agreement before work begins without any obligations. If work has started, cancellation terms are agreed upon directly.',
    terms_s7_title: '7. Communication and Disputes',
    terms_s7_text: 'In case of any dispute, it is preferable to resolve it amicably via WhatsApp: <strong dir="ltr">+212 680 916 653</strong>',
    terms_back_link: '← Back to home',

    // Refund page
    refund_legal_badge: 'Legal',
    refund_title: 'Refund and Replacement Policy',
    refund_updated: 'Last updated: January 2025',
    refund_green_box: '✅ Our core principle: <strong>No upfront payment</strong> — you only pay after receiving and approving the site.',
    refund_s1_title: '1. Satisfaction Guarantee',
    refund_s1_text: 'We believe the client should be 100% satisfied before paying any amount. Therefore, we operate on this system:',
    refund_s1_li1: 'Initial design preview before development begins',
    refund_s1_li2: 'At least two free revisions during the development phase',
    refund_s1_li3: 'Final delivery only upon your full approval',
    refund_s1_li4: 'Payment after delivery and approval',
    refund_s2_title: '2. Refund Scenarios',
    refund_scenario1_title: '✅ Full refund — before work starts',
    refund_scenario1_desc: 'If you cancel before any work begins, there is no financial obligation from your side.',
    refund_scenario2_title: '✅ Full refund — site does not work technically',
    refund_scenario2_desc: 'If we deliver a site with critical technical errors and fail to fix them within 48 hours of reporting, you are entitled to a full refund.',
    refund_scenario3_title: '🔄 Free modification — specifications not met',
    refund_scenario3_desc: 'If the delivered site does not match the agreed specifications in writing, we commit to free modifications until full compliance.',
    refund_scenario4_title: '⚠️ No refund — change of mind after approval',
    refund_scenario4_desc: 'If you approve and pay, then decide to completely change or cancel the project for personal reasons, no refund is possible. Additional modifications are charged separately.',
    refund_s3_title: '3. Refund Processing Time',
    refund_s3_text: 'In eligible cases, refunds are processed within <strong>3-5 business days</strong> via the same payment method used.',
    refund_s4_title: '4. How to Request a Refund',
    refund_s4_text: 'Contact us directly on WhatsApp stating the reason: <strong dir="ltr">+212 680 916 653</strong>',
    refund_highlight: '💬 We value your trust — our goal is always for you to leave the experience satisfied.',
    refund_back_link: '← Back to home',

    // FAQ page
    faq_help_badge: 'Help',
    faq_title: 'Frequently Asked Questions (FAQ)',
    faq_updated: 'Last updated: March 2025',
    faq_q1: 'Q: Can the site be modified after delivery?',
    faq_a1: 'A: Yes, you can request simple modifications for free within one week of delivery. Major changes are quoted separately.',
    faq_q2: 'Q: Does the package include a domain and hosting?',
    faq_a2: 'A: Domain and hosting are not included in the basic package, but can be provided for an additional cost if desired.',
    faq_q3: 'Q: How long does delivery take?',
    faq_a3: 'A: Typically delivery takes 3–7 days depending on project size and chosen plan.',
    faq_q4: 'Q: Do you provide a warranty?',
    faq_a4: 'A: Yes, after delivery I provide technical support for one week to fix any technical issues or make minor adjustments.',
    faq_q5: 'Q: How can I contact you?',
    faq_a5: 'A: You can contact me via WhatsApp directly from the contact button on the site or by email.',
    faq_q6: 'Q: Can I add more pages later?',
    faq_a6: 'A: Yes, additional pages can be added later for an extra cost depending on the project scope.',
    faq_back_link: '← Back to home',
  },

  fr: {
    // Nav & footer common
    nav_projects:  'Mes Travaux',
    nav_services:  'Services',
    nav_pricing:   'Tarifs',
    contact:       'Contact',
    footer_tagline: 'Développeur Web',
    privacy:       'Politique de confidentialité',
    terms:         "Conditions d'utilisation",
    refund:        'Politique de remboursement',
    faq:           'FAQ',
    copyright:     '© 2025 siteforge.ma · Tous droits réservés',
    float_chat:    'Me contacter',

    // Hero & general
    hero_tag:      'Développeur Web',
    hero_line1:    'Un site conçu spécialement pour vous,',
    hero_line2:    'qui reflète votre marque et attire des clients',
    hero_sub:      'Design pro · Livraison rapide · Résultats réels',
    hero_cta:      'Démarrez votre projet →',
    hero_work:     'Voir les travaux',
    stat_delivery: 'Livraison rapide',
    stat_support:  'Support après livraison',
    stat_quality:  'Qualité garantie',

    // Why me
    why_label:     'Pourquoi moi',
    why_title:     'Pourquoi me choisir ?',
    why1: 'Communication rapide',
    why2: 'Design professionnel',
    why3: 'Livraison rapide',
    why4: 'Adapté au mobile',
    why5: 'Maintenance et support',
    why6: 'Des résultats qui servent votre projet',
    why1_desc: 'Je réponds rapidement et je reste à vos côtés à chaque étape pour que tout soit clair et simple.',
    why2_desc: 'Je conçois un site élégant et organisé qui reflète votre projet magnifiquement et fait forte impression.',
    why3_desc: 'Je commence rapidement et assure une livraison dans les meilleurs délais sans compromettre la qualité.',
    why4_desc: 'Votre site s\'affiche parfaitement sur mobile, tablette et ordinateur, offrant une expérience agréable.',
    why5_desc: 'Je reste disponible après la livraison pour aider avec des ajustements simples et résoudre tout problème.',
    why6_desc: 'Le but n\'est pas seulement un beau site, mais un site qui vous aide à présenter clairement vos services et à attirer des clients.',

    // Projects
    projects_label: 'Mes Travaux',
    projects_title: 'Découvrez nos projets récents',
    projects_desc:  'Chaque site avait un objectif clair : design moderne, chargement rapide et une expérience utilisateur qui inspire confiance.',
    project1_tag: 'Boutique',      project1_number: '01 — Livres',   project1_title: 'Librairie Al-Nour',      project1_desc: 'Boutique de livres en ligne avec livraison.',
    project2_tag: 'Boutique',      project2_number: '02 — Parfums',  project2_title: 'Boutique de Parfums',     project2_desc: 'Boutique de parfums élégante avec une expérience fluide.',
    project3_tag: 'Landing Page',  project3_number: '03 — Marketing',project3_title: 'Cours Marketing Digital', project3_desc: 'Site professionnel pour présenter et vendre une formation.',
    project4_tag: 'Restaurant',    project4_number: '04 — Restaurant',project4_title:'Restaurant Atlas',         project4_desc: 'Site restaurant affichant le menu de façon attrayante.',
    project5_tag: 'Entreprise',    project5_number: '05 — Voyages',  project5_title: 'Agence Safari',           project5_desc: 'Site agence de voyage présentant les offres clairement.',
    view: 'Voir →',

    // Services
    services_label: 'Services',
    services_title: 'Ce que je propose',
    services_desc:  'Tout ce dont vous avez besoin pour transformer votre idée en site web qui vend.',
    service1: 'Boutique en ligne',      service1_desc: 'Panier, commandes et intégration WhatsApp.',
    service2: 'Page de vente',          service2_desc: 'Convertir un maximum de visiteurs en acheteurs.',
    service3: 'Site Entreprise / Resto',service3_desc: 'Présentation pro qui inspire confiance.',
    service4: '100% Responsive',        service4_desc: 'Parfait sur mobile, desktop et tablette.',
    service5: 'Livraison rapide',       service5_desc: 'Votre site est prêt en 48 heures.',
    service6: 'Qualité garantie',       service6_desc: 'Support complet après la livraison.',

    // Pricing
    pricing_label: 'Tarifs',
    pricing_title: 'Offres spéciales à durée limitée',
    pricing_desc:  'Profitez des réductions maintenant',
    basic_name:  'Essentiel',
    basic_note:  'Sans domaine — lien GitHub gratuit',
    basic_feat1: 'Une page (boutique ou landing page)',
    basic_feat2: 'Design responsive professionnel',
    basic_feat3: 'Intégration WhatsApp',
    basic_feat4: 'Livraison en 48 heures',
    basic_feat5: '1 semaine support gratuit',
    basic_feat6: 'Domaine personnalisé',
    basic_feat7: 'Pages multiples',
    order_now:    'Commander',
    most_popular: 'Le plus demandé',
    premium_name:  'Premium',
    premium_note:  'Avec domaine .com pour 1 an ✦',
    premium_feat1: "Jusqu'à 4 pages",
    premium_feat2: 'Design responsive professionnel',
    premium_feat3: 'Intégration WhatsApp',
    premium_feat4: 'Livraison en 5 jours',
    premium_feat5: '1 mois support gratuit',
    premium_feat6: 'Domaine .com pour 1 an',
    premium_feat7: 'Formulaire de contact personnalisé',
    start_now:    'Commencer ✦',
    currency:     'MAD',
    extras_title: 'Services supplémentaires',
    extra1: 'Modification simple',    extra1_price: '50 MAD',
    extra2: 'Ajout de page',          extra2_price: '100 MAD',
    extra3: 'Domaine .ma marocain',   extra3_price: '120 MAD/an',
    extra4: 'Maintenance mensuelle',  extra4_price: '80 MAD/mois',

    // CTA
    cta_title: 'Prêt à démarrer ? 🚀',
    cta_desc:  'Contactez-moi sur WhatsApp — obtenez une proposition complète en 24h. Pas de paiement initial.',
    cta_btn:   'WhatsApp',
    cta_ig:    'Instagram',

    // Privacy page
    privacy_legal_badge: 'Juridique',
    privacy_title: 'Politique de confidentialité',
    privacy_updated: 'Dernière mise à jour : janvier 2025',
    privacy_intro: 'Chez <strong>siteforge.ma</strong>, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique explique comment nous collectons et utilisons les informations que vous partagez avec nous.',
    privacy_s1_title: '1. Informations que nous collectons',
    privacy_s1_text: 'Lorsque vous nous contactez ou demandez nos services, nous pouvons collecter les informations suivantes :',
    privacy_s1_li1: 'Nom complet et numéro de téléphone (à des fins de communication uniquement)',
    privacy_s1_li2: 'Adresse e-mail si fournie volontairement',
    privacy_s1_li3: 'Détails du projet que vous partagez avec nous',
    privacy_s1_li4: 'Données de navigation de base (visites de pages sans identification)',
    privacy_s2_title: '2. Comment nous utilisons vos informations',
    privacy_s2_li1: 'Communiquer avec vous concernant votre demande ou votre projet',
    privacy_s2_li2: 'Fournir les services convenus',
    privacy_s2_li3: 'Envoyer des mises à jour liées uniquement à votre projet',
    privacy_s2_li4: 'Améliorer la qualité de nos services',
    privacy_s3_title: '3. Partage d\'informations avec des tiers',
    privacy_s3_text: 'Nous <strong>ne vendons ni ne partageons</strong> vos informations personnelles avec des tiers à des fins commerciales. Les informations sont utilisées uniquement pour fournir le service demandé.',
    privacy_highlight: '💡 Toute communication se fait uniquement par WhatsApp — nous ne stockons pas vos données sur des serveurs externes.',
    privacy_s4_title: '4. Cookies',
    privacy_s4_text: 'Nos sites n\'utilisent pas de cookies de suivi ni d\'outils d\'analyse avancés. Le site est statique et ne collecte aucune donnée automatiquement.',
    privacy_s5_title: '5. Vos droits',
    privacy_s5_li1: 'Vous avez le droit de demander la suppression de toute information que nous détenons sur vous',
    privacy_s5_li2: 'Vous avez le droit d\'accéder aux données que nous avons collectées',
    privacy_s5_li3: 'Vous avez le droit de demander la correction de toute information inexacte',
    privacy_s6_title: '6. Contact',
    privacy_s6_text: 'Pour toute question concernant cette politique de confidentialité, contactez-nous directement sur WhatsApp : <strong dir="ltr">+212 680 916 653</strong>',
    privacy_back_link: '← Retour à l\'accueil',

    // Terms page
    terms_legal_badge: 'Juridique',
    terms_title: "Conditions d'utilisation",
    terms_updated: 'Dernière mise à jour : janvier 2025',
    terms_intro: "En utilisant les services de <strong>siteforge.ma</strong> ou en nous contactant, vous acceptez les conditions générales suivantes. Veuillez les lire attentivement avant de commander.",
    terms_s1_title: '1. Nature du service',
    terms_s1_text: 'Nous fournissons des services de conception et de développement de sites web statiques (HTML/CSS/JS) hébergés sur GitHub Pages. Le service comprend :',
    terms_s1_li1: 'Conception et développement du site selon accord',
    terms_s1_li2: 'Mise en ligne du site sur GitHub Pages',
    terms_s1_li3: 'Support technique pendant une semaine après la livraison (formules Essentiel et Professionnel)',
    terms_s1_li4: 'Support technique pendant un mois (formule Premium)',
    terms_s2_title: '2. Paiement et tarifs',
    terms_s2_li1: 'Aucun paiement initial n\'est demandé — paiement à la livraison et approbation',
    terms_s2_li2: 'Les prix indiqués sont définitifs et incluent ce qui est mentionné dans chaque formule',
    terms_s2_li3: 'Tout service supplémentaire hors forfait est facturé séparément',
    terms_s2_li4: 'Paiement via les moyens convenus entre les parties',
    terms_highlight: '✅ Aucun paiement initial — vous ne payez qu\'après réception et approbation du site.',
    terms_s3_title: '3. Droits de propriété intellectuelle',
    terms_s3_li1: 'Après paiement intégral, la pleine propriété du site vous est transférée',
    terms_s3_li2: 'Nous nous réservons le droit d\'inclure le projet dans notre portfolio sauf demande contraire explicite',
    terms_s3_li3: 'Le contenu que vous fournissez (images, textes) reste votre propriété',
    terms_s3_li4: 'Le code écrit exclusivement pour votre projet devient votre propriété',
    terms_s4_title: '4. Obligations du client',
    terms_s4_li1: 'Nous fournir le contenu (images, textes, logo) en temps utile',
    terms_s4_li2: 'Répondre à nos demandes dans les 24 heures pour garantir une livraison rapide',
    terms_s4_li3: 'Ne pas demander de modifications hors du cadre convenu sans accord préalable',
    terms_s5_title: '5. Limitation de responsabilité',
    terms_s5_text: 'Nous ne sommes pas responsables de :',
    terms_s5_li1: 'Toute interruption du service GitHub Pages (hors de notre contrôle)',
    terms_s5_li2: 'Résultats de ventes ou de marketing — nous fournissons uniquement le site',
    terms_s5_li3: 'Contenu fourni par le client pouvant enfreindre les droits de tiers',
    terms_warn: '⚠️ Le client est responsable de s\'assurer que le contenu fourni n\'enfreint aucun droit de propriété intellectuelle.',
    terms_s6_title: '6. Résiliation du service',
    terms_s6_text: 'Chaque partie peut résilier le contrat avant le début des travaux sans aucune obligation. Si les travaux ont commencé, les conditions d\'annulation sont convenues directement.',
    terms_s7_title: '7. Communication et litiges',
    terms_s7_text: 'En cas de litige, il est préférable de le résoudre à l\'amiable via WhatsApp : <strong dir="ltr">+212 680 916 653</strong>',
    terms_back_link: '← Retour à l\'accueil',

    // Refund page
    refund_legal_badge: 'Juridique',
    refund_title: 'Politique de remboursement et d\'échange',
    refund_updated: 'Dernière mise à jour : janvier 2025',
    refund_green_box: '✅ Notre principe fondamental : <strong>Aucun paiement initial</strong> — vous ne payez qu\'après réception et approbation du site.',
    refund_s1_title: '1. Garantie de satisfaction',
    refund_s1_text: 'Nous croyons que le client doit être satisfait à 100% avant de payer. Pour cela, nous fonctionnons ainsi :',
    refund_s1_li1: 'Aperçu initial du design avant le début du développement',
    refund_s1_li2: 'Au moins deux révisions gratuites pendant la phase de développement',
    refund_s1_li3: 'Livraison finale uniquement après votre approbation complète',
    refund_s1_li4: 'Paiement après la livraison et l\'approbation',
    refund_s2_title: '2. Scénarios de remboursement',
    refund_scenario1_title: '✅ Remboursement intégral — avant le début du travail',
    refund_scenario1_desc: 'Si vous annulez avant que nous commencions tout travail, il n\'y a aucune obligation financière de votre part.',
    refund_scenario2_title: '✅ Remboursement intégral — le site ne fonctionne pas techniquement',
    refund_scenario2_desc: 'Si nous livrons un site contenant des erreurs techniques critiques et ne les corrigeons pas dans les 48 heures suivant le signalement, vous avez droit à un remboursement intégral.',
    refund_scenario3_title: '🔄 Modification gratuite — spécifications non respectées',
    refund_scenario3_desc: 'Si le site livré ne correspond pas aux spécifications convenues par écrit, nous nous engageons à effectuer des modifications gratuites jusqu\'à conformité totale.',
    refund_scenario4_title: '⚠️ Pas de remboursement — changement d\'avis après approbation',
    refund_scenario4_desc: 'Si vous approuvez et payez, puis décidez de modifier complètement ou d\'annuler le projet pour des raisons personnelles, aucun remboursement n\'est possible. Les modifications supplémentaires sont facturées séparément.',
    refund_s3_title: '3. Délai de traitement du remboursement',
    refund_s3_text: 'Dans les cas éligibles, les remboursements sont traités dans un délai de <strong>3 à 5 jours ouvrables</strong> via le même mode de paiement utilisé.',
    refund_s4_title: '4. Comment demander un remboursement',
    refund_s4_text: 'Contactez-nous directement sur WhatsApp en mentionnant la raison : <strong dir="ltr">+212 680 916 653</strong>',
    refund_highlight: '💬 Nous apprécions votre confiance — notre objectif est toujours que vous sortiez satisfait de l\'expérience.',
    refund_back_link: '← Retour à l\'accueil',

    // FAQ page
    faq_help_badge: 'Aide',
    faq_title: 'Questions fréquentes (FAQ)',
    faq_updated: 'Dernière mise à jour : mars 2025',
    faq_q1: 'Q: Peut-on modifier le site après la livraison ?',
    faq_a1: 'R: Oui, vous pouvez demander des modifications simples gratuitement pendant une semaine après la livraison. Les modifications majeures sont facturées séparément.',
    faq_q2: 'Q: Le forfait inclut-il un domaine et un hébergement ?',
    faq_a2: 'R: Le domaine et l\'hébergement ne sont pas inclus dans le forfait de base, mais peuvent être fournis moyennant un coût supplémentaire.',
    faq_q3: 'Q: Combien de temps prend la livraison ?',
    faq_a3: 'R: Généralement la livraison prend 3 à 7 jours selon la taille du projet et le forfait choisi.',
    faq_q4: 'Q: Offrez-vous une garantie ?',
    faq_a4: 'R: Oui, après la livraison je fournis un support technique d\'une semaine pour corriger tout problème technique ou effectuer des ajustements mineurs.',
    faq_q5: 'Q: Comment puis-je vous contacter ?',
    faq_a5: 'R: Vous pouvez me contacter via WhatsApp directement depuis le bouton de contact sur le site ou par e-mail.',
    faq_q6: 'Q: Puis-je ajouter des pages supplémentaires plus tard ?',
    faq_a6: 'R: Oui, des pages supplémentaires peuvent être ajoutées ultérieurement moyennant un coût supplémentaire selon la nature du projet.',
    faq_back_link: '← Retour à l\'accueil',
  }
};

/* ===== 3. النظام اللغوي ===== */
let currentLang = localStorage.getItem('lang') || 'ar';

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.body.dir = dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = t[key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.querySelectorAll('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(currentLang);

/* ===== 4. Nav — يصبح مرئياً عند الـ scroll ===== */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ===== 5. Scroll Reveal ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

/* ===== 6. Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ===== 7. أنيميشن دخول بطاقات الخدمات (stagger خفيف) ===== */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.srv-card, .why-card, .pc');
      cards.forEach((card, i) => {
        card.style.animationDelay = `${i * 0.07}s`;
        card.classList.add('card-visible');
      });
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.srv-grid, .why-grid, .pg').forEach(grid => {
  cardObserver.observe(grid);
});

/* ===== 8. تأكيد واتساب ===== */
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const message = currentLang === 'ar' ? 'هل أنت متأكد من رغبتك في التواصل عبر واتساب؟' :
                    currentLang === 'fr' ? 'Êtes-vous sûr de vouloir contacter via WhatsApp ?' :
                    'Are you sure you want to contact via WhatsApp?';
    if (!confirm(message)) {
      e.preventDefault();
    }
  });
});

/* ===== 9. تمييز الرابط النشط في الفوتر ===== */
function highlightActiveFooterLink() {
  const currentFile = window.location.pathname.split('/').pop();
  if (!currentFile) return;
  document.querySelectorAll('.fpol .flink').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
highlightActiveFooterLink();

/* ===== 10. تفعيل طيّ بطاقات "لماذا" ===== */
document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // منع التنفيذ إذا تم النقر على رابط داخل البطاقة (ليس موجوداً)
    this.classList.toggle('open');
  });
});

/* ===== 11. تفعيل طيّ بطاقات "لماذا" ===== */
document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('click', function(e) {
    this.classList.toggle('open');
  });
});