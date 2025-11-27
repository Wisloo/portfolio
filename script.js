const toggleButton = document.getElementsByClassName('theme-toggle')[0];
const body = document.body;
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});
