// Simple Theme Toggle
const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = 'Toggle Light Mode';
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Update button text
    if (body.classList.contains('dark')) {
        toggleButton.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light');
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
