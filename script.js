// ==================== إعدادات الترجمة والثيم ====================
const translations = {
  ar: { /* المحتوى الكامل للترجمة العربية */ },
  en: { /* المحتوى الكامل للترجمة الإنجليزية */ }
};

// ==================== الوضع الليلي ====================
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeBtn.addEventListener('click', () => {
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// ==================== الترجمة ====================
const langBtn = document.getElementById('langBtn');
const body = document.body;
let currentLang = localStorage.getItem('lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  html.lang = lang;
  body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-ar]').forEach(el => {
    const key = el.getAttribute('data-ar');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

setLanguage(currentLang);
langBtn.addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar'));

// ==================== Scroll Reveal ====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 55);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rv').forEach(el => observer.observe(el));

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});