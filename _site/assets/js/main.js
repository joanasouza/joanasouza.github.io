'use strict';

// ── Theme Toggle ────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('.theme-icon');
  if (theme === 'dark') {
    icon.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    icon.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}

// ── Mobile Nav ───────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

let overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

function openNav() {
  navMenu.classList.add('is-open');
  overlay.classList.add('is-visible');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navMenu.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('is-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.addEventListener('click', closeNav);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeNav();
      navToggle.focus();
    }
  });
}

// ── Active Nav Link ─────────────────────────────────────
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-menu a').forEach((link) => {
  const href = link.getAttribute('href');
  if (
    href === currentPath ||
    (href !== '/' && href !== '/pt/' && currentPath.startsWith(href))
  ) {
    link.setAttribute('aria-current', 'page');
  }
});

// ── Rotating Words ──────────────────────────────────────
const rotatingWord = document.querySelector('.rotating-word');
if (rotatingWord) {
  const lang = html.getAttribute('lang') || 'en';
  const wordSets = {
    en: ['creativity', 'technology', 'activism', 'open knowledge', 'art'],
    pt: ['criatividade', 'tecnologia', 'ativismo', 'conhecimento livre', 'arte'],
  };
  const words = wordSets[lang] || wordSets.en;
  let current = 0;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {
    setInterval(() => {
      rotatingWord.style.opacity = '0';
      rotatingWord.style.transform = 'translateY(10px)';

      setTimeout(() => {
        current = (current + 1) % words.length;
        rotatingWord.textContent = words[current];
        rotatingWord.style.opacity = '1';
        rotatingWord.style.transform = 'translateY(0)';
      }, 280);
    }, 2600);
  }
}
