// =============================================================
// TOKYO BAY MALANG ACADEMY - FULL FIXED SCRIPT
// =============================================================

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
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Hamburger menu ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

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
  entries.forEach(entry => {
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
    '.contact-info-panel',
    '.contact-form-panel'
  ];

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      el.dataset.delay = (i % 4) * 50;
      revealObserver.observe(el);
    });
  });
});

// ── Smooth scroll offset ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
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

// ── Form Inquiry ─────────────────────────────────────────────
function sendInquiry(event) {
  event.preventDefault();
  
  const name = document.getElementById('inquiryName')?.value || '';
  const email = document.getElementById('inquiryEmail')?.value || '';
  const phone = document.getElementById('inquiryPhone')?.value || '';
  const programSelect = document.getElementById('inquiryProgram');
  const programText = programSelect?.options[programSelect.selectedIndex]?.text || '';
  const message = document.getElementById('inquiryMessage')?.value || '';
  
  const waMessage = encodeURIComponent(
    `*INQUIRY FROM TOKYO BAY MALANG WEBSITE*%0a%0a` +
    `*Nama:* ${name}%0a` +
    `*Email:* ${email}%0a` +
    `*WhatsApp:* ${phone}%0a` +
    `*Program Minat:* ${programText || 'Tidak disebutkan'}%0a` +
    `*Pesan:* ${message || '-'}%0a%0a` +
    `_Pesan ini dikirim dari form website Tokyo Bay Malang Academy_`
  );
  
  window.open(`https://wa.me/6287745522325?text=${waMessage}`, '_blank');
  document.getElementById('inquiryForm')?.reset();
  alert('Terima kasih! Pesan Anda akan kami balas melalui WhatsApp dalam 1×24 jam.');
}

// ── SPLASH SCREEN ────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', function() {
  const splash = document.getElementById('splashScreen');
  const body = document.body;
  
  if (splash) {
    const splashShown = sessionStorage.getItem('splashShown');
    
    if (splashShown) {
      splash.style.display = 'none';
      body.classList.remove('splash-active');
    } else {
      body.classList.add('splash-active');
      
      setTimeout(function() {
        splash.classList.add('fade-out');
        body.classList.remove('splash-active');
        
        setTimeout(function() {
          splash.style.display = 'none';
        }, 600);
      }, 2000);
      
      sessionStorage.setItem('splashShown', 'true');
    }
  }
});

// ═══════════════════════════════════════════════════════════════
// MULTI LANGUAGE TRANSLATION (Indonesia, English, Jepang)
// ═══════════════════════════════════════════════════════════════

const translations = {
  // Navbar
  navProfile: { id: 'Profile', en: 'Profile', jp: 'プロフィール' },
  navCourses: { id: 'Courses', en: 'Courses', jp: 'コース' },
  navGallery: { id: 'Gallery', en: 'Gallery', jp: 'ギャラリー' },
  navContact: { id: 'Reach Us', en: 'Reach Us', jp: 'お問い合わせ' },
  
  // Hero Section
  heroTitle1: { id: 'Buka Pintu', en: 'Open the Door', jp: '扉を開け' },
  heroTitle2: { id: 'Masa Depanmu', en: 'Your Future', jp: 'あなたの未来' },
  heroTitle3: { id: 'di Jepang', en: 'in Japan', jp: '日本で' },
  heroSub: { id: 'Belajar bahasa Jepang bersama native teacher bersertifikat. Raih karir dan studi impianmu langsung dari Malang.', en: 'Learn Japanese with certified native teachers. Achieve your dream career and studies directly from Malang.', jp: '認定ネイティブ講師と一緒に日本語を学びましょう。マランから直接、夢のキャリアと留学を実現します。' },
  heroBtn: { id: 'Lihat Program Kursus', en: 'View Courses', jp: 'コースを見る' },
  
  // Social Proof
  proof1Title: { id: 'Bagian dari KS Global', en: 'Part of KS Global', jp: 'KSグローバルの一部' },
  proof1Desc: { id: 'Korporasi Jepang sejak 2008', en: 'Japanese Corporation since 2008', jp: '2008年から日本の企業' },
  proof2Title: { id: '960+ Alumni Dikirim', en: '960+ Alumni Sent', jp: '960人以上の卒業生' },
  proof2Desc: { id: 'Mitra SO Harapan Putera Bandung', en: 'Partner of SO Harapan Putera Bandung', jp: 'SOハラパンプテラバンドン提携' },
  proof3Title: { id: '250 Perusahaan Mitra', en: '250 Partner Companies', jp: '250社の提携企業' },
  proof3Desc: { id: 'Berbagai prefecture di Jepang', en: 'Various prefectures in Japan', jp: '日本の様々な県' },
  proof4Title: { id: 'Native Teacher Bersertifikat', en: 'Certified Native Teacher', jp: '認定ネイティブ講師' },
  proof4Desc: { id: 'Instruktur langsung dari Jepang', en: 'Direct instructors from Japan', jp: '日本からの直接指導' },
  
  // Profile Section
  sectionAbout: { id: 'Tentang Kami', en: 'About Us', jp: '私たちについて' },
  profileTitle: { id: 'Jembatan Indonesia', en: 'Bridge Indonesia', jp: 'インドネシアの橋' },
  profileTitle2: { id: '& Jepang', en: '& Japan', jp: 'と日本' },
  profileLead: { id: 'Tokyo Bay Malang adalah langkah inovasi untuk menghadirkan layanan satu pintu bagi mereka yang menginginkan peluang studi dan karir di Jepang.', en: 'Tokyo Bay Malang is an innovative step to provide one-stop services for those seeking study and career opportunities in Japan.', jp: '東京ベイマランは、日本での留学とキャリアの機会を求める方々にワンストップサービスを提供する革新的な取り組みです。' },
  profileText1: { id: 'Kami merupakan cabang dan mitra pendidikan dari Tokyo Bay Academy Jepang yang berkantor pusat di Shinjuku-Tokyo, dengan overseas branch di Myanmar dan Vietnam. Di 2026 ini, kami hadir di Indonesia tepatnya di Kabupaten Malang, Jawa Timur.', en: 'We are a branch and educational partner of Tokyo Bay Academy Japan, headquartered in Shinjuku-Tokyo, with overseas branches in Myanmar and Vietnam. In 2026, we are present in Indonesia, precisely in Malang Regency, East Java.', jp: '私たちは、新宿・東京に本社を置く東京ベイアカデミー日本の支社兼教育パートナーであり、ミャンマーとベトナムにも海外支社があります。2026年、インドネシアの東ジャワ州マラン県に開校しました。' },
  profileText2: { id: 'Tokyo Bay adalah bagian dari KS Global (KSG). Sebuah korporasi Jepang yang sudah menangani kebutuhan tenaga kerja asing untuk Jepang sejak tahun 2008, dengan akses ke 250 perusahaan di berbagai prefecture dan berbagai bidang pekerjaan.', en: 'Tokyo Bay is part of KS Global (KSG), a Japanese corporation that has been handling foreign workforce needs for Japan since 2008, with access to 250 companies across various prefectures and job fields.', jp: '東京ベイはKSグローバル（KSG）の一部です。2008年から日本の外国人労働力のニーズを扱ってきた日本企業で、様々な県や職種の250社とのネットワークを持っています。' },
  profileText3: { id: 'Dengan metode pembelajaran yang terukur, adaptif, dan relevan langsung oleh native teacher bersertifikat dari Jepang. Kami meyakini setiap peserta didik akan memperoleh pembelajaran yang relevan dengan kebutuhan di negara Jepang.', en: 'With measurable, adaptive, and relevant learning methods directly by certified native teachers from Japan, we believe every student will gain learning that is relevant to the needs in Japan.', jp: '測定可能で適応性のある関連性の高い学習方法を、日本からの認定ネイティブ講師による直接指導で提供します。これにより、すべての学生が日本のニーズに関連した学習を得られると確信しています。' },
  
  // Profile Values
  value1: { id: 'Terukur & Adaptif', en: 'Measurable & Adaptive', jp: '測定可能で適応性がある' },
  value2: { id: 'Standar Industri Jepang', en: 'Japanese Industry Standards', jp: '日本の産業基準' },
  value3: { id: 'Visa Resmi & Terpercaya', en: 'Official & Trusted Visa', jp: '公式・信頼できるビザ' },
  
  // Courses Section
  sectionProgram: { id: 'Program Unggulan', en: 'Featured Programs', jp: 'おすすめプログラム' },
  coursesTitle: { id: 'Pilih Jalur', en: 'Choose Your', jp: 'あなたの道を選ぶ' },
  coursesTitle2: { id: 'Belajarmu', en: 'Learning Path', jp: '学習の道' },
  coursesDesc: { id: 'Empat program dirancang untuk memenuhi kebutuhan studi, karir, dan pengajaran bahasa Jepang secara profesional.', en: 'Four programs designed to meet the needs of study, career, and Japanese language teaching professionally.', jp: '4つのプログラムは、学習、キャリア、日本語教育のニーズを専門的に満たすように設計されています。' },
  
  // Course Cards
  courseN5Title: { id: 'Kursus N5', en: 'N5 Course', jp: 'N5コース' },
  courseN5Tagline: { id: 'Fondasi Bahasa Jepang', en: 'Japanese Foundation', jp: '日本語の基礎' },
  courseN5Desc: { id: 'Kuasai hiragana, katakana, kanji dasar, dan percakapan sehari-hari. Titik awal yang sempurna untuk perjalananmu ke Jepang.', en: 'Master hiragana, katakana, basic kanji, and daily conversation. The perfect starting point for your journey to Japan.', jp: 'ひらがな、カタカナ、基本漢字、日常会話をマスターします。日本への旅の完璧な出発点。' },
  
  courseN4Title: { id: 'Kursus N4', en: 'N4 Course', jp: 'N4コース' },
  courseN4Tagline: { id: 'Bahasa Jepang Fungsional', en: 'Functional Japanese', jp: '実用的な日本語' },
  courseN4Desc: { id: 'Tingkatkan kemampuan membaca, menulis, dan mendengar untuk memenuhi standar komunikasi kerja dasar di Jepang.', en: 'Improve reading, writing, and listening skills to meet basic work communication standards in Japan.', jp: '読む、書く、聞くスキルを向上させ、日本での基本的な仕事のコミュニケーション基準を満たします。' },
  
  courseN3Title: { id: 'Kursus N3', en: 'N3 Course', jp: 'N3コース' },
  courseN3Tagline: { id: 'Bahasa Jepang Profesional', en: 'Professional Japanese', jp: 'プロフェッショナル日本語' },
  courseN3Desc: { id: 'Level yang paling dibutuhkan oleh perusahaan Jepang. Kuasai komunikasi formal, dokumen kerja, dan nuansa budaya kerja Jepang.', en: 'The level most needed by Japanese companies. Master formal communication, work documents, and Japanese work culture nuances.', jp: '日本企業が最も必要とするレベル。公式なコミュニケーション、業務文書、日本の職場文化のニュアンスを習得します。' },
  
  courseSMKTitle: { id: 'Kursus Pengajaran ke SMK', en: 'SMK Teaching Course', jp: 'SMK指導コース' },
  courseSMKTagline: { id: 'Untuk Lembaga Pendidikan', en: 'For Educational Institutions', jp: '教育機関向け' },
  courseSMKDesc: { id: 'Program kolaborasi khusus untuk sekolah dan pengajar SMK. Integrasikan kurikulum bahasa Jepang yang relevan dengan kebutuhan industri nyata.', en: 'Special collaboration program for schools and SMK teachers. Integrate Japanese language curriculum relevant to real industry needs.', jp: '学校とSMK教師のための特別な協力プログラム。実際の産業ニーズに関連した日本語カリキュラムを統合します。' },
  
  // Course Features (16 fitur)
  feature1: { id: 'Hiragana & Katakana', en: 'Hiragana & Katakana', jp: 'ひらがなとカタカナ' },
  feature2: { id: '100 Kanji Dasar', en: '100 Basic Kanji', jp: '100の基本漢字' },
  feature3: { id: 'Percakapan Harian', en: 'Daily Conversation', jp: '日常会話' },
  feature4: { id: 'Tata Bahasa Dasar', en: 'Basic Grammar', jp: '基本文法' },
  feature5: { id: '300 Kanji & Kosakata', en: '300 Kanji & Vocabulary', jp: '300の漢字と語彙' },
  feature6: { id: 'Tata Bahasa Menengah', en: 'Intermediate Grammar', jp: '中級文法' },
  feature7: { id: 'Simulasi Ujian JLPT', en: 'JLPT Exam Simulation', jp: 'JLPT試験シミュレーション' },
  feature8: { id: 'Percakapan Kerja', en: 'Work Conversation', jp: '仕事の会話' },
  feature9: { id: '650 Kanji & Kosakata', en: '650 Kanji & Vocabulary', jp: '650の漢字と語彙' },
  feature10: { id: 'Bahasa Formal & Bisnis', en: 'Formal & Business Language', jp: '公式・ビジネス言語' },
  feature11: { id: 'Budaya Kerja Jepang', en: 'Japanese Work Culture', jp: '日本の職場文化' },
  feature12: { id: 'Persiapan Karir', en: 'Career Preparation', jp: 'キャリア準備' },
  feature13: { id: 'Kurikulum Terstruktur', en: 'Structured Curriculum', jp: '構造化されたカリキュラム' },
  feature14: { id: 'Materi Native Teacher', en: 'Native Teacher Materials', jp: 'ネイティブ講師教材' },
  feature15: { id: 'Sertifikasi Pengajar', en: 'Teacher Certification', jp: '教師認定' },
  feature16: { id: 'Kolaborasi Institusi', en: 'Institutional Collaboration', jp: '機関コラボレーション' },
  
  // Gallery Section
  sectionGallery: { id: 'Aktivitas & Suasana', en: 'Activities & Atmosphere', jp: '活動と雰囲気' },
  galleryTitle: { id: 'Galeri', en: 'Gallery', jp: 'ギャラリー' },
  galleryDesc: { id: 'Sepintas kehidupan belajar dan komunitas Tokyo Bay Malang Academy.', en: 'A glimpse of learning life and community at Tokyo Bay Malang Academy.', jp: '東京ベイマランアカデミーでの学習生活とコミュニティの一端。' },
  
  // Contact Section
  sectionContact: { id: 'Reach Us', en: 'Reach Us', jp: 'お問い合わせ' },
  contactTitle: { id: 'Mulai Perjalananmu', en: 'Start Your', jp: 'あなたの旅を' },
  contactTitle2: { id: 'Hari Ini', en: 'Journey Today', jp: '今日始めましょう' },
  contactDesc: { id: 'Tim kami siap membantu menjawab pertanyaanmu tentang kursus, program karir, dan kesempatan di Jepang.', en: 'Our team is ready to help answer your questions about courses, career programs, and opportunities in Japan.', jp: '私たちのチームは、コース、キャリアプログラム、日本での機会についての質問にお答えする準備ができています。' },
  
  contactPanelTitle: { id: 'Hubungi Langsung', en: 'Contact Directly', jp: '直接お問い合わせ' },
  contactPanelDesc: { id: 'Tim kami siap merespon cepat.', en: 'Our team is ready to respond quickly.', jp: '私たちのチームは迅速に対応します。' },
  contactWA: { id: 'WhatsApp', en: 'WhatsApp', jp: 'WhatsApp' },
  contactEmail: { id: 'Email', en: 'Email', jp: 'メール' },
  contactLocation: { id: 'Lokasi', en: 'Location', jp: '場所' },
  socialTitle: { id: 'Ikuti Kami', en: 'Follow Us', jp: 'フォローする' },
  
  // Form
  formTitle: { id: 'Kirim Pesan', en: 'Send Message', jp: 'メッセージを送信' },
  formDesc: { id: 'Isi form di bawah, tim kami akan menghubungi Anda dalam 1×24 jam.', en: 'Fill out the form below, our team will contact you within 1x24 hours.', jp: '以下のフォームに記入してください。私たちのチームが1×24時間以内に連絡します。' },
  formName: { id: 'Nama Lengkap', en: 'Full Name', jp: 'フルネーム' },
  formEmail: { id: 'Email', en: 'Email', jp: 'メール' },
  formPhone: { id: 'Nomor WhatsApp', en: 'WhatsApp Number', jp: 'WhatsApp番号' },
  formProgram: { id: 'Program Minat', en: 'Program of Interest', jp: '興味のあるプログラム' },
  formMessage: { id: 'Pesan / Pertanyaan', en: 'Message / Question', jp: 'メッセージ / 質問' },
  formSubmit: { id: 'Kirim Pesan', en: 'Send Message', jp: '送信する' },
  formNote: { id: 'Dengan mengirim form, Anda menyetujui kebijakan privasi kami.', en: 'By submitting this form, you agree to our privacy policy.', jp: 'このフォームを送信することにより、あなたは私たちのプライバシーポリシーに同意したことになります。' },
  
  // Form Placeholders
  formNamePlaceholder: { id: 'Contoh: Ahmad Rizki', en: 'Example: Ahmad Rizki', jp: '例：アフマド・リズキ' },
  formEmailPlaceholder: { id: 'email@contoh.com', en: 'email@example.com', jp: 'email@example.com' },
  formPhonePlaceholder: { id: '0812-3456-7890', en: '0812-3456-7890', jp: '0812-3456-7890' },
  formMessagePlaceholder: { id: 'Tulis pesan atau pertanyaan Anda di sini...', en: 'Write your message or question here...', jp: 'メッセージや質問をここに書いてください...' },
  
  // Form Select Options
  formProgramOption1: { id: 'Pilih program...', en: 'Select program...', jp: 'プログラムを選択...' },
  formProgramOption2: { id: 'Kursus N5 (Pemula)', en: 'N5 Course (Beginner)', jp: 'N5コース（初級）' },
  formProgramOption3: { id: 'Kursus N4 (Fungsional)', en: 'N4 Course (Functional)', jp: 'N4コース（実用的）' },
  formProgramOption4: { id: 'Kursus N3 (Profesional)', en: 'N3 Course (Professional)', jp: 'N3コース（プロフェッショナル）' },
  formProgramOption5: { id: 'Program SMK', en: 'SMK Program', jp: 'SMKプログラム' },
  formProgramOption6: { id: 'Konsultasi Program', en: 'Program Consultation', jp: 'プログラム相談' },
  
  // Footer
  footerBrandText: { id: 'Membuka jembatan Indonesia dan Jepang. Raih masa depanmu bersama kami.', en: 'Building a bridge between Indonesia and Japan. Achieve your future with us.', jp: 'インドネシアと日本の架け橋を築く。私たちと一緒に未来を掴みましょう。' },
  footerNav: { id: 'Navigasi', en: 'Navigation', jp: 'ナビゲーション' },
  footerProgram: { id: 'Program', en: 'Programs', jp: 'プログラム' },
  footerHours: { id: 'Jam Operasional', en: 'Office Hours', jp: '営業時間' },
  footerAddress: { id: 'Alamat', en: 'Address', jp: '住所' },
  footerHoursMonFri: { id: 'Senin - Jumat : 08.00 - 17.00', en: 'Monday - Friday : 08.00 - 17.00', jp: '月曜 - 金曜 : 08.00 - 17.00' },
  footerHoursSat: { id: 'Sabtu : 09.00 - 12.00', en: 'Saturday : 09.00 - 12.00', jp: '土曜 : 09.00 - 12.00' },
  footerHoursSun: { id: 'Minggu : Tutup', en: 'Sunday : Closed', jp: '日曜 : 休業' },
  
// Footer Navigasi Links
footerProfile: { id: 'Profile', en: 'Profile', jp: 'プロフィール' },
footerCourses: { id: 'Courses', en: 'Courses', jp: 'コース' },
footerGallery: { id: 'Gallery', en: 'Gallery', jp: 'ギャラリー' },
footerContact: { id: 'Reach Us', en: 'Reach Us', jp: 'お問い合わせ' },

// Footer Program Links
footerProgramN5: { id: 'Kursus N5', en: 'N5 Course', jp: 'N5コース' },
footerProgramN4: { id: 'Kursus N4', en: 'N4 Course', jp: 'N4コース' },
footerProgramN3: { id: 'Kursus N3', en: 'N3 Course', jp: 'N3コース' },
footerProgramSMK: { id: 'Program SMK', en: 'SMK Program', jp: 'SMKプログラム' },

  // Floating WA
  waFloat: { id: 'Chat Kami', en: 'Chat Us', jp: 'チャット' }
};

let currentLang = 'id';

// Function to apply data-i18n attributes to all elements
function applyDataI18nToAllElements() {
  // Navbar
  const navLinksEl = document.querySelectorAll('.nav-link');
  const navKeys = ['navProfile', 'navCourses', 'navGallery', 'navContact'];
  navLinksEl.forEach((el, idx) => {
    if (navKeys[idx] && !el.hasAttribute('data-i18n')) el.setAttribute('data-i18n', navKeys[idx]);
  });
  
  // Hero
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && !heroTitle.hasAttribute('data-i18n-fixed')) {
    heroTitle.innerHTML = '<span data-i18n="heroTitle1">Buka Pintu</span><br /><span class="hero-accent" data-i18n="heroTitle2">Masa Depanmu</span><br /><span data-i18n="heroTitle3">di Jepang</span>';
    heroTitle.setAttribute('data-i18n-fixed', 'true');
  }
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub && !heroSub.hasAttribute('data-i18n')) heroSub.setAttribute('data-i18n', 'heroSub');
  const heroBtn = document.querySelector('.btn-hero');
  if (heroBtn && !heroBtn.hasAttribute('data-i18n')) heroBtn.setAttribute('data-i18n', 'heroBtn');
  
  // Social Proof
  const proofItems = document.querySelectorAll('.proof-item');
  if (proofItems.length >= 4) {
    const proofTitles = ['proof1Title', 'proof2Title', 'proof3Title', 'proof4Title'];
    const proofDescs = ['proof1Desc', 'proof2Desc', 'proof3Desc', 'proof4Desc'];
    proofItems.forEach((item, idx) => {
      const strong = item.querySelector('.proof-text strong');
      const span = item.querySelector('.proof-text span');
      if (strong && !strong.hasAttribute('data-i18n')) strong.setAttribute('data-i18n', proofTitles[idx]);
      if (span && !span.hasAttribute('data-i18n')) span.setAttribute('data-i18n', proofDescs[idx]);
    });
  }
  
  // Profile
  const profileLabel = document.querySelector('#profile .section-label');
  if (profileLabel && !profileLabel.hasAttribute('data-i18n')) profileLabel.setAttribute('data-i18n', 'sectionAbout');
  
  const profileTitle = document.querySelector('#profile .section-title');
  if (profileTitle && !profileTitle.hasAttribute('data-i18n-fixed')) {
    profileTitle.innerHTML = '<span data-i18n="profileTitle">Jembatan Indonesia</span><br /><span data-i18n="profileTitle2">&amp; Jepang</span>';
    profileTitle.setAttribute('data-i18n-fixed', 'true');
  }
  
  const profileLead = document.querySelector('#profile .profile-lead');
  if (profileLead && !profileLead.hasAttribute('data-i18n')) profileLead.setAttribute('data-i18n', 'profileLead');
  
  const profileBodies = document.querySelectorAll('#profile .profile-body');
  const profileBodyKeys = ['profileText1', 'profileText2', 'profileText3'];
  profileBodies.forEach((body, idx) => {
    if (body && !body.hasAttribute('data-i18n') && profileBodyKeys[idx]) body.setAttribute('data-i18n', profileBodyKeys[idx]);
  });
  
  const valueSpans = document.querySelectorAll('#profile .value-item span');
  const valueKeys = ['value1', 'value2', 'value3'];
  valueSpans.forEach((span, idx) => {
    if (span && !span.hasAttribute('data-i18n') && valueKeys[idx]) span.setAttribute('data-i18n', valueKeys[idx]);
  });
  
  // Courses Section
  const coursesLabel = document.querySelector('#courses .section-label');
  if (coursesLabel && !coursesLabel.hasAttribute('data-i18n')) coursesLabel.setAttribute('data-i18n', 'sectionProgram');
  
  const coursesTitle = document.querySelector('#courses .section-title');
  if (coursesTitle && !coursesTitle.hasAttribute('data-i18n-fixed')) {
    coursesTitle.innerHTML = '<span data-i18n="coursesTitle">Pilih Jalur</span><br /><span data-i18n="coursesTitle2">Belajarmu</span>';
    coursesTitle.setAttribute('data-i18n-fixed', 'true');
  }
  
  const coursesDesc = document.querySelector('#courses .section-desc');
  if (coursesDesc && !coursesDesc.hasAttribute('data-i18n')) coursesDesc.setAttribute('data-i18n', 'coursesDesc');
  
  const courseCards = document.querySelectorAll('.course-card');
  const coursePrefixes = ['N5', 'N4', 'N3', 'SMK'];
  courseCards.forEach((card, idx) => {
    const prefix = coursePrefixes[idx];
    const title = card.querySelector('.course-title');
    const tagline = card.querySelector('.course-tagline');
    const desc = card.querySelector('.course-desc');
    if (title && !title.hasAttribute('data-i18n')) title.setAttribute('data-i18n', `course${prefix}Title`);
    if (tagline && !tagline.hasAttribute('data-i18n')) tagline.setAttribute('data-i18n', `course${prefix}Tagline`);
    if (desc && !desc.hasAttribute('data-i18n')) desc.setAttribute('data-i18n', `course${prefix}Desc`);
    
    const features = card.querySelectorAll('.course-features li');
    const featureStart = idx * 4 + 1;
    features.forEach((feat, fIdx) => {
      const span = feat.querySelector('span') || feat;
      const featureNum = featureStart + fIdx;
      if (!span.hasAttribute('data-i18n')) span.setAttribute('data-i18n', `feature${featureNum}`);
    });
  });
  
  // Gallery
  const galleryLabel = document.querySelector('#gallery .section-label');
  if (galleryLabel && !galleryLabel.hasAttribute('data-i18n')) galleryLabel.setAttribute('data-i18n', 'sectionGallery');
  const galleryTitleEl = document.querySelector('#gallery .section-title');
  if (galleryTitleEl && !galleryTitleEl.hasAttribute('data-i18n')) galleryTitleEl.setAttribute('data-i18n', 'galleryTitle');
  const galleryDescEl = document.querySelector('#gallery .section-desc');
  if (galleryDescEl && !galleryDescEl.hasAttribute('data-i18n')) galleryDescEl.setAttribute('data-i18n', 'galleryDesc');
  
  // Contact Section
  const contactLabel = document.querySelector('#contact .section-label');
  if (contactLabel && !contactLabel.hasAttribute('data-i18n')) contactLabel.setAttribute('data-i18n', 'sectionContact');
  
  const contactTitleEl = document.querySelector('#contact .section-title');
  if (contactTitleEl && !contactTitleEl.hasAttribute('data-i18n-fixed')) {
    contactTitleEl.innerHTML = '<span data-i18n="contactTitle">Mulai Perjalananmu</span><br /><span data-i18n="contactTitle2">Hari Ini</span>';
    contactTitleEl.setAttribute('data-i18n-fixed', 'true');
  }
  
  const contactDescEl = document.querySelector('#contact .section-desc');
  if (contactDescEl && !contactDescEl.hasAttribute('data-i18n')) contactDescEl.setAttribute('data-i18n', 'contactDesc');
  
  const contactPanelTitle = document.querySelector('.contact-panel-title');
  if (contactPanelTitle && !contactPanelTitle.hasAttribute('data-i18n')) contactPanelTitle.setAttribute('data-i18n', 'contactPanelTitle');
  
  const contactPanelDesc = document.querySelector('.contact-panel-desc');
  if (contactPanelDesc && !contactPanelDesc.hasAttribute('data-i18n')) contactPanelDesc.setAttribute('data-i18n', 'contactPanelDesc');
  
  const contactRowLabels = document.querySelectorAll('.contact-row-info strong');
  const contactRowKeys = ['contactWA', 'contactEmail', 'contactLocation'];
  contactRowLabels.forEach((label, idx) => {
    if (label && !label.hasAttribute('data-i18n') && contactRowKeys[idx]) label.setAttribute('data-i18n', contactRowKeys[idx]);
  });
  
  const socialTitle = document.querySelector('.social-title');
  if (socialTitle && !socialTitle.hasAttribute('data-i18n')) socialTitle.setAttribute('data-i18n', 'socialTitle');
  
  // Form
  const formTitleEl = document.querySelector('.form-title');
  if (formTitleEl && !formTitleEl.hasAttribute('data-i18n')) formTitleEl.setAttribute('data-i18n', 'formTitle');
  
  const formDescEl = document.querySelector('.form-desc');
  if (formDescEl && !formDescEl.hasAttribute('data-i18n')) formDescEl.setAttribute('data-i18n', 'formDesc');
  
  const formLabels = document.querySelectorAll('.form-group label');
  const labelKeys = ['formName', 'formEmail', 'formPhone', 'formProgram', 'formMessage'];
  formLabels.forEach((label, idx) => {
    if (label && !label.hasAttribute('data-i18n') && labelKeys[idx]) label.setAttribute('data-i18n', labelKeys[idx]);
  });
  
  const nameInput = document.getElementById('inquiryName');
  if (nameInput && !nameInput.hasAttribute('data-i18n')) nameInput.setAttribute('data-i18n', 'formNamePlaceholder');
  
  const emailInput = document.getElementById('inquiryEmail');
  if (emailInput && !emailInput.hasAttribute('data-i18n')) emailInput.setAttribute('data-i18n', 'formEmailPlaceholder');
  
  const phoneInput = document.getElementById('inquiryPhone');
  if (phoneInput && !phoneInput.hasAttribute('data-i18n')) phoneInput.setAttribute('data-i18n', 'formPhonePlaceholder');
  
  const messageInput = document.getElementById('inquiryMessage');
  if (messageInput && !messageInput.hasAttribute('data-i18n')) messageInput.setAttribute('data-i18n', 'formMessagePlaceholder');
  
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn && !submitBtn.hasAttribute('data-i18n')) submitBtn.setAttribute('data-i18n', 'formSubmit');
  
  const formNote = document.querySelector('.form-note');
  if (formNote && !formNote.hasAttribute('data-i18n')) formNote.setAttribute('data-i18n', 'formNote');
  
  // Select Options
  const programSelect = document.getElementById('inquiryProgram');
  if (programSelect) {
    const options = programSelect.querySelectorAll('option');
    const optionKeys = ['formProgramOption1', 'formProgramOption2', 'formProgramOption3', 'formProgramOption4', 'formProgramOption5', 'formProgramOption6'];
    options.forEach((opt, idx) => {
      if (opt && !opt.hasAttribute('data-i18n') && optionKeys[idx]) opt.setAttribute('data-i18n', optionKeys[idx]);
    });
  }
  
  // Footer
  const footerBrandTextEl = document.querySelector('.footer-brand p');
  if (footerBrandTextEl && !footerBrandTextEl.hasAttribute('data-i18n')) footerBrandTextEl.setAttribute('data-i18n', 'footerBrandText');
  
  const footerHeadings = document.querySelectorAll('.footer h4');
  const footerHeadingKeys = ['footerNav', 'footerProgram', 'footerHours', 'footerAddress'];
  footerHeadings.forEach((heading, idx) => {
    if (heading && !heading.hasAttribute('data-i18n') && footerHeadingKeys[idx]) heading.setAttribute('data-i18n', footerHeadingKeys[idx]);
  });
  
  const footerHoursSpans = document.querySelectorAll('.footer-hours-detail span');
  const footerHourKeys = ['footerHoursMonFri', 'footerHoursSat', 'footerHoursSun'];
  footerHoursSpans.forEach((span, idx) => {
    if (span && !span.hasAttribute('data-i18n') && footerHourKeys[idx]) span.setAttribute('data-i18n', footerHourKeys[idx]);
  });
  
  // Floating WA
  const waFloatLabel = document.querySelector('.wa-float .wa-float-label');
  if (waFloatLabel && !waFloatLabel.hasAttribute('data-i18n')) waFloatLabel.setAttribute('data-i18n', 'waFloat');
}

// Function to update language
function updateLanguage(lang) {
  currentLang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[key][lang];
      } else if (el.tagName === 'OPTION') {
        el.textContent = translations[key][lang];
      } else {
        el.textContent = translations[key][lang];
      }
    }
  });
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : (lang === 'en' ? 'en' : 'ja'));
  localStorage.setItem('preferredLang', lang);
}

// Initialize translation on page load
document.addEventListener('DOMContentLoaded', () => {
  applyDataI18nToAllElements();
  
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang && (savedLang === 'id' || savedLang === 'en' || savedLang === 'jp')) {
    updateLanguage(savedLang);
  } else {
    updateLanguage('id');
  }
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) updateLanguage(lang);
    });
  });
});