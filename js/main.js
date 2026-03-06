'use strict';

/* ============================================================
   Navigation — Scroll Effect
   ============================================================ */
const nav = document.getElementById('nav');

function updateNavState() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState();

/* ============================================================
   Navigation — Hamburger Menu
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    navLinks.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && nav && !nav.contains(e.target)) {
      closeMenu();
    }
  });
}

function closeMenu() {
  if (!hamburger || !navLinks) return;
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  document.body.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
}

/* ============================================================
   Navigation — Active Link Highlighting
   ============================================================ */
(function highlightActiveLink() {
  const rawPath = window.location.pathname;
  const page = rawPath.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const hrefPage = href.split('/').pop();

    if (
      hrefPage === page ||
      (page === '' && hrefPage === 'index.html') ||
      (page === 'index.html' && href === 'index.html') ||
      (page === 'index.html' && href === '../index.html')
    ) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   Fade-In on Scroll (Intersection Observer)
   ============================================================ */
if ('IntersectionObserver' in window) {
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

/* ============================================================
   Skill Bars Animation
   ============================================================ */
const skillFills = document.querySelectorAll('.skill-fill');

if (skillFills.length && 'IntersectionObserver' in window) {
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  skillFills.forEach(fill => skillObserver.observe(fill));
}

/* ============================================================
   Typewriter Effect (Hero)
   ============================================================ */
const typeEl = document.getElementById('typewriter');

if (typeEl) {
  const phrases = [
    'AI Engineer',
    'Graduate Researcher',
    'Machine Learning Developer',
    'Computer Vision Engineer',
    'Robotics AI Researcher'
  ];

  let phraseIdx  = 0;
  let charIdx    = 0;
  let isDeleting = false;

  function tick() {
    const phrase = phrases[phraseIdx];
    typeEl.textContent = isDeleting
      ? phrase.slice(0, charIdx - 1)
      : phrase.slice(0, charIdx + 1);

    isDeleting ? charIdx-- : charIdx++;

    let delay = isDeleting ? 45 : 95;

    if (!isDeleting && charIdx === phrase.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx  = (phraseIdx + 1) % phrases.length;
      delay = 350;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ============================================================
   Smooth Scroll (Anchor Links)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = (nav ? nav.offsetHeight : 72) + 24;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    closeMenu();
  });
});

/* ============================================================
   Copy Email to Clipboard
   ============================================================ */
const copyEmailBtn = document.getElementById('copy-email');

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.dataset.email || 'surajpaliwal.developer@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const orig = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '&#10003; Copied!';
      copyEmailBtn.style.setProperty('border-color', 'var(--green)');
      copyEmailBtn.style.setProperty('color', 'var(--green)');
      setTimeout(() => {
        copyEmailBtn.innerHTML = orig;
        copyEmailBtn.style.removeProperty('border-color');
        copyEmailBtn.style.removeProperty('color');
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

/* ============================================================
   Current Year in Footer
   ============================================================ */
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
