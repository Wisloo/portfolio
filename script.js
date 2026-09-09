// Theme Toggle
const toggleButton = document.querySelector('.theme-toggle');
const toggleIcon = toggleButton.querySelector('i');
const body = document.body;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

function applyThemeColor() {
    if (metaThemeColor) {
        metaThemeColor.content = body.classList.contains('light') ? '#f5f7fa' : '#0a0a0f';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
   body.classList.add('light');
   toggleIcon.className = 'fas fa-sun';
} else {
   toggleIcon.className = 'fas fa-moon';
}
applyThemeColor();

toggleButton.addEventListener('click', () => {
   body.classList.toggle('light');
   if (body.classList.contains('light')) {
      toggleIcon.className = 'fas fa-sun';
      localStorage.setItem('theme', 'light');
   } else {
      toggleIcon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'dark');
   }
   applyThemeColor();
});

// Image Modal – now includes .screenshot-img
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.project-img, .certificate-img').forEach(img => {
   img.style.cursor = 'pointer';
   img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
   });
});

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
modal.addEventListener('click', (e) => {
   if (e.target === modal) modal.style.display = 'none';
});

// Folder Toggle
document.querySelectorAll('.folder-tab').forEach(tab => {
    tab.setAttribute('aria-expanded', 'true');
    tab.addEventListener('click', () => {
        const content = tab.nextElementSibling;
        const isCollapsed = tab.classList.toggle('collapsed');
        content.classList.toggle('collapsed', isCollapsed);
        tab.setAttribute('aria-expanded', String(!isCollapsed));
    });
});

// Scroll‑Reveal Animations (skipped when reduced motion is preferred)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(24px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
   if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
   } else {
      backToTopBtn.classList.remove('visible');
   }
});
backToTopBtn.addEventListener('click', () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
});