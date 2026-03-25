/* ==========================================
   siteforge.ma — script.js
   مُصلَح ومُنظَّم بالكامل
========================================== */

/* ===== 1. نجوم الهيرو ===== */
(function () {
  var container = document.getElementById('heroStars');
  if (!container) return;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 55; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    var size  = Math.random() * 2.5 + 0.5;
    var op    = Math.random() * 0.35 + 0.08;
    var delay = Math.random() * 6;
    var dur   = Math.random() * 3 + 2;
    /* إصلاح: شرطتان -- بدل شرطة واحدة – لـ CSS custom properties */
    star.style.cssText =
      'width:' + size + 'px;height:' + size + 'px;' +
      'top:' + (Math.random() * 100) + '%;left:' + (Math.random() * 100) + '%;' +
      '--d:' + dur + 's;--op:' + op + ';animation-delay:' + delay + 's;';
    fragment.appendChild(star);
  }
  container.appendChild(fragment);
})();

/* ===== 2. الترجمات (AR / EN / FR) ===== */
var translations = {
  ar: {
    nav_projects:  'أعمالي',
    nav_services:  'الخدمات',
    nav_pricing:   'الأسعار',
    contact:       'تواصل',
    footer_tagline: 'مطور مواقع',
    privacy:       'سياسة الخصوصية',
    terms:         'شروط الاستخدام',
    refund:        'سياسة الاسترداد',
    faq:           'الأسئلة الشائعة',
    copyright:     '© 2026 siteforge.ma · جميع الحقوق محفوظة',
    float_chat:    'تواصل معي',
    hero_tag:      'مطور مواقع',
    hero_line1:    'موقع مصمم خصيصاً لك،',
    hero_line2:    'يعكس مشروعك ويجذب العملاء',
    hero_sub:      'تصميم احترافي · تسليم سريع · نتائج حقيقية',
    hero_cta:      'ابدأ مشروعك ←',
    hero_work:     'مشاهدة الأعمال',
    stat_delivery: 'تسليم سريع',
    stat_support:  'دعم بعد التسليم',
    stat_quality:  'ضمان الجودة',
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
    projects_label: 'أعمالي',
    projects_title: 'شاهد نماذج من المواقع التي صممناها',
    projects_desc:  'كل موقع قمنا بتصميمه كان له هدف واضح: تصميم عصري، سرعة في التصفح، وتجربة مستخدم تجعل الزائر يثق في المشروع من أول زيارة.',
    project1_tag: 'متجر',      project1_number: '01 — مكتبة',     project1_title: 'مكتبة النور',     project1_desc: 'موقع مكتبة إلكترونية مخصص لبيع الكتب أونلاين.',
    project2_tag: 'متجر',      project2_number: '02 — عطور',      project2_title: 'متجر العطور',      project2_desc: 'متجر عطور بتصميم أنيق يبرز جمالية المنتجات.',
    project3_tag: 'صفحة بيع',  project3_number: '03 — تسويق',     project3_title: 'دورة تسويق رقمي', project3_desc: 'موقع احترافي لعرض دورة في التسويق الرقمي.',
    project4_tag: 'مطعم',      project4_number: '04 — مطعم',      project4_title: 'مطعم أطلس',        project4_desc: 'موقع مطعم يعرض المنيو والصور بطريقة جذابة.',
    project5_tag: 'موقع شركة', project5_number: '05 — وكالة سفر', project5_title: 'سفاري',            project5_desc: 'موقع وكالة سفر يعرض الرحلات والعروض بوضوح.',
    view: 'عرض ←',
    services_label: 'خدماتي',
    services_title: 'ماذا أقدم لك؟',
    services_desc:  'كل ما تحتاجه لتحويل فكرتك إلى موقع يبيع.',
    service1: 'متجر إلكتروني',     service1_desc: 'سلة تسوق، طلبات، وتكامل مع واتساب.',
    service2: 'صفحة بيع',          service2_desc: 'تحويل أكبر عدد من الزوار إلى مشترين.',
    service3: 'موقع شركة / مطعم',  service3_desc: 'تقديم احترافي يبني الثقة ويجذب العملاء.',
    service4: 'تصميم متجاوب 100%', service4_desc: 'مثالي على الجوال والكمبيوتر واللوحة.',
    service5: 'تسليم سريع',        service5_desc: 'موقعك جاهز خلال يوم.',
    service6: 'جودة مضمونة',       service6_desc: 'دعم كامل بعد التسليم وضمان الجودة.',
    pricing_label: 'الأسعار',
    pricing_title: 'عروض خاصة لفترة محدودة',
    pricing_desc:  'استغل التخفيضات الآن',
    basic_name:  'الأساسي',
    basic_note:  'بدون دومين — رابط GitHub مجاني',
    basic_feat1: 'صفحة واحدة (متجر أو Landing Page)',
    basic_feat2: 'تصميم احترافي متجاوب',
    basic_feat3: 'تكامل مع واتساب',
    basic_feat4: 'تسليم خلال 1 - 3 أيام حسب حجم المشروع',
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
    premium_feat4: 'تسليم خلال 1 - 3 أيام حسب حجم المشروع',
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
    cta_title: 'جاهز تبدأ مشروعك؟ 🚀',
    cta_desc: 'تواصل معي الآن — خلال 24 ساعة تصور كامل لمشروعك.',
    cta_btn:   'واتساب',
    cta_ig:    'إنستغرام',
    privacy_legal_badge: 'قانوني', privacy_title: 'سياسة الخصوصية', privacy_updated: 'آخر تحديث: يناير 2025',
    privacy_intro: 'نحن في <strong>siteforge.ma</strong> نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.',
    privacy_s1_title: '١. المعلومات التي نجمعها', privacy_s1_text: 'عند تواصلك معنا أو طلب خدماتنا، قد نجمع المعلومات التالية:',
    privacy_s1_li1: 'الاسم الكامل ورقم الهاتف (لأغراض التواصل فقط)', privacy_s1_li2: 'عنوان البريد الإلكتروني إن أرسلته طوعاً',
    privacy_s1_li3: 'تفاصيل المشروع التي تشاركها معنا', privacy_s1_li4: 'بيانات التصفح الأساسية (زيارات الصفحة بدون تحديد هوية)',
    privacy_s2_title: '٢. كيف نستخدم معلوماتك',
    privacy_s2_li1: 'التواصل معك بخصوص طلبك أو مشروعك', privacy_s2_li2: 'تقديم الخدمات المتفق عليها',
    privacy_s2_li3: 'إرسال تحديثات تخص مشروعك فقط', privacy_s2_li4: 'تحسين جودة خدماتنا',
    privacy_s3_title: '٣. مشاركة المعلومات مع أطراف ثالثة',
    privacy_s3_text: 'نحن <strong>لا نبيع ولا نشارك</strong> معلوماتك الشخصية مع أي طرف ثالث لأغراض تجارية.',
    privacy_highlight: '💡 جميع التواصل يتم عبر واتساب فقط — لا نخزن بياناتك على خوادم خارجية.',
    privacy_s4_title: '٤. ملفات الكوكيز', privacy_s4_text: 'مواقعنا لا تستخدم ملفات كوكيز تتبع أو أدوات تحليل متقدمة.',
    privacy_s5_title: '٥. حقوقك',
    privacy_s5_li1: 'يحق لك طلب حذف أي معلومات نملكها عنك', privacy_s5_li2: 'يحق لك الاطلاع على البيانات التي جمعناها',
    privacy_s5_li3: 'يحق لك طلب تصحيح أي معلومات غير دقيقة',
    privacy_s6_title: '٦. التواصل', privacy_s6_text: 'لأي استفسار، تواصل معنا على واتساب: <strong dir="ltr">+212 680 916 653</strong>',
    privacy_back_link: '← العودة إلى الصفحة الرئيسية',
    terms_legal_badge: 'قانوني', terms_title: 'شروط الاستخدام', terms_updated: 'آخر تحديث: يناير 2025',
    terms_intro: 'باستخدامك لخدمات <strong>siteforge.ma</strong> فأنت توافق على الشروط والأحكام التالية.',
    terms_s1_title: '١. طبيعة الخدمة', terms_s1_text: 'نقدم خدمات تصميم وتطوير مواقع الويب الثابتة (HTML/CSS/JS).',
    terms_s1_li1: 'تصميم وتطوير الموقع حسب المتفق عليه', terms_s1_li2: 'رفع الموقع على GitHub Pages',
    terms_s1_li3: 'دعم فني لمدة أسبوع بعد التسليم (للباقة الأساسية)', terms_s1_li4: 'دعم فني لمدة شهر (للباقة المتكاملة)',
    terms_s2_title: '٢. الدفع والأسعار',
    terms_s2_li1: 'لا يُطلب أي دفع مسبق — الدفع عند الاستلام والموافقة', terms_s2_li2: 'الأسعار المذكورة نهائية',
    terms_s2_li3: 'أي خدمات إضافية تُحتسب بشكل منفصل', terms_s2_li4: 'الدفع عبر الوسائل المتفق عليها',
    terms_highlight: '✅ لا دفع مسبق — تدفع فقط عند استلامك الموقع ورضاك عنه.',
    terms_s3_title: '٣. حقوق الملكية الفكرية',
    terms_s3_li1: 'بعد الدفع الكامل، تنتقل ملكية الموقع بالكامل إليك', terms_s3_li2: 'يحق لنا إضافة المشروع لمعرض أعمالنا',
    terms_s3_li3: 'المحتوى الذي تزودنا به يبقى ملكك', terms_s3_li4: 'الكود المكتوب لمشروعك يصبح ملكك بالكامل',
    terms_s4_title: '٤. التزامات العميل',
    terms_s4_li1: 'تزويدنا بالمحتوى في الوقت المناسب', terms_s4_li2: 'الرد على استفساراتنا خلال 24 ساعة',
    terms_s4_li3: 'عدم طلب تعديلات خارج نطاق المشروع دون اتفاق مسبق',
    terms_s5_title: '٥. حدود المسؤولية', terms_s5_text: 'نحن غير مسؤولين عن:',
    terms_s5_li1: 'أي انقطاع في خدمة GitHub Pages', terms_s5_li2: 'نتائج المبيعات أو التسويق',
    terms_s5_li3: 'محتوى يزودنا به العميل وقد ينتهك حقوق الغير',
    terms_warn: '⚠️ العميل مسؤول عن ضمان أن المحتوى لا ينتهك أي حقوق ملكية فكرية.',
    terms_s6_title: '٦. إنهاء الخدمة', terms_s6_text: 'يحق لأي طرف إنهاء التعاقد قبل بدء العمل دون أي التزامات.',
    terms_s7_title: '٧. التواصل والنزاعات', terms_s7_text: 'في حال أي خلاف، يُفضّل حله ودياً عبر واتساب: <strong dir="ltr">+212 680 916 653</strong>',
    terms_back_link: '← العودة إلى الصفحة الرئيسية',
    refund_legal_badge: 'قانوني', refund_title: 'سياسة الاسترجاع والاستبدال', refund_updated: 'آخر تحديث: يناير 2025',
    refund_green_box: '✅ مبدأنا الأساسي: <strong>لا دفع مسبق</strong> — تدفع فقط بعد استلامك الموقع ورضاك عنه.',
    refund_s1_title: '١. ضمان الرضا', refund_s1_text: 'نؤمن بأن العميل يجب أن يكون راضياً 100% قبل أن يدفع.',
    refund_s1_li1: 'عرض أولي للتصميم قبل البدء في التطوير', refund_s1_li2: 'مراجعتان مجانيتان على الأقل',
    refund_s1_li3: 'التسليم النهائي فقط عند موافقتك الكاملة', refund_s1_li4: 'الدفع بعد الاستلام والموافقة',
    refund_s2_title: '٢. حالات الاسترجاع',
    refund_scenario1_title: '✅ استرجاع كامل — قبل بدء العمل', refund_scenario1_desc: 'إذا قررت إلغاء الطلب قبل أن نبدأ أي عمل، لا يوجد أي التزام مالي.',
    refund_scenario2_title: '✅ استرجاع كامل — الموقع لا يعمل تقنياً', refund_scenario2_desc: 'إذا سلّمنا موقعاً يحتوي على أخطاء تقنية جوهرية ولم نصلحها خلال 48 ساعة، يحق لك استرجاع المبلغ.',
    refund_scenario3_title: '🔄 تعديل مجاني — المواصفات غير مطابقة', refund_scenario3_desc: 'إذا كان الموقع لا يطابق المواصفات المتفق عليها، نلتزم بالتعديل مجاناً.',
    refund_scenario4_title: '⚠️ لا استرجاع — تغيير الرأي بعد الموافقة', refund_scenario4_desc: 'إذا وافقت ودفعت ثم قررت تغيير المشروع لأسباب شخصية، لا يمكن استرجاع المبلغ.',
    refund_s3_title: '٣. مدة معالجة الاسترجاع', refund_s3_text: 'يتم معالجة الطلب خلال <strong>3-5 أيام عمل</strong>.',
    refund_s4_title: '٤. كيف تطلب الاسترجاع؟', refund_s4_text: 'تواصل معنا على واتساب: <strong dir="ltr">+212 680 916 653</strong>',
    refund_highlight: '💬 نحن نقدّر ثقتك — وهدفنا دائماً أن تخرج من التجربة راضياً.',
    refund_back_link: '← العودة إلى الصفحة الرئيسية',
    faq_help_badge: 'مساعدة', faq_title: 'الأسئلة الشائعة (FAQ)', faq_updated: 'آخر تحديث: مارس 2025',
    faq_q1: 'س: هل يمكن تعديل الموقع بعد التسليم؟', faq_a1: 'ج: نعم، يمكنك طلب تعديلات بسيطة مجاناً خلال أسبوع من التسليم.',
    faq_q2: 'س: هل يشمل الموقع دومين واستضافة؟', faq_a2: 'ج: الدومين والاستضافة ليسا مشمولين في الباقة الأساسية.',
    faq_q3: 'س: كم تستغرق عملية التسليم؟', faq_a3: 'ج: عادةً يتم تسليم الموقع خلال 3–7 أيام.',
    faq_q4: 'س: هل أعطيني ضمان على الموقع؟', faq_a4: 'ج: نعم، بعد التسليم أقدّم دعم فني لمدة أسبوع.',
    faq_q5: 'س: كيف يمكنني التواصل معك؟', faq_a5: 'ج: يمكن التواصل عبر WhatsApp مباشرة.',
    faq_q6: 'س: هل يمكن إضافة صفحات جديدة لاحقاً؟', faq_a6: 'ج: نعم، يمكن إضافة صفحات جديدة مقابل تكلفة إضافية.',
    faq_back_link: '← العودة إلى الصفحة الرئيسية',
  },
  en: {
    nav_projects: 'My Work', nav_services: 'Services', nav_pricing: 'Pricing', contact: 'Contact',
    footer_tagline: 'Web Developer', privacy: 'Privacy Policy', terms: 'Terms of Use',
    refund: 'Refund Policy', faq: 'FAQ', copyright: '© 2025 siteforge.ma · All rights reserved', float_chat: 'Contact me',
    hero_tag: 'Web Developer', hero_line1: 'A website built just for you,', hero_line2: 'that reflects your brand & converts visitors',
    hero_sub: 'Pro design · Fast delivery · Real results', hero_cta: 'Start your project →', hero_work: 'View work',
    stat_delivery: 'Fast delivery', stat_support: 'Post-launch support', stat_quality: 'Quality guarantee',
    why_label: 'Why me', why_title: 'Why choose me?',
    why1: 'Fast communication', why2: 'Professional design', why3: 'Fast delivery',
    why4: 'Mobile friendly', why5: 'Maintenance & support', why6: 'Results that serve your project',
    why1_desc: 'I respond quickly and stay with you every step to ensure everything is clear and easy.',
    why2_desc: 'I design an elegant and organized website that reflects your project beautifully.',
    why3_desc: 'I start work quickly and ensure delivery as soon as possible without compromising quality.',
    why4_desc: 'Your site looks great on mobile, tablet, and desktop.',
    why5_desc: 'I remain available after delivery to help with adjustments and fix any issues.',
    why6_desc: 'The goal is not just a beautiful site, but one that helps you attract clients.',
    projects_label: 'My Work', projects_title: 'Check out our recent projects',
    projects_desc: 'Every site we built had a clear goal: modern design, fast load, and a user experience that builds trust.',
    project1_tag: 'Store',       project1_number: '01 — Books',     project1_title: 'Al-Nour Bookstore',        project1_desc: 'An online bookstore for easy book selection and ordering.',
    project2_tag: 'Store',       project2_number: '02 — Perfume',   project2_title: 'Perfume Store',             project2_desc: 'An elegant perfume store with a smooth shopping experience.',
    project3_tag: 'Landing Page',project3_number: '03 — Marketing', project3_title: 'Digital Marketing Course',  project3_desc: 'A professional site to showcase and sell a marketing course.',
    project4_tag: 'Restaurant',  project4_number: '04 — Restaurant',project4_title: 'Atlas Restaurant',          project4_desc: 'A restaurant site displaying the menu in an attractive way.',
    project5_tag: 'Business',    project5_number: '05 — Travel',    project5_title: 'Safari Travel Agency',      project5_desc: 'A travel agency site showcasing trips and offers clearly.',
    view: 'View →',
    services_label: 'Services', services_title: 'What I offer', services_desc: 'Everything you need to turn your idea into a selling website.',
    service1: 'E-commerce Store', service1_desc: 'Cart, orders and WhatsApp integration.',
    service2: 'Landing Page',     service2_desc: 'Convert maximum visitors into buyers.',
    service3: 'Business / Restaurant', service3_desc: 'Professional presentation that builds trust.',
    service4: '100% Responsive', service4_desc: 'Perfect on mobile, desktop and tablet.',
    service5: 'Fast Delivery',   service5_desc: 'Your site ready within 1 day.',
    service6: 'Quality Guaranteed', service6_desc: 'Full support after delivery.',
    pricing_label: 'Pricing', pricing_title: 'Special limited-time offers', pricing_desc: 'Grab the deals now',
    basic_name: 'Basic', basic_note: 'No domain — free GitHub link',
    basic_feat1: 'Single page (store or landing page)', basic_feat2: 'Professional responsive design',
    basic_feat3: 'WhatsApp integration', basic_feat4: 'Delivery within 1–3 days depending on project size',
    basic_feat5: '1 week free support', basic_feat6: 'Custom domain', basic_feat7: 'Multiple pages',
    order_now: 'Order now', most_popular: 'Most popular',
    premium_name: 'Premium', premium_note: 'With .com domain for 1 year ✦',
    premium_feat1: 'Up to 4 pages', premium_feat2: 'Professional responsive design',
    premium_feat3: 'WhatsApp integration', premium_feat4: 'Delivery within 1–3 days depending on project size',
    premium_feat5: '1 month free support', premium_feat6: '.com domain for 1 year', premium_feat7: 'Custom contact form',
    start_now: 'Start now ✦', currency: 'MAD', extras_title: 'Extra services',
    extra1: 'Simple edit', extra1_price: '50 MAD', extra2: 'Add a page', extra2_price: '100 MAD',
    extra3: '.ma Moroccan domain', extra3_price: '120 MAD/yr', extra4: 'Monthly maintenance', extra4_price: '80 MAD/mo',
    cta_title: 'Ready to start? 🚀', cta_desc: 'Message me on WhatsApp — get a full proposal within 24h.',
    cta_btn: 'WhatsApp', cta_ig: 'Instagram',
    privacy_legal_badge: 'Legal', privacy_title: 'Privacy Policy', privacy_updated: 'Last updated: January 2025',
    privacy_intro: 'At <strong>siteforge.ma</strong>, we respect your privacy and are committed to protecting your personal data.',
    privacy_s1_title: '1. Information We Collect', privacy_s1_text: 'When you contact us or request our services, we may collect:',
    privacy_s1_li1: 'Full name and phone number (for communication only)', privacy_s1_li2: 'Email address if voluntarily provided',
    privacy_s1_li3: 'Project details you share with us', privacy_s1_li4: 'Basic browsing data',
    privacy_s2_title: '2. How We Use Your Information',
    privacy_s2_li1: 'Communicate with you regarding your request', privacy_s2_li2: 'Provide the agreed services',
    privacy_s2_li3: 'Send updates related to your project', privacy_s2_li4: 'Improve the quality of our services',
    privacy_s3_title: '3. Sharing with Third Parties',
    privacy_s3_text: 'We <strong>do not sell or share</strong> your personal information with any third party.',
    privacy_highlight: '💡 All communication is via WhatsApp only — we do not store your data on external servers.',
    privacy_s4_title: '4. Cookies', privacy_s4_text: 'Our websites do not use tracking cookies or advanced analytics.',
    privacy_s5_title: '5. Your Rights',
    privacy_s5_li1: 'Right to request deletion of your information', privacy_s5_li2: 'Right to access the data we collected',
    privacy_s5_li3: 'Right to request correction of inaccurate information',
    privacy_s6_title: '6. Contact', privacy_s6_text: 'For any questions, contact us on WhatsApp: <strong dir="ltr">+212 680 916 653</strong>',
    privacy_back_link: '← Back to home',
    terms_legal_badge: 'Legal', terms_title: 'Terms of Use', terms_updated: 'Last updated: January 2025',
    terms_intro: 'By using <strong>siteforge.ma</strong> services, you agree to the following terms.',
    terms_s1_title: '1. Nature of Service', terms_s1_text: 'We provide static website design and development (HTML/CSS/JS).',
    terms_s1_li1: 'Design and development as agreed', terms_s1_li2: 'Uploading to GitHub Pages',
    terms_s1_li3: 'Technical support for one week (Basic)', terms_s1_li4: 'Technical support for one month (Premium)',
    terms_s2_title: '2. Payment and Pricing',
    terms_s2_li1: 'No upfront payment — payment upon delivery and approval', terms_s2_li2: 'Listed prices are final',
    terms_s2_li3: 'Additional services charged separately', terms_s2_li4: 'Payment via agreed methods',
    terms_highlight: '✅ No upfront payment — you only pay after receiving and approving the site.',
    terms_s3_title: '3. Intellectual Property',
    terms_s3_li1: 'Full ownership transfers to you after payment', terms_s3_li2: 'We may add project to our portfolio',
    terms_s3_li3: 'Your content remains your property', terms_s3_li4: 'Code written for your project becomes yours',
    terms_s4_title: '4. Client Obligations',
    terms_s4_li1: 'Provide content in a timely manner', terms_s4_li2: 'Respond to inquiries within 24 hours',
    terms_s4_li3: 'Do not request out-of-scope changes without agreement',
    terms_s5_title: '5. Limitation of Liability', terms_s5_text: 'We are not responsible for:',
    terms_s5_li1: 'GitHub Pages interruptions', terms_s5_li2: 'Sales or marketing results',
    terms_s5_li3: 'Client content that infringes third-party rights',
    terms_warn: '⚠️ Client is responsible for ensuring content does not infringe intellectual property rights.',
    terms_s6_title: '6. Termination', terms_s6_text: 'Either party may terminate before work begins without obligations.',
    terms_s7_title: '7. Disputes', terms_s7_text: 'Disputes are preferably resolved via WhatsApp: <strong dir="ltr">+212 680 916 653</strong>',
    terms_back_link: '← Back to home',
    refund_legal_badge: 'Legal', refund_title: 'Refund Policy', refund_updated: 'Last updated: January 2025',
    refund_green_box: '✅ Core principle: <strong>No upfront payment</strong> — you only pay after approval.',
    refund_s1_title: '1. Satisfaction Guarantee', refund_s1_text: 'We believe you should be 100% satisfied before paying.',
    refund_s1_li1: 'Initial design preview before development', refund_s1_li2: 'At least two free revisions',
    refund_s1_li3: 'Final delivery only upon full approval', refund_s1_li4: 'Payment after delivery and approval',
    refund_s2_title: '2. Refund Scenarios',
    refund_scenario1_title: '✅ Full refund — before work starts', refund_scenario1_desc: 'If you cancel before any work begins, no financial obligation.',
    refund_scenario2_title: '✅ Full refund — site not working', refund_scenario2_desc: 'Critical technical errors not fixed within 48h — full refund.',
    refund_scenario3_title: '🔄 Free modification — specs not met', refund_scenario3_desc: 'If site does not match agreed specs, we modify for free.',
    refund_scenario4_title: '⚠️ No refund — change of mind', refund_scenario4_desc: 'After approval and payment, no refund for personal reasons.',
    refund_s3_title: '3. Processing Time', refund_s3_text: 'Refunds processed within <strong>3-5 business days</strong>.',
    refund_s4_title: '4. How to Request', refund_s4_text: 'Contact us on WhatsApp: <strong dir="ltr">+212 680 916 653</strong>',
    refund_highlight: '💬 We value your trust — our goal is always your satisfaction.',
    refund_back_link: '← Back to home',
    faq_help_badge: 'Help', faq_title: 'FAQ', faq_updated: 'Last updated: March 2025',
    faq_q1: 'Q: Can the site be modified after delivery?', faq_a1: 'A: Yes, simple modifications are free within one week.',
    faq_q2: 'Q: Does it include domain and hosting?', faq_a2: 'A: Not in the basic package, but can be added.',
    faq_q3: 'Q: How long does delivery take?', faq_a3: 'A: Typically 3–7 days depending on project size.',
    faq_q4: 'Q: Do you provide a warranty?', faq_a4: 'A: Yes, one week technical support after delivery.',
    faq_q5: 'Q: How can I contact you?', faq_a5: 'A: Via WhatsApp from the contact button on the site.',
    faq_q6: 'Q: Can I add pages later?', faq_a6: 'A: Yes, for an additional cost.',
    faq_back_link: '← Back to home',
  },
  fr: {
    nav_projects: 'Mes Travaux', nav_services: 'Services', nav_pricing: 'Tarifs', contact: 'Contact',
    footer_tagline: 'Développeur Web', privacy: 'Politique de confidentialité', terms: "Conditions d'utilisation",
    refund: 'Politique de remboursement', faq: 'FAQ', copyright: '© 2025 siteforge.ma · Tous droits réservés', float_chat: 'Me contacter',
    hero_tag: 'Développeur Web', hero_line1: 'Un site conçu spécialement pour vous,', hero_line2: 'qui reflète votre marque et attire des clients',
    hero_sub: 'Design pro · Livraison rapide · Résultats réels', hero_cta: 'Démarrez votre projet →', hero_work: 'Voir les travaux',
    stat_delivery: 'Livraison rapide', stat_support: 'Support après livraison', stat_quality: 'Qualité garantie',
    why_label: 'Pourquoi moi', why_title: 'Pourquoi me choisir ?',
    why1: 'Communication rapide', why2: 'Design professionnel', why3: 'Livraison rapide',
    why4: 'Adapté au mobile', why5: 'Maintenance et support', why6: 'Des résultats concrets',
    why1_desc: 'Je réponds rapidement et reste à vos côtés à chaque étape.',
    why2_desc: 'Je conçois un site élégant qui reflète votre projet et fait forte impression.',
    why3_desc: "Je commence rapidement et assure une livraison dans les meilleurs délais.",
    why4_desc: "Votre site s'affiche parfaitement sur mobile, tablette et ordinateur.",
    why5_desc: 'Je reste disponible après la livraison pour tout ajustement.',
    why6_desc: "Le but n'est pas seulement un beau site, mais un site qui attire des clients.",
    projects_label: 'Mes Travaux', projects_title: 'Découvrez nos projets récents',
    projects_desc: 'Chaque site avait un objectif clair : design moderne et expérience utilisateur qui inspire confiance.',
    project1_tag: 'Boutique',    project1_number: '01 — Livres',   project1_title: 'Librairie Al-Nour',     project1_desc: 'Boutique de livres en ligne.',
    project2_tag: 'Boutique',    project2_number: '02 — Parfums',  project2_title: 'Boutique de Parfums',   project2_desc: 'Boutique de parfums élégante.',
    project3_tag: 'Landing Page',project3_number: '03 — Marketing',project3_title: 'Cours Marketing Digital',project3_desc: 'Site pour présenter et vendre une formation.',
    project4_tag: 'Restaurant',  project4_number: '04 — Restaurant',project4_title: 'Restaurant Atlas',     project4_desc: 'Site restaurant avec menu attrayant.',
    project5_tag: 'Entreprise',  project5_number: '05 — Voyages',  project5_title: 'Agence Safari',         project5_desc: 'Site agence de voyage avec offres claires.',
    view: 'Voir →',
    services_label: 'Services', services_title: 'Ce que je propose', services_desc: 'Tout ce dont vous avez besoin pour un site qui vend.',
    service1: 'Boutique en ligne', service1_desc: 'Panier, commandes et intégration WhatsApp.',
    service2: 'Page de vente',     service2_desc: 'Convertir un maximum de visiteurs en acheteurs.',
    service3: 'Site Entreprise / Resto', service3_desc: 'Présentation pro qui inspire confiance.',
    service4: '100% Responsive',  service4_desc: 'Parfait sur mobile, desktop et tablette.',
    service5: 'Livraison rapide', service5_desc: 'Votre site prêt en 1 jour.',
    service6: 'Qualité garantie', service6_desc: 'Support complet après la livraison.',
    pricing_label: 'Tarifs', pricing_title: 'Offres spéciales à durée limitée', pricing_desc: 'Profitez des réductions maintenant',
    basic_name: 'Essentiel', basic_note: 'Sans domaine — lien GitHub gratuit',
    basic_feat1: 'Une page (boutique ou landing page)', basic_feat2: 'Design responsive professionnel',
    basic_feat3: 'Intégration WhatsApp', basic_feat4: 'Livraison en 1–3 jours selon la taille du projet',
    basic_feat5: '1 semaine support gratuit', basic_feat6: 'Domaine personnalisé', basic_feat7: 'Pages multiples',
    order_now: 'Commander', most_popular: 'Le plus demandé',
    premium_name: 'Premium', premium_note: 'Avec domaine .com pour 1 an ✦',
    premium_feat1: "Jusqu'à 4 pages", premium_feat2: 'Design responsive professionnel',
    premium_feat3: 'Intégration WhatsApp', premium_feat4: 'Livraison en 1–3 jours selon la taille du projet',
    premium_feat5: '1 mois support gratuit', premium_feat6: 'Domaine .com pour 1 an', premium_feat7: 'Formulaire de contact personnalisé',
    start_now: 'Commencer ✦', currency: 'MAD', extras_title: 'Services supplémentaires',
    extra1: 'Modification simple', extra1_price: '50 MAD', extra2: 'Ajout de page', extra2_price: '100 MAD',
    extra3: 'Domaine .ma marocain', extra3_price: '120 MAD/an', extra4: 'Maintenance mensuelle', extra4_price: '80 MAD/mois',
    cta_title: 'Prêt à démarrer ? 🚀', cta_desc: 'Contactez-moi sur WhatsApp — proposition complète en 24h.',
    cta_btn: 'WhatsApp', cta_ig: 'Instagram',
    privacy_legal_badge: 'Juridique', privacy_title: 'Politique de confidentialité', privacy_updated: 'Dernière mise à jour : janvier 2025',
    privacy_intro: 'Chez <strong>siteforge.ma</strong>, nous respectons votre vie privée.',
    privacy_s1_title: '1. Informations collectées', privacy_s1_text: 'Lors de votre contact, nous collectons :',
    privacy_s1_li1: 'Nom et téléphone (communication uniquement)', privacy_s1_li2: 'E-mail si fourni volontairement',
    privacy_s1_li3: 'Détails du projet', privacy_s1_li4: 'Données de navigation de base',
    privacy_s2_title: '2. Utilisation des informations',
    privacy_s2_li1: 'Communiquer concernant votre demande', privacy_s2_li2: 'Fournir les services convenus',
    privacy_s2_li3: 'Envoyer des mises à jour liées à votre projet', privacy_s2_li4: 'Améliorer nos services',
    privacy_s3_title: '3. Partage avec des tiers',
    privacy_s3_text: 'Nous <strong>ne vendons ni ne partageons</strong> vos informations à des fins commerciales.',
    privacy_highlight: '💡 Toute communication via WhatsApp uniquement — pas de stockage externe.',
    privacy_s4_title: '4. Cookies', privacy_s4_text: "Nos sites n'utilisent pas de cookies de suivi.",
    privacy_s5_title: '5. Vos droits',
    privacy_s5_li1: 'Droit de suppression de vos données', privacy_s5_li2: "Droit d'accès à vos données",
    privacy_s5_li3: 'Droit de correction des informations inexactes',
    privacy_s6_title: '6. Contact', privacy_s6_text: 'Contactez-nous sur WhatsApp : <strong dir="ltr">+212 680 916 653</strong>',
    privacy_back_link: "← Retour à l'accueil",
    terms_legal_badge: 'Juridique', terms_title: "Conditions d'utilisation", terms_updated: 'Dernière mise à jour : janvier 2025',
    terms_intro: "En utilisant <strong>siteforge.ma</strong>, vous acceptez les conditions suivantes.",
    terms_s1_title: '1. Nature du service', terms_s1_text: 'Nous fournissons des sites web statiques (HTML/CSS/JS).',
    terms_s1_li1: 'Conception et développement selon accord', terms_s1_li2: 'Mise en ligne sur GitHub Pages',
    terms_s1_li3: 'Support technique une semaine (Essentiel)', terms_s1_li4: 'Support technique un mois (Premium)',
    terms_s2_title: '2. Paiement et tarifs',
    terms_s2_li1: 'Aucun paiement initial — paiement à la livraison', terms_s2_li2: 'Prix indiqués sont définitifs',
    terms_s2_li3: 'Services supplémentaires facturés séparément', terms_s2_li4: 'Paiement via moyens convenus',
    terms_highlight: "✅ Aucun paiement initial — vous payez après réception et approbation.",
    terms_s3_title: '3. Propriété intellectuelle',
    terms_s3_li1: 'Propriété transférée après paiement', terms_s3_li2: 'Nous pouvons inclure le projet dans notre portfolio',
    terms_s3_li3: 'Votre contenu reste votre propriété', terms_s3_li4: 'Le code devient votre propriété',
    terms_s4_title: '4. Obligations du client',
    terms_s4_li1: 'Fournir le contenu en temps utile', terms_s4_li2: 'Répondre dans les 24 heures',
    terms_s4_li3: 'Ne pas demander de modifications hors cadre sans accord',
    terms_s5_title: '5. Limitation de responsabilité', terms_s5_text: 'Nous ne sommes pas responsables de :',
    terms_s5_li1: 'Interruptions GitHub Pages', terms_s5_li2: 'Résultats commerciaux',
    terms_s5_li3: 'Contenu client violant des droits tiers',
    terms_warn: "⚠️ Le client est responsable de son contenu.",
    terms_s6_title: '6. Résiliation', terms_s6_text: 'Résiliation possible avant début des travaux sans obligation.',
    terms_s7_title: '7. Litiges', terms_s7_text: 'Résolution amiable via WhatsApp : <strong dir="ltr">+212 680 916 653</strong>',
    terms_back_link: "← Retour à l'accueil",
    refund_legal_badge: 'Juridique', refund_title: "Politique de remboursement", refund_updated: 'Dernière mise à jour : janvier 2025',
    refund_green_box: '✅ Principe fondamental : <strong>Aucun paiement initial</strong>.',
    refund_s1_title: '1. Garantie de satisfaction', refund_s1_text: 'Le client doit être satisfait à 100% avant de payer.',
    refund_s1_li1: 'Aperçu du design avant développement', refund_s1_li2: 'Deux révisions gratuites minimum',
    refund_s1_li3: 'Livraison finale après approbation complète', refund_s1_li4: 'Paiement après livraison',
    refund_s2_title: '2. Scénarios de remboursement',
    refund_scenario1_title: '✅ Remboursement intégral — avant début', refund_scenario1_desc: 'Annulation avant début : aucune obligation.',
    refund_scenario2_title: '✅ Remboursement intégral — site non fonctionnel', refund_scenario2_desc: 'Erreurs critiques non corrigées en 48h : remboursement complet.',
    refund_scenario3_title: '🔄 Modification gratuite — specs non respectées', refund_scenario3_desc: 'Modifications gratuites si specs non respectées.',
    refund_scenario4_title: '⚠️ Pas de remboursement — changement avis', refund_scenario4_desc: "Pas de remboursement après approbation et paiement.",
    refund_s3_title: '3. Délai de traitement', refund_s3_text: 'Traitement dans <strong>3 à 5 jours ouvrables</strong>.',
    refund_s4_title: '4. Comment demander', refund_s4_text: 'WhatsApp : <strong dir="ltr">+212 680 916 653</strong>',
    refund_highlight: '💬 Votre satisfaction est notre priorité.',
    refund_back_link: "← Retour à l'accueil",
    faq_help_badge: 'Aide', faq_title: 'Questions fréquentes (FAQ)', faq_updated: 'Dernière mise à jour : mars 2025',
    faq_q1: 'Q: Peut-on modifier le site après livraison ?', faq_a1: 'R: Oui, modifications simples gratuites pendant une semaine.',
    faq_q2: 'Q: Le forfait inclut-il domaine et hébergement ?', faq_a2: "R: Non, mais peut être ajouté.",
    faq_q3: 'Q: Délai de livraison ?', faq_a3: 'R: Généralement 3 à 7 jours.',
    faq_q4: 'Q: Y a-t-il une garantie ?', faq_a4: 'R: Oui, support technique une semaine après livraison.',
    faq_q5: 'Q: Comment vous contacter ?', faq_a5: 'R: Via WhatsApp depuis le bouton de contact.',
    faq_q6: 'Q: Ajouter des pages plus tard ?', faq_a6: 'R: Oui, moyennant un coût supplémentaire.',
    faq_back_link: "← Retour à l'accueil",
  }
};

/* ===== 3. النظام اللغوي — مع حماية localStorage ===== */
var currentLang = 'ar';
try { currentLang = localStorage.getItem('lang') || 'ar'; } catch(e) { currentLang = 'ar'; }

function applyLanguage(lang) {
  if (!translations[lang]) return;
  var t = translations[lang];
  var dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir; /* إصلاح: تطبيق dir على html وليس body فقط */
  document.body.dir = dir;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('.lang-opt').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch(e) {}
  currentLang = lang;
}

document.querySelectorAll('.lang-opt').forEach(function(btn) {
  btn.addEventListener('click', function() { applyLanguage(this.dataset.lang); });
});
applyLanguage(currentLang);

/* ===== 4. Nav scroll — مع حماية null ===== */
var mainNav = document.getElementById('mainNav');
if (mainNav) {
  window.addEventListener('scroll', function() {
    mainNav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ===== 5. Scroll Reveal — مع fallback للمتصفحات القديمة ===== */
if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('on'); }, i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(function(el) { revealObserver.observe(el); });
} else {
  /* fallback: إظهار كل العناصر مباشرة */
  document.querySelectorAll('.rv').forEach(function(el) { el.classList.add('on'); });
}

/* ===== 6. Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== 7. Card stagger animation — مع fallback ===== */
if ('IntersectionObserver' in window) {
  var cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var cards = entry.target.querySelectorAll('.srv-card, .why-card, .pc');
        cards.forEach(function(card, i) {
          setTimeout(function() { card.classList.add('card-visible'); }, i * 80);
        });
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.srv-grid, .why-grid, .pg').forEach(function(grid) {
    cardObserver.observe(grid);
  });
} else {
  document.querySelectorAll('.srv-card, .why-card, .pc').forEach(function(card) {
    card.classList.add('card-visible');
  });
}

/* ===== 8. تمييز الرابط النشط في الفوتر ===== */
function highlightActiveFooterLink() {
  var currentFile = window.location.pathname.split('/').pop();
  if (!currentFile) return;
  document.querySelectorAll('.fpol .flink').forEach(function(link) {
    var href = link.getAttribute('href');
    link.classList.toggle('active', href === currentFile);
  });
}
highlightActiveFooterLink();

/* ===== 9. Why cards toggle — تنفيذ مباشر بدل DOMContentLoaded ===== */
/* الـ script في نهاية body فالـ DOM جاهز بالفعل */
document.querySelectorAll('.why-card').forEach(function(card) {
  card.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});

/* ===== 10. Scroll to top on load — مع try/catch ===== */
try { history.scrollRestoration = 'manual'; } catch(e) {}
window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});