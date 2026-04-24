// script.js

// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Interactive Elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
        // Additional interactivity can be implemented here
    });
});