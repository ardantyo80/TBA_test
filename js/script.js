/* ═══════════════════════════════════════════════════════════
   TOKYO BAY MALANG ACADEMY — script.js
   ═══════════════════════════════════════════════════════════ */

// ── WA CTA ──────────────────────────────────────────────────
function openWA() {
  const msg = encodeURIComponent(
    'Halo, saya ingin mengetahui lebih lanjut tentang program kursus Tokyo Bay Malang Academy'
  );
  window.open(`https://wa.me/6287745522325?text=${msg}`, '_blank');
}

// ── Navbar scroll shadow ─────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Hamburger menu ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Active nav link on scroll ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => navObserver.observe(section));

// ── Scroll reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Apply reveal to major elements
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = [
    '.proof-item',
    '.profile-grid',
    '.course-card',
    '.gallery-item',
    '.contact-card',
  ];

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      el.dataset.delay = i * 80;
      revealObserver.observe(el);
    });
  });
});

// ── Smooth scroll offset (accounts for fixed navbar) ─────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      );
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Form Inquiry Section ─────────────────────────────
function sendInquiry(event) {
  event.preventDefault();
  
  const name = document.getElementById('inquiryName')?.value || '';
  const email = document.getElementById('inquiryEmail')?.value || '';
  const phone = document.getElementById('inquiryPhone')?.value || '';
  const program = document.getElementById('inquiryProgram')?.value || '';
  const message = document.getElementById('inquiryMessage')?.value || '';
  
  // Buat pesan WhatsApp
  const waMessage = encodeURIComponent(
    `*INQUIRY FROM TOKYO BAY MALANG WEBSITE*%0a%0a` +
    `*Nama:* ${name}%0a` +
    `*Email:* ${email}%0a` +
    `*WhatsApp:* ${phone}%0a` +
    `*Program Minat:* ${program || 'Tidak disebutkan'}%0a` +
    `*Pesan:* ${message || '-'}%0a%0a` +
    `_Pesan ini dikirim dari form website Tokyo Bay Malang Academy_`
  );
  
  
  window.open(`https://wa.me/6287745522325?text=${waMessage}`, '_blank');
  
  
  document.getElementById('inquiryForm')?.reset();
  
  
  alert('Terima kasih! Pesan Anda akan kami balas melalui WhatsApp dalam 1×24 jam.');
}