// Image Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
let lastFocused = null;

function openModal(src) {
    lastFocused = document.activeElement;
    modalImg.src = src;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
}

function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.project-img, .certificate-img').forEach(img => {
   img.style.cursor = 'pointer';
   img.addEventListener('click', () => openModal(img.src));
});

closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeModal();
    }
});
modal.addEventListener('click', (e) => {
   if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
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