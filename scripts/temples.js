let lastModified = new Date(document.lastModified);
const year = new Date().getFullYear();

document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = lastModified;

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('sm-hidden');
        if (navMenu.classList.contains('sm-hidden')) {
            hamburgerBtn.textContent = '☰';
        } else { hamburgerBtn.textContent = '✕'; }
    });
});