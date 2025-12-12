// Script de base pour le site Flying Tap Fest
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const menuClose = document.querySelector('.menu__close');
    const mobileMenu = document.querySelector('.menu');
    const body = document.body;

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('menu--active');
            body.style.overflow = 'hidden';
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('menu--active');
            body.style.overflow = '';
        });
    }

    const menuLinks = document.querySelectorAll('.menu__nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('menu--active');
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
    // Caroussel: https://flyingtapfest.carnicer.fr/artiste-detail
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
