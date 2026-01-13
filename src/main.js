const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

// Mobile Menu Toggle
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

