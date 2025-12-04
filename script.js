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
