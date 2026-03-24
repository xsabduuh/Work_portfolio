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
    nav_projects:  'أعمالي',
    nav_services:  'الخدمات',
    nav_pricing:   'الأسعار',
    contact:       'تواصل',
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
    why1: 'تواصل سريع',   why2: 'صيانة دورية',
    why3: 'نتائج حقيقية', why4: 'تسليم سريع',
    why5: 'جودة مضمونة',  why6: 'حلول مخصصة',
    projects_label: 'أعمالي',
    projects_title: 'شوف نماذج من المواقع اللي صممناها',
    projects_desc:  'كل موقع خدمناه كان بهدف واضح: تصميم عصري، سرعة في التصفح، وتجربة مستخدم تخلي الزائر يثق في المشروع من أول زيارة.',
    project1_tag: 'متجر',       project1_number: '01 — مكتبة',     project1_title: 'مكتبة النور',       project1_desc: 'موقع مكتبة إلكترونية مخصص لبيع الكتب أونلاين.',
    project2_tag: 'متجر',       project2_number: '02 — عطور',      project2_title: 'متجر العطور',        project2_desc: 'متجر عطور بتصميم أنيق يبرز جمالية المنتجات.',
    project3_tag: 'صفحة بيع',   project3_number: '03 — تسويق',     project3_title: 'دورة تسويق رقمي',   project3_desc: 'موقع احترافي لعرض دورة في التسويق الرقمي.',
    project4_tag: 'مطعم',       project4_number: '04 — مطعم',      project4_title: 'مطعم أطلس',          project4_desc: 'موقع مطعم يعرض المنيو والصور بطريقة جذابة.',
    project5_tag: 'موقع شركة',  project5_number: '05 — وكالة سفر', project5_title: 'سفاري',              project5_desc: 'موقع وكالة سفر يعرض الرحلات والعروض بوضوح.',
    view: 'عرض ←',
    services_label: 'خدماتي',
    services_title: 'ماذا أقدم لك؟',
    services_desc:  'كل ما تحتاجه لتحويل فكرتك إلى موقع يبيع.',
    service1: 'متجر إلكتروني',     service1_desc: 'سلة تسوق، طلبات، وتكامل مع واتساب.',
    service2: 'صفحة بيع',          service2_desc: 'تحويل أكبر عدد من الزوار إلى مشترين.',
    service3: 'موقع شركة / مطعم',  service3_desc: 'تقديم احترافي يبني الثقة ويجذب العملاء.',
    service4: 'تصميم متجاوب 100%', service4_desc: 'مثالي على الجوال والكمبيوتر واللوحة.',
    service5: 'تسليم سريع',        service5_desc: 'موقعك جاهز خلال 48 ساعة فقط.',
    service6: 'جودة مضمونة',       service6_desc: 'دعم كامل بعد التسليم وضمان الجودة.',
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
    cta_title: 'جاهز تبدأ مشروعك؟ 🚀',
    cta_desc:  'تواصل معي الآن — خلال 24 ساعة يكون معك تصور كامل. لا دفع مسبق.',
    cta_btn:   'واتساب',
    cta_ig:    'إنستغرام',
    footer_tagline: 'مطور مواقع',
    privacy:   'سياسة الخصوصية',
    terms:     'شروط الاستخدام',
    refund:    'سياسة الاسترداد',
    shipping:  'سياسة الشحن',
    copyright: '© 2025 siteforge.ma · جميع الحقوق محفوظة',
    float_chat: 'تواصل معي'
  },

  en: {
    nav_projects:  'My Work',
    nav_services:  'Services',
    nav_pricing:   'Pricing',
    contact:       'Contact',
    hero_tag:      'Web Developer',
    hero_line1:    'A website built just for you,',
    hero_line2:    'that reflects your brand & converts visitors',
    hero_sub:      'Pro design · Fast delivery · Real results',
    hero_cta:      'Start your project →',
    hero_work:     'View work',
    stat_delivery: 'Fast delivery',
    stat_support:  'Post-launch support',
    stat_quality:  'Quality guarantee',
    why_label:     'Why me',
    why_title:     'Why choose me?',
    why1: 'Fast communication', why2: 'Regular maintenance',
    why3: 'Real results',       why4: 'Fast delivery',
    why5: 'Quality guaranteed', why6: 'Custom solutions',
    projects_label: 'My Work',
    projects_title: 'Check out our recent projects',
    projects_desc:  'Every site we built had a clear goal: modern design, fast load, and a user experience that builds trust from the first visit.',
    project1_tag: 'Store',       project1_number: '01 — Books',   project1_title: 'Al-Nour Bookstore',     project1_desc: 'An online bookstore for easy book selection and ordering.',
    project2_tag: 'Store',       project2_number: '02 — Perfume', project2_title: 'Perfume Store',          project2_desc: 'An elegant perfume store with a smooth shopping experience.',
    project3_tag: 'Landing Page',project3_number: '03 — Marketing',project3_title:'Digital Marketing Course',project3_desc:'A professional site to showcase and sell a marketing course.',
    project4_tag: 'Restaurant',  project4_number: '04 — Restaurant',project4_title:'Atlas Restaurant',      project4_desc: 'A restaurant site displaying the menu in an attractive way.',
    project5_tag: 'Business',    project5_number: '05 — Travel',  project5_title: 'Safari Travel Agency',   project5_desc: 'A travel agency site showcasing trips and offers clearly.',
    view: 'View →',
    services_label: 'Services',
    services_title: 'What I offer',
    services_desc:  'Everything you need to turn your idea into a selling website.',
    service1: 'E-commerce Store',     service1_desc: 'Cart, orders and WhatsApp integration.',
    service2: 'Landing Page',         service2_desc: 'Convert maximum visitors into buyers.',
    service3: 'Business / Restaurant',service3_desc: 'Professional presentation that builds trust.',
    service4: '100% Responsive',      service4_desc: 'Perfect on mobile, desktop and tablet.',
    service5: 'Fast Delivery',        service5_desc: 'Your site is ready within 48 hours.',
    service6: 'Quality Guaranteed',   service6_desc: 'Full support after delivery.',
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
    cta_title: 'Ready to start? 🚀',
    cta_desc:  'Message me on WhatsApp — get a full proposal within 24h. No upfront payment.',
    cta_btn:   'WhatsApp',
    cta_ig:    'Instagram',
    footer_tagline: 'Web Developer',
    privacy:   'Privacy Policy',
    terms:     'Terms of Use',
    refund:    'Refund Policy',
    shipping:  'Shipping Policy',
    copyright: '© 2025 siteforge.ma · All rights reserved',
    float_chat: 'Contact me'
  },

  fr: {
    nav_projects:  'Mes Travaux',
    nav_services:  'Services',
    nav_pricing:   'Tarifs',
    contact:       'Contact',
    hero_tag:      'Développeur Web',
    hero_line1:    'Un site conçu spécialement pour vous,',
    hero_line2:    'qui reflète votre marque et attire des clients',
    hero_sub:      'Design pro · Livraison rapide · Résultats réels',
    hero_cta:      'Démarrez votre projet →',
    hero_work:     'Voir les travaux',
    stat_delivery: 'Livraison rapide',
    stat_support:  'Support après livraison',
    stat_quality:  'Qualité garantie',
    why_label:     'Pourquoi moi',
    why_title:     'Pourquoi me choisir ?',
    why1: 'Communication rapide', why2: 'Maintenance régulière',
    why3: 'Vrais résultats',      why4: 'Livraison rapide',
    why5: 'Qualité garantie',     why6: 'Solutions sur mesure',
    projects_label: 'Mes Travaux',
    projects_title: 'Découvrez nos projets récents',
    projects_desc:  'Chaque site avait un objectif clair : design moderne, chargement rapide et une expérience utilisateur qui inspire confiance.',
    project1_tag: 'Boutique',      project1_number: '01 — Livres',   project1_title: 'Librairie Al-Nour',      project1_desc: 'Boutique de livres en ligne avec livraison.',
    project2_tag: 'Boutique',      project2_number: '02 — Parfums',  project2_title: 'Boutique de Parfums',     project2_desc: 'Boutique de parfums élégante avec une expérience fluide.',
    project3_tag: 'Landing Page',  project3_number: '03 — Marketing',project3_title: 'Cours Marketing Digital', project3_desc: 'Site professionnel pour présenter et vendre une formation.',
    project4_tag: 'Restaurant',    project4_number: '04 — Restaurant',project4_title:'Restaurant Atlas',         project4_desc: 'Site restaurant affichant le menu de façon attrayante.',
    project5_tag: 'Entreprise',    project5_number: '05 — Voyages',  project5_title: 'Agence Safari',           project5_desc: 'Site agence de voyage présentant les offres clairement.',
    view: 'Voir →',
    services_label: 'Services',
    services_title: 'Ce que je propose',
    services_desc:  'Tout ce dont vous avez besoin pour transformer votre idée en site web qui vend.',
    service1: 'Boutique en ligne',      service1_desc: 'Panier, commandes et intégration WhatsApp.',
    service2: 'Page de vente',          service2_desc: 'Convertir un maximum de visiteurs en acheteurs.',
    service3: 'Site Entreprise / Resto',service3_desc: 'Présentation pro qui inspire confiance.',
    service4: '100% Responsive',        service4_desc: 'Parfait sur mobile, desktop et tablette.',
    service5: 'Livraison rapide',       service5_desc: 'Votre site est prêt en 48 heures.',
    service6: 'Qualité garantie',       service6_desc: 'Support complet après la livraison.',
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
    cta_title: 'Prêt à démarrer ? 🚀',
    cta_desc:  'Contactez-moi sur WhatsApp — obtenez une proposition complète en 24h. Pas de paiement initial.',
    cta_btn:   'WhatsApp',
    cta_ig:    'Instagram',
    footer_tagline: 'Développeur Web',
    privacy:   'Politique de confidentialité',
    terms:     "Conditions d'utilisation",
    refund:    'Politique de remboursement',
    shipping:  'Politique de livraison',
    copyright: '© 2025 siteforge.ma · Tous droits réservés',
    float_chat: 'Me contacter'
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
    if (t[key] !== undefined) el.textContent = t[key];
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