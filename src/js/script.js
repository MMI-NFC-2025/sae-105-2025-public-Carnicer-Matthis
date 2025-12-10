// Script de base pour le site Flying Tap Fest
document.addEventListener('DOMContentLoaded', function () {
    // Gestion du menu mobile (à développer selon les besoins)
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            // Logique du menu à implémenter
            console.log('Menu clicked');
        });
    }

    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
