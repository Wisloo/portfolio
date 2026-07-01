// Theme Toggle
const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
   body.classList.add('light');
   toggleButton.textContent = 'Toggle Dark Mode';
} else {
   toggleButton.textContent = 'Toggle Light Mode';
}

toggleButton.addEventListener('click', () => {
   body.classList.toggle('light');
   if (body.classList.contains('light')) {
      toggleButton.textContent = 'Toggle Dark Mode';
      localStorage.setItem('theme', 'light');
   } else {
      toggleButton.textContent = 'Toggle Light Mode';
      localStorage.setItem('theme', 'dark');
   }
});

// Image Modal – now includes .screenshot-img
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.project-img, .certificate-img, .screenshot-img').forEach(img => {
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
   tab.addEventListener('click', () => {
      const content = tab.nextElementSibling;
      tab.classList.toggle('collapsed');
      content.classList.toggle('collapsed');
   });
});

// Scroll‑Reveal Animations
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
   section.style.transform = 'translateY(30px)';
   section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
   observer.observe(section);
});

// Parallax Header
window.addEventListener('scroll', () => {
   const scrolled = window.pageYOffset;
   const header = document.querySelector('header');
   if (header) {
      header.style.transform = `translateY(${-scrolled * 0.3}px)`;
   }
});

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