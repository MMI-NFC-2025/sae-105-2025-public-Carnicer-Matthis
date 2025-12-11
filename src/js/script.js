// Script de base pour le site Flying Tap Fest
document.addEventListener('DOMContentLoaded', function () {
    // Gestion du menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('active');
            body.style.overflow = 'hidden'; // Empêche le scroll du body
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            body.style.overflow = ''; // Réactive le scroll
        });
    }

    // Fermer le menu en cliquant sur un lien
    const menuLinks = document.querySelectorAll('.mobile-menu-nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

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

    // Gestion du carrousel
    const prevButton = document.querySelector('.prev-carousel');
    const nextButton = document.querySelector('.next-carousel');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselImages = document.querySelectorAll('.carousel-image');

    if (carouselTrack && carouselImages.length > 0) {
        let currentIndex = 0;
        const totalImages = carouselImages.length;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselTrack.style.transform = `translateX(${offset}%)`;
        }

        if (nextButton) {
            nextButton.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % totalImages;
                updateCarousel();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', function () {
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                updateCarousel();
            });
        }
    }
});
