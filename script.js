const toggleButton = document.getElementsByClassName('theme-toggle')[0];
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Save theme preference
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
