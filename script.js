// ==========================================
// STARS GENERATOR
// ==========================================
function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ==========================================
// PARTICLES GENERATOR
// ==========================================
function generateParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleColors = ['#ff006e', '#00f5ff', '#b600ff', '#39ff14'];
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ==========================================
// PAGE NAVIGATION
// ==========================================
let currentPage = 'home';

function showPage(pageId) {
    if (currentPage === pageId) return;

    // Hide current page
    const oldPage = document.getElementById(currentPage);
    oldPage.classList.remove('active');

    // Show new page
    setTimeout(() => {
        oldPage.style.display = 'none';
        const newPage = document.getElementById(pageId);
        newPage.style.display = 'block';

        setTimeout(() => {
            newPage.classList.add('active');
        }, 10);

        currentPage = pageId;
    }, 300);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// INIT ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    generateParticles();
});
