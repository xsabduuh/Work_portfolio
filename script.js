// ==================== الترجمة والثيم ====================
const translations = {
  ar: {
    contact: 'تواصل',
    hero_tag: 'مطور مواقع · المغرب 🇲🇦',
    hero_line1: 'موقع مصمم خصيصا لك،',
    hero_line2: 'يعكس مشروعك و يجذب العملاء',
    hero_sub: 'تصميم احترافي · تسليم سريع · نتائج حقيقية',
    hero_cta: 'ابدأ مشروعك ←',
    hero_work: 'مشاهدة الأعمال',
    stat_projects: 'مشاريع حقيقية',
    stat_delivery: 'تسليم سريع',
    stat_support: 'دعم بعد التسليم',
    stat_quality: 'ضمان الجودة',
    projects_label: 'أعمالي',
    projects_title: 'شوف نماذج من المواقع اللي صممناها وكيفاش قدرنا نحولو أفكار بسيطة لمواقع احترافية كتجلب الزبناء.',
    projects_desc: 'كل موقع خدمناه كان بهدف واضح: تصميم عصري، سرعة في التصفح، وتجربة مستخدم كتخلي الزائر يثق في المشروع من أول زيارة.',
    projects_tagline: 'كل موقع هنا تصمم باش يعطي صورة احترافية للمشروع ويحول الزائر لزبون.',
    project1_tag: 'متجر',
    project1_number: '01 — مكتبة',
    project1_title: 'مكتبة النور',
    project1_desc: 'موقع مكتبة إلكترونية مخصص لبيع الكتب أونلاين، مصمم باش يخلي الزبون يختار الكتاب بسهولة ويطلبه مع خدمة التوصيل.',
    view: 'عرض ←',
    project2_tag: 'متجر',
    project2_number: '02 — عطور',
    project2_title: 'متجر العطور',
    project2_desc: 'متجر عطور بتصميم أنيق يبرز جمالية المنتجات ويخلي تجربة التصفح والشراء بسيطة وسلسة.',
    project3_tag: 'صفحة بيع',
    project3_number: '03 — تسويق',
    project3_title: 'دورة تسويق رقمي',
    project3_desc: 'موقع احترافي لعرض دورة في التسويق، مصمم باش يشرح محتوى الدورة ويشجع الزائر على التسجيل.',
    project4_tag: 'مطعم',
    project4_number: '04 — مطعم',
    project4_title: 'مطعم أطلس',
    project4_desc: 'موقع مطعم يعرض المنيو والصور بطريقة جذابة، ويخلي الزبناء يطلبو الأكل بسهولة مع خدمة التوصيل.',
    project5_tag: 'موقع شركة',
    project5_number: '05 — وكالة سفر',
    project5_title: 'سفاري',
    project5_desc: 'موقع وكالة سفر مصمم باش يعرض الرحلات والعروض بطريقة واضحة ويسهل على الزائر اختيار رحلته.',
    trust_building: 'كنخدم على مواقع سريعة، متوافقة مع الهاتف، وسهلة الاستعمال باش تعطي أفضل تجربة للزبناء.',
    custom_project: 'إلا كان عندك مشروع وباغي يكون عندك موقع احترافي بحال هاد النماذج، نقدر نصمم لك موقع خاص بمشروعك.',
    final_motivation: 'الموقع الاحترافي اليوم ما بقاش اختيار… هو خطوة أساسية باش مشروعك يكبر فالإنترنت ويوصل لزبناء جداد.',
    services_label: 'خدماتي',
    services_title: 'ماذا أقدم لك؟',
    services_desc: 'كل ما تحتاجه لتحويل فكرتك إلى موقع يبيع.',
    service1: 'متجر إلكتروني',
    service1_desc: 'سلة تسوق، طلبات، وتكامل مع واتساب.',
    service2: 'صفحة بيع',
    service2_desc: 'تحويل أكبر عدد من الزوار إلى مشترين.',
    service3: 'موقع شركة / مطعم',
    service3_desc: 'تقديم احترافي يبني الثقة ويجذب العملاء.',
    service4: 'تصميم متجاوب 100%',
    service4_desc: 'مثالي على الجوال والكمبيوتر واللوحة.',
    pricing_label: 'الأسعار',
    pricing_title: 'عروض خاصة لفترة محدودة',
    pricing_desc: 'استغل التخفيضات الآن',
    basic_name: 'الأساسي',
    currency: 'درهم',
    basic_note: 'بدون دومين — رابط GitHub مجاني',
    basic_feat1: 'صفحة واحدة (متجر أو Landing Page)',
    basic_feat2: 'تصميم احترافي متجاوب',
    basic_feat3: 'تكامل مع واتساب',
    basic_feat4: 'تسليم خلال 48 ساعة',
    basic_feat5: 'أسبوع دعم مجاني',
    basic_feat6: 'دومين خاص',
    basic_feat7: 'صفحات متعددة',
    order_now: 'اطلب الآن',
    most_popular: 'الأكثر طلباً',
    premium_name: 'المتكامل',
    premium_note: 'مع دومين .com لمدة سنة ✦',
    premium_feat1: 'حتى 4 صفحات',
    premium_feat2: 'تصميم احترافي متجاوب',
    premium_feat3: 'تكامل مع واتساب',
    premium_feat4: 'تسليم خلال 5 أيام',
    premium_feat5: 'شهر دعم مجاني',
    premium_feat6: 'دومين .com لسنة كاملة',
    premium_feat7: 'نموذج تواصل مخصص',
    start_now: 'ابدأ الآن ✦',
    extras_title: 'خدمات إضافية',
    extra1: 'تعديل بسيط',
    extra1_price: '50 درهم',
    extra2: 'إضافة صفحة',
    extra2_price: '100 درهم',
    extra3: 'دومين .ma مغربي',
    extra3_price: '120 درهم/سنة',
    extra4: 'صيانة شهرية',
    extra4_price: '80 درهم/شهر',
    cta_title: 'جاهز تبدأ مشروعك؟ 🚀',
    cta_desc: 'تواصل معي على واتساب — خلال 24 ساعة يكون معك تصور كامل. لا دفع مسبق.',
    cta_btn: 'ابدأ على واتساب',
    footer_tagline: 'مطور مواقع — المغرب 🇲🇦',
    project1_short: 'مكتبة النور',
    project2_short: 'متجر العطور',
    project3_short: 'دورة التسويق',
    project5_short: 'سفاري',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    copyright: '© 2025 xsab.dev · جميع الحقوق محفوظة',
    float_chat: 'تواصل معي'
  },
  en: {
    contact: 'Contact',
    hero_tag: 'Web Developer · Morocco 🇲🇦',
    hero_line1: 'A professional site that makes',
    hero_line2: 'your project stand out and sell more',
    hero_sub: 'Professional design · Fast delivery · Real results',
    hero_cta: 'Start your project ←',
    hero_work: 'View work',
    stat_projects: 'Real projects',
    stat_delivery: 'Fast delivery',
    stat_support: 'Post-launch support',
    stat_quality: 'Quality guarantee',
    projects_label: 'My work',
    projects_title: 'Check out our recent projects',
    projects_desc: 'Every site we built had a clear goal: modern design, fast browsing, and a user experience that builds trust from the first visit.',
    projects_tagline: 'Each site here is designed to give a professional image and convert visitors into customers.',
    project1_tag: 'Store',
    project1_number: '01 — Books',
    project1_title: 'Al-Nour Bookstore',
    project1_desc: 'An online bookstore designed for easy book selection and ordering with delivery service.',
    view: 'View ←',
    project2_tag: 'Store',
    project2_number: '02 — Perfume',
    project2_title: 'Perfume Store',
    project2_desc: 'An elegant perfume store highlighting product beauty with a simple shopping experience.',
    project3_tag: 'Landing Page',
    project3_number: '03 — Marketing',
    project3_title: 'Digital Marketing Course',
    project3_desc: 'A professional site for a marketing course, designed to explain the course content and encourage enrollment.',
    project4_tag: 'Restaurant',
    project4_number: '04 — Restaurant',
    project4_title: 'Atlas Restaurant',
    project4_desc: 'A restaurant site displaying the menu attractively, making it easy for customers to order food with delivery.',
    project5_tag: 'Business',
    project5_number: '05 — Travel Agency',
    project5_title: 'Safari',
    project5_desc: 'A travel agency site designed to showcase trips and offers clearly, making it easy to choose a trip.',
    trust_building: 'I work on fast, mobile-friendly, and easy-to-use sites to give the best experience.',
    custom_project: 'If you have a project and want a professional website like these, I can design a custom site for you.',
    final_motivation: 'A professional website is no longer an option... it is a key step for your project to grow online and reach new customers.',
    services_label: 'Services',
    services_title: 'What I offer',
    services_desc: 'Everything you need to turn your idea into a selling website.',
    service1: 'E-commerce Store',
    service1_desc: 'Cart, orders and WhatsApp integration.',
    service2: 'Landing Page',
    service2_desc: 'Convert maximum visitors into buyers.',
    service3: 'Business / Restaurant',
    service3_desc: 'Professional presentation that builds trust.',
    service4: '100% Responsive',
    service4_desc: 'Perfect on mobile, desktop and tablet.',
    pricing_label: 'Pricing',
    pricing_title: 'Special limited-time offers',
    pricing_desc: 'Grab the discounts now',
    basic_name: 'Basic',
    currency: 'MAD',
    basic_note: 'No domain — free GitHub link',
    basic_feat1: 'Single page (store or landing page)',
    basic_feat2: 'Professional responsive design',
    basic_feat3: 'WhatsApp integration',
    basic_feat4: 'Delivery within 48 hours',
    basic_feat5: '1 week free support',
    basic_feat6: 'Custom domain',
    basic_feat7: 'Multiple pages',
    order_now: 'Order now',
    most_popular: 'Most popular',
    premium_name: 'Premium',
    premium_note: 'With .com domain for 1 year ✦',
    premium_feat1: 'Up to 4 pages',
    premium_feat2: 'Professional responsive design',
    premium_feat3: 'WhatsApp integration',
    premium_feat4: 'Delivery within 5 days',
    premium_feat5: '1 month free support',
    premium_feat6: '.com domain for 1 year',
    premium_feat7: 'Custom contact form',
    start_now: 'Start now ✦',
    extras_title: 'Extra services',
    extra1: 'Simple edit',
    extra1_price: '50 MAD',
    extra2: 'Add a page',
    extra2_price: '100 MAD',
    extra3: '.ma Moroccan domain',
    extra3_price: '120 MAD/yr',
    extra4: 'Monthly maintenance',
    extra4_price: '80 MAD/mo',
    cta_title: 'Ready to start? 🚀',
    cta_desc: 'Contact me on WhatsApp — within 24h you get a full proposal. No upfront payment.',
    cta_btn: 'Start on WhatsApp',
    footer_tagline: 'Web developer — Morocco 🇲🇦',
    project1_short: 'Al-Nour Books',
    project2_short: 'Perfume Store',
    project3_short: 'Marketing Course',
    project5_short: 'Safari',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    copyright: '© 2025 xsab.dev · All rights reserved',
    float_chat: 'Contact me'
  }
};

// الوضع الليلي
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
themeBtn.addEventListener('click', () => {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  currentTheme = newTheme;
  themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// الترجمة
const langBtn = document.getElementById('langBtn');
let currentLang = localStorage.getItem('lang') || 'ar';
html.lang = currentLang;
document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
updateLanguage(currentLang);

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  html.lang = currentLang;
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  localStorage.setItem('lang', currentLang);
  updateLanguage(currentLang);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 55);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.rv').forEach(el => observer.observe(el));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
