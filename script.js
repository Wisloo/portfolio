// Simple Theme Toggle
const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme (default is dark, so only add light class if saved)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light');
    toggleButton.textContent = 'Toggle Dark Mode';
} else {
    toggleButton.textContent = 'Toggle Light Mode';
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light');
    
    // Update button text
    if (body.classList.contains('light')) {
        toggleButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// Image Modal Functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Add click event to all project and certificate images
const projectImages = document.querySelectorAll('.project-img, .certificate-img');
projectImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Folder Toggle Functionality
const folderTabs = document.querySelectorAll('.folder-tab');
folderTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const folderContent = tab.nextElementSibling;
        tab.classList.toggle('collapsed');
        folderContent.classList.toggle('collapsed');
    });
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
